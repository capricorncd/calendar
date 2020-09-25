value: {{value}}

```html
<zx-vue-calendar
  v-model="value"
  lang="jp"
  title-formatter="yyyy年MM月"
  format="yyyy年MM月dd日(W)" />
<script>
import { ZxVueCalendar } from '../../index'
export default {
  components: {
    ZxVueCalendar
  },
  data() {
    return {
      value: '2008年12月09日(火)'
    }
  }
}
</script>
```
