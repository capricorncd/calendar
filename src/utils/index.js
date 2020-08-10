/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-08-08 16:14
 */
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
 * @param date Date
 * @param fmt yyyy-MM-dd hh:mm:ss
 * @returns {*}
 */
function formatDate(date, fmt) {
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
      if (typeof this.emit === 'function') this.emit('error', e)
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
    if (typeof fmt === 'string') {
      tempStart = tempStart ? +formatDate(tempStart, fmt) : null
      tempEnd = tempEnd ? +formatDate(tempEnd, fmt) : null
    }
    ret.push(tempStart)
    ret.push(tempEnd)
  }
  return ret
}

function checkItemRange(current, start, end) {
  return (start && current < start) || (end && current > end)
}

export {
  checkItemRange,
  formatDate,
  getDateRange,
  getDateInfo,
  getYearInfo,
  toDate,
  toNumber,
  toTwoDigits
}
