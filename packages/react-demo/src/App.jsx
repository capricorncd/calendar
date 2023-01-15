/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-09-11 22:44
 */
import React, { Component } from 'react'
import Docs from './components/docs.mdx'
import Test from './components/Test.mdx'
import Timestamp from './components/Timestamp.mdx'
import TypeMonth from './components/TypeMonth.mdx'
import ModeRange from './components/ModeRange.mdx'
import NodeFooter from './components/NodeFooter.mdx'
import '@zx-calendar/demo-header'

class App extends Component {
  componentDidMount() {
    // fix: Object doesn't support property or method 'forEach' in Edge browser
    slice(document.querySelectorAll('pre code')).forEach((block) => {
      window.hljs.highlightElement(block)
    })
  }

  render() {
    return (
      <div className="test-zx-calendar-wrapper">
        <demo-header></demo-header>
        <main>
          <h2>Install</h2>
          <pre>
            <code className="bash custom pt15 pb15">npm i zx-calendar</code>
          </pre>
          <h2>Usage</h2>
          <pre>
            <code className="javascript custom pt15 pb15">
              {"import { ZxReactCalendar } from 'zx-calendar/react'"}
            </code>
          </pre>
          <Docs />
          <h2>Example</h2>
          <Test />
          <Timestamp />
          <TypeMonth />
          <ModeRange />
          <NodeFooter />
        </main>
      </div>
    )
  }
}

function slice(arrayLike) {
  return Array.prototype.slice.call(arrayLike)
}

export default App
