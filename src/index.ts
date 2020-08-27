/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-08-23 22:17
 */
import {
  calendarData, calendarDate,
  calendarEls,
  calendarEvents,
  calendarItem,
  calendarLangPackage,
  calendarOptions,
  TypesFn
} from '../types/index'
import {
  CLASS_NAME_PREV_BUTTON,
  CLASS_NAME_CANCEL_BUTTON,
  CLASS_NAME_CLEAR_BUTTON,
  CLASS_NAME_CONFIRM_BUTTON,
  CLASS_NAME_DATE_ONLY,
  CLASS_NAME_NEXT_BUTTON,
  CLASS_NAME_TITLE_WRAPPER,
  CLASS_NAME_ITEM_WEEK,
  CLASS_NAME_IS_DISABLED,
  CLASS_NAME_IS_SELECTED,
  TYPE_DATE,
  TYPE_YEAR,
  TYPE_MONTH,
  HEADER_TITLE_FORMAT_YEAR,
  HEADER_TITLE_FORMAT_MONTH,
  HEADER_TITLE_FORMAT_DATE,
  MODE_SINGLE,
  MODE_MULTIPLE,
  MODE_RANGE
} from './config/constants'
import { $, addClass, createDom, getSelectItem, removeClass } from './utils/dom'
import { calendarVNode, headerVNode, bodyVNode, getWeekDom, footerVNode, footerButtonsVNode } from './config/v-node'
import { changeClassForSelectOneItem, createBodyDom, setHeaderBtnStatus } from './utils/private'
import { initLangPackage } from './config/init-lang-package'
import {
  checkItemRange,
  toDate,
  formatDate,
  getCurrentDate,
  getDateRange,
  getDateInfo,
  getSelectedDateRange,
  getYearInfo,
  initSelectedDates,
  isRangeSelectTemp,
  toNumber,
  toTwoDigits, isString, isFunction
} from './utils/index'

import './scss/index.scss'

// default options
const DEF_OPTIONS: calendarOptions = {
  // document selector or Element
  el: '',
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
  itemSuffix: '',
  // default selected date
  defaultDate: [],
  // function, custom item handler
  // return object {}
  itemFormatter: undefined,
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

class ZxCalendar {
  options: calendarOptions
  _eventList: calendarEvents
  langPackage: calendarLangPackage
  $els: calendarEls
  data: calendarData
  eventsHandler: any

  constructor(params: calendarOptions) {
    const options: calendarOptions = {
      ...DEF_OPTIONS,
      ...params
    }
    // check type
    if (!params.titleFormatter) {
      if (options.type === TYPE_YEAR) {
        options.titleFormatter = HEADER_TITLE_FORMAT_YEAR
      }
      else if (options.type === TYPE_MONTH) {
        options.titleFormatter = HEADER_TITLE_FORMAT_MONTH
      }
    }
    // check options
    const $parent = $(options.el)
    if (!$parent) {
      throw new Error(`Initial parameter el[${options.el}] is invalid.`)
    }
    this.options = options
    // on event list
    this._eventList = {}
    // config
    const { langPackage } = initLangPackage(options)
    this.langPackage = {
      ...langPackage,
      ...options.langPackage
    }
    // dom
    this.$els = {
      parent: $parent
    }
    // today
    const date = new Date()
    const today = formatDate(date, 'yyyy/MM/dd')
    let selectedItems: calendarItem[] = []
    try {
      selectedItems = initSelectedDates(options.defaultDate, options)
    }
    catch (e) {
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
    this.eventsHandler = this._eventsHandler.bind(this)
    this._initDom()
  }

  /**
   * event emit
   * @param eventName
   */
  emit(...args: any[]): void {
    const eventName: string = args[0]
    const params: any[] = args.slice(1)
    if (this._eventList[eventName]) {
      this._eventList[eventName].forEach(fn => {
        fn.apply(this, params)
      })
    }
  }

  /**
   * on
   * @param eventName
   * @param fn
   */
  on(eventName: string, fn: TypesFn): void {
    if (!isString(eventName) || !isFunction(fn)) return
    if (!this._eventList[eventName]) {
      this._eventList[eventName] = []
    }
    this._eventList[eventName].push(fn)
  }

  /**
   * off
   * @param eventName
   */
  off(eventName: string): void {
    if (!isString(eventName)) return
    if (!this._eventList[eventName]) return
    this._eventList[eventName].length = 0
  }

  /**
   * init dom
   * @private
   */
  _initDom(): void {
    const options = this.options
    // calendar
    const calendarVNodeCopy = JSON.parse(JSON.stringify(calendarVNode))
    // zx-calendar is-date is-month is-year
    const calendarClassName = [
      calendarVNodeCopy.attrs.class,
      'type-is-' + options.type,
      'mode-is-' + options.mode
    ]
    calendarVNodeCopy.attrs.class = calendarClassName.join(' ')
    const calendar = createDom(calendarVNodeCopy)
    // header
    const header = createDom(headerVNode)
    calendar.appendChild(header)
    // week
    const week = getWeekDom(this.langPackage.weeks || [], options)
    if (week) {
      calendar.appendChild(week)
      this.$els.week = week
    }
    // body
    const body = createDom(bodyVNode)
    calendar.appendChild(body)
    // footer
    if (!options.hideFooter && (options.mode === MODE_MULTIPLE || options.mode === MODE_RANGE)) {
      const footerVNodeCopy = Object.assign(footerVNode)
      const footerButtons = options.footerButtons || []
      footerButtons.forEach((btn: string) => {
        footerVNodeCopy.children.push({
          // @ts-ignore
          ...footerButtonsVNode[btn],
          // @ts-ignore
          children: [this.langPackage[btn + 'Button']]
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
    this.$els.parent.appendChild(calendar)

    this.$els.calendar = calendar
    this.$els.header = header
    this.$els.body = body

    this._updateDom()
    // init events
    this.$els.calendar.addEventListener('click', this.eventsHandler)
  }

  _eventsHandler(e: Event): void {
    e.stopPropagation()
    const el: any = e.target
    const className: Array<string> = el.className.split(' ')
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
    }
    else {
      // get item
      const item = getSelectItem(el, className, this.$els.calendar)
      if (item.el) {
        this._onItemClick(item)
      }
    }
  }

  _onTitleClick(item: any): void {
    this.emit('onTitleClick', item)
  }

  /**
   * prev
   * @param isYear only type=date
   */
  prev(isYear?: boolean): void {
    let [year, month]: any[] = this.data.current
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
        }
        else {
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
  }

  /**
   * handle next button on click
   * @param isYear
   * @private
   */
  next(isYear?: boolean): void {
    let [year, month]: any = this.data.current
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
        }
        else {
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
  }

  _onWeekClick(item: any): void {
    this.emit('onWeekClick', item)
  }

  /**
   * on item click
   * @param el
   * @param className
   * @param index
   * @private
   */
  _onItemClick({ el, className, index }: any): void {
    // disabled
    if (className.includes(CLASS_NAME_IS_DISABLED)) return
    // data item
    // @ts-ignore
    const arr = this.data[this.options.type + 's'] || []
    const itemData = arr[index] || {}
    // handle select
    // mode=range
    if (this.options.mode === MODE_RANGE) {
      const selectedItems = [...this.data.selected]
      const len = selectedItems.length
      if ((len === 0 || len >= 2) && selectedItems.every(item => !!item)) {
        this.data.selected = [itemData]
        changeClassForSelectOneItem(el, this.$els, true)
      }
      else if (len === 1) {
        if (selectedItems[0].value < itemData.value) {
          this.data.selected.push(itemData)
        }
        else {
          this.data.selected.unshift(itemData)
        }
        this._updateDom()
      }
    }
    // mode=multiple
    else if (this.options.mode === MODE_MULTIPLE) {
      if (className.includes(CLASS_NAME_IS_SELECTED)) {
        removeClass(el, CLASS_NAME_IS_SELECTED)
        const index = this.data.selected.findIndex((item: { value: any }) => item.value === itemData.value)
        this.data.selected.splice(index, 1)
      }
      else {
        addClass(el, CLASS_NAME_IS_SELECTED)
        itemData.selected = true
        this.data.selected.push(itemData)
      }
    }
    // mode=single
    else {
      if (!className.includes(CLASS_NAME_IS_SELECTED)) {
        // @ts-ignore
        changeClassForSelectOneItem(el, this.$els)
        itemData.selected = true
        this.data.selected = [
          {
            ...itemData,
            date: toDate(itemData.fullText)
          }
        ]
        this.emit('change', [...this.data.selected])
      }
    }
  }

  /**
   * set/change date range
   * @param start
   * @param end
   */
  setDateRange(start: calendarDate, end: calendarDate): void {
    this.options.dateRange = [start, end]
    this._updateDom()
  }

  /**
   * set selected date
   * @param str
   */
  setDate(str?: calendarDate): void {
    try {
      this.data.selected = initSelectedDates(str, this.options)
      if (this.data.selected.length === 0) {
        this._updateDom()
        return
      }
      const item = this.data.selected[0]
      this.setCurrentDate(item.fullText)
    }
    catch (e) {
      this.emit('error', e)
    }
  }

  /**
   * get selected date
   * @returns {*[]}
   */
  getDate(): calendarItem[] {
    return this.data.selected.slice(0)
  }

  /**
   * set current date
   * @param dateStr
   */
  setCurrentDate(dateStr: calendarDate): void {
    // yyyy -> yyyy/01/01
    // yyyy/MM -> yyyy/MM/01
    // yyyy/MM/dd -> yyyy/MM/dd
    const date = toDate(dateStr || '')
    if (!date) return
    const currentDay = formatDate(date, 'yyyy/MM/dd')
    this.data.currentDate = date
    this.data.currentDay = currentDay
    this.data.current = currentDay.split('/')
    this._updateDom()
  }

  /**
   * update dom
   * @private
   */
  _updateDom(): void {
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
  }

  /**
   * create years
   */
  createYears(): void {
    const [startRangeYear, endRangeYear] = getDateRange(this.options.dateRange, 'yyyy')
    const [startSelectedRangeYear, endSelectedRangeYear] = getSelectedDateRange(this.data, this.options)
    const years: calendarItem[] = []
    const systemYear = this.data.today.substr(0, 4)
    const { startFullYear, endFullYear } = getYearInfo(this.data.current[0])
    let tempText: string, tempFullText: string
    for (let i: number = startFullYear; i <= endFullYear; i++) {
      tempText = i.toString()
      tempFullText = tempText + '/01/01'
      years.push({
        text: tempText,
        fullText: tempFullText,
        value: i,
        disabled: checkItemRange(i, startRangeYear, endRangeYear),
        // range
        isRangeFirst: i === startSelectedRangeYear && !!endSelectedRangeYear,
        isRangeLast: i === endSelectedRangeYear && !!startSelectedRangeYear,
        isRangeTemp: isRangeSelectTemp(i, this),
        // selected
        selected: this._isSelected(i),
        current: systemYear === tempText
      })
    }
    this.data.years = years
    // check first page and last page
    setHeaderBtnStatus(years, startRangeYear, endRangeYear, this.$els.calendar)
  }

  /**
   * create month list
   */
  createMonths(): void {
    const [startRangeMonth, endRangeMonth] = getDateRange(this.options.dateRange, 'yyyyMM')
    const [startSelectedRangeMonth, endSelectedRangeMonth] = getSelectedDateRange(this.data, this.options)
    const months: calendarItem[] = []
    const systemMonth = this.data.today.substr(0, 7)
    const prefix = this.data.current[0] + '/'
    const prefixNumber = toNumber(this.data.current[0]) * 100
    let tempText, tempFullText, tempValue
    for (let i = 1; i <= 12; i++) {
      tempText = toTwoDigits(i)
      tempFullText = prefix + tempText + '/01'
      tempValue = prefixNumber + i
      months.push({
        text: tempText,
        fullText: tempFullText,
        value: tempValue,
        disabled: checkItemRange(tempValue, startRangeMonth, endRangeMonth),
        // range
        isRangeFirst: tempValue === startSelectedRangeMonth && !!endSelectedRangeMonth,
        isRangeLast: tempValue === endSelectedRangeMonth && !!startSelectedRangeMonth,
        isRangeTemp: isRangeSelectTemp(tempValue, this),
        // selected
        selected: this._isSelected(tempValue),
        current: tempFullText.startsWith(systemMonth)
      })
    }
    this.data.months = months
    // check first page and last page
    setHeaderBtnStatus(months, startRangeMonth, endRangeMonth, this.$els.calendar)
  }

  /**
   * create days
   */
  createDays(): void {
    const [startRangeDay, endRangeDay] = getDateRange(this.options.dateRange, 'yyyyMMdd')
    const [startSelectedRangeDay, endSelectedRangeDay] = getSelectedDateRange(this.data, this.options)
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
        current: this.data.today === tempFullText
      }
      // custom handler: itemFormatter
      // @ts-ignore
      return isFunction(itemFormatter) ? itemFormatter(tempItem) : tempItem
    })
    this.data.dates = dates
    // check first page and last page
    setHeaderBtnStatus(dates, startRangeDay, endRangeDay, this.$els.calendar)
  }

  destroy(): void {
    this.$els.calendar.removeEventListener('click', this.eventsHandler)
    this.$els.parent.removeChild(this.$els.calendar)
  }

  /**
   * is selected
   * @param current
   * @private
   */
  _isSelected(current: any): boolean {
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
        return selectedItems.some((item: { value: any }) => item.value === current)
    }
    return false
  }

  formatDate(d: calendarDate, fmt: string, langPackage?: calendarLangPackage): string {
    if (!langPackage) {
      langPackage = this.langPackage
    }
    return formatDate(d, fmt, langPackage)
  }

  toDate(srcDate: calendarDate): Date | undefined {
    return toDate(srcDate)
  }
}

export default ZxCalendar
