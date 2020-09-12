/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-08-30 16:19
 */
export const MODE_SINGLE = 'single'
export const MODE_MULTIPLE = 'multiple'
export const MODE_RANGE = 'range'

export const TYPE_DATE = 'date'
export const TYPE_MONTH = 'month'
export const TYPE_YEAR = 'year'

export const FORMATTERS = {
  date: 'yyyy/MM/dd',
  month: 'yyyy/MM',
  year: 'yyyy'
}

export const DEF_OPTIONS = {
  type: ['date', 'month', 'year'],
  lang: ['jp', 'zh', 'en'],
  isFullWeek: false,
  titleFormatter: null,
  itemSuffix: null,
  defaultDate: null,
  dateRange: null,
  showHoliday: false,
  itemFormatter: null,
  mode: ['single', 'multiple', 'range'],
  langPackage: null,
  footerButtons: null,
  footerButtonAlign: null,
  hideFooter: false
}
