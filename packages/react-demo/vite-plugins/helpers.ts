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

export function replaceFrom(str, type = 'vue') {
  return str.replace(`@zx-calendar/${type}`, `zx-calendar/lib/${type}-calendar`)
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
        lines.push('<div className="table-wrapper">')
        lines.push(
          md.render(tables.join('\n')).replace(/\bcolspan\b/gi, 'colSpan')
        )
        lines.push('</div>')
        tables.length = 0
      }
      lines.push(isCode ? line : md.render(line))
    }
  })

  // last table check
  if (tables.length) {
    lines.push('<div className="table-wrapper">')
    lines.push(md.render(tables.join('\n')).replace(/\bcolspan\b/gi, 'colSpan'))
    lines.push('</div>')
    tables.length = 0
  }

  // console.log('isCode', isCode)

  if (isCode) {
    // create pre
    const pres: string[] = []
    pres.push('<pre className="code-hook"><code className="jsx">')
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
        line = replaceFrom(line, 'react')
      }
      pres.push(
        escapeTag(line).replace(/[{}]/g, (match) => {
          return match === '{' ? '__L__' : '__R__'
          // return match
        })
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
      .join('\n')
  }

  const arr = lines.map((line) => {
    if (/style="(.+?)"/g.test(line)) {
      line = line.replace(/style="(.+?)"/g, (match, $1) => {
        // console.log(match, $1)
        return ''
      })
    }
    return line
  })
  // console.log(arr)
  const code = `
import React, { Component } from 'react'
class App extends Component {
  render() {
    return <>
      ${arr.join('\n')}
    </>
  }
}
export default App
`
  // console.log('code:::::', code)
  return code
}

const reg = /"(\w*import React.+)"/

function handlePreCode(line) {
  // console.log(line)
  return line.replace(reg, (match, $1) => {
    $1 = $1
      .replace(/__[LR]__/g, (m) => {
        return m === '__L__' ? '{' : '}'
      })
      .replace(/__WRAP__/g, '\\n')
    // console.log($1)
    return `"${$1}"`
  })
}

export function afterTransform(source) {
  const lines = source.split(/[\n\r]/).map((line) => {
    if (!line) return
    if (reg.test(line.trim())) {
      line = handlePreCode(line)
    }
    return line
  })

  return lines.join(EOL)
}
