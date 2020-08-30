# zx-calendar

演示地址：

https://capricorncd.github.io/calendar/dist/index.html

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
