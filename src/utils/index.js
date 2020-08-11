/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-08-08 16:14
 */
import { MODE_RANGE } from '../config'

const VALUE_FORMAT = {
  date: 'yyyyMMdd',
  month: 'yyyyMM',
  year: 'yyyy'
}

/**
 * to number
 * @param s
 * @returns {*}
 */
function toNumber(s) {
  return s >> 0
}

/**
 * is number like
 * @param n
 * @returns {boolean}
 */
function isNumberLike(n) {
  return /^-?\d+\.?\d+$/.test(n)
}

function isString(s) {
  return typeof s === 'string'
}

function isFunction(fn) {
  return typeof fn === 'function'
}

/**
 * to two digits
 * @param n
 * @returns {*}
 */
function toTwoDigits(n) {
  n += ''
  return n[1] ? n : '0' + n
}

/**
 * format date
 * @param srcDate any
 * @param fmt yyyy-MM-dd hh:mm:ss
 * @returns {*}
 */
function formatDate(srcDate, fmt) {
  const date = toDate(srcDate)
  if (!date) return srcDate
  if (/(y+)/i.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }

  const obj = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }

  for (let key in obj) {
    if (new RegExp('(' + key + ')').test(fmt)) {
      let str = obj[key] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : toTwoDigits(str))
    }
  }
  return fmt
}

/**
 * create date
 * @param str yyyy/MM/dd, yyyy-MM-dd, yyyyMMdd
 * @returns {Date}
 */
function toDate(str) {
  if (!str) return null
  if (str instanceof Date) return str
  let date = null
  if (isNumberLike(str)) {
    let s = str + ''
    let len = s.length
    // time stamp
    if (len === 13) {
      date = new Date(str)
    }
    // yyyyMMdd
    else if (len === 8) {
      date = new Date([s.substr(0, 4), s.substr(4, 2), s.substr(6, 2)].join('/'))
    }
    // yyyyMM
    else if (len === 6) {
      date = new Date([s.substr(0, 4), s.substr(4, 2), '01'].join('/'))
    } else if (len === 4) {
      date = new Date(s + '/01/01')
    }
  } else if (/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})$/.test(str)) {
    date = new Date([RegExp.$1, RegExp.$2, RegExp.$3].join('/'))
  } else if (/^(\d{4})[-/](\d{1,2})$/.test(str)) {
    date = new Date([RegExp.$1, RegExp.$2, '01'].join('/'))
  } else {
    try {
      date = new Date(str)
    } catch (e) {
      if (isFunction(this.emit)) this.emit('error', e)
    }
  }
  return date
}

/**
 * get date info
 * @param currentDay
 * @param currentDate
 * @returns {{firstDayOfWeek: number, lastDayOfMonth: number}}
 */
function getDateInfo({ current, currentDate }) {
  let year = currentDate.getFullYear()
  let month = currentDate.getMonth()
  if (month === 11) {
    year += 1
    month = 1
  } else {
    month += 1
  }
  // get timestamp of the next month
  let timestamp = +toDate(`${year}/${toTwoDigits(month)}/01`)
  // get first day of this month
  let arr = current.slice(0, 2)
  arr.push('01')
  return {
    firstDayOfWeek: toDate(arr.join('/')).getDay(),
    lastDayOfMonth: toDate(timestamp - 1).getDate()
  }
}

/**
 * get year info from current year
 * @param currentFullYear
 * @returns {{endFullYear: number, startFullYear: number}}
 */
function getYearInfo(currentFullYear) {
  const currentYear = toNumber(currentFullYear.substr(2))
  // Integer multiples of 20
  const flag = currentYear % 20 === 0
  const floor = Math.floor(currentYear / 20)
  let startYear = (flag ? floor - 1 : floor) * 20 + 1
  let prefix = toNumber(currentFullYear.substr(0, 2))
  if (floor === 0 && currentYear === 0) {
    prefix -= 1
    startYear = 81
  }
  let startFullYear = prefix * 100 + startYear
  let endFullYear = startFullYear + 19
  return {
    startFullYear,
    endFullYear
  }
}

/**
 * get date instance from options date range
 * @param dateRange
 * @param fmt
 * @returns {[]}
 */
function getDateRange(dateRange, fmt) {
  const ret = []
  if (Array.isArray(dateRange)) {
    let [start, end] = dateRange
    let tempStart = toDate(start)
    let tempEnd = toDate(end)
    if (isString(fmt)) {
      tempStart = tempStart ? +formatDate(tempStart, fmt) : null
      tempEnd = tempEnd ? +formatDate(tempEnd, fmt) : null
    }
    ret.push(tempStart)
    ret.push(tempEnd)
  }
  return ret
}

function getSelectedDateRange({ data, options }) {
  const arr = []
  if (options.mode === MODE_RANGE) {
    data.selected.forEach(item => {
      arr.push(item ? item.value : null)
    })
  }
  return arr
}

function checkItemRange(current, start, end) {
  return (!!start && current < start) || (!!end && current > end)
}

/**
 * init selected dates
 * @param defaultDate
 * @param type
 * @returns {[]}
 */
function initSelectedDates(defaultDate, type) {
  let arr = []
  if (defaultDate) {
    if (!Array.isArray(defaultDate)) {
      defaultDate = [defaultDate]
    }
    const fmt = VALUE_FORMAT[type]
    let temp
    defaultDate.forEach(item => {
      temp = toDate(item)
      if (temp) {
        arr.push({
          value: toNumber(formatDate(temp, fmt)),
          date: temp,
          fullText: formatDate(temp, 'yyyy/MM/dd')
        })
      }
    })
    // sort
    arr.sort((a, b) => a.value - b.value)
  }
  return arr
}

function isInvalidItem(timestamp, startRangeDate, endRangeDate) {
  return (startRangeDate && startRangeDate > timestamp)
    || (endRangeDate && endRangeDate < timestamp)
}

function isInvalidOfDateRange(items, startRangeDate, endRangeDate, type) {
  let invalidItem = []
  switch (type) {
    case MODE_RANGE:
      const [startItem, endItem] = items
      if (startItem && isInvalidItem(+startItem.date, startRangeDate, endRangeDate)) {
        invalidItem.push(startItem)
      }
      if (endItem && isInvalidItem(+endItem.date, startRangeDate, endRangeDate)) {
        invalidItem.push(endItem)
      }
      break
    default:
      items.forEach(item => {
        if (isInvalidItem(+item.date, startRangeDate, endRangeDate)) {
          invalidItem.push(item)
        }
      })
  }
  return invalidItem.length > 0
}

function getCurrentDate(options, selectedItems) {
  let date = null
  // dateRange
  const [startRangeDate, endRangeDate] = getDateRange(options.dateRange)
  // after today
  if (startRangeDate && +startRangeDate > +date) {
    date = startRangeDate
  }
  // before today
  if (endRangeDate && +endRangeDate < +date) {
    date = endRangeDate
  }
  // check default date
  if (selectedItems.length) {
    if (isInvalidOfDateRange(selectedItems, startRangeDate, endRangeDate, options.type)) {
      let timer = setTimeout(() => {
        this.emit('error', new Error(`The default date[${options.defaultDate}] is not within the range[${options.dateRange}].`))
        clearTimeout(timer)
        timer = null
      }, 0)
    } else {
      date = selectedItems[0].date
    }
  }
  return date
}

export {
  checkItemRange,
  formatDate,
  getCurrentDate,
  getDateRange,
  getDateInfo,
  getSelectedDateRange,
  getYearInfo,
  initSelectedDates,
  isFunction,
  isInvalidOfDateRange,
  isNumberLike,
  isString,
  toDate,
  toNumber,
  toTwoDigits
}
