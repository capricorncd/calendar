import { JSX } from 'solid-js'

declare module 'solid-js' {
  namespace JSX {
    type ElementProps<T> = {
      // Add both the element's prefixed properties and the attributes
      [K in keyof T]: Props<T[K]> & HTMLAttributes<T[K]>
    }
    // Prefixes all properties with `prop:` to match Solid's property setting syntax
    type Props<T> = {
      [K in keyof T as `prop:${string & K}`]?: T[K]
    }
    interface IntrinsicElements extends ElementProps<HTMLElementTagNameMap> {
      'demo-header': JSX.IntrinsicElements['header']
    }
  }
}

declare global {
  const hljs: {
    highlightElement: (el: Element) => void
  }
}

// declare module '*.mdx';
declare module '*.mdx' {
  const MDXComponent: (props: Record<string, unknown>) => JSX.Element
  export default MDXComponent
}
