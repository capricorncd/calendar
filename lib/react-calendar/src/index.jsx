/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-09-11 21:48
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ZxCalendar from '../../../src/index'
import { DEF_OPTIONS, MODE_SINGLE, TYPE_DATE } from '../../constants'
import { isFunction } from './helper'

class ZxReactCalendar extends Component {
  constructor(props) {
    super(props)
    this.el = React.createRef()
    this.calendar = null
    this.options = this._initOptions()
    this.state = {
      date: props.value
    }
  }

  setDate(str) {
    this.calendar.setDate(str)
  }

  toDate(str) {
    return this.calendar.toDate(str)
  }

  formatDate(date, formatter, langPackage) {
    return this.calendar.formatDate(date, formatter, langPackage)
  }

  setCurrentDate(str) {
    this.calendar.setCurrentDate(str)
  }

  setDateRange(startDate, endDate) {
    this.calendar.setDateRange(startDate, endDate)
  }

  prev(isYear) {
    this.calendar.prev(isYear)
  }

  next(isYear) {
    this.calendar.next(isYear)
  }

  getDate() {
    return this.calendar.getDate()
  }

  _fmtValue(list) {
    const fmt = this.fmt()
    const arr = list.map(item => {
      return fmt
        ? this.calendar.formatDate(item.fullText, fmt)
        : item.fullText
    })
    return this.props.mode === MODE_SINGLE ? arr[0] : arr
  }

  _initOptions() {
    const ret = {
      ...this.props.option
    }
    let val
    Object.keys(DEF_OPTIONS).forEach(key => {
      val = this.props[key]
      if (val) {
        if (!Array.isArray(DEF_OPTIONS[key]) || DEF_OPTIONS[key].includes(val)) {
          ret[key] = val
        }
      }
    })
    if (this.props.value) {
      ret.defaultDate = this.props.value
    }
    return ret
  }

  fmt() {
    const { format } = this.props
    return format && typeof format === 'string' ? format : null
  }

  componentDidMount() {
    const { instance, change, cancel, error } = this.props
    const calendar = new ZxCalendar({
      ...this.options,
      el: this.el.current
    })

    calendar.on('change', list => {
      const date = this._fmtValue(list)
      this.setState({
        date: date
      })
      if (isFunction(change)) {
        change(date, list)
      }
    })

    calendar.on('error', err => {
      if (isFunction(error)) {
        error(err)
      }
    })

    calendar.on('cancel', () => {
      if (isFunction(cancel)) {
        cancel()
      }
    })

    this.calendar = calendar

    if (isFunction(instance)) {
      instance(calendar)
    }
  }

  render() {
    return <div className="zx-react-calendar">
      {this.props.header}
      <div ref={this.el} className="zx-calendar-wrapper"></div>
      {this.props.footer}
    </div>
  }
}

ZxReactCalendar.propTypes = {
  type: PropTypes.string,
  mode: PropTypes.string,
  lang: PropTypes.string,
  isFullWeek: PropTypes.bool,
  titleFormatter: PropTypes.string,
  itemSuffix: PropTypes.string,
  dateRange: PropTypes.array,
  showHoliday: PropTypes.bool,
  itemFormatter: PropTypes.func,
  langPackage: PropTypes.object,
  footerButtons: PropTypes.array,
  footerButtonAlign: PropTypes.string,
  hideFooter: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array
  ]),
  format: PropTypes.string,
  change: PropTypes.func,
  cancel: PropTypes.func,
  error: PropTypes.func,
  instance: PropTypes.func,
  option: PropTypes.object,
  header: PropTypes.node,
  footer: PropTypes.node
}

ZxReactCalendar.defaultProps = {
  type: TYPE_DATE,
  mode: MODE_SINGLE,
  option: {}
}

export default ZxReactCalendar
