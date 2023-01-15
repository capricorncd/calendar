/** * Created by Capricorncd. * https://github.com/capricorncd * Date:
2020-08-30 15:19 */
<script>
import { ZxVueCalendar } from '@zx-calendar/vue'

export default {
  components: {
    ZxVueCalendar,
  },
  data() {
    return {
      date: '2023/02/09',
    }
  },
}
</script>

<template>
  <div>
    <h3>selected date: {{ date }}</h3>
    <section class="example-demo-wrapper">
      <zx-vue-calendar v-model="date" />
      <pre>
        <code class="javascript">
  export default {
    template: `&lt;zx-vue-calendar v-model="date"/&gt;`,
    data() {
      return {
        date: '2023/02/09'
      }
    }
  }
        </code>
      </pre>
    </section>
  </div>
</template>
