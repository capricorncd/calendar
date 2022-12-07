<template>
  <div class="zx-vue-calendar">
    <slot name="header"></slot>
    <div ref="el" class="zx-calendar-wrapper"></div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
import {
  ZxCalendar,
  MODE_SINGLE,
  TYPE_DATE,
  DEF_OPTIONS,
} from '@zx-calendar/core'

export default {
  name: 'ZxVueCalendar',
  props: {
    value: {
      type: [String, Number, Array],
      default: '',
    },
    type: {
      type: String,
      default: TYPE_DATE,
    },
    mode: {
      type: String,
      default: MODE_SINGLE,
    },
    format: {
      type: String,
      default: '',
    },
    lang: {
      type: String,
      default: 'en',
    },
    isFullWeek: Boolean,
    titleFormatter: {
      type: String,
      default: '',
    },
    itemSuffix: {
      type: String,
      default: '',
    },
    dateRange: {
      type: Array,
      default: () => [],
    },
    showHoliday: Boolean,
    itemFormatter: {
      type: Function,
      default: undefined,
    },
    langPackage: {
      type: Object,
      default: undefined,
    },
    footerButtons: {
      type: Array,
      default: undefined,
    },
    footerButtonAlign: {
      type: String,
      default: 'flex-end',
    },
    hideFooter: Boolean,
    option: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      calendar: null,
      date: this.value,
    }
  },
  computed: {
    options() {
      const ret = {
        ...this.option,
      }
      let val
      Object.keys(DEF_OPTIONS).forEach((key) => {
        val = this[key]
        if (val) {
          if (
            !Array.isArray(DEF_OPTIONS[key]) ||
            DEF_OPTIONS[key].includes(val)
          ) {
            ret[key] = val
          }
        }
      })
      return ret
    },
    fmt() {
      return typeof this.format === 'string' ? this.format : null
    },
  },
  mounted() {
    const calendar = new ZxCalendar({
      ...this.options,
      el: this.$refs.el,
      defaultDate: this.date,
    })

    calendar.on('change', (list) => {
      this.date = this._fmtValue(list)
      this.$emit('change', this.date, list)
    })

    calendar.on('error', (err) => {
      this.$emit('error', err)
    })

    calendar.on('cancel', () => {
      this.$emit('cancel')
    })

    this.calendar = calendar
    this.$emit('instance', calendar)
  },
  methods: {
    setDate(str) {
      this.calendar.setDate(str)
    },
    toDate(str) {
      return this.calendar.toDate(str)
    },
    formatDate(date, formatter, langPackage) {
      return this.calendar.formatDate(date, formatter, langPackage)
    },
    setCurrentDate(str) {
      this.calendar.setCurrentDate(str)
    },
    setDateRange(startDate, endDate) {
      this.calendar.setDateRange(startDate, endDate)
    },
    prev(isYear) {
      this.calendar.prev(isYear)
    },
    next(isYear) {
      this.calendar.next(isYear)
    },
    getDate() {
      return this.calendar.getDate()
    },
    _fmtValue(list) {
      const fmt = this.fmt
      const arr = list.map((item) => {
        return fmt
          ? this.calendar.formatDate(item.fullText, fmt)
          : item.fullText
      })
      return this.mode === MODE_SINGLE ? arr[0] : arr
    },
  },
  watch: {
    value(val) {
      if (this.date !== val) {
        this.date = val
        this.setDate(val)
      }
    },
    date(val) {
      this.$emit('input', val)
    },
  },
}
</script>