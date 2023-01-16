/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2023/01/16 21:01:13 (GMT+0900)
 */
const path = require('path')
const { outputFile } = require('zx-sml/nodejs')

function main() {
  const coreDir = path.join(__dirname, '../packages/calendar/src')
  outputFile(coreDir, path.join(__dirname, '../docs/README.md'), {
    typeWithAuto: true,
  })
}

main()
