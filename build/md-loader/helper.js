/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-09-11 22:58
 */
function escapeTag(str) {
  return str.replace(/<(\/?\w+)/g, '&lt;$1').replace(/(\w+)>/g, '$1&gt;')
}

function replaceFrom(str, type = 'vue') {
  return str
    .replace('from \'../../index\'', `from 'zx-calendar/lib/${type}-calendar'`)
}

module.exports = {
  escapeTag,
  replaceFrom
}
