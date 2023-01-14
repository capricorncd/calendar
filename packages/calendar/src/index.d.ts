/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-09-20 10:53
 */
import type {
  TYPE_DATE,
  TYPE_MONTH,
  TYPE_YEAR,
  MODE_MULTIPLE,
  MODE_RANGE,
  MODE_SINGLE,
} from './constants'

export type { ILangPackage } from 'date-utils-2020'
export type * from './constants'

export class ZxCalendar {
  constructor(options?: ZxCalendarOptions)

  formatDate<T>(str: T, fmt: string, langPackage?: ILangPackage): string

  toDate<T>(str: T): Date | null

  emit(eventName: string, ...args: unknown[]): void

  on(eventName: string, fn: (...args: unknown[]) => void): void

  off(eventName: string): void

  prev(isYear?: boolean): void

  next(isYear?: boolean): void

  setDateRange(start: unknown, end: unknown): void

  setDate(str?: unknown): void

  setCurrentDate(str: unknown): void

  getDate(): object[]

  destroy(): void
}

/**
 * @type ZxCalendarModes
 */
export type ZxCalendarModes = MODE_SINGLE | MODE_MULTIPLE | MODE_RANGE

/**
 * @type ZxCalendarColors
 */
export interface ZxCalendarColors {
  primary: string
  arrow: string
  holidayDot: string
  currentItemBg: string
  white: string
  rangeBg: string
}

/**
 * @type ZxCalendarOptions
 */
export interface ZxCalendarOptions {
  // document selector or Element
  el?: HTMLElement | string
  // Restricted date range
  dateRange?: string[] | number[] | Date[]
  // zh/jp/en
  lang?: string
  // show holiday info
  showHoliday?: boolean
  // date/month/year
  type?: TYPE_DATE | TYPE_MONTH | TYPE_YEAR
  isFullWeek?: boolean
  // title formatter
  titleFormatter?: string
  // item suffix
  itemSuffix?: null | string
  // default selected date
  defaultDate?: any[] | any
  // function, custom item handler
  // return object {}
  itemFormatter?: (originalData: Record<string, any>) => Record<string, any>
  // Selection mode: single selection, multiple selection, range selection
  mode?: ZxCalendarModes
  // language package
  langPackage?: ILangPackage
  // footer buttons
  footerButtons?: string[]
  // justify-content
  footerButtonAlign?: string
  // hide buttons of footer when mode is multiple/range
  hideFooter?: boolean
  // colors
  colors?: ZxCalendarColors
}
