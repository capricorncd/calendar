const links = [
  {
    label: 'Home',
    link: './index.html',
    path: '/index.html',
  },
  {
    label: 'Vue2 demo',
    link: './vue.html',
    path: '/vue.html',
  },
  {
    label: 'Vue3 demo',
    link: './vue3.html',
    path: '/vue3.html',
  },
  {
    label: 'React demo',
    link: './react.html',
    path: '/react.html',
  },
  {
    label: 'Solid-js',
    link: './solidjs.html',
    path: '/solidjs.html',
  },
]

class DemoHeader extends HTMLElement {
  constructor() {
    super()
    this.root = this.attachShadow({ mode: 'open' })
    console.log(location)

    // styles
    this.styles = document.createElement('style')
    this.styles.innerHTML = `
      header {
        position: fixed;
        z-index: 10;
        top: 0;
        left: 0;
        width: 100%;
        height: 60px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .icon-github {
        margin-right: 20px;
      }
      .nav-wrap {
        margin-left: 20px;
      }
      a {
        font-size: 12px;
        text-decoration: none;
      }
      .nav-wrap a:hover:not(.current-link) {
        text-decoration: underline;
      }
      .nav-wrap .current-link {
        text-decoration: underline;
      }
      h1 {
        margin: 0;
        padding: 0;
        line-height: 1;
        font-size: 24px;
      }
    `

    // template
    this.template = document.createElement('template')
    this.template.innerHTML = `
      <header>
        <div class="nav-wrap">
          <h1>zx-calendar</h1>
          <nav>
            ${links
              .map((item) => {
                return `<a class="${
                  location.pathname.endsWith(item.path) ? 'current-link' : ''
                }" href="${item.link}">${item.label}</a>`
              })
              .join('\n')}
          </nav>
        </div>
        <a class="icon-github" href="https://github.com/capricorncd/calendar" target="_blank">
          <svg height="24" viewBox="0 0 16 16" version="1.1" width="24"
            aria-hidden="true">
            <path fill-rule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
            </path>
          </svg>
        </a>
      </header>
    `
  }

  connectedCallback() {
    // use HTMLElements
    this.root.appendChild(this.template.content)
    this.root.appendChild(this.styles)

    // // use string
    // this.root.innerHTML = `
    //   <style>
    //     h1 { color: red }
    //   </style>
    //   <h1>Hello World</h1>
    // `
  }
}

customElements.define('demo-header', DemoHeader)
