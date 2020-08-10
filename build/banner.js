/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-08-10 14:56
 */
const { formatDate } = require('./helper')
const pkg = require('../package.json');

module.exports = `${pkg.name} v${pkg.version}
${pkg.repository.url}
Copyright © 2020-present, ${pkg.author}
Released under the ${pkg.license} License
Released on: ${formatDate(new Date(),'yyyy-MM-dd hh:mm:ss')}`
