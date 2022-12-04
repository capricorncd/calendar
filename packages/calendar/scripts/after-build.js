/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2022/06/12 13:14:13 (GMT+0900)
 */
const fs = require('fs')
const { EOL } = require('os')
const path = require('path')
const { formatDate } = require('zx-sml')
// root package.json
const pkg = require('../../../package.json')

const distDir = path.resolve(__dirname, '../../../dist')

const header = [
  '/*!',
  ` * ${pkg.name} version ${pkg.version}`,
  ` * Author: ${pkg.author}`,
  ` * Repository: ${pkg.homepage}`,
  ` * Released on: ${formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss (g)')}`,
  ` */`,
]

function addHeader(file) {
  const liens = fs.readFileSync(file, 'utf8').toString().split(EOL)
  fs.writeFileSync(file, [...header, ...liens].join(EOL), 'utf8')
}

function main() {
  fs.readdirSync(distDir).forEach((file) => {
    if (/\.(js|css)$/.test(file)) {
      addHeader(path.join(distDir, file))
    }
  })
}

main()
