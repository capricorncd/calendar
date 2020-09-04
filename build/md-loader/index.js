/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-09-01 00:21
 */
/**
 * HTML escape characters
 * @param str
 * @returns {string}
 */
const md = require('markdown-it')()
  .use(require('markdown-it-multimd-table'))

module.exports = function(source) {
  const lines = []
  const codes = []
  const tables = []
  let hasCode = false
  let isCode = false
  source.split(/[\n\r]/).forEach(line => {
    if (!line) return
    // check code
    if (/^```/.test(line)) {
      hasCode = true
      isCode = line.length > 3
      return
    }
    if (isCode) {
      codes.push(line)
    } else {
      // check table
      if (/\s*\|.*\|/.test(line)) {
        tables.push(line)
      } else {
        if (tables.length) {
          lines.push(md.render(tables.join('\n')))
          tables.length = 0
        }
        lines.push(md.render(line))
      }
    }
  })

  // last table check
  if (tables.length) {
    lines.push('<div class="table-wrapper">')
    lines.push(md.render(tables.join('\n')))
    lines.push('</div>')
    tables.length = 0
  }

  const arr = ['<template><div class="example-demo-wrapper">']
  lines.forEach(line => {
    arr.push(line)
  })

  // create pre
  let isTemplate = true
  const pres = ['<pre><code class="html">', escapeTag('<template>')]
  pres.push(escapeTag('  <div>'))
  codes.forEach(line => {
    if (/^<script/.test(line)) {
      pres.push(escapeTag('  </div>'))
      pres.push(escapeTag('</template>'))
      pres.push('')
      isTemplate = false
    }
    pres.push((isTemplate ? '    ' : '') + escapeTag(replaceFrom(line)))
  })
  pres.push('</code></pre>')

  // codes
  codes.forEach(line => {
    if (/^<script/.test(line)) {
      arr.push(pres.join('\n'))
      arr.push('</div></template>')
    }
    arr.push(line)
  })

  if (!hasCode) {
    arr.push('</div></template>')
  }

  return arr.join('\n')
}

function escapeTag(str) {
  return str.replace(/<(\/?\w+)/g, '&lt;$1').replace(/(\w+)>/g, '$1&gt;')
}

function replaceFrom(str) {
  return str
    .replace('from \'../../index\'', 'from \'zx-calendar/lib/vue-calendar\'')
    // .replace(/\{\{(.*?)\}\}/g, '&#123;&#123;$1&#125;&#125;')
}
