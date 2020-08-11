# zx-calendar

demo https://capricorncd.github.io/calendar/dist/index.html

```bash
npm install zx-calendar -S
```

## Usage

```javascript
import ZxCalendar from 'zx-calendar'

// options
const options = {
  // element selector or element  
  el: '#app',
  // date/month/year
  type: 'date',
  // zh/jp/en that week and button text
  lang: 'zh',
  // 星期一(省略形式: 一)
  isFullWeek: false,
  // title formatter of header
  // type date: yyyy/MM
  // type month: yyyy
  // type year: yyyy-yyyy
  titleFormatter: 'yyyy/MM',
  // item suffix, 日/月/年
  itemSuffix: null,
  // default selected dat
  // yyyy-MM-dd, yyyy/MM/dd, yyyy, timestamp
  defaultDate: null,
  // selectable date range
  // [startDate, endDate]
  dateRange: [],
  // show holiday info
  showHoliday: false,
  // function, return string(holiday name)/true/false
  holidayFormatter: null,
  // Selection mode: single/multiple/range
  mode: 'single',
  // language package
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
}

// create an instance
const zxCalendar = new ZxCanlendar(options)

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

## Methods

### setDate(date)

parameter `date`

> type `string/timestamp/Date` or `Array[string/timestamp/Date]`

```javascript
// mode: single
// set select date
zxCalendar.setDate('2020/08/10')
// clear selected date
zxCalendar.setDate()

// mode: multiple
zxCalendar.setDate(['2020/08/01', '2020/08/05', '2020/08/10'])

// mode: range
zxCalendar.setDate(['2008/01/14', '2019/12/10'])
```

### setDateRange(startDate, endDate)

set date reange

parameter `startDate`

> start date, type `string/timestamp/Date`

parameter `endDate`

> end date, type `string/timestamp/Date`

### toDate(date)

parameter `date`

> type: `string/timestamp/Date`

return

> `Date/null`

```javascript
const date = zxCalendar.toDate('2020/08/10')
if (date !== null) {
    console.log(date.getFullYear())
} 
```

### formatDate(date, formatter)

```javascript
zxCalendar.formatDate(new Date(), 'yyyy/MM/dd hh:mm:ss')
// 2020/08/10 23:49:12
```

### destroy()

remove calendar from el(parent)

```javascript
zxCalendar.destroy()
```
