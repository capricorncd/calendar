# zx-calendar

zx-calendar, ZxReactCalendar, ZxSolidCalendar, zx-vue-calendar (Vue2.x and Vue3.x)

<p align="left">
  <a href="https://npmcharts.com/compare/zx-calendar?minimal=true"><img src="https://img.shields.io/npm/dm/zx-calendar.svg?sanitize=true" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/zx-calendar"><img src="https://img.shields.io/npm/v/zx-calendar.svg?sanitize=true" alt="Version"></a>
  <a href="https://www.npmjs.com/package/zx-calendar"><img src="https://img.shields.io/npm/l/zx-calendar.svg?sanitize=true" alt="License"></a>
</p>

https://capricorncd.github.io/calendar/dist/index.html

![zx-calendar](./snapshot.png)

```js
// Import CSS files in the entry file or root component
import 'zx-calendar/css'

import { ZxCalendar } from 'zx-calendar'
```

#### Vue docs and example

```js
import { ZxVueCalendar } from 'zx-calendar/vue'
// vue 2.x
import { ZxVueCalendar } from 'zx-calendar/vue2'
```

`ZxVueCalendar` [Docs](docs/ZxVueCalendar.md) | [Demo vue2.x](https://capricorncd.github.io/calendar/dist/vue.html) | [Demo vue3.x](https://capricorncd.github.io/calendar/dist/vue3.html)

#### React docs and example

```js
import { ZxReactCalendar } from 'zx-calendar/react'
```

`ZxReactCalendar` [Docs](docs/ZxReactCalendar.md) | [Demo](https://capricorncd.github.io/calendar/dist/react.html)


#### Solid-js

```js
import { ZxSolidCalendar } from 'zx-calendar/solid'
```

`ZxSolidCalendar` [Docs](docs/ZxSolidCalendar.md) | [Demo](https://capricorncd.github.io/calendar/dist/solid.html)

## Install

```bash
# pnpm
pnpm i zx-calendar

# npm
npm i zx-calendar

# yarn
yarn add zx-calendar
```

### Setup and Dev

```bash
# setup
pnpm i

# start default demo
pnpm run dev
# start vue2.x.x demo
pnpm run vue2
# start vue3.x.x demo
pnpm run vue
# start react demo
pnpm run react
# start solid.js demo
pnpm run solid
```

## Usage

```javascript
// Import CSS files in the entry file or root component
import 'zx-calendar/css'

import { ZxCalendar } from 'zx-calendar'

const options = {}

// create an instance
const zxCalendar = new ZxCalendar(options)

// on change
zxCalendar.on('change', data => {
  console.log(data)
})

// cancel button on click
zxCalendar.on('cancel', () => {
  // ...
})

// on error
zxCalendar.on('error', err => {
  console.error(err)
})
```

## Options

see [ZxCalendarOptions](docs/#ZxCalendarOptions)

```javascript
// default options
const options = {
  // element selector or element, calendar will be append this `el`
  el: '#app',
  // calendar's types, options date/month/year
  type: 'date',
  // zh/jp/en that week and button text languages
  lang: 'zh',
  // Whether to display the full name of the week, `Mon` -> `Monday`/ 星期一(省略形式: 一)
  isFullWeek: false,
  // header title display format
  // type is date: yyyy/MM
  // type is month: yyyy
  // type is year: yyyy-yyyy
  titleFormatter: 'yyyy/MM',
  // item suffix, 日/月/年
  itemSuffix: null,
  // default selected date
  // yyyy-MM-dd, yyyy/MM/dd, yyyy, timestamp, Array
  defaultDate: null,
  // selectable date range array
  // [startDate, endDate]
  dateRange: [],
  // show holiday info
  showHoliday: false,
  // function, custom item handler
  // return object {text: string, value: number, fullText: string, disabled: boolean, ...}
  itemFormatter: null,
  // Selection mode, options single/multiple/range
  mode: 'single',
  // language package, used when formatting dates
  langPackage: {
    confirmButton: 'ok',
    cancelButton: 'cancel',
    clearButton: 'clear',
    weeks: ["日", "一", "二", "三", "四", "五", "六"]
  },
  // footer buttons
  // show clear, cancle and confirm button when mode=multiple/range
  footerButtons: ['clear', 'cancel', 'confirm'],
  // only show confirm button
  // footerButtons: ['confirm'],
  // change button display order
  // footerButtons: ['confirm', 'clear', 'cancel'],
  // ...
  // justify-content
  footerButtonAlign: 'flex-end',
  // hide buttons of footer when mode is multiple/range
  hideFooter: false,
  // colors
  colors: {
    primary: '#f30',
    // next/prev arrow color
    arrow: '#999',
    // holiday dot color
    holidayDot: 'rgba(0, 0, 0, 0.2)',
    // today/this month(year) item background color
    currentItemBg: '#eee',
    // white color
    white: '#fff',
    // selected range items background color
    rangeBg: '#eee',
  },
}
```

## Methods

### setDate(date)

Set selected date

|parameter|type|required|remark|
|:--|:--|:--|:--|
|date|`string/timestamp/Date` or `Array[string/timestamp/Date]`, `null`|no|-|

```javascript
// mode: single
// set select date
zxCalendar.setDate('2020/08/10')
zxCalendar.setDate('2020/08/10 22:14:59')
// clear selected date
zxCalendar.setDate()

// mode: multiple
zxCalendar.setDate(['2020/08/01', '2020/08/05', '2020/08/10'])

// mode: range
zxCalendar.setDate(['2008/01/14', '2019/12/10'])
```

### setCurrentDate(date)

Set current date

|parameter|type|required|remark|
|:--|:--|:--|:--|
|date|`string/timestamp/Date`|yes|-|

### setDateRange(startDate, endDate)

Set optional date range

|parameter|type|required|remark|
|:--|:--|:--|:--|
|startDate|`string/timestamp/Date`|yes|-|
|endDate|`string/timestamp/Date`|yes|-|

### prev(isYear)

|options.type|isYear|remark|
|:--|:--|:--|
|date|effective|isYear=`true`, go to prev year<br>isYear=`false`, go to prev month|
|month|invalid|go to prev year|
|year|invalid|go to prev years page|

### next(isYear)

|options.type|isYear|remark|
|:--|:--|:--|
|date|effective|isYear=`true`, go to next year<br>isYear=`false`, go to next month|
|month|invalid|go to next year|
|year|invalid|go to next years page|

### toDate(date)

String, timestamp to Date

|parameter|type|required|remark|
|:--|:--|:--|:--|
|date|`string/timestamp/Date`|yes|-|

return `Date/null`

```javascript
const date = zxCalendar.toDate('2020/08/10')
if (date !== null) {
    console.log(date.getFullYear())
} 
```

### formatDate(date, formatter[, langPackage])

|parameter|type|required|remark|
|:--|:--|:--|:-|
|date|`string/timestamp/Date`|yes||
|formatter|`string`|yes|`yMdhmsaAwW`||
|langPackage|`object`|no|`{weeks: ['日', '月', '火', '水', '木', '金', '土']}`|

formatter

`2020/08/18 22:59:02`

|format|meaning|example|
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

|parameter|type|required|remark|
|:--|:--|:--|:-|
|eventName|`string`|yes|custom event name|
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

|eventName|parameter|
|:--|:--|
|change|arr|

arr

```javascript
[
  {
    text: String,
    fullText: String,
    value: Number,
    date: Date
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

get selected dates

return `Array`

### destroy()

remove calendar from el(parent)

```javascript
zxCalendar.destroy()
```

## License

MIT License © 2020-Present [Capricorncd](https://github.com/capricorncd).