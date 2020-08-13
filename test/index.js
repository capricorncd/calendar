/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-08-08 15:58
 */
import './index.scss'
import { createCalendar } from './helper'

createCalendar({
  el: '.container',
  lang: 'jp',
  titleFormatter: 'yyyy年MM月',
  showHoliday: true,
  // custom item handler
  itemFormatter: function (item) {
    item.holiday = item.value % 3 === 1 ? 'hello world' : false
    item.disabled = item.disabled || item.value % 5 === 0
    return item
  },
}, 'Show Holiday, custom options.itemFormatter')

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
  defaultDate: ['2020/08/01', '2020/08/19'],
}, 'mode[multiple],  defaultDate')

createCalendar({
  el: '.container',
  mode: 'range',
  defaultDate: ['2020/08/03', '2020/08/19'],
}, 'mode[range],  defaultDate')

createCalendar({
  el: '.container',
  lang: 'en',
  type: 'month',
  mode: 'range',
  defaultDate: ['2010/08/03', '2020/08/19'],
}, 'mode[range], type[month],  defaultDate')

createCalendar({
  el: '.container',
  type: 'year',
  mode: 'range',
  defaultDate: ['2010/08/03', '2020/08/19'],
}, 'mode[range], type[year],  defaultDate')

createCalendar({
  el: '.container',
  mode: 'range',
  defaultDate: ['2020/08/03', '2020/08/19'],
  dateRange: ['2020/08/07'],
  hideFooter: true,
}, 'mode[range],  hideFooter[true]')
