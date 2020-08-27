/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-08-23 23:57
 */
import { isString, toNumber } from './index'

/**
 * create dom
 * @param vNode
 * @returns {Node}
 */
function createDom(vNode: any): HTMLElement {
  if (typeof vNode === 'undefined') {
    vNode = 'undefined'
  }
  if (vNode === null) {
    vNode = 'null'
  }
  const el = document.createElement(vNode.tag || 'div')
  // attrs
  const attrs = vNode.attrs
  if (attrs && typeof attrs === 'object') {
    Object.keys(attrs).forEach(key => {
      el.setAttribute(key, attrs[key])
    })
  }
  // children
  const children = vNode.children
  if (Array.isArray(children) && children.length > 0) {
    children.forEach(child => {
      if (isString(child)) {
        el.appendChild(createText(child))
      }
      else {
        el.appendChild(createDom(child))
      }
    })
  }
  return el
}

function createText(str: string): Text {
  return document.createTextNode(str)
}

/**
 * query selector
 * @param s
 * @param context
 * @returns {any}
 */
function $(s: any, context?: HTMLElement | Document): HTMLElement | null {
  if (!s) return null
  let el = null
  if (isString(s)) {
    if (!context) {
      context = document
    }
    el = context.querySelector(s)
  }
  else if (typeof s === 'object' && s.nodeType === 1) {
    el = s
  }
  return el
}

interface TypesSelectItem {
  el?: HTMLElement,
  className?: string[],
  index?: number
}

/**
 * get select item
 * @param el
 * @param className
 * @param calendar
 */
function getSelectItem(el: HTMLElement, className: string[], calendar: HTMLElement) {
  const itemClassName = '__item'
  const ret: TypesSelectItem = {}
  if (className.includes(itemClassName)) {
    ret.el = el
    ret.className = className
  }
  else if (el !== calendar) {
    let parent = el.parentElement
    while (parent && parent !== calendar) {
      if (parent.className.split(' ').includes(itemClassName)) {
        ret.el = parent
        ret.className = parent.className.split(' ')
        break
      }
      parent = parent.parentElement
    }
  }
  if (ret.el) {
    ret.index = toNumber(ret.el.getAttribute('data-index'))
  }
  return ret
}

function removeClass(...args: any): void {
  const el: HTMLElement = args[0]
  const cls: string[] = args.slice(1)
  const arr: string[] = []
  const temp: string[] = el.className.split(' ')
  temp.forEach(item => {
    if (!cls.includes(item)) {
      arr.push(item)
    }
  })
  el.className = arr.join(' ')
}

function addClass(...args: any) {
  const el: HTMLElement = args[0]
  const cls: string[] = args.slice(1)
  const className = el.className.split(' ')
  cls.forEach(item => {
    if (!className.includes(item)) {
      className.push(item)
    }
  })
  el.className = className.join(' ')
}

export {
  $,
  addClass,
  createDom,
  getSelectItem,
  removeClass
}
