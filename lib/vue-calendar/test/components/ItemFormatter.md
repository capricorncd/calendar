## custom item-formatter and show-holiday

item-formatter(item: object) 

|Props|Type|Description|
|:--|:--|:--|
|current | boolean | When the type is a `date`, `today` is `true`, and other dates are `false`|
|date | Date | |
|disabled | boolean | false|
|fullText | string | `'2016/09/25'` |
|holiday | boolean | false|
|isRangeFirst | boolean | false|
|isRangeLast | boolean | false|
|isRangeTemp | boolean | false|
|selected | boolean | false|
|text | string | `'25'` |
|value | number | 20160925 |
|week | number | `0 - 6 `|

```html
<p>value: {{value}}</p>
<zx-vue-calendar
  v-model="value"
  show-holiday
  :item-formatter="itemFormatter" />

<script>
import { ZxVueCalendar } from '../../index'
export default {
  components: {
    ZxVueCalendar
  },
  data() {
    return {
      value: '2016/09/09'
    }
  },
  methods: {
    itemFormatter(item) {
      return {
        ...item,
        // disabled
        disabled: item.value % 5 === 0,
        // holiday
        holiday: item.value % 3 === 1 ? 'This is a holiday!' : null
      }
    }
  }
}
</script>
```
