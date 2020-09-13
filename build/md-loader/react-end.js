/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-09-01 00:21
 */
const reg = /"(\w*import React.+)"/

module.exports = function(source) {
  // console.log(source)
  const lines = source.split(/[\n\r]/).map(line => {
    if (!line) return
    if (reg.test(line.trim())) {
      line = handlePreCode(line)
    }
    return line
  })

  return lines.join('\n')
}

function handlePreCode(line) {
  // console.log(line)
  return line.replace(reg, (match, $1) => {
    $1 = $1
      .replace(/__[LR]__/g, m => {
        return m === '__L__' ? '{' : '}'
      })
      .replace(/__WRAP__/g, '\\n')
    // console.log($1)
    return `"${$1}"`
  })
}
