# zx-calendar

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
  // zh/jp/en that week
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
}

// create an instance
const calendar = new ZxCanlendar(options)

// on change
calendar.on('change', data => {
  console.log(data)
})

// on error
calendar.on('error', err => {
  console.error(err)
})
```

## Methods

### destroy()

 destroy instance

### emit(eventType, ...arguments)

parameter `eventType`

> custom event type

### on(eventType, fn)

parameter `eventType`

> custom event type

parameter `fn`

> function, Callback when executing `emit(eventType)`

### off(eventType)

remove on(eventType)

### setDateRange(startDate, endDate)

set date reange

parameter `startDate`

> start date, type `string/timestamp/Date`

parameter `endDate`

> end date, type `string/timestamp/Date`

### setDate(date)

set selected date

parameter `date`

> type `string/timestamp/Date`

### toDate(date)

```javascript
const date = calendar.toDate('2020/08/10')
if (date !== null) {
    console.log(date.getFullYear())
} 
```

parameter `date`

> type: `string/timestamp/Date`

return

> `Date/null`
