/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-09-01 00:21
 */
const md = require('markdown-it')()
  .use(require('markdown-it-multimd-table'))
const { replaceFrom, escapeTag } = require('./helper')

module.exports = function(source) {
  const lines = []
  // vue code
  const codes = []
  // other codes
  const otherCodes = []
  const tables = []
  let isCode = false
  let isVueCode = false
  let codeType = ''
  source.split(/[\n\r]/).forEach(line => {
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

  if (codes.length) {
    // create pre
    let isTemplate = true
    const pres = ['<pre class="html-hook"><code class="html">', escapeTag('<template>')]
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
  } else {
    arr.push('</div></template>')
  }

  return arr.join('\n')
}

