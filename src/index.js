/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-08-08 15:49
 */
import {
  CLASS_NAME_IS_SELECTED,
  HEADER_TITLE_FORMAT_DATE,
  HEADER_TITLE_FORMAT_YEAR,
  HEADER_TITLE_FORMAT_MONTH,
  MODE_SINGLE,
  MODE_RANGE,
  MODE_MULTIPLE,
  TYPE_YEAR,
  TYPE_MONTH,
  TYPE_DATE,
  CLASS_NAME_DATE_ONLY,
  CLASS_NAME_PREV_BUTTON,
  CLASS_NAME_NEXT_BUTTON,
  CLASS_NAME_TITLE_WRAPPER,
  CLASS_NAME_ITEM_WEEK,
  CLASS_NAME_IS_DISABLED,
  CLASS_NAME_CLEAR_BUTTON,
  CLASS_NAME_CONFIRM_BUTTON,
  CLASS_NAME_CANCEL_BUTTON
} from './config/constants'
import { initConfig } from './config/init-config'
import {
  checkItemRange,
  toDate,
  formatDate,
  getDateRange,
  getDateInfo,
  getSelectedDateRange,
  getYearInfo,
  initSelectedDates,
  toNumber,
  toTwoDigits, isString, isFunction
  , getCurrentDate, isRangeSelectTemp
} from './utils/index'
import { $, addClass, createDom, getSelectItem, removeClass } from './utils/dom'
import { calendarVNode, headerVNode, bodyVNode, getWeekDom, footerVNode, footerButtonsVNode } from './config/v-node'
import { changeClassForSelectOneItem, createBodyDom, setHeaderBtnStatus } from './utils/private'
import './scss/index.scss'

// default options
const DEF_OPTIONS = {
  // document selector or Element
  el: null,
  // Restricted date range
  dateRange: [],
  // zh/jp/en
  lang: 'zh',
  // show holiday info
  showHoliday: false,
  // date/month/year
  type: TYPE_DATE,
  isFullWeek: false,
  titleFormatter: HEADER_TITLE_FORMAT_DATE,
  // item suffix
  itemSuffix: null,
  // default selected date
  defaultDate: [],
  // function, custom item handler
  // return object {}
  itemFormatter: null,
  // Selection mode: single selection, multiple selection, range selection
  mode: MODE_SINGLE,
  // language package
  langPackage: {},
  // footer buttons
  footerButtons: ['clear', 'cancel', 'confirm'],
  // justify-content
  footerButtonAlign: 'flex-end',
  // hide buttons of footer when mode is multiple/range
  hideFooter: false
}

function ZxCalendar(params = {}) {
  const options = {
    ...DEF_OPTIONS,
    ...params
  }
  // check type
  if (!params.titleFormatter) {
    if (options.type === TYPE_YEAR) {
      options.titleFormatter = HEADER_TITLE_FORMAT_YEAR
    } else if (options.type === TYPE_MONTH) {
      options.titleFormatter = HEADER_TITLE_FORMAT_MONTH
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
  const { langPackage } = initConfig(this.options)
  this.langPackage = {
    ...options.langPackage,
    ...langPackage
  }
  // dom
  this.$els = {}
  // today
  const date = new Date()
  const today = formatDate(date, 'yyyy/MM/dd')
  let selectedItems = []
  try {
    selectedItems = initSelectedDates(options.defaultDate, options)
  } catch (e) {
    setTimeout(() => {
      this.emit('error', e)
    }, 0)
  }
  const currentDate = getCurrentDate.call(this, selectedItems) || date
  const currentDay = formatDate(currentDate, 'yyyy/MM/dd')
  this.data = {
    today: today,
    currentDate: currentDate,
    currentDay,
    current: currentDay.split('/'),
    selected: selectedItems,
    dates: [],
    months: [],
    years: []
  }
  // initial
  this._initDom()
}

ZxCalendar.prototype = {
  constructor: ZxCalendar,
  formatDate(str, fmt, langPackage) {
    if (!langPackage) {
      langPackage = this.langPackage
    }
    return formatDate(str, fmt, langPackage)
  },
  toDate(str) {
    const date = toDate(str)
    if (!date) {
      this.emit('error', new Error(`"${str}" is an invalid Date!`))
    }
    return date
  },
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
    if (!isString(eventName) || !isFunction(fn)) return
    if (!this._eventList[eventName]) {
      this._eventList[eventName] = []
    }
    this._eventList[eventName].push(fn)
  },
  off(eventName) {
    if (!isString(eventName)) return
    if (!this._eventList[eventName]) return
    this._eventList[eventName].length = 0
  },
  /**
   * init dom
   * @private
   */
  _initDom() {
    const options = this.options
    const parent = $(options.el)
    // calendar
    const calendarVNodeCopy = JSON.parse(JSON.stringify(calendarVNode))
    // zx-calendar is-date is-month is-year
    const calendarClassName = [
      calendarVNodeCopy.a.class,
      'type-is-' + options.type,
      'mode-is-' + options.mode
    ]
    calendarVNodeCopy.a.class = calendarClassName.join(' ')
    const calendar = createDom(calendarVNodeCopy)
    // header
    const header = createDom(headerVNode)
    calendar.appendChild(header)
    // week
    const week = getWeekDom(this.langPackage.weeks, options)
    if (week) calendar.appendChild(week)
    // body
    const body = createDom(bodyVNode)
    calendar.appendChild(body)
    // footer
    if (!options.hideFooter && (options.mode === MODE_MULTIPLE || options.mode === MODE_RANGE)) {
      const footerVNodeCopy = JSON.parse(JSON.stringify(footerVNode))
      options.footerButtons.forEach(btn => {
        footerVNodeCopy.c.push({
          ...footerButtonsVNode[btn],
          c: [this.langPackage[btn + 'Button']]
        })
      })
      const footer = createDom(footerVNodeCopy)
      // options style
      if (options.footerButtonAlign) {
        footer.style.justifyContent = options.footerButtonAlign
      }
      calendar.appendChild(footer)
    }
    // append to out wrapper
    parent.appendChild(calendar)
    this.$els = {
      calendar,
      header,
      week,
      body,
      parent
    }
    this._updateDom()
    // init events
    this.eventsHandler = this._eventsHandler.bind(this)
    this.$els.calendar.addEventListener('click', this.eventsHandler)
  },
  _eventsHandler(e) {
    e.stopPropagation()
    const el = e.target
    const className = el.className.split(' ')
    const innerText = el.innerText
    // console.log(el, className)
    // prev
    if (className.includes(CLASS_NAME_PREV_BUTTON)) {
      this.prev(!className.includes(CLASS_NAME_DATE_ONLY))
    }
    // next
    else if (className.includes(CLASS_NAME_NEXT_BUTTON)) {
      this.next(!className.includes(CLASS_NAME_DATE_ONLY))
    }
    // confirm button
    else if (className.includes(CLASS_NAME_CONFIRM_BUTTON)) {
      this.emit('change', [...this.data.selected])
    }
    // cancel button
    else if (className.includes(CLASS_NAME_CANCEL_BUTTON)) {
      this.emit('cancel')
    }
    // clear button
    else if (className.includes(CLASS_NAME_CLEAR_BUTTON)) {
      this.setDate()
    }
    // title
    else if (className.includes(CLASS_NAME_TITLE_WRAPPER)) {
      this._onTitleClick({
        innerText,
        el,
        className
      })
    }
    // week
    else if (className.includes(CLASS_NAME_ITEM_WEEK)) {
      this._onWeekClick({
        innerText,
        el,
        className
      })
    } else {
      // get item
      const item = getSelectItem(el, className, this.$els.calendar)
      if (item.el) {
        this._onItemClick(item)
      }
    }
  },
  _onTitleClick(item) {
    this.emit('onTitleClick', item)
  },
  /**
   * prev
   * @param isYear only type=date
   */
  prev(isYear) {
    let [year, month] = this.data.current
    switch (this.options.type) {
      case TYPE_DATE:
        if (isYear) {
          year = toNumber(year) - 1
          // range check
          const [startRangeYear] = getDateRange(this.options.dateRange, 'yyyy')
          if (startRangeYear && year <= startRangeYear) {
            year = startRangeYear
            const [startMonth] = getDateRange(this.options.dateRange, 'MM')
            if (startMonth) month = startMonth
          }
        } else {
          month = toNumber(month) - 1
          if (month === 0) {
            year = toNumber(year) - 1
            month = 12
          }
        }
        this.setCurrentDate([year, month, '01'].join('/'))
        break
      case TYPE_MONTH:
        this.setCurrentDate(year - 1)
        break
      case TYPE_YEAR: {
        const temp = this.data.years[0] || {}
        this.setCurrentDate(temp.value - 1)
        break
      }
    }
  },
  /**
   * handle next button on click
   * @param isYear
   * @private
   */
  next(isYear) {
    let [year, month] = this.data.current
    switch (this.options.type) {
      case TYPE_DATE:
        if (isYear) {
          year = toNumber(year) + 1
          // range check
          const [, endRangeYear] = getDateRange(this.options.dateRange, 'yyyy')
          if (endRangeYear && year >= endRangeYear) {
            year = endRangeYear
            const [, endMonth] = getDateRange(this.options.dateRange, 'MM')
            if (endMonth) month = endMonth
          }
        } else {
          month = toNumber(month) + 1
          if (month === 13) {
            year = toNumber(year) + 1
            month = 1
          }
        }
        this.setCurrentDate([year, month, '01'].join('/'))
        break
      case TYPE_MONTH:
        this.setCurrentDate(toNumber(year) + 1)
        break
      case TYPE_YEAR: {
        const years = this.data.years
        const temp = years[years.length - 1] || {}
        this.setCurrentDate(temp.value + 1)
        break
      }
    }
  },
  _onWeekClick(item) {
    this.emit('onWeekClick', item)
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
    if (className.includes(CLASS_NAME_IS_DISABLED)) return
    // data item
    const arr = this.data[this.options.type + 's'] || []
    const itemData = arr[index] || {}
    // handle select
    // mode=range
    if (this.options.mode === MODE_RANGE) {
      const selectedItems = [...this.data.selected]
      const len = selectedItems.length
      if (len === 0 || (len >= 2 && selectedItems.every(item => !!item))) {
        this.data.selected = [itemData]
        changeClassForSelectOneItem(el, this.$els, true)
      } else if (len === 1) {
        if (selectedItems[0].value < itemData.value) {
          this.data.selected.push(itemData)
        } else {
          this.data.selected.unshift(itemData)
        }
        this._updateDom()
      }
    }
    // mode=multiple
    else if (this.options.mode === MODE_MULTIPLE) {
      if (className.includes(CLASS_NAME_IS_SELECTED)) {
        removeClass(el, CLASS_NAME_IS_SELECTED)
        const index = this.data.selected.findIndex(item => item.value === itemData.value)
        this.data.selected.splice(index, 1)
      } else {
        addClass(el, CLASS_NAME_IS_SELECTED)
        itemData.selected = true
        this.data.selected.push(itemData)
      }
    }
    // mode=single
    else {
      if (!className.includes(CLASS_NAME_IS_SELECTED)) {
        changeClassForSelectOneItem(el, this.$els)
        itemData.selected = true
        this.data.selected = [
          { ...itemData }
        ]
        this.emit('change', [...this.data.selected])
      }
    }
  },
  /**
   * set/change date range
   * @param start
   * @param end
   */
  setDateRange(start, end) {
    this.options.dateRange = [start, end]
    this._updateDom()
  },
  /**
   * set selected date
   * @param str
   */
  setDate(str) {
    try {
      this.data.selected = initSelectedDates(str, this.options)
      if (this.data.selected.length === 0) {
        this._updateDom()
        return
      }
      const item = this.data.selected[0]
      this.setCurrentDate(item.fullText)
    } catch (e) {
      this.emit('error', e)
    }
  },
  /**
   * get selected date
   * @returns {*[]}
   */
  getDate() {
    return this.data.selected.slice(0)
  },
  /**
   * set current date
   * @param dateStr
   */
  setCurrentDate(dateStr) {
    // yyyy -> yyyy/01/01
    // yyyy/MM -> yyyy/MM/01
    // yyyy/MM/dd -> yyyy/MM/dd
    const date = this.toDate(dateStr)
    if (!date) return
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
    const [startSelectedRangeYear, endSelectedRangeYear] = getSelectedDateRange(this)
    const years = []
    const systemYear = this.data.today.substr(0, 4)
    const { startFullYear, endFullYear } = getYearInfo(this.data.current[0])
    let tempText
    for (let i = startFullYear; i <= endFullYear; i++) {
      tempText = i.toString()
      years.push({
        text: tempText,
        fullText: tempText,
        value: i,
        disabled: checkItemRange(i, startRangeYear, endRangeYear),
        // range
        isRangeFirst: i === startSelectedRangeYear && endSelectedRangeYear,
        isRangeLast: i === endSelectedRangeYear && startSelectedRangeYear,
        isRangeTemp: isRangeSelectTemp(i, this),
        // selected
        selected: this._isSelected(i),
        current: systemYear === tempText,
        date: this.toDate(tempText)
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
    const [startSelectedRangeMonth, endSelectedRangeMonth] = getSelectedDateRange(this)
    const months = []
    const systemMonth = this.data.today.substr(0, 7)
    const prefix = this.data.current[0] + '/'
    const prefixNumber = toNumber(this.data.current[0]) * 100
    let tempText, tempFullText, tempValue
    for (let i = 1; i <= 12; i++) {
      tempText = toTwoDigits(i)
      tempFullText = prefix + tempText
      tempValue = prefixNumber + i
      months.push({
        text: tempText,
        fullText: tempFullText,
        value: tempValue,
        disabled: checkItemRange(tempValue, startRangeMonth, endRangeMonth),
        // range
        isRangeFirst: tempValue === startSelectedRangeMonth && endSelectedRangeMonth,
        isRangeLast: tempValue === endSelectedRangeMonth && startSelectedRangeMonth,
        isRangeTemp: isRangeSelectTemp(tempValue, this),
        // selected
        selected: this._isSelected(tempValue),
        current: tempFullText.startsWith(systemMonth),
        date: this.toDate(tempFullText)
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
    const [startSelectedRangeDay, endSelectedRangeDay] = getSelectedDateRange(this)
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
    const prefix = this.data.current.slice(0, 2).join('/') + '/'
    const { itemFormatter } = this.options
    const dates = days.map(day => {
      // check week
      if (weekIndex > 6) weekIndex = 0
      tempText = day > 0 ? toTwoDigits(day) : ''
      const tempFullText = prefix + tempText
      tempValue = day > 0 ? +tempFullText.replace(/\//g, '') : 0
      tempItem = {
        text: tempText,
        fullText: day > 0 ? tempFullText : '',
        value: tempValue,
        week: weekIndex++,
        disabled: !day || checkItemRange(tempValue, startRangeDay, endRangeDay),
        holiday: false,
        // range
        isRangeFirst: tempValue === startSelectedRangeDay && endSelectedRangeDay,
        isRangeLast: tempValue === endSelectedRangeDay && startSelectedRangeDay,
        isRangeTemp: isRangeSelectTemp(tempValue, this),
        // selected
        selected: this._isSelected(tempValue),
        current: this.data.today === tempFullText,
        date: this.toDate(tempFullText)
      }
      // custom handler: itemFormatter
      return isFunction(itemFormatter) ? itemFormatter(tempItem) : tempItem
    })
    this.data.dates = dates
    // check first page and last page
    setHeaderBtnStatus(dates, startRangeDay, endRangeDay, this.$els.calendar)
  },
  destroy() {
    this.$els.calendar.removeEventListener('click', this.eventsHandler)
    this.$els.parent.removeChild(this.$els.calendar)
  },
  _isSelected(current) {
    const selectedItems = this.data.selected
    switch (this.options.mode) {
      // case 'multiple':
      //   return selectedItems.some(item => item.value === current)
      case MODE_RANGE: {
        const [startItem, endItem] = selectedItems
        if (current && startItem && endItem) {
          return current >= startItem.value && current <= endItem.value
        }
        break
      }
      // single, multiple
      default:
        return selectedItems.some(item => item.value === current)
    }
    return false
  }
}

export default ZxCalendar
