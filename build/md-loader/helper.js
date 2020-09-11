/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-09-11 22:58
 */
function escapeTag(str) {
  return str.replace(/<(\/?\w+)/g, '&lt;$1').replace(/(\w+)>/g, '$1&gt;')
}

function replaceFrom(str) {
  return str
    .replace('from \'../../index\'', 'from \'zx-calendar/lib/vue-calendar\'')
  // .replace(/\{\{(.*?)\}\}/g, '&#123;&#123;$1&#125;&#125;')
}

module.exports = {
  escapeTag,
  replaceFrom
}
