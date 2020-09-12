
## Properties

|Props|Type|Default|Description|
|:--|:--|:--|:--|
|v-model/value|`string, number, array`|`''`||
|type|`string`|`date`|Optional values: `date|month|years`|
|mode|`string`|`single`|Optional values: `single|mutiple|range`|
|format|`string`|`''`|Example: `yyyy/MM/dd`|
|lang|`string`|`en`|Optional values: `en|zh|jp`|
|is-full-week|`boolean`|`false`|Monday: isFullName: `Monday`, default: `Mon`|
|title-formatter|`string`|date `yyyy/MM` month: `yyyy`, year: `yyyy-yyyy`|Set title display format|
|item-suffix|`string`|`''`|Example: date `日` month: `月`, year: `年`|
|date-range|`array`|`[]`|Set selectable date range, `[startDate, endDate]`|
|show-holiday|`boolean`|`false`|show holiday info|
|item-formatter|`function`|`undefined`|custom item handler, return an object {text: string, value: number, fullText: string, disabled: boolean, ...}|
|lang-package|`object`|`undefined`||
|footer-buttons|`array`|`undefined`||
|footer-button-align|`string`|`flex-end`|Optional values: flex justify-content values|
|hide-footer|`boolean`|`false`|hide footer button wrapper|

## Events

|Name|Parameters|Description|
|:--|:--|:--|
|change|(data, originalArrayData)||
|instance|(calendarInstance)||
|error|(err)||
|cancel|()||

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
