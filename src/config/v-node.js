/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-08-08 20:35
 */
import { createDom } from '../utils/dom'
import {
  CLASS_NAME_CLEAR_BUTTON,
  CLASS_NAME_DATE_ONLY, CLASS_NAME_IS_WEEKEND,
  CLASS_NAME_ITEM_WEEK,
  CLASS_NAME_NEXT_BUTTON,
  CLASS_NAME_PREV_BUTTON, CLASS_NAME_CONFIRM_BUTTON,
  CLASS_NAME_TITLE_WRAPPER, TYPE_DATE, CLASS_NAME_CANCEL_BUTTON
} from './constants'

// calendar
const calendarVNode = {
  a: {
    class: 'zx-calendar'
  }
}

// header
const headerVNode = {
  a: {
    class: 'zx-calendar-header-wrapper'
  },
  c: [
    {
      a: {
        class: '__l'
      },
      c: [
        {
          t: 'button',
          a: {
            type: 'button',
            class: CLASS_NAME_PREV_BUTTON
          }
        },
        {
          t: 'button',
          a: {
            type: 'button',
            class: [CLASS_NAME_PREV_BUTTON, CLASS_NAME_DATE_ONLY].join(' ')
          }
        }
      ]
    },
    {
      a: {
        class: CLASS_NAME_TITLE_WRAPPER
      }
    },
    {
      a: {
        class: '__r'
      },
      c: [
        {
          t: 'button',
          a: {
            type: 'button',
            class: [CLASS_NAME_NEXT_BUTTON, CLASS_NAME_DATE_ONLY].join(' ')
          }
        },
        {
          t: 'button',
          a: {
            type: 'button',
            class: CLASS_NAME_NEXT_BUTTON
          }
        }
      ]
    }
  ]
}

// week
const weekVNode = {
  a: {
    class: 'zx-calendar-week-wrapper'
  },
  c: []
}

// body
const bodyVNode = {
  a: {
    class: 'zx-calendar-body-wrapper'
  }
}

// footer
const footerVNode = {
  a: {
    class: 'zx-calender-footer-wrapper'
  },
  c: []
}

const footerButtonsVNode = {
  confirm: {
    t: 'button',
    a: {
      class: CLASS_NAME_CONFIRM_BUTTON
    }
  },
  clear: {
    t: 'button',
    a: {
      class: CLASS_NAME_CLEAR_BUTTON
    }
  },
  cancel: {
    t: 'button',
    a: {
      class: CLASS_NAME_CANCEL_BUTTON
    }
  }
}

/**
 * get week dom
 * @param weeks
 * @param options
 * @returns {Node|null}
 */
function getWeekDom(weeks, options) {
  if (options.type !== TYPE_DATE) return null
  const weekNodeCopy = JSON.parse(JSON.stringify(weekVNode))
  weeks.forEach((item, i) => {
    const isWeekend = i === 0 || i === 6
    weekNodeCopy.c.push({
      a: {
        class: CLASS_NAME_ITEM_WEEK + (isWeekend ? ' ' + CLASS_NAME_IS_WEEKEND : '')
      },
      c: [item]
    })
  })
  return createDom(weekNodeCopy)
}

export {
  calendarVNode,
  headerVNode,
  bodyVNode,
  footerVNode,
  footerButtonsVNode,
  getWeekDom
}
