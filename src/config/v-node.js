import { createDom } from '../utils/dom'

/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-08-08 20:35
 */
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
            class: '__prev-button'
          }
        }
      ]
    },
    {
      attrs: {
        class: '__title-wrapper'
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
            class: '__next-button'
          }
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

/**
 * get week dom
 * @param weeks
 * @param options
 * @returns {Node|null}
 */
function getWeekDom(weeks, options) {
  if (options.type !== 'date') return null
  const weekNodeCopy = JSON.parse(JSON.stringify(weekVNode))
  weeks.forEach((item, i) => {
    let isWeekend = i === 0 || i === 6
    weekNodeCopy.children.push({
      attrs: {
        class: '__item-week' + (isWeekend ? ' is-weekend' : '')
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
  getWeekDom,
}
