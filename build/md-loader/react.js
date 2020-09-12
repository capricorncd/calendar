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
const { escapeTag } = require('./helper')

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
          lines.push(md.render(tables.join('\n')).replace(/\bcolspan\b/ig, 'colSpan'))
          tables.length = 0
        }
        lines.push(md.render(line))
      }
    }
  })

  // last table check
  if (tables.length) {
    lines.push('<div className="table-wrapper">')
    lines.push(md.render(tables.join('\n')).replace(/\bcolspan\b/ig, 'colSpan'))
    lines.push('</div>')
    tables.length = 0
  }

  const arr = ['']
  lines.forEach(line => {
    arr.push(line)
  })

  // create pre
  const pres = ['<pre><code className="jsx">']
  codes.forEach(line => {
    pres.push(escapeTag(line))
  })
  pres.push('</code></pre>')

  // codes
  codes.forEach(line => {
    arr.push(line)
  })

  if (!hasCode) {
    arr.push('</div>')
  }

  console.log(arr.join('\n'))

  return `
import React, { Component } from 'react'

class App extends Component {
  render() {
    return (${arr.join('\n')})
  }
}

export default App
`
}
