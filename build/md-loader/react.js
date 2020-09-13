/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-09-01 00:21
 */
const md = require('markdown-it')()
  .use(require('markdown-it-multimd-table'))
const { escapeTag, replaceFrom } = require('./helper')

module.exports = function(source) {
  const lines = []
  const tables = []
  let isCode = false
  source.split(/[\n\r]/).forEach(line => {
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
        lines.push(md.render(tables.join('\n')).replace(/\bcolspan\b/ig, 'colSpan'))
        lines.push('</div>')
        tables.length = 0
      }
      lines.push(isCode ? line : md.render(line))
    }
  })

  // last table check
  if (tables.length) {
    lines.push('<div className="table-wrapper">')
    lines.push(md.render(tables.join('\n')).replace(/\bcolspan\b/ig, 'colSpan'))
    lines.push('</div>')
    tables.length = 0
  }

  // console.log('isCode', isCode)

  if (isCode) {
    // create pre
    const pres = []
    pres.push('<pre><code className="jsx">')
    lines.forEach(line => {
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
      pres.push(escapeTag(line).replace(/[{}]/g, match => {
        return match === '{' ? '__L__' : '__R__'
      }))
    })
    pres.push('</code></pre>')

    return lines.map(line => {
      if (/INJECT_CODE/.test(line)) {
        return pres.join('__WRAP__')
      }
      return line
    }).join('\n')
  }

  const arr = lines.map(line => {
    if (/style="(.+?)"/g.test(line)) {
      line = line.replace(/style="(.+?)"/g, (match, $1) => {
        // console.log(match, $1)
        return ''
      })
    }
    return line
  })

  return `
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
}
