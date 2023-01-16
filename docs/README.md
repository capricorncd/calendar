# ZxCalendar

zx-calendar, ZxReactCalendar, ZxSolidCalendar, zx-vue-calendar (Vue2.x and Vue3.x)

https://capricorncd.github.io/calendar/dist/index.html

```js
// Import CSS files in the entry file or root component
import 'zx-calendar/css'

import { ZxCalendar } from 'zx-calendar'
```

## Methods

### destroy()

- @returns `void`

### emit(eventName, ...args)

Param|Types|Required|Description
:--|:--|:--|:--
eventName|`string`|yes|-
args|`any`|no|-

- @returns `void`

### formatDate(input, format, langPackage)

Param|Types|Required|Description
:--|:--|:--|:--
input|`string`/`timestamp`/`Date`|yes|-
format|`string`|yes|-
langPackage|`ILangPackage`|no|ses []()

- @returns `string`

### getDate()

get selected dates

- @returns `ZxCalendarItem[]` [ZxCalendarItem](#ZxCalendarItem)

### next(isYear)

Param|Types|Required|Description
:--|:--|:--|:--
isYear|`boolean`|no|-

- @returns `void`

### off(eventName)

Param|Types|Required|Description
:--|:--|:--|:--
eventName|`string`|yes|-

- @returns `void`

### on(eventName, fn)

Param|Types|Required|Description
:--|:--|:--|:--
eventName|`string`|yes|-
fn|`(..args) => void`|yes|-

- @returns `void`

### prev(isYear)

Param|Types|Required|Description
:--|:--|:--|:--
isYear|`boolean`|no|-

- @returns `void`

### setDate(input)

Set selected date

Param|Types|Required|Description
:--|:--|:--|:--
input|`string`/`timestamp`/`Date`/`Array<string`/`timestamp`/`Date>`/`null`|no|-

- @returns `void`

```js
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

### setDateRange(start, end)

Set optional date range

Param|Types|Required|Description
:--|:--|:--|:--
start|`string`/`timestamp`/`Date`|no|-
end|`string`/`timestamp`/`Date`|no|-

- @returns `void`

### toDate(input)

Param|Types|Required|Description
:--|:--|:--|:--
input|`string`/`timestamp`/`Date`|yes|-

- @returns `Date|null`

## Types

### InputDateType

Function date parameter of ZxCalendar.

<details>
<summary>Source Code</summary>

```ts
type InputDateType = string | number | Date
```

</details>

### ZxCalendarColors

Prop|Types|Required|Description
:--|:--|:--|:--
primary|`string`|yes|primary color, default `#f30`
arrow|`string`|yes|prev/next arrow icon color, default `#999`
holidayDot|`string`|yes|holiday dot color, default `rgba(0, 0, 0, 0.2)`
currentItemBg|`string`|yes|Depending on `type`, for today, or this month, or this year, default `#eee`
white|`string`|yes|white color, default `#fff`
rangeBg|`string`|yes|range background color for selected items, default `#eee`

<details>
<summary>Source Code</summary>

```ts
interface ZxCalendarColors {
  // primary color, default `#f30`
  primary: string
  // prev/next arrow icon color, default `#999`
  arrow: string
  // holiday dot color, default `rgba(0, 0, 0, 0.2)`
  holidayDot: string
  // Depending on `type`, for today, or this month, or this year, default `#eee`
  currentItemBg: string
  // white color, default `#fff`
  white: string
  // range background color for selected items, default `#eee`
  rangeBg: string
}
```

</details>

### ZxCalendarItem

Each element data of ZxCalendar

Prop|Types|Required|Description
:--|:--|:--|:--
current|`boolean`|yes|Depending on `type`, for today, or this month, or this year
date|`Date`|yes|-
disabled|`boolean`|yes|-
fullText|`string`|yes|-
holiday|`boolean`|yes|-
isRangeFirst|`boolean`|yes|-
isRangeLast|`boolean`|yes|-
isRangeTemp|`boolean`|yes|-
selected|`boolean`|yes|-
text|`string`|yes|-
value|`number`|yes|-
week|`number`|yes|-

<details>
<summary>Source Code</summary>

```ts
interface ZxCalendarItem {
  // Depending on `type`, for today, or this month, or this year
  current: boolean
  date: Date
  disabled: boolean
  fullText: string
  holiday: boolean
  isRangeFirst: boolean
  isRangeLast: boolean
  isRangeTemp: boolean
  selected: boolean
  text: string
  value: number
  week: number
}
```

</details>

### ZxCalendarModes

<details>
<summary>Source Code</summary>

```ts
type ZxCalendarModes = 'single' | 'multiple' | 'range'
```

</details>

### ZxCalendarOptions

ZxCalendar's Options

Prop|Types|Required|Description
:--|:--|:--|:--
el|`HTMLElement`/`string`|no|DOM selector or HTMLElement. The created calendar will be append to this element.
dateRange|`string[]`/`number[]`/`Date[]`|no|Restricted date range
lang|`string`|no|weeks or button display language, optional `zh`\|`jp`\|`en`
showHoliday|`boolean`|no|show holiday info
type|`ZxCalendarTypes`|no|optional `date`/`month`/`year`, default `date`.
isFullWeek|`boolean`|no|Whether to display the full name of the week, `Mon` -> `Monday`/ 星期一(省略形式: 一)
titleFormatter|`string`|no|The header title display format. type is date: yyyy/MM, type is month: yyyy, type is year: yyyy-yyyy.
itemSuffix|`null`/`string`|no|item suffix, 日/月/年 etc.
defaultDate|`any[]`/`any`|no|default selected date. yyyy-MM-dd, yyyy/MM/dd, yyyy, timestamp, Array etc.
itemFormatter|`(originalData: ZxCalendarItem) => ZxCalendarItem`|no|custom item handler, param `originalData` see [ZxCalendarItem](#ZxCalendarItem)
mode|`ZxCalendarModes`|no|Selection mode, optional `single`\|`multiple`\|`range`
langPackage|`ILangPackage`|no|language packages for formateDate method, `{ weeks: string[], confirmButton: string, cancelButton: string, clearButton: string}`
footerButtons|`string[]`|no|footer buttons. display clear/cancel/confirm button or sort, when `mode` is `multiple\|range`, default `['clear', 'cancel', 'confirm']`.
hideFooter|`boolean`|no|hide buttons of footer when mode is `multiple\|range`
footerButtonAlign|`string`|no|justify-content
colors|`ZxCalendarColors`|no|colors, see [ZxCalendarColors](#ZxCalendarColors)

<details>
<summary>Source Code</summary>

```ts
interface ZxCalendarOptions {
  // DOM selector or HTMLElement. The created calendar will be append to this element.
  el?: HTMLElement | string
  // Restricted date range
  dateRange?: string[] | number[] | Date[]
  // weeks or button display language, optional `zh`|`jp`|`en`
  lang?: string
  // show holiday info
  showHoliday?: boolean
  // optional `date`/`month`/`year`, default `date`.
  type?: ZxCalendarTypes
  // Whether to display the full name of the week, `Mon` -> `Monday`/ 星期一(省略形式: 一)
  isFullWeek?: boolean
  // The header title display format.
  // type is date: yyyy/MM,
  // type is month: yyyy,
  // type is year: yyyy-yyyy.
  titleFormatter?: string
  // item suffix, 日/月/年 etc.
  itemSuffix?: null | string
  // default selected date. yyyy-MM-dd, yyyy/MM/dd, yyyy, timestamp, Array etc.
  defaultDate?: any[] | any
  // custom item handler, param `originalData` see [ZxCalendarItem](#ZxCalendarItem)
  itemFormatter?: (originalData: ZxCalendarItem) => ZxCalendarItem
  // Selection mode, optional `single`|`multiple`|`range`
  mode?: ZxCalendarModes
  // language packages for formateDate method, `{ weeks: string[], confirmButton: string, cancelButton: string, clearButton: string}`
  langPackage?: ILangPackage
  // footer buttons.
  // display clear/cancel/confirm button or sort, when `mode` is `multiple|range`, default `['clear', 'cancel', 'confirm']`.
  footerButtons?: string[]
  // hide buttons of footer when mode is `multiple|range`
  hideFooter?: boolean
  // justify-content
  footerButtonAlign?: string
  // colors, see [ZxCalendarColors](#ZxCalendarColors)
  colors?: ZxCalendarColors
}
```

</details>

### ZxCalendarTypes

<details>
<summary>Source Code</summary>

```ts
type ZxCalendarTypes = 'date' | 'month' | 'year'
```

</details>
