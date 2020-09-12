/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-08-08 15:58
 */
import './index.scss'
/* eslint-disable */
import { $, createCalendar, log, logStr } from './helper'
// import ZxCalendar from '../src/index'

/**
 * test calendar 1
 * @type {ZxCalendar}
 */
/* eslint-disable */
const testCalendar = new ZxCalendar({
  el: '#testCalendar .test-wrapper',
  // defaultDate: 'undefined/09/02',
  // new Date('undefined/09/02')
  // -> Sun Sep 02 2001 00:00:00 GMT+0900 (Japan Standard Time)
  // defaultDate: 'undefined/undefined/undefined',
  defaultDate: '2020/02/21',
  hideFooter: true
})

console.log('testCalendar', testCalendar)
// handle button[hook-cancel, hook-clear, hook-confirm] click
$('#testCalendar .test-footer')
  .addEventListener('click', e => {
    switch (e.target.className) {
      case 'hook-cancel':
        alert('cancel button on click')
        break
      case 'hook-clear':
        if (testCalendar.getDate().length === 0) {
          alert('No dates selected')
        } else {
          testCalendar.setDate(null)
        }
        break
      case 'hook-confirm':
        if (testCalendar.getDate().length === 0) {
          alert('No dates selected')
        } else {
          alert(JSON.stringify(testCalendar.getDate(), null, 2))
        }
        break
    }
  })

testCalendar.on('error', err => {
  console.error(err)
})

testCalendar.on('change', list => {
  console.log(JSON.stringify(list, null, 2))
})

testCalendar.on('onWeekClick', item => {
  console.log('onWeekClick', item)
})

testCalendar.on('onTitleClick', item => {
  console.log('onTitleClick', item)
})

setTimeout(function () {
  log('setDate', '2020年08月19日（水） 22:12:09 PM')
  testCalendar.setDate('2020年08月19日（水） 22:12:09 PM')
  log(testCalendar.getDate())
}, 3000)

/**
 * test 2 ~ n
 */
const jpCalendar = createCalendar({
  el: '.container',
  lang: 'jp',
  titleFormatter: 'yyyy年MM月',
  showHoliday: true,
  // custom item handler
  itemFormatter: function (item) {
    item.holiday = item.value % 3 === 1 ? 'hello world' : false
    item.disabled = item.disabled || item.value % 5 === 0
    return item
  }
}, 'Show Holiday, custom options.itemFormatter')

console.warn(jpCalendar.formatDate('2020/08/19 22:12:09', 'yyyy年MM月dd日（W） hh:mm:ss A a ww'))

createCalendar({
  el: '.container',
  lang: 'en',
  dateRange: ['2009/12/09', '2019/12/09'],
  defaultDate: '2019/12/02'
}, 'dateRange, defaultDate')

createCalendar({
  el: '.container',
  type: 'year',
  // titleFormatter: 'yyyy年-yyyy年',
  dateRange: ['2009/12/09', '2019/12/09'],
  itemSuffix: '年'
}, 'type[year], dateRange, itemSuffix[年]')

createCalendar({
  el: '.container',
  type: 'month',
  // titleFormatter: 'yyyy年',
  itemSuffix: '月',
  defaultDate: '2020/01',
  dateRange: ['2009/12/09', '2021/02/01']
}, 'type[month], dateRange, defaultDate, itemSuffix[月]')

createCalendar({
  el: '.container',
  mode: 'multiple',
  defaultDate: ['2020/08/01', '2020/08/19']
}, 'mode[multiple],  defaultDate')

createCalendar({
  el: '.container',
  mode: 'range',
  defaultDate: ['2020/08/03', '2020/08/19']
}, 'mode[range],  defaultDate')

createCalendar({
  el: '.container',
  lang: 'en',
  type: 'month',
  mode: 'range',
  defaultDate: ['2010/08/03', '2020/08/19']
}, 'mode[range], type[month],  defaultDate')

createCalendar({
  el: '.container',
  type: 'year',
  mode: 'range',
  defaultDate: ['2010/08/03', '2020/08/19']
}, 'mode[range], type[year],  defaultDate')

createCalendar({
  el: '.container',
  mode: 'range',
  defaultDate: ['2020/08/03', '2020/08/19'],
  dateRange: ['2020/08/07'],
  hideFooter: true
}, 'mode[range],  hideFooter[true]')

export default ZxCalendar
