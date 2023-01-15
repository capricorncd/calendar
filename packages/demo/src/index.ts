/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-08-08 15:58
 */
import { ZxCalendar } from '@zx-calendar/core'
import { $, $$, createCalendar, log, logStr } from './helper'
import './index.scss'
import '@zx-calendar/demo-header'
import { slice } from 'zx-sml'

function init() {
  // #firstDemo
  $('#firstDemo')!.innerHTML = `
<code>
const testCalendar = new ZxCalendar({
  el: '#testCalendar .test-wrapper',
  defaultDate: '2020/02/21',
  hideFooter: true,
})
  
testCalendar.on('change', list => {
  console.log(JSON.stringify(list, null, 2))
})
  
setTimeout(function () {
  console.log('setDate')
  testCalendar.setDate('2020年08月19日（水） 22:12:09 PM')
  console.log('getDate', testCalendar.getDate())
}, 3000)

// button onClick
// cancel: alert('cancel button on click')
// clear: testCalendar.setDate(null)
// confirm: alert(JSON.stringify(testCalendar.getDate(), null, 2))

</code>
  `

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
  $$<HTMLButtonElement>('#testCalendar .test-footer button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      console.log(e.currentTarget)
      switch ((e.currentTarget as HTMLButtonElement).className) {
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
  })

  testCalendar.on('error', (err) => {
    console.error(err)
  })

  testCalendar.on('change', (list) => {
    console.log(JSON.stringify(list, null, 2))
  })

  testCalendar.on('onWeekClick', (item) => {
    console.log('onWeekClick', item)
  })

  testCalendar.on('onTitleClick', (item) => {
    console.log('onTitleClick', item)
  })

  setTimeout(function () {
    log('setDate')
    testCalendar.setDate('2020年08月19日（水） 22:12:09 PM')
    log('getDate', testCalendar.getDate())
  }, 3000)

  /**
   * test 2 ~ n
   */
  const jpCalendar = createCalendar({
    el: '.calendar-wrapper',
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
    el: '.calendar-wrapper',
    lang: 'en',
    dateRange: ['2022/12/09', '2024/12/09'],
    defaultDate: '2023/12/02',
    colors: {
      primary: 'green'
    },
  }, 'dateRange, defaultDate, custom color')

  createCalendar({
    el: '.calendar-wrapper',
    type: 'year',
    // titleFormatter: 'yyyy年-yyyy年',
    dateRange: ['2009/12/09', '2019/12/09'],
    itemSuffix: '年'
  }, 'type[year], dateRange, itemSuffix[年]')

  createCalendar({
    el: '.calendar-wrapper',
    type: 'month',
    // titleFormatter: 'yyyy年',
    itemSuffix: '月',
    defaultDate: '2020/01',
    dateRange: ['2009/12/09', '2021/02/01']
  }, 'type[month], dateRange, defaultDate, itemSuffix[月]')

  createCalendar({
    el: '.calendar-wrapper',
    mode: 'multiple',
    defaultDate: ['2020/08/01', '2020/08/19']
  }, 'mode[multiple],  defaultDate')

  createCalendar({
    el: '.calendar-wrapper',
    mode: 'range',
    defaultDate: ['2020/08/03', '2020/08/19']
  }, 'mode[range],  defaultDate')

  createCalendar({
    el: '.calendar-wrapper',
    lang: 'en',
    type: 'month',
    mode: 'range',
    defaultDate: ['2010/08/03', '2020/08/19']
  }, 'mode[range], type[month],  defaultDate')

  createCalendar({
    el: '.calendar-wrapper',
    type: 'year',
    mode: 'range',
    defaultDate: ['2010/08/03', '2020/08/19']
  }, 'mode[range], type[year],  defaultDate')

  createCalendar({
    el: '.calendar-wrapper',
    mode: 'range',
    defaultDate: ['2020/08/03', '2020/08/19'],
    dateRange: ['2020/08/07'],
    hideFooter: true
  }, 'mode[range],  hideFooter[true]')
}

document.addEventListener('DOMContentLoaded', () => {
  init()
  slice<HTMLElement, NodeList>(document.querySelectorAll('pre code')).forEach((block) => {
    // @ts-ignore
    window.hljs.highlightElement(block)
  })
})

export default ZxCalendar