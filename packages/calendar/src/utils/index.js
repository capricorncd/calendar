/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-08-08 16:14
 */
import { formatDate, toDate, toTwoDigits } from 'date-utils-2020'
import { MODE_RANGE, MODE_SINGLE } from '../config/constants'

const VALUE_FORMAT = {
  date: 'yyyyMMdd',
  month: 'yyyyMM',
  year: 'yyyy',
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
 * get date info
 * @param currentDay
 * @param currentDate
 * @returns {{firstDayOfWeek: number, lastDayOfMonth: number}}
 */
function getDateInfo({ current, currentDate }) {
  // firstDayOfWeek
  // get first day of this month
  const arr = current.slice(0, 2)
  arr.push('01')
  const firstDayOfWeek = new Date(arr.join('/')).getDay()
  // lastDayOfMonth
  let year = currentDate.getFullYear()
  let month = currentDate.getMonth() + 1
  if (month === 12) {
    year += 1
    month = 1
  } else {
    month += 1
  }
  // first day date of next month
  const nextMonthFirstDayTimestamp = new Date(
    `${year}/${toTwoDigits(month)}/01`
  ).getTime()
  // get date of the this month last millisecond
  const lastMillisecondDate = new Date(nextMonthFirstDayTimestamp - 1)
  return {
    firstDayOfWeek,
    lastDayOfMonth: lastMillisecondDate.getDate(),
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
  const startFullYear = prefix * 100 + startYear
  const endFullYear = startFullYear + 19
  return {
    startFullYear,
    endFullYear,
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
    const [start, end] = dateRange
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
    data.selected.forEach((item) => {
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
function initSelectedDates(defaultDate, { type, mode }) {
  const arr = []
  if (defaultDate) {
    if (!Array.isArray(defaultDate)) {
      defaultDate = [defaultDate]
    }
    // defaultDate check
    if (mode === MODE_SINGLE && defaultDate.length > 1) {
      defaultDate = defaultDate.slice(0, 1)
    }
    if (mode === MODE_RANGE && defaultDate.length > 2) {
      defaultDate = defaultDate.slice(0, 2)
    }
    // handle date
    const fmt = VALUE_FORMAT[type]
    let temp
    defaultDate.forEach((item) => {
      temp = toDate(item)
      if (temp) {
        arr.push({
          value: toNumber(formatDate(temp, fmt)),
          date: temp,
          fullText: formatDate(temp, 'yyyy/MM/dd'),
        })
      }
    })
    // sort
    arr.sort((a, b) => a.value - b.value)
  }
  return arr
}

function isInvalidItem(timestamp, startRangeDate, endRangeDate) {
  return (
    (startRangeDate && startRangeDate > timestamp) ||
    (endRangeDate && endRangeDate < timestamp)
  )
}

function isInvalidOfDateRange(items, startRangeDate, endRangeDate, type) {
  const invalidItem = []
  switch (type) {
    case MODE_RANGE: {
      const [startItem, endItem] = items
      if (
        startItem &&
        isInvalidItem(+startItem.date, startRangeDate, endRangeDate)
      ) {
        invalidItem.push(startItem)
      }
      if (
        endItem &&
        isInvalidItem(+endItem.date, startRangeDate, endRangeDate)
      ) {
        invalidItem.push(endItem)
      }
      break
    }
    default:
      items.forEach((item) => {
        if (isInvalidItem(+item.date, startRangeDate, endRangeDate)) {
          invalidItem.push(item)
        }
      })
  }
  return invalidItem.length > 0
}

/**
 * get current date
 * @returns {null}
 */
function getCurrentDate(selectedItems) {
  const { options } = this
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
    if (
      isInvalidOfDateRange(
        selectedItems,
        startRangeDate,
        endRangeDate,
        options.type
      )
    ) {
      let timer = setTimeout(() => {
        this.emit(
          'error',
          new Error(
            `The default date[${options.defaultDate}] is not within the range[${options.dateRange}].`
          )
        )
        clearTimeout(timer)
        timer = null
      }, 0)
    } else {
      date = selectedItems[0].date
    }
  }
  return date
}

function isRangeSelectTemp(current, { data, options }) {
  if (options.mode === MODE_RANGE && data.selected.length === 1) {
    return current === data.selected[0].value
  }
  return false
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
  isRangeSelectTemp,
  isString,
  toDate,
  toNumber,
  toTwoDigits,
}
