<script>
import Demo from './components/Demo.vue'

export default {
  components: {
    Demo,
  },
  mounted() {
    this.$nextTick(() => {
      document.querySelectorAll('pre code').forEach((block) => {
        window.hljs.highlightElement(block)
      })
    })
  },
}
</script>

<template>
  <div>
    <demo-header></demo-header>
    <h2>Usage</h2>
    <pre>
      <code class="javascript">
import { ZxVueCalendar } from 'zx-calendar/vue'
import 'zx-calendar/css'
      </code>
    </pre>
    <h2>Example</h2>
    <demo />
  </div>
</template>
