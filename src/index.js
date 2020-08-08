/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-08-08 15:49
 */
import { initConfig } from './config'
import { $, createDate, createDom, formatDate, getDateInfo, toTwoDigits } from './utils'
import { calendarVNode, headerVNode, bodyVNode, weekVNode } from './v-node'
import './scss/index.scss'

// default options
const DEF_OPTIONS = {
  el: null,
  dateRange: [],
  // zh/jp/en
  lang: 'zh',
  // show holiday info
  showHoliday: false,
  // date/month/year
  type: 'date',
  isFullWeek: false,
  headMonthFormatter: 'yyyy/MM',
  headYearFormatter: 'yyyy'
}

function ZxCalendar(params) {
  const options = {
    ...DEF_OPTIONS,
    ...params
  }
  // check options
  if (!options.el || !$(options.el)) {
    throw new Error(`Initial parameter el[${options.el}] is invalid.`)
  }
  this.options = options
  // on event list
  this._eventList = {}
  // config
  const { weeks, holidays } = initConfig(this.options)
  this.weeks = this.options.isFullWeek ? weeks.full : weeks.abbr
  this.holidays = holidays
  // dom
  this.$els = {}
  // data
  const date = new Date()
  const today = formatDate(date, 'yyyy/MM/dd')
  this.data = {
    today: today,
    currentDate: date,
    currentDay: today,
    current: today.split('/'),
    days: [],
    months: []
  }
  // initial
  this._initDom()
}

ZxCalendar.prototype = {
  constructor: ZxCalendar,
  /**
   * event list
   * @param args
   */
  on(...args) {
    const eventName = args[0]
    if (this._eventList[eventName]) {
      this._eventList[eventName].forEach(fn => {
        fn.apply(this, args.slice(1))
      })
    }
  },
  emit(eventName, fn) {
    if (typeof eventName === 'string' || typeof fn !== 'function') return
    if (!this._eventList[eventName]) {
      this._eventList[eventName] = []
    }
    this._eventList[eventName].push(fn)
  },
  off(...args) {
    const eventName = args[0]
    if (typeof eventName !== 'string') return
    if (!this._eventList[eventName]) return
    this._eventList[eventName].length = 0
  },
  /**
   * init dom
   * @private
   */
  _initDom() {
    const parent = $(this.options.el)
    const calendar = createDom(calendarVNode)
    const header = createDom(headerVNode)
    // week
    this.weeks.forEach((item, i) => {
      let isWeekend = i === 0 || i === 6
      weekVNode.children.push({
        attrs: {
          class: '__item' + (isWeekend ? ' is-weekend' : '')
        },
        children: [item]
      })
    })
    const week = createDom(weekVNode)
    const body = createDom(bodyVNode)
    // append to calendar
    calendar.appendChild(header)
    calendar.appendChild(week)
    calendar.appendChild(body)
    // append to out wrapper
    parent.appendChild(calendar)
    this.$els = {
      calendar,
      header,
      week,
      body,
      parent,
    }
    this._updateDom()
  },
  /**
   * set/change options
   * @param params
   */
  setOptions(params) {
    Object.keys(params).forEach(key => {
      if (this.options.hasOwnProperty(key)) {
        this.options[key] = params[key]
      }
    })
  },
  setDate(dateStr) {
    const ret = {}
    this._updateDom()
  },
  _changeMonth(type) {
    const ret = {}
    switch (type) {
      case 'prev':
        break
      case 'next':
        break
    }
    this.setDate(ret)
  },
  _updateDom() {
    if (this.type === 'month') {

    } else {
      this.createDays()
      this._createDaysDom()
    }
  },
  /**
   * create month list
   * @returns {[]}
   */
  createMonths() {
    const months = []
    let index = -1
    for (let i = 1; i <= 12; i++) {
      if (i % 3 === 1) {
        months.push([])
        index++
      }
      months[index].push({
        text: toTwoDigits(i)
      })
    }
    return months
  },
  /**
   * create days
   * @param month
   * @returns {any}
   */
  createDays() {
    // What day is the first day of the month
    // and last day of month
    const { firstDayOfWeek, lastDayOfMonth } = getDateInfo(this.data)
    // create day data
    const days = new Array(firstDayOfWeek).fill(0)
    for (let i = 1; i <= lastDayOfMonth; i++) {
      days.push(i)
    }
    // check last item
    if (days.length % 7 !== 0) {
      for (let i = 0; i < days.length % 7; i++) {
        days.push(0)
      }
    }
    // create days
    let index = 0
    let weekIndex = 0
    let tempDayText
    let monthText = this.data.current.slice(0, 2).join('/') + '/'
    this.data.days = days.reduce((prev, day) => {
      if (prev[index].length >= 7) {
        index++
        prev[index] = []
      }
      // check week
      if (weekIndex > 6) weekIndex = 0
      tempDayText = day > 0 ? toTwoDigits(day) : ''
      let tempFullText = monthText + tempDayText
      prev[index].push({
        text: tempDayText,
        fullText: day > 0 ? tempFullText : '',
        value: day,
        week: weekIndex++,
        disabled: !day || false,
        holiday: false,
        selected: this.data.currentDay === tempFullText,
        today: this.data.today === tempFullText
      })
      return prev
    }, [[]])
  },
  _createDaysDom() {
    // header
    $('.__title-wrapper', this.$els.header)
      .innerText = formatDate(this.data.currentDate, this.options.headMonthFormatter)

    // body
    let classList
    let body = this.data.days.reduce((prev, arr) => {
      let temp = ''
      arr.forEach(item => {
        classList = ['__item']
        if (item.disabled) classList.push('is-disabled')
        if (item.holiday) classList.push('is-holiday')
        if (item.selected) classList.push('is-selected')
        if (item.today) classList.push('is-today')
        temp += `<div class="${classList.join(' ')}"><span class="__text">${item.text}</span></div>`
      })
      return prev + temp
    }, '')
    this.$els.body.innerHTML = body
  },
}

export default ZxCalendar
