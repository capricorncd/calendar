/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-08-08 15:58
 */
import ZxCalendar from '../src/index'

function log() {
  console.log.apply(null, arguments)
}

const zxCalendar = new ZxCalendar({
  // el: '.container',
  el: document.querySelector('.container'),
  lang: 'jp',
  isFullWeek: false,
  headMonthFormatter: 'yyyy年MM月',
})

log(zxCalendar)

// log(zxCalendar.createMonths())
// let month01 = zxCalendar.setMonth('202001')
// log(month01)

export default zxCalendar
