# zx-calendar

演示地址：

https://capricorncd.github.io/calendar/dist/index.html

#### Vue

https://capricorncd.github.io/calendar/dist/vue.html

#### React

https://capricorncd.github.io/calendar/dist/react.html

安装：

```bash
npm install zx-calendar -S
```

## 使用

```javascript
import ZxCalendar from 'zx-calendar'

// options
const options = {
  // element selector 或 element 对象
  el: '#app',
  // 可选参数：date/month/year
  type: 'date',
  // zh/jp/en 决定星期/按钮等文字语言
  lang: 'zh',
  // 星期一(省略形式: 一)
  isFullWeek: false,
  // header的标题显示格式
  // type date: yyyy/MM
  // type month: yyyy
  // type year: yyyy-yyyy
  titleFormatter: 'yyyy/MM',
  // 元素后缀, 日/月/年
  itemSuffix: null,
  // 默认选中日期
  // yyyy-MM-dd, yyyy/MM/dd, yyyy, timestamp
  defaultDate: null,
  // 可选日期范围设置
  // [startDate, endDate]
  dateRange: [],
  // 是否显示节假日信息
  showHoliday: false,
  // 自定义显示元素处理function
  // 返回数据结构：return object {text: string, value: number, fullText: string, disabled: boolean, ...}
  itemFormatter: null,
  // 选择模式: 单选single/多选multiple/范围选择range
  mode: 'single',
  // 自定义语言
  langPackage: {
    // 确认按钮文字
    confirmButton: 'ok',
    // 取消按钮文字
    cancelButton: 'cancel',
    // 清除按钮文字
    clearButton: 'clear',
    // 星期显示文字，顺序周日-周六
    weeks: ["日", "一", "二", "三", "四", "五", "六"]
  },
  // 控制底部按钮显示与否，显示顺序
  // 默认只有当 mode为multiple/range时，才会显示
  footerButtons: ['clear', 'cancel', 'confirm'],
  // 只显示确定按钮
  // footerButtons: ['confirm'],
  // 修改按钮显示顺序
  // footerButtons: ['confirm', 'clear', 'cancel'],
  // ...
  // 按钮对齐方式
  // justify-content
  footerButtonAlign: 'flex-end',
  // 当mode为multiple/range时，是否隐藏底部按钮
  hideFooter: false,
}

// 创建实例
const zxCalendar = new ZxCanlendar(options)

// 监听change
zxCalendar.on('change', data => {
  console.log(data)
})

// 监听取消按钮点击
zxCalendar.on('cancel', () => {
  // ...
})

// 监听 error
zxCalendar.on('error', err => {
  console.error(err)
})
```

## 方法

### setDate(date)

设置选中日期

|参数|类型|必须|说明|
|:--|:--|:--|:--|
|date|`string/timestamp/Date` / `Array`, `null`|否|-|

```javascript
// mode: single
zxCalendar.setDate('2020/08/10')
zxCalendar.setDate('2020/08/10 22:14:59')
// 清除所选日期
zxCalendar.setDate()

// mode: multiple
zxCalendar.setDate(['2020/08/01', '2020/08/05', '2020/08/10'])

// mode: range
zxCalendar.setDate(['2008/01/14', '2019/12/10'])
```

### setCurrentDate(date)

设置当前日期（页面）

|参数|类型|必须|说明|
|:--|:--|:--|:--|
|date|`string/timestamp/Date`|yes|-|

### setDateRange(startDate, endDate)

设置可选日期范围

|参数|类型|必须|说明|
|:--|:--|:--|:--|
|startDate|`string/timestamp/Date`|是|-|
|endDate|`string/timestamp/Date`|是|-|

### prev(isYear)

前一页（月/年）

|options.type|isYear|说明|
|:--|:--|:--|
|date|有效|isYear=`true`, 切换到上一年的日选项<br>isYear=`false`, 切换到上一月的日选项|
|month|无效|切换到上一年的月选项|
|year|无效|切换到上一组年选项|

### next(isYear)

下一页（月/年）

|options.type|isYear|说明|
|:--|:--|:--|
|date|有效|isYear=`true`, 切换到下一年的日选项<br>isYear=`false`, 切换到下一月的日选项|
|month|无效|切换到下一年的月选项|
|year|无效|切换到下一组年选项|

### toDate(date)

将字符串或时间戳转换为日期对象

|参数|类型|必须|说明|
|:--|:--|:--|:--|
|date|`string/timestamp/Date`|是|-|

返回 `Date/null`

```javascript
const date = zxCalendar.toDate('2020/08/10')
if (date !== null) {
    console.log(date.getFullYear())
} 
```

### formatDate(date, formatter[, langPackage])

格式化日期对象

|参数|类型|必须|说明|
|:--|:--|:--|:-|
|date|`string/timestamp/Date`|yes||
|formatter|`string`|yes|`yMdhmsaAwW`|
|langPackage|`object`|no|`{weeks: ['日', '一', '二', '三', '四', '五', '六']}`|

formatter

`2020/08/18 22:59:02`

|格式|说明|例子|
|:--|:--|:--|
|yyyy|year|2020|
|M|month|8|
|MM|month|08|
|d|day|18|
|dd|day|18|
|h|hour|22|
|hh|hour|22|
|m|minute|59|
|mm|minute|59|
|s|second|2|
|ss|second|02|
|a|am/pm|pm|
|A|AM/PM|PM|
|w|week|2|
|ww|week|02|
|W|week|`options: {isFullWeek: false, lang: 'zh'}`, 二<br>`options: {isFullWeek: true, lang: 'zh'}`, 星期二<br>`ZxCalendar.prototype.formatDate(date, 'W')`, 2<br>`ZxCalendar.prototype.formatDate(date, 'WW')`, 02|

```javascript
zxCalendar.formatDate(new Date(), 'yyyy/MM/dd hh:mm:ss')
// 2020/08/10 23:49:12
```

### on(eventName, fn)

|参数|类型|必须|说明|
|:--|:--|:--|:-|
|eventName|`string`|yes|自定义事件名|
|fn|`function`|yes|-|

```javascript
zxCalendar.on('error', err => {
  console.error(err)
})

zxCalendar.on('change', arr => {
  console.log(arr)
})

zxCalendar.on('onWeekClick', ({el, className, innerText) => {
  console.log(innerText)
})

zxCalendar.on('onTitleClick', ({el, className, innerText) => {
  console.log(innerText)
})
```

|事件名称|参数|
|:--|:--|
|change|arr|

arr数据结构：

```javascript
[
  {
    text: String,
    fullText: String,
    value: Number,
    date: Date,
    ...
  }
]
```

### emit(eventName[, parameters])

```javascript
zxCalendar.emit('customEvent', {})
```

### off(eventName)

```javascript
zxCalendar.off('customEvent')
```

### getDate()

获取以选中的日期

返回一个数组 `Array`

### destroy()

```javascript
zxCalendar.destroy()
```

## Vue

文档及DEMO：https://capricorncd.github.io/calendar/dist/vue.html

```html
<template>
  <zx-vue-calendar 
    v-model="value" 
    @change="handleChange"
    @cancel="handleCancel"
    @error="handleError" />
</template>

<script>
import { ZxVueCalendar } from 'zx-calendar/lib/vue-calendar'

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

|Props|类型|默认值|说明|
|:--|:--|:--|:--|
|v-model/value|`string, number, array`|`''`|默认选中的日期|
|type|`string`|`date`|日历类型，可选值: `date/month/years`|
|mode|`string`|`single`|选择模式，可选值: `single/multiple/range`|
|format|`string/timestamp`|`''`|返回日期格式，Example: `yyyy/MM/dd`|
|lang|`string`|`en`|日历周等信息语言，可选值: `en/zh/jp`|
|is-full-week|`boolean`|`false`|是否显示星期全名。如周一，isFullName为true时`Monday`,false时显示为`Mon`|
|title-formatter|`string`|date `yyyy/MM` month: `yyyy`, year: `yyyy-yyyy`|设置标题显示格式|
|item-suffix|`string`|`''`|日历每个元素显示后缀。如type=date时`09日`为空则显示为`09`；以下同理month: `12月`, year: `2009年`|
|date-range|`array`|`[]`|设置可选日期范围，格式 `[startDate, endDate]`|
|show-holiday|`boolean`|`false`|是否显示假日信息，假日内容需要自己实现(使用`item-formatter`函数)|
|item-formatter|`function`|`undefined`|自定义元素处理函数，返回一个对象{text: string, value: number, fullText: string, disabled: boolean, ...}|
|lang-package|`object`|`undefined`|语言包|
|footer-buttons|`array`|`undefined`|底部按钮组，决定显示哪些按钮和显示顺序|
|footer-button-align|`string`|`flex-end`|可选值: flex的justify-content的任意值|
|hide-footer|`boolean`|`false`|为true时，不创建底部按钮组元素|

## React

文档及DEMO：https://capricorncd.github.io/calendar/dist/react.html

```jsx
import React, { Component } from 'react'
import { ZxReactCalendar } from 'zx-calendar/lib/react-calendar'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: '2020/09/05'
    }
  }

  handleChange(res, originalArray) {
    console.log(res, originalArray)
  }

  render() {
    return <div>
      <ZxReactCalendar
        value={this.state.date} 
        change={(...args) => this.handleChange(...args)}/>
    </div>
  }
}
```
