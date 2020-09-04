/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-08-10 15:02
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

function toTwoDigits(n) {
  n += ''
  return n[1] ? n : '0' + n
}

function getArgvType(arr) {
  const index = arr.findIndex(item => item === '--type')
  return index > -1 ? arr[index + 1] : 'def'
}

module.exports = {
  formatDate,
  getArgvType,
}
