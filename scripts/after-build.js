/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2022/06/12 13:14:13 (GMT+0900)
 */
const fs = require('fs')
const { EOL } = require('os')
const path = require('path')
const { formatDate } = require('zx-sml')
const { log, warn } = require('zx-sml/nodejs')
// root package.json
const pkg = require('../package.json')

const distDir = path.resolve(__dirname, '../dist')

const version = `${pkg.name} version ${pkg.version}`

const header = [
  '/*!',
  ` * ${version}`,
  ` * Author: ${pkg.author}`,
  ` * Repository: ${pkg.homepage}`,
  ` * Released on: ${formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss (g)')}`,
  ` */`,
]

function addHeader(file) {
  const source = fs.readFileSync(file, 'utf8').toString()
  if (source.trim().startsWith('/*!')) return false
  fs.writeFileSync(file, [...header, source].join(EOL), 'utf8')
  return true
}

function main() {
  log('handle dist files is starting ...')

  fs.readdirSync(distDir).forEach((file) => {
    // remove `zx-*-calendar.min.css` css files
    if (/zx-\w+-calendar\.min\.css/.test(file)) {
      fs.unlinkSync(path.join(distDir, file))
      warn(`${file} has been removed!!`)
    }
    // add header information
    else if (/\.(js|css)$/.test(file)) {
      if (addHeader(path.join(distDir, file))) {
        log(`${file} has been updated!!`)
      }
    }
  })

  log('handle dist files is ended.')
}

main()
