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
            class: '__prev-year-button'
          }
        },
        {
          tag: 'button',
          attrs: {
            type: 'button',
            class: '__prev-month-button'
          }
        },
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
            class: '__next-month-button'
          }
        },
        {
          tag: 'button',
          attrs: {
            type: 'button',
            class: '__next-year-button'
          }
        },
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

export {
  calendarVNode,
  headerVNode,
  bodyVNode,
  weekVNode,
}
