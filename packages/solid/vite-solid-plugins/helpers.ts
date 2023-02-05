/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2022/12/04 18:08:38 (GMT+0900)
 */
import mdIt from 'markdown-it'
import { EOL } from 'os'

const md = mdIt().use(require('markdown-it-multimd-table'))

export function escapeTag(str) {
  return str.replace(/<(\/?\w+)/g, '&lt;$1').replace(/(\w+)>/g, '$1&gt;')
}

export function replaceFrom(str) {
  return str.replace(`../src`, `zx-calendar/solid`)
}

function handleTable(tables: string[], lines: string[]) {
  lines.push('<div class="table-wrapper">')
  lines.push(md.render(tables.join('\n')).replace(/\bcolspan\b/gi, 'colSpan'))
  lines.push('</div>')
  tables.length = 0
}

export function formatMdx(source) {
  const lines: string[] = []
  const tables: string[] = []
  let isCode = false
  source.split(EOL).forEach((line) => {
    if (!line) return
    // check code
    if (/^```/.test(line.trim())) {
      if (!isCode) {
        isCode = line.length > 3
      }
      return
    }
    // check table
    if (/\s*\|.*\|/.test(line)) {
      tables.push(line)
    } else {
      if (tables.length) {
        handleTable(tables, lines)
      }
      lines.push(isCode ? line : md.render(line))
    }
  })

  // last table check
  if (tables.length) {
    handleTable(tables, lines)
  }

  // console.log('isCode', isCode)

  if (isCode) {
    // create pre
    const pres: string[] = []
    pres.push('<pre><code class="jsx">')
    lines.forEach((line) => {
      if (/INJECT_CODE/.test(line)) {
        return
      }
      // add blank line
      if (/(class|export)\s/.test(line.trim())) {
        pres.push('')
      }
      // import XX from xxx
      if (/import\s/.test(line)) {
        line = replaceFrom(line)
      }
      pres.push(
        escapeTag(line)
          .replace(/[{}]/g, (match) => {
            return match === '{' ? '__L__' : '__R__'
          })
          .replace(/\s/g, '__S__')
      )
    })
    pres.push('</code></pre>')

    return lines
      .map((line) => {
        if (/INJECT_CODE/.test(line)) {
          return pres.join('__WRAP__')
        }
        return line
      })
      .join(EOL)
  }

  const arr = lines.map((line) => {
    if (/style="(.+?)"/g.test(line)) {
      line = line.replace(/style="(.+?)"/g, () => {
        // console.log(match, $1)
        return ''
      })
    }
    return line
  })
  // console.log(arr)
  return arr.join(EOL)
}

function handlePreCode(line) {
  return line
    .replace(/__S__/g, ' ')
    .replace(/__[LR]__/g, (m) => {
      return m === '__L__' ? '{' : '}'
    })
    .replace(/__WRAP__/g, EOL)
}

export function afterTransform(source) {
  const lines = source.split(/[\n\r]/).map((line) => {
    if (!line) return ''
    if (/__(L|R|WRAP)__/.test(line)) {
      line = handlePreCode(line)
    }
    return line
  })

  return lines.join(EOL)
}
