# ZxVueCalendar

https://capricorncd.github.io/calendar/dist/vue.html

```js
/** Vue 3.x */
import { ZxVueCalendar } from 'zx-calendar/vue'

/** Vue 2.x */
import { ZxVueCalendar } from 'zx-calendar/vue2'
```

### Vue 3.x

```javascript
import { ZxVueCalendar } from 'zx-calendar/vue'
import 'zx-calendar/css'

const App = {
  components: {
    ZxVueCalendar
  },
  data() {
    return {
      date: '1990/09/12'
    }
  },
  template: `
    <div>
      <h2>{{ date }}</h2>
      <ZxVueCalendar v-model="date"></ZxVueCalendar>
    </div>
  `
}

Vue.createApp(App).mount('#app')
```

### Vue 2.x

```html
<template>
  <zx-vue-calendar 
    v-model="value" 
    @change="handleChange"
    @cancel="handleCancel"
    @error="handleError" />
</template>

<script>
import { ZxVueCalendar } from 'zx-calendar/vue2'
import 'zx-calendar/css'

export default {
  components: {
    ZxVueCalendar
  },
  data() {
    return {
      value: ''
    }
  },
  methods: {
    handleChange(value, orignal) {
      console.log(value, orignal)
    },
    handleCancel() {
      console.log('button cancel on click!')
    },
    handleError(err) {
      console.error(err)
    }
  }
}
</script>
```

|Props|Type|Default|Description|
|:--|:--|:--|:--|
|v-model|`string, timestamp, array`|`''`|Date selected by default|
|* value|`string, timestamp, array`|`''`|(Only for Vue2.x.x), Date selected by default|
|* model-value|`string, timestamp, array`|`''`|(Only for Vue3.x.x), Date selected by default|
|date-range|`array`|`[]`|Set selectable date range, `[startDate, endDate]`|
|footer-buttons|`array`|`undefined`||
|footer-button-align|`string`|`flex-end`|Optional values: flex justify-content values|
|format|`string`|`''`|Example: `yyyy/MM/dd`|
|hide-footer|`boolean`|`false`|hide footer button wrapper|
|is-full-week|`boolean`|`false`|Monday: isFullName: `Monday`, default: `Mon`|
|item-formatter|`function`|`undefined`|custom item handler, return an object {text: string, value: number, fullText: string, disabled: boolean, ...}|
|item-suffix|`string`|`''`|Example: date `日` month: `月`, year: `年`|
|lang|`string`|`en`|Optional values: `en/zh/jp`|
|lang-package|`object`|`undefined`||
|mode|`string`|`single`|Optional values: `single/multiple/range`|
|show-holiday|`boolean`|`false`|show holiday info|
|type|`string`|`date`|Optional values: `date/month/years`|
|title-formatter|`string`|date `yyyy/MM` month: `yyyy`, year: `yyyy-yyyy`|Set title display format|