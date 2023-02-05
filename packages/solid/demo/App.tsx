import { onMount } from 'solid-js'
import { slice } from 'zx-sml'
import '@zx-calendar/demo-header';
import '../../demo/src/index.scss';

import Normal from './Normal.mdx';
import TypeYear from './TypeYear.mdx';

export function App() {

  onMount(() => {
    slice<HTMLElement, NodeList>(document.querySelectorAll('pre code'))
      .forEach((block) => {
        window.hljs.highlightElement(block)
      })
  })

  return (
    <div>
      <demo-header />
      <h2>Install</h2>
      <pre>
        <code class="bash">npm i zx-calendar</code>
      </pre>
      <h2>Usage</h2>
      <pre>
        <code class="javascript">
          {
            `
import { ZxSolidCalendar } from 'zx-calendar/solid'
import 'zx-calendar/css'
            `
          }
        </code>
      </pre>
      <h2>Example</h2>
      <Normal />
      <TypeYear />
    </div>
  );
}
