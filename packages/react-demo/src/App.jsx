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

class App extends Component {
  componentDidMount() {
    // fix: Object doesn't support property or method 'forEach' in Edge browser
    slice(document.querySelectorAll('pre code')).forEach((block) => {
      window.hljs.highlightBlock(block)
    })
  }

  render() {
    return (
      <div className="test-zx-calendar-wrapper">
        <header>
          <h1>zx-calendar (React)</h1>
          <a
            href="https://github.com/capricorncd/calendar"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              height="24"
              viewBox="0 0 16 16"
              version="1.1"
              width="24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
          </a>
        </header>
        <main>
          <h2>Install</h2>
          <pre>
            <code className="bash custom pt15 pb15">npm i zx-calendar</code>
          </pre>
          <h2>Usage</h2>
          <pre>
            <code className="javascript custom pt15 pb15">
              {
                "import { ZxReactCalendar } from 'zx-calendar/lib/react-calendar'"
              }
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
