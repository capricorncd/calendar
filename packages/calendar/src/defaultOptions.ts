import { HEADER_TITLE_FORMAT_DATE } from './config/constants'
import { TYPE_DATE, MODE_SINGLE } from './constants'
import type { ZxCalendarColors } from './'

export const DEF_COLORS: ZxCalendarColors = {
  primary: '#f30',
  arrow: '#999',
  holidayDot: 'rgba(0, 0, 0, 0.2)',
  currentItemBg: '#eee',
  white: '#fff',
  rangeBg: '#eee',
}

// default options
export const DEF_OPTIONS = {
  // document selector or Element
  el: null,
  // Restricted date range
  dateRange: [],
  // zh/jp/en
  lang: 'zh',
  // show holiday info
  showHoliday: false,
  // date/month/year
  type: TYPE_DATE,
  isFullWeek: false,
  titleFormatter: HEADER_TITLE_FORMAT_DATE,
  // item suffix
  itemSuffix: null,
  // default selected date
  defaultDate: [],
  // function, custom item handler
  // return object {}
  itemFormatter: null,
  // Selection mode: single selection, multiple selection, range selection
  mode: MODE_SINGLE,
  // language package
  langPackage: null,
  // footer buttons
  footerButtons: ['clear', 'cancel', 'confirm'],
  // justify-content
  footerButtonAlign: 'flex-end',
  // hide buttons of footer when mode is multiple/range
  hideFooter: false,
}
