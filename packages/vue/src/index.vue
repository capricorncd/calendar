/** * Created by Capricorncd. * https://github.com/capricorncd * Date:
2020-09-24 23:38 */
<script>
// import ZxCalendar, { MODE_SINGLE, TYPE_DATE } from '@zx-calendar/core'
import { ZxCalendar, MODE_SINGLE, TYPE_DATE } from 'zx-calendar'
import { formatValue, initOptions } from '@zx-calendar/helpers'

export default {
  name: 'ZxVueCalendar',
  props: {
    modelValue: {
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
      value: this.modelValue,
    }
  },
  computed: {
    options() {
      return initOptions(this)
    },
    fmt() {
      return typeof this.format === 'string' ? this.format : null
    },
  },
  mounted() {
    const calendar = new ZxCalendar({
      ...this.options,
      el: this.$refs.el,
      defaultDate: this.value,
    })
    calendar.on('change', (list) => {
      this.value = formatValue(
        list,
        this.mode,
        this.fmt,
        this.options.langPackage
      )
      this.$emit('change', this.value, list)
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
  },
  watch: {
    modelValue(val) {
      if (this.value !== val) {
        this.value = val
        this.setDate(val)
      }
    },
    value(val) {
      this.$emit('update:modelValue', val)
    },
  },
}
</script>

<template>
  <div class="zx-calendar-wrapper">
    <slot name="header"></slot>
    <div ref="el"></div>
    <slot name="footer"></slot>
  </div>
</template>
