import ZxCalendar from '../src'

/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-08-11 11:11
 */
function log() {
  console.log.apply(null, arguments)
}

function logStr() {
  for (let i = 0; i < arguments.length; i++) {
    log(JSON.stringify(arguments[i], null, 2))
  }
}

function createEl(tag, { html }) {
  const el = document.createElement(tag)
  if (html) {
    el.innerHTML = html
  }
  return el
}

function arrToString(array, space) {
  const arr = ['[']
  array.forEach(item => {
    if (Array.isArray(item)) {
      arr.push(arrToString(item))
    } else if (typeof item === 'function') {
      arr.push(getSpace(space) + item.toString())
    } else if (item && typeof item === 'object') {
      arr.push(toString(item, space + 2))
    } else {
      if (typeof item === 'string') {
        item = `'${item}'`
      }
      arr.push(getSpace(space) + item + ',')
    }
  })
  arr.push(getSpace(space - 2) + '],')
  return arr.join('\n')
}

function toString(obj, space = 2, noStartSpace = false) {
  const prefix = noStartSpace ? '' : getSpace(space - 2)
  const arr = [prefix + '{']
  let tempValue, typeofValue
  Object.keys(obj).forEach(key => {
    tempValue = obj[key]
    if (Array.isArray(tempValue)) {
      arr.push(getSpace(space) + key + ': ' + arrToString(tempValue, space + 2))
    } else if (tempValue && typeof tempValue === 'object') {
      arr.push(getSpace(space) + key + ': ' + toString(tempValue, space + 2, true))
    } else {
      typeofValue = typeof tempValue
      if (typeofValue === 'function') {
        tempValue = tempValue.toString()
      } else if (typeofValue === 'string') {
        tempValue = `'${tempValue}'`
      }
      arr.push(getSpace(space) + key + ': ' + tempValue + ',')
    }
  })
  arr.push(getSpace(space - 2) + '}')
  return arr.join('\n')
}

const SPACE = ' '
function getSpace(count = 2) {
  return new Array(count).fill(SPACE).join('')
}

function createCalendar(options, title, el) {
  el = el || document.querySelector('.container')
  const wrapper = createEl('dl', {})
  const dt = createEl('dt', { html: title })
  wrapper.appendChild(dt)
  const dd = createEl('dd', {})
  wrapper.appendChild(dd)
  const calendar = new ZxCalendar({
    ...options,
    el: dd
  })
  const pre = createEl('pre', {
    html: toString(options)
  })
  dd.appendChild(pre)
  wrapper.appendChild(dd)
  el.appendChild(wrapper)

  calendar.on('change', data => {
    logStr(data)
  })

  calendar.on('error', err => {
    console.error(err)
  })

  log(`[${title}]`, calendar)

  return calendar
}

export {
  createCalendar,
  createEl,
  log,
  logStr,
  toString
}
