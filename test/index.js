/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-08-08 15:58
 */
import ZxCalendar from '../src/index'
import './index.scss'

function log() {
  console.log.apply(null, arguments)
}
function logStr() {
  for (let i = 0; i < arguments.length; i++) {
    log(JSON.stringify(arguments[i], null, 2))
  }
}

const zxCalendar = new ZxCalendar({
  // el: '.container',
  el: document.querySelector('.container'),
  lang: 'jp',
  isFullWeek: false,
  titleFormatter: 'yyyy年MM月',
  showHoliday: true,
  holidayFormatter: function (item) {
    return item.value % 3 === 1 ? 'hello world' : false
  }
})

log('zxCalendar', zxCalendar)

const zxCalendar2 = new ZxCalendar({
  // el: '.container',
  el: document.querySelector('.container'),
  lang: 'en',
  isFullWeek: false,
})

log('zxCalendar2', zxCalendar2)

const zxCalendar3 = new ZxCalendar({
  // el: '.container',
  el: document.querySelector('.container'),
  lang: 'jp',
  type: 'year',
  // titleFormatter: 'yyyy年-yyyy年',
  // itemSuffix: '年'
})

log('zxCalendar3', zxCalendar3)

const zxCalendar4 = new ZxCalendar({
  // el: '.container',
  el: document.querySelector('.container'),
  lang: 'jp',
  type: 'month',
  // titleFormatter: 'yyyy年',
  itemSuffix: '月',
  defaultDate: '2020/01',
})

log('zxCalendar4', zxCalendar4)

setTimeout(function () {
  zxCalendar.setDate('2020-08-12')
}, 3000)

zxCalendar.on('change', item => {
  logStr('zxCalendar change', item)
})
zxCalendar2.on('change', item => {
  logStr('zxCalendar2 change', item)
})
zxCalendar3.on('change', item => {
  logStr('zxCalendar3 change', item)
})
zxCalendar4.on('change', item => {
  logStr('zxCalendar4 change', item)
})

export default zxCalendar
