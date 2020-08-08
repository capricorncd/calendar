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
function createDate(str) {
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
    } else {
      throw new Error(`Parameter[${str}] is invalid.`)
    }
  } else if (/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})/.test(str)) {
    date = new Date([RegExp.$1, RegExp.$2, RegExp.$3].join('/'))
  } else if (/^(\d{4})[-/](\d{1,2})/.test(str)) {
    date = new Date([RegExp.$1, RegExp.$2, '01'].join('/'))
  } else {
    throw new Error(`Parameter[${str}] is invalid.`)
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
  // get timestamp of the next month
  let timestamp = +createDate(`${currentDate.getFullYear()}${toTwoDigits(currentDate.getMonth() + 2)}`)
  // get first day of this month
  let arr = current.slice(0, 2)
  arr.push('01')
  return {
    firstDayOfWeek: createDate(arr.join('/')).getDay(),
    lastDayOfMonth: createDate(timestamp - 1).getDate()
  }
}

/**
 * create dom
 * @param vNode
 * @returns {Node}
 */
function createDom(vNode) {
  if (typeof vNode === 'string') {
    return document.createTextNode(vNode)
  }
  const el = document.createElement(vNode.tag || 'div')
  // attrs
  const attrs = vNode.attrs
  if (attrs && typeof attrs === 'object') {
    Object.keys(attrs).forEach(key => {
      el.setAttribute(key, attrs[key])
    })
  }
  // children
  const children = vNode.children
  if (Array.isArray(children) && children.length > 0) {
    children.forEach(child => {
      el.appendChild(createDom(child))
    })
  }
  return el
}

/**
 * query selector
 * @param s
 * @param context
 * @returns {any}
 */
function $(s, context = document) {
  if (!s) return null
  let el = null
  if (typeof s === 'string') {
    el = context.querySelector(s)
  } else if (typeof s === 'object' && s.nodeType === 1) {
    el = s
  }
  return el
}

export {
  $,
  createDate,
  createDom,
  formatDate,
  getDateInfo,
  toNumber,
  toTwoDigits
}
