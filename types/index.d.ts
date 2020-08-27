/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-08-25 23:32
 */
export type calendarDate = Date | string | number | undefined

export type calendarLang = 'zh' | 'jp' | 'en'

export type calendarTypes = 'date' | 'month' | 'year'

export type calendarModes = 'single' | 'multiple' | 'range'

export type calendarButtons = 'clear' | 'cancel' | 'confirm'

export type TypesFn = () => void

export interface calendarTypeObject {
  date: string,
  month: string,
  year: string
}

export interface calendarItem {
  date?: Date,
  text?: string,
  fullText: string,
  value: number,
  week?: number,
  disabled?: boolean,
  holiday?: boolean,
  isRangeFirst?: boolean,
  isRangeLast?: boolean,
  isRangeTemp?: boolean,
  selected?: boolean,
  current?: boolean
}

export interface calendarData {
  today: string,
  currentDate: Date,
  currentDay: string,
  current: string[],
  selected: calendarItem[],
  dates: calendarItem[],
  months: calendarItem[],
  years: calendarItem[]
}

export interface calendarLangPackage {
  weeks?: string[],
  confirmButton?: string,
  cancelButton?: string,
  clearButton?: string
}

export interface calendarOptions {
  // document selector or Element
  el: string | HTMLElement,
  // Restricted date range
  dateRange?: calendarDate[],
  // zh/jp/en
  lang?: calendarLang,
  // show holiday info
  showHoliday?: boolean,
  // date/month/year
  type: calendarTypes,
  isFullWeek?: boolean,
  titleFormatter: string,
  // item suffix
  itemSuffix?: string,
  // default selected date
  defaultDate: calendarDate | calendarDate[],
  // function, custom item handler
  // return object {}
  itemFormatter?: Function,
  // Selection mode: single selection, multiple selection, range selection
  mode?: calendarModes,
  // language package
  langPackage?: calendarLangPackage,
  // footer buttons when mode is multiple/range
  footerButtons?: calendarButtons[],
  // justify-content
  footerButtonAlign?: string,
  // Hide the footer without creating any buttons
  hideFooter?: boolean,
}

export interface weeksObject {
  full: string[],
  abbr: string[]
}

export interface calendarEvents {
  [key: string]: Function[]
}

export interface calendarEls {
  [key: string]: HTMLElement,
}

export interface anyObject {
  [key: string]: any
}
