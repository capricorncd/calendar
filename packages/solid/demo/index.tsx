import { render } from 'solid-js/web';
import { onMount } from 'solid-js'
import { slice } from 'zx-sml'
import '@zx-calendar/demo-header';
import '../../demo/src/index.scss';
import { Normal } from './Normal.mdx';
import { TypeYear } from './TypeYear.mdx';

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "demo-header": JSX.IntrinsicElements["header"];
    }
  }
}

declare global {
  var hljs: {
    highlightElement: (el: Element) => void;
  }
}

function App() {

  onMount(() => {
    slice<HTMLElement, NodeList>(document.querySelectorAll('pre code')).forEach((block) => {
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
            "import { ZxSolidCalendar } from 'zx-calendar/lib/solid-calendar'"
          }
        </code>
      </pre>
      <h2>Example</h2>
      <Normal />
      <TypeYear />
    </div>
  );
}

render(() => <App />, document.getElementById('app'))