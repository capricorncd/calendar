/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-09-20 10:53
 */
export type * from './constants'

/**
 * @type ILangPackage
 * The method [formatDate](#formatdateinput-format-langpackage)'s parameter.
 */
export interface ILangPackage {
  weeks: string[]
  confirmButton?: string
  cancelButton?: string
  clearButton?: string
}

/**
 * @type InputDateType
 * Function date parameter of ZxCalendar.
 */
export type InputDateType = string | number | Date

/**
 * @document ZxCalendar
 * zx-calendar, ZxReactCalendar, ZxSolidCalendar, zx-vue-calendar (Vue2.x and Vue3.x)
 * ```js
 * // Import CSS files in the entry file or root component
 * import 'zx-calendar/css'
 *
 * import { ZxCalendar } from 'zx-calendar'
 * ```
 *
 * https://capricorncd.github.io/calendar/dist/index.html
 */
export class ZxCalendar {
  constructor(options?: ZxCalendarOptions)

  /**
   * @method formatDate(input, format, langPackage)
   * @param input `string|timestamp|Date`
   * @param format `string`
   * @param langPackage? `ILangPackage` see [ILangPackage](#ilangpackage)
   * @returns `string`
   */
  formatDate<T>(input: T, format: string, langPackage?: ILangPackage): string

  /**
   * @method toDate(input)
   * @param input `string|timestamp|Date`
   * @returns `Date|null`
   */
  toDate<T>(input: T): Date | null

  /**
   * @method emit(eventName, ...args)
   * @param eventName `string`
   * @param args? `any`
   */
  emit(eventName: string, ...args: unknown[]): void

  /**
   * @method on(eventName, fn)
   * @param eventName `string`
   * @param fn `(..args) => void`
   */
  on(eventName: string, fn: (...args: unknown[]) => void): void

  /**
   * @method off(eventName)
   * @param eventName `string`
   */
  off(eventName: string): void

  /**
   * @method prev(isYear)
   * @param isYear? `boolean`
   */
  prev(isYear?: boolean): void

  /**
   * @method next(isYear)
   * @param isYear? `boolean`
   */
  next(isYear?: boolean): void

  /**
   * @method setDateRange(start, end)
   * Set optional date range
   * @param start? `string|timestamp|Date`
   * @param end? `string|timestamp|Date`
   */
  setDateRange(start?: InputDateType, end?: InputDateType): void

  /**
   * @method setDate(input)
   * Set selected date
   * @param input? `string|timestamp|Date|Array<string|timestamp|Date>|null`
   * ```js
   * // mode: single
   * // set select date
   * zxCalendar.setDate('2020/08/10')
   * zxCalendar.setDate('2020/08/10 22:14:59')
   * // clear selected date
   * zxCalendar.setDate()
   *
   * // mode: multiple
   * zxCalendar.setDate(['2020/08/01', '2020/08/05', '2020/08/10'])
   *
   * // mode: range
   * zxCalendar.setDate(['2008/01/14', '2019/12/10'])
   * ```
   */
  setDate<T>(input?: T): void

  /**
   * Set current date
   * @param input `string|timestamp|Date`
   */
  setCurrentDate(input: InputDateType): void

  /**
   * @method getDate()
   * get selected dates
   * @returns `ZxCalendarItem[]` [ZxCalendarItem](#ZxCalendarItem)
   */
  getDate(): ZxCalendarItem[]

  /**
   * @method destroy()
   */
  destroy(): void
}

/**
 * @type ZxCalendarModes
 */
export type ZxCalendarModes = 'single' | 'multiple' | 'range'

/**
 * @type ZxCalendarTypes
 */
export type ZxCalendarTypes = 'date' | 'month' | 'year'

/**
 * @type ZxCalendarColors
 */
export interface ZxCalendarColors {
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

/**
 * @type ZxCalendarOptions
 * ZxCalendar's Options
 */
export interface ZxCalendarOptions {
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
  // type is date: `yyyy/MM`,
  // type is month: `yyyy`,
  // type is year: `yyyy-yyyy`.
  titleFormatter?: string
  // item suffix, `日/月/年` etc.
  itemSuffix?: null | string
  // default selected date. `yyyy-MM-dd`, `yyyy/MM/dd`, `yyyy`, `timestamp`, `Array` etc.
  defaultDate?: unknown[] | unknown
  // custom item handler, param `originalData` see [ZxCalendarItem](#ZxCalendarItem)
  itemFormatter?: (originalData: ZxCalendarItem) => ZxCalendarItem
  // Selection mode, optional `single`|`multiple`|`range`
  mode?: ZxCalendarModes
  // language packages for formateDate method, `{ weeks: string[], confirmButton: string, cancelButton: string, clearButton: string}`, see [ILangPackage](#ilangpackage)
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

/**
 * @type ZxCalendarItem
 * Each element data of ZxCalendar
 */
export interface ZxCalendarItem {
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
