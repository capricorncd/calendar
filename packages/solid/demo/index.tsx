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

import { render } from 'solid-js/web';
import { App } from './App'

render(() => <App />, document.getElementById('app'))