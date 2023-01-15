## Install

```shell script
# npm
npm i zx-calendar

# yarn
yarn add zx-calendar
```

## Usage

```javascript
// Vue 2.x.x
import { ZxVueCalendar } from 'zx-calendar/vue2'
import 'zx-calendar/css'

// Vue 3.x.x
import { ZxVueCalendar } from 'zx-calendar/vue'
```

## Properties

|Props|Type|Default|Description|
|:--|:--|:--|:--|
|v-model|`string, timestamp, array`|`''`|Date selected by default|
|* value|`string, timestamp, array`|`''`|Only for Vue2.x.x, Date selected by default|
|* model-value|`string, timestamp, array`|`''`|Only for Vue3.x.x, Date selected by default|
|type|`string`|`date`|Optional values: `date|month|years`|
|mode|`string`|`single`|Optional values: `single|multiple|range`|
|format|`string/timestamp`|`''`|Example: `yyyy/MM/dd`|
|lang|`string`|`en`|Optional values: `en|zh|jp`|
|is-full-week|`boolean`|`false`|Monday: isFullName: `Monday`, default: `Mon`|
|title-formatter|`string`|date `yyyy/MM` month: `yyyy`, year: `yyyy-yyyy`|Set title display format|
|item-suffix|`string`|`''`|Example: date `日` month: `月`, year: `年`|
|date-range|`array`|`[]`|Set selectable date range, `[startDate, endDate]`|
|show-holiday|`boolean`|`false`|show holiday info|
|item-formatter|`function`|`undefined`|custom item handler, parameter: (item: object), return an object `_text: string, value: number, fullText: string, disabled: boolean, ..._`|
|lang-package|`object`|`undefined`|-|
|footer-buttons|`array`|`undefined`|-|
|footer-button-align|`string`|`flex-end`|Optional values: flex justify-content values|
|hide-footer|`boolean`|`false`|hide footer button wrapper|
|option|`object`|`{}`|See the basic usage parameter 'options' for details|

## Events

|Name|Parameters|Description|
|:--|:--|:--|
|change|(data, originalArrayData)|-|
|instance|(calendarInstance)|callback calendar instance|
|error|(err)|callback Error|
|cancel|()|-|

## Methods

|Name|Parameters|Description|
|:--|:--|:--|
|setDate|(date)|date optional values: `string/timestamp/Date` or `Array[string/timestamp/Date]`, `null`|
|setCurrentDate|(date)|`string/timestamp/Date`|
|setDateRange|(startDate, endDate)|-|
|prev|(isYear)|-|
|next|(isYear)|-|
|toDate|(date)|-|
|formatDate|(date, formatter[, langPackage])|-|
|getDate|-|-|

## Slots

|Name|Description|
|:--|:--|
|header|-|
|footer|-|