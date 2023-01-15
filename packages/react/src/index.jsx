/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-09-11 21:48
 */
import { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import { ZxCalendar, MODE_SINGLE, TYPE_DATE } from '@zx-calendar/core'
import { formatValue, initOptions } from '@zx-calendar/helpers'

class ZxReactCalendar extends Component {
  constructor(props) {
    super(props)
    this.el = createRef()
    this.calendar = null
    this.options = initOptions(props)
    this.state = {
      date: props.value,
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

  fmt() {
    const { format } = this.props
    return format && typeof format === 'string' ? format : null
  }

  componentDidMount() {
    const { instance, change, cancel, error } = this.props
    const calendar = new ZxCalendar({
      ...this.options,
      el: this.el.current,
    })

    calendar.on('change', (list) => {
      const date = formatValue(
        list,
        this.props.mode,
        this.fmt(),
        this.options.langPackage
      )
      this.setState({
        date: date,
      })
      change?.(date, list)
    })

    calendar.on('error', error)

    calendar.on('cancel', cancel)

    this.calendar = calendar

    instance?.(calendar)
  }

  render() {
    return (
      <section className="zx-calendar-wrapper">
        {this.props.header}
        <div ref={this.el} />
        {this.props.footer}
      </section>
    )
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
    PropTypes.array,
  ]),
  format: PropTypes.string,
  change: PropTypes.func,
  cancel: PropTypes.func,
  error: PropTypes.func,
  instance: PropTypes.func,
  option: PropTypes.object,
  header: PropTypes.node,
  footer: PropTypes.node,
  colors: PropTypes.object,
}

ZxReactCalendar.defaultProps = {
  type: TYPE_DATE,
  mode: MODE_SINGLE,
  option: {},
}

export { ZxReactCalendar }
