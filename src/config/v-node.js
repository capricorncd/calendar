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
  CLASS_NAME_TITLE_WRAPPER, TYPE_DATE
} from './index'

// calendar
const calendarVNode = {
  attrs: {
    class: 'zx-calendar'
  }
}

// header
const headerVNode = {
  attrs: {
    class: 'zx-calendar-header-wrapper'
  },
  children: [
    {
      attrs: {
        class: '__l'
      },
      children: [
        {
          tag: 'button',
          attrs: {
            type: 'button',
            class: CLASS_NAME_PREV_BUTTON
          },
          children: [
            {
              tag: 'i'
            },
            {
              tag: 'i'
            }
          ]
        },
        {
          tag: 'button',
          attrs: {
            type: 'button',
            class: [CLASS_NAME_PREV_BUTTON, CLASS_NAME_DATE_ONLY].join(' ')
          },
          children: [
            {
              tag: 'i'
            }
          ]
        }
      ]
    },
    {
      attrs: {
        class: CLASS_NAME_TITLE_WRAPPER
      }
    },
    {
      attrs: {
        class: '__r'
      },
      children: [
        {
          tag: 'button',
          attrs: {
            type: 'button',
            class: [CLASS_NAME_NEXT_BUTTON, CLASS_NAME_DATE_ONLY].join(' ')
          },
          children: [
            {
              tag: 'i'
            }
          ]
        },
        {
          tag: 'button',
          attrs: {
            type: 'button',
            class: CLASS_NAME_NEXT_BUTTON
          },
          children: [
            {
              tag: 'i'
            },
            {
              tag: 'i'
            }
          ]
        }
      ]
    }
  ]
}

// week
const weekVNode = {
  attrs: {
    class: 'zx-calendar-week-wrapper'
  },
  children: []
}

// body
const bodyVNode = {
  attrs: {
    class: 'zx-calendar-body-wrapper'
  }
}

// footer
const footerVNode = {
  attrs: {
    class: 'zx-calender-footer-wrapper'
  },
  children: []
}

const footerButtonsVNode = {
  confirm: {
    tag: 'button',
    attrs: {
      class: CLASS_NAME_CONFIRM_BUTTON
    }
  },
  clear: {
    tag: 'button',
    attrs: {
      class: CLASS_NAME_CLEAR_BUTTON
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
    let isWeekend = i === 0 || i === 6
    weekNodeCopy.children.push({
      attrs: {
        class: CLASS_NAME_ITEM_WEEK + (isWeekend ? ' ' + CLASS_NAME_IS_WEEKEND : '')
      },
      children: [item]
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
