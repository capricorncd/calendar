/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-08-30 15:19
 */
import { ZxVueCalendar } from '../index'
// import Docs from '../../../docs/vue-calendar.md'
import '../../vue-calendar/test/index.scss'

const Header = {
  template: `
    <header>
      <h1>zx-calendar (Vue 3.x.x)</h1>
      <a href="https://github.com/capricorncd/calendar" target="_blank"><svg height="24" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg></a>
    </header>`
}

const App = {
  components: {
    Header,
    // Docs,
    ZxVueCalendar
  },
  data() {
    return {
      date: '1999/12/09'
    }
  },
  template: `
    <div class="test-zx-calendar-wrapper">
      <Header />
      <main>
        <h2>Usage</h2>
        <pre>
          <code class="javascript" style="padding-bottom: 0;">
import { ZxVueCalendar } from 'zx-calendar/lib/vue3-calendar'
          </code>
        </pre>
        <h2>Example</h2>
        <div class="example-demo-wrapper">
          <h3>selected date: {{date}}</h3>
          <zx-vue-calendar v-model="date"/>
          <pre class="code-hook">
            <code class="javascript">
export default {
  template: \`&lt;zx-vue-calendar v-model="date"/&gt;\`,
  data() {
    return {
      date: '1999/12/09'
    }
  }
}
            </code>
          </pre>
        </div>
      </main>
    </div>`,
  mounted() {
    this.$nextTick(() => {
      document.querySelectorAll('pre code').forEach(block => {
        window.hljs.highlightBlock(block)
      })
    })
  }
}

/* eslint-disable no-undef */
Vue.createApp(App).mount('#app')
