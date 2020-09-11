/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-09-11 21:48
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ZxCalendar from '../../../src/index'
import { DEF_OPTIONS, MODE_SINGLE } from '../../vue-calendar/src/constants'

class ZxReactCalendar extends Component {
  constructor(props) {
    super(props)
    this.el = React.createRef()
    this.state = {
      date: props.currentDate
    }
  }

  setDate(str) {
    this.calendar.setDate(str)
  }

  getDate() {
    return this.calendar.getDate()
  }

  _fmtValue(list) {
    const arr = list.map(item => {
      return this.fmt()
        ? this.calendar.formatDate(item.fullText, this.fmt())
        : item.fullText
    })
    return this.props.mode === MODE_SINGLE ? arr[0] : arr
  }

  options() {
    const ret = {}
    let val
    Object.keys(DEF_OPTIONS).forEach(key => {
      val = this.props[key]
      if (val) {
        if (!Array.isArray(DEF_OPTIONS[key]) || DEF_OPTIONS[key].includes(val)) {
          ret[key] = val
        }
      }
    })
    return ret
  }

  fmt() {
    return typeof this.props.format === 'string' ? this.props.format : null
  }

  componentDidMount() {
    const calendar = new ZxCalendar({
      ...this.options(),
      el: this.el.current,
      defaultDate: this.state.date
    })

    calendar.on('change', list => {
      const date = this._fmtValue(list)
      this.setState({
        date: date
      })
      const { change } = this.props
      if (typeof change === 'function') {
        change(date, list)
      }
    })

    calendar.on('error', err => {
      console.error('error', err)
    })

    calendar.on('cancel', () => {
    })

    this.calendar = calendar
  }

  render() {
    return <div className="zx-react-calendar">
      <div ref={this.el} className="zx-calendar-wrapper"></div>
    </div>
  }
}

ZxReactCalendar.propTypes = {
  currentDate: PropTypes.string,
  format: PropTypes.string,
  type: PropTypes.string,
  change: PropTypes.func,
  mode: PropTypes.string
}

ZxReactCalendar.defaultProps = {
  mode: MODE_SINGLE
}

export default ZxReactCalendar
