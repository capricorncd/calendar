/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-08-08 15:49
 */
import { initConfig } from './config/index'
import { checkItemRange, toDate, formatDate, getDateRange, getDateInfo, getYearInfo, toNumber, toTwoDigits } from './utils/index'
import { $, createDom, getSelectItem, removeClass } from './utils/dom'
import { calendarVNode, headerVNode, bodyVNode, getWeekDom } from './config/v-node'
import { createBodyDom, setHeaderBtnStatus } from './utils/private'
import './scss/index.scss'

// title formatter
const DEF_YEAR_TITLE_FORMATTER = 'yyyy-yyyy'
const DEF_MONTH_TITLE_FORMATTER = 'yyyy'

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
  // item suffix
  itemSuffix: null,
  // default selected date
  defaultDate: null,
  // function
  holidayFormatter: null,
}

function ZxCalendar(params = {}) {
  const options = {
    ...DEF_OPTIONS,
    ...params
  }
  // check type
  if (!params.titleFormatter) {
    if (options.type === 'year') {
      options.titleFormatter = DEF_YEAR_TITLE_FORMATTER
    } else if (options.type === 'month') {
      options.titleFormatter = DEF_MONTH_TITLE_FORMATTER
    }
  }
  // check options
  if (!options.el || !$(options.el)) {
    throw new Error(`Initial parameter el[${options.el}] is invalid.`)
  }
  this.options = options
  // on event list
  this._eventList = {}
  // config
  const { weeks } = initConfig(this.options)
  this.weeks = this.options.isFullWeek ? weeks.full : weeks.abbr
  // dom
  this.$els = {}
  // today
  let date = new Date()
  const today = formatDate(date, 'yyyy/MM/dd')
  // dateRange
  const [ dateRangeStart, dateRangeEnd ] = getDateRange(options.dateRange)
  // after today
  if (dateRangeStart && +dateRangeStart > +date) {
    date = dateRangeStart
  }
  // before today
  if (dateRangeEnd && +dateRangeEnd < +date) {
    date = dateRangeEnd
  }
  // check default date
  let defaultDate = this.toDate(options.defaultDate)
  if (defaultDate) {
    if ((dateRangeStart && +defaultDate < +dateRangeStart) || (dateRangeEnd && +defaultDate > +dateRangeEnd)) {
      let timer = setTimeout(() => {
        this.emit('error', new Error(`The default date[${options.defaultDate}] is not within the range[${options.dateRange}].`))
        clearTimeout(timer)
        timer = null
      }, 0)
    } else {
      date = defaultDate
    }
  }
  const currentDay = formatDate(date, 'yyyy/MM/dd')
  this.data = {
    today: today,
    currentDate: date,
    currentDay,
    current: currentDay.split('/'),
    selected: options.defaultDate,
    dates: [],
    months: [],
    years: [],
  }
  // initial
  this._initDom()
}

ZxCalendar.prototype = {
  constructor: ZxCalendar,
  toDate: toDate,
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
  off(eventName) {
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
    // calendar
    const calendarVNodeCopy = JSON.parse(JSON.stringify(calendarVNode))
    // zx-calendar is-date is-month is-year
    calendarVNodeCopy.attrs.class += ' is-' + this.options.type
    const calendar = createDom(calendarVNodeCopy)
    // header
    const header = createDom(headerVNode)
    calendar.appendChild(header)
    // week
    let week = getWeekDom(this.weeks, this.options)
    if (week) calendar.appendChild(week)
    // body
    const body = createDom(bodyVNode)
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
    this.$els.calendar.addEventListener('click', this.eventsHandler)
  },
  _eventsHandler(e) {
    e.stopPropagation()
    const el = e.target
    let className = el.className.split(' ')
    // prev, next
    if (className.includes('__prev-button')) {
      this._onPrevClick(className.includes('date-only'))
    } else if (className.includes('__next-button')) {
      this._onNextClick(className.includes('date-only'))
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
  _onPrevClick(isMonth) {
    let [year, month] = this.data.current
    switch (this.options.type) {
      case 'date':
        if (isMonth) {
          month = toNumber(month) - 1
          if (month === 0) {
            year = toNumber(year) - 1
            month = 12
          }
        } else {
          year = toNumber(year) - 1
          // range check
          const [startRangeYear] = getDateRange(this.options.dateRange, 'yyyy')
          if (startRangeYear && year <= startRangeYear) {
            year = startRangeYear
            const [startMonth] = getDateRange(this.options.dateRange, 'MM')
            if (startMonth) month = startMonth
          }
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
  _onNextClick(isMonth) {
    let [year, month] = this.data.current
    switch (this.options.type) {
      case 'date':
        if (isMonth) {
          month = toNumber(month) + 1
          if (month === 13) {
            year = toNumber(year) + 1
            month = 1
          }
        } else {
          year = toNumber(year) + 1
          // range check
          const [, endRangeYear] = getDateRange(this.options.dateRange, 'yyyy')
          if (endRangeYear && year >= endRangeYear) {
            year = endRangeYear
            const [, endMonth] = getDateRange(this.options.dateRange, 'MM')
            if (endMonth) month = endMonth
          }
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
   * set/change date range
   * @param start
   * @param end
   */
  setDateRange(start, end) {
    this.options.dateRange = [start, end]
  },
  setDate(str) {
    const date = this.toDate(str)
    this.data.selected = date ? formatDate(date, 'yyyy/MM/dd') : null
    this._updateDom()
  },
  _setCurrentDate(dateStr) {
    // yyyy -> yyyy/01/01
    // yyyy/MM -> yyyy/MM/01
    // yyyy/MM/dd -> yyyy/MM/dd
    const date = this.toDate(dateStr)
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
        createBodyDom('dates', this.data, this.options, this.$els)
        break
      case 'month':
        this.createMonths()
        createBodyDom('months', this.data, this.options, this.$els)
        break
      case 'year':
        this.createYears()
        createBodyDom('years', this.data, this.options, this.$els)
        break
    }
  },
  createYears() {
    const [startRangeYear, endRangeYear] = getDateRange(this.options.dateRange, 'yyyy')
    const years = []
    const systemYear = this.data.today.substr(0, 4)
    const selectedFullYear = this.data.selected
      ? this.data.selected.substr(0, 4)
      : null
    let { startFullYear, endFullYear } = getYearInfo(this.data.current[0])
    let tempText, tempFullText
    for (let i = startFullYear; i <= endFullYear; i++) {
      tempText = i.toString()
      tempFullText = tempText + '/01/01'
      years.push({
        text: tempText,
        fullText: tempFullText,
        value: i,
        disabled: checkItemRange(i, startRangeYear, endRangeYear),
        selected: selectedFullYear === tempText,
        current: systemYear === tempText
      })
    }
    this.data.years = years
    // check first page and last page
    setHeaderBtnStatus(years, startRangeYear, endRangeYear, this.$els.calendar)
  },
  /**
   * create month list
   * @returns {[]}
   */
  createMonths() {
    const [startRangeMonth, endRangeMonth] = getDateRange(this.options.dateRange, 'yyyyMM')
    const months = []
    const systemMonth = this.data.today.substr(0, 7)
    const selectedMonth = this.data.selected
      ? this.data.selected.substr(0, 7)
      : null
    const prefix = this.data.current[0] + '/'
    const prefixNumber = toNumber(this.data.current[0]) * 100
    let tempText, tempFullText
    for (let i = 1; i <= 12; i++) {
      tempText = toTwoDigits(i)
      tempFullText = prefix + tempText + '/01'
      months.push({
        text: tempText,
        fullText: tempFullText,
        value: prefixNumber + i,
        disabled: checkItemRange(prefixNumber + i, startRangeMonth, endRangeMonth),
        selected: tempFullText.startsWith(selectedMonth),
        current: tempFullText.startsWith(systemMonth),
      })
    }
    this.data.months = months
    // check first page and last page
    setHeaderBtnStatus(months, startRangeMonth, endRangeMonth, this.$els.calendar)
  },
  /**
   * create days
   * @returns {any}
   */
  createDays() {
    const [startRangeDay, endRangeDay] = getDateRange(this.options.dateRange, 'yyyyMMdd')
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
    let tempText, tempItem, tempValue
    let prefix = this.data.current.slice(0, 2).join('/') + '/'
    const selectedDay = this.data.selected
    const { holidayFormatter } = this.options
    const dates = days.map(day => {
      // check week
      if (weekIndex > 6) weekIndex = 0
      tempText = day > 0 ? toTwoDigits(day) : ''
      let tempFullText = prefix + tempText
      tempValue = day > 0 ? +tempFullText.replace(/\//g, '') : 0
      tempItem = {
        text: tempText,
        fullText: day > 0 ? tempFullText : '',
        value: tempValue,
        week: weekIndex++,
        disabled: !day || checkItemRange(tempValue, startRangeDay, endRangeDay),
        holiday: false,
        selected: selectedDay === tempFullText,
        current: this.data.today === tempFullText
      }
      // customer holiday
      if (typeof holidayFormatter === 'function') {
        tempItem.holiday = holidayFormatter(tempItem)
      }
      return tempItem
    })
    this.data.dates = dates
    // check first page and last page
    setHeaderBtnStatus(dates, startRangeDay, endRangeDay, this.$els.calendar)
  },
  destroy() {
    this.$els.calendar.removeEventListener('click', this.eventsHandler)
    this.$els.parent.removeChild(this.$els.calendar)
  }
}

export default ZxCalendar
