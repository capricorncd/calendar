/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-08-10 15:02
 */
function getArgvType(arr) {
  const index = arr.findIndex(item => item === '--type')
  return index > -1 ? arr[index + 1] : 'def'
}

module.exports = {
  getArgvType,
}
