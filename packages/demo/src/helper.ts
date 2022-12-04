/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-08-11 11:11
 */
import { obj2str } from 'obj2str'
import { $, createElement } from 'zx-sml'
// import { log } from 'zx-sml/nodejs'
import { ZxCalendar} from '@zx-calendar/core'

const log = console.log

function logStr(...args): void {
  for (let i = 0; i < args.length; i++) {
    log(JSON.stringify(args[i], null, 2))
  }
}

function escapeTag(str: string): string {
  return str.replace(/<(\/?\w+)/g, '&lt;$1').replace(/(\w+)>/g, '$1&gt;')
}

function createEl(tag, { html, attrs }: {html?: string, attrs?: Record<string, unknown>}, isAddInstance = false) {
  const el = createElement(tag, attrs)
  if (html) {
    el.innerHTML = isAddInstance
      ? fmtCode(escapeTag('<div class="calendar-wrapper"></div>\n\n')) +
      `<span class="hljs-keyword">const</span> zxCalendar = <span class="hljs-keyword">new</span> <span class="hljs-name">ZxCalendar</span>(${fmtCode(html)})` +
      '\n\n' +
      fmtCode('zxCalendar.on(\'change\', (arr) => {\n  console.log(arr) \n})')
      : html
  }
  return el
}

function fmtCode(html) {
  return html.replace(/(['"])(.+)\1/g, (match, $1, $2) => {
    return `${$1}<span class="hljs-string">${$2}</span>${$1}`
  }).replace(/function|true|false|return/g, (match) => {
    return `<span class="hljs-keyword">${match}</span>`
  }).replace(/console/g, (match) => {
    return `<span class="hljs-built_in">${match}</span>`
  })
}

function createCalendar(options: Record<string, unknown>, title: string, el?: HTMLElement) {
  el = el || $('.container')!
  const wrapper = createEl('dl', {})
  const dt = createEl('dt', { html: title })
  wrapper.appendChild(dt)
  const dd = createEl('dd', {})
  const calendarWrapper = createEl('div', { attrs: { class: 'calendar-wrapper' } })
  dd.appendChild(calendarWrapper)
  /* eslint-disable */
  const calendar = new ZxCalendar({
    ...options,
    el: calendarWrapper
  })
  const pre = createEl('pre', {
    html: obj2str(options, { indentSpaces: 2 })
  }, true)
  dd.appendChild(pre)
  wrapper.appendChild(dd)
  el.appendChild(wrapper)

  calendar.on('change', (res) => {
    logStr('change', res)
    // res.forEach(item => {
    //   log(calendar.formatDate(item.date, 'yyyy-MM-dd'))
    // })
  })
  // cancel button on click
  calendar.on('cancel', () => {
    logStr('cancel button on click')
  })

  calendar.on('error', (err) => {
    console.error(err)
  })

  log(`[${title}]`, calendar)

  return calendar
}

export {
  $,
  createCalendar,
  createEl,
  log,
  logStr
}