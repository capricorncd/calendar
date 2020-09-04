### mode:multiple

```html
<p>value: {{value}}</p>
<zx-vue-calendar
  v-model="value"
  mode="multiple" 
  @cancel="handleCancel"
  @change="handleChange" />

<script>
import { ZxVueCalendar } from '../../index'
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
