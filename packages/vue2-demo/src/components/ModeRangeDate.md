### mode:range

and custom colors. value: {{value}}

```html
<zx-vue-calendar
  v-model="value"
  mode="range"
  :option="{colors: {primary: 'green', rangeBg: 'chartreuse'}}"
  @cancel="handleCancel"
  @change="handleChange" />
<script>
import { ZxVueCalendar } from '@zx-calendar/vue2'
export default {
  components: {
    ZxVueCalendar
  },
  data() {
    return {
      value: []
    }
  },
  methods: {
    handleChange(res, original) {
      console.log('change', res, original)
    },
    handleCancel() {
      alert('cancel on click!')
    }
  }
}
</script>
```
