/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2022/12/07 21:11:30 (GMT+0900)
 */
import mit from 'markdown-it'

const md = mit().use(require('markdown-it-multimd-table'))

function escapeTag(str) {
  return str.replace(/<(\/?\w+)/g, '&lt;$1').replace(/(\w+)>/g, '$1&gt;')
}

function replaceFrom(str) {
  return str.replace("from '@zx-calendar/vue2'", `from 'zx-calendar/vue2'`)
}

function handleTable(tables: string[], lines: string[]) {
  lines.push('<div class="table-wrapper">')
  lines.push(md.render(tables.join('\n')))
  lines.push('</div>')
  // clear tables
  tables.length = 0
}

export function formatVueMdSource(source, filename) {
  if (!/\.md$/.test(filename)) return source
  const lines: string[] = []
  // vue code
  const codes: string[] = []
  // other codes
  const otherCodes: string[] = []
  const tables: string[] = []
  let isCode = false
  let isVueCode = false
  let codeType = ''
  source.split(/[\n\r]/).forEach((line) => {
    if (!line && !isCode) return
    // check code
    if (/^```(\w*)/.test(line.trim())) {
      isCode = line.length > 3
      if (isCode) {
        codeType = RegExp.$1
        isVueCode = codeType === 'html'
      }
      // code end
      if (!isCode && otherCodes.length) {
        lines.push(`<pre><code class="${codeType}">`)
        lines.push(...otherCodes)
        lines.push('</code></pre>')
        otherCodes.length = 0
      }
      return
    }
    if (isCode) {
      if (isVueCode) {
        codes.push(line)
      } else {
        otherCodes.push(line)
      }
    } else {
      // check table
      if (/\s*\|.*\|/.test(line)) {
        tables.push(line)
      } else {
        if (tables.length) {
          handleTable(tables, lines)
        }
        lines.push(md.render(line))
      }
    }
  })

  // last table check
  if (tables.length) {
    handleTable(tables, lines)
  }

  const arr = ['<template><section>']
  arr.push(...lines)

  if (codes.length) {
    arr.push('<div class="example-demo-wrapper">')
    // create pre
    let isTemplate = true
    const pres = ['<pre><code class="html">', escapeTag('<template>')]
    pres.push(escapeTag('  <div>'))
    codes.forEach((line) => {
      if (/^<script/.test(line)) {
        pres.push(escapeTag('  </section>'))
        pres.push(escapeTag('</template>'))
        pres.push('')
        isTemplate = false
      }
      pres.push((isTemplate ? '    ' : '') + escapeTag(replaceFrom(line)))
    })
    pres.push('</code></pre>')

    // codes
    codes.forEach((line) => {
      if (/^<script/.test(line)) {
        arr.push(
          pres.join('\n'),
          '</div>', // paired <div class="example-demo-wrapper">
          '</section></template>'
        )
      }
      arr.push(line)
    })
  } else {
    arr.push('</section></template>')
    // arr.push('<script>export default {}</script>')
  }

  return arr.join('\n')
}
