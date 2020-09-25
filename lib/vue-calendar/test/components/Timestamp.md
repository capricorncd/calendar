## timestamp

value: {{value}}

```html
<zx-vue-calendar v-model="value" format="timestamp" @change="handleChange" />
<script>
import { ZxVueCalendar } from '../../index'
export default {
  components: {
    ZxVueCalendar
  },
  data() {
    return {
      value: +new Date('1999/09/09')
    }
  },
  methods: {
    handleChange(res, original) {
      console.log('change', res, original)
    }
  }
}
</script>
```
