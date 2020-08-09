/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-08-08 15:49
 */
import { initConfig } from './config/index'
import { createDate, formatDate, getDateInfo, getYearInfo, toNumber, toTwoDigits } from './utils/index'
import { $, addClass, createDom, getSelectItem, removeClass } from './utils/dom'
import { calendarVNode, headerVNode, bodyVNode, getWeekDom } from './config/v-node'
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
  titleFormatter: 'yyyy/MM',
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
    selected: today,
    dates: [],
    months: [],
    years: []
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
  emit(...args) {
    const eventName = args[0]
    if (this._eventList[eventName]) {
      this._eventList[eventName].forEach(fn => {
        fn.apply(this, args.slice(1))
      })
    }
  },
  on(eventName, fn) {
    if (typeof eventName !== 'string' || typeof fn !== 'function') return
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
    // header
    const header = createDom(headerVNode)
    calendar.appendChild(header)
    // week
    let week = getWeekDom(this.weeks, this.options)
    if (week) calendar.appendChild(week)
    // body
    const bodyVNodeCopy = JSON.parse(JSON.stringify(bodyVNode))
    // zx-calendar-body-wrapper is-date is-month is-year
    bodyVNodeCopy.attrs.class += ' is-' + this.options.type
    const body = createDom(bodyVNodeCopy)
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
    // init events
    this.eventsHandler = this._eventsHandler.bind(this)
    this._initEvents()
  },
  _initEvents() {
    this.$els.calendar.addEventListener('click', this.eventsHandler)
  },
  _eventsHandler(e) {
    e.stopPropagation()
    const el = e.target
    let className = el.className.split(' ')
    // prev, next
    if (className.includes('__prev-button')) {
      this._onPrevClick()
    } else if (className.includes('__next-button')) {
      this._onNextClick()
    } else if (className.includes('__title-wrapper')) {
      this._onTitleClick()
    } else if (className.includes('__item-week')) {
      this._onWeekClick()
    } else {
      // get item
      const item = getSelectItem(el, className, this.$els.calendar)
      if (item.el) {
        this._onItemClick(item)
      }
    }
  },
  _onTitleClick() {
    console.log('_onTitleClick')
  },
  _onPrevClick() {
    let [year, month] = this.data.current
    switch (this.options.type) {
      case 'date':
        month = toNumber(month) - 1
        if (month === 0) {
          year = toNumber(year) - 1
          month = 12
        }
        this._setCurrentDate([year, month, '01'].join('/'))
        break
      case 'month':
        this._setCurrentDate(year - 1)
        break
      case 'year':
        const temp = this.data.years[0] || {}
        this._setCurrentDate(temp.value - 1)
        break
    }
  },
  _onNextClick() {
    let [year, month] = this.data.current
    switch (this.options.type) {
      case 'date':
        month = toNumber(month) + 1
        if (month === 13) {
          year = toNumber(year) + 1
          month = 1
        }
        this._setCurrentDate([year, month, '01'].join('/'))
        break
      case 'month':
        this._setCurrentDate(toNumber(year) + 1)
        break
      case 'year':
        const years = this.data.years
        const temp = years[years.length - 1] || {}
        this._setCurrentDate(temp.value + 1)
        break
    }
  },
  _onWeekClick() {
    console.log('_onWeekClick')
  },
  /**
   * on item click
   * @param el
   * @param className
   * @param index
   * @private
   */
  _onItemClick({ el, className, index }) {
    // disabled
    if (className.includes('is-disabled')) return
    // data item
    const arr = this.data[this.options.type + 's'] || []
    const itemData = arr[index] || {}
    // is not selected
    if (!className.includes('is-selected')) {
      // remove class is-selected
      const [ ...currentItems ] = this.$els.body.querySelectorAll('.is-selected')
      currentItems.forEach(item => {
        removeClass(item, 'is-selected')
      })
      // add class is-selected
      className.push('is-selected')
      el.className = className.join(' ')
      itemData.selected = true
      this.data.selected = itemData.fullText
      this.emit('change', itemData)
    }
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
  setDate(str) {
    const date = createDate(str)
    this.data.selected = formatDate(date, 'yyyy/MM/dd')
    this._updateDom()
  },
  _setCurrentDate(dateStr) {
    // yyyy -> yyyy/01/01
    // yyyy/MM -> yyyy/MM/01
    // yyyy/MM/dd -> yyyy/MM/dd
    const date = createDate(dateStr)
    const currentDay = formatDate(date, 'yyyy/MM/dd')
    this.data.currentDate = date
    this.data.currentDay = currentDay
    this.data.current = currentDay.split('/')
    this._updateDom()
  },
  _updateDom() {
    switch (this.options.type) {
      case 'date':
        this.createDays()
        this._createBodyDom(this.data.dates)
        break
      case 'month':
        this.createMonths()
        this._createBodyDom(this.data.months)
        break
      case 'year':
        this.createYears()
        this._createBodyDom(this.data.years)
        break
    }
  },
  createYears() {
    const years = []
    const systemYear = this.data.today.substr(0, 4)
    const selectedFullYear = this.data.selected.substr(0, 4)
    let { startFullYear, endFullYear } = getYearInfo(this.data.current[0])
    let tempText
    for (let i = startFullYear; i <= endFullYear; i++) {
      tempText = i.toString()
      years.push({
        text: tempText,
        fullText: tempText + '/01/01',
        value: i,
        disabled: false,
        selected: selectedFullYear === tempText,
        current: systemYear === tempText
      })
    }
    this.data.years = years
  },
  /**
   * create month list
   * @returns {[]}
   */
  createMonths() {
    const months = []
    const systemMonth = this.data.today.substr(0, 7)
    const selectedMonth = this.data.selected.substr(0, 7)
    const prefix = this.data.current[0] + '/'
    let tempText
    for (let i = 1; i <= 12; i++) {
      tempText = toTwoDigits(i)
      months.push({
        text: tempText,
        fullText: prefix + tempText + '/01',
        value: i,
        disabled: false,
        selected: selectedMonth === prefix + tempText,
        current: systemMonth === prefix + tempText,
      })
    }
    this.data.months = months
  },
  /**
   * create days
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
    let weekIndex = 0
    let tempText
    let prefix = this.data.current.slice(0, 2).join('/') + '/'
    const selectedDay = this.data.selected
    this.data.dates = days.map(day => {
      // check week
      if (weekIndex > 6) weekIndex = 0
      tempText = day > 0 ? toTwoDigits(day) : ''
      let tempFullText = prefix + tempText
      return {
        text: tempText,
        fullText: day > 0 ? tempFullText : '',
        value: day,
        week: weekIndex++,
        disabled: !day || false,
        holiday: false,
        selected: selectedDay === tempFullText,
        current: this.data.today === tempFullText
      }
    })
  },
  _createBodyDom(list) {
    // header
    let titleFormatter = this.options.titleFormatter
    let title = null
    if (this.options.type === 'year') {
      const firstItem = list[0]
      const lastItem = list[list.length - 1]
      let index = 0
      title = titleFormatter.replace(/(y+)/g, () => {
        return index++ === 0 ? firstItem.text : lastItem.text
      })
    } else {
      title = formatDate(this.data.currentDate, titleFormatter)
    }
    $('.__title-wrapper', this.$els.header).innerText = title
    // body
    let classList
    this.$els.body.innerHTML = list.reduce((prev, item, i) => {
      classList = ['__item']
      if (item.disabled) classList.push('is-disabled')
      if (item.holiday) classList.push('is-holiday')
      if (item.selected) classList.push('is-selected')
      if (item.current) classList.push('is-current')
      prev.push(`<div class="${classList.join(' ')}" data-index="${i}"><span class="__text">${item.text}</span></div>`)
      return prev
    }, []).join('')
  },
  destroy() {
    this.$els.calendar.removeEventListener('click', this.eventsHandler)
    this.$els.parent.removeChild(this.$els.calendar)
  }
}

export default ZxCalendar
