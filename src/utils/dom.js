/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-08-09 10:51
 */
import { isString, toNumber } from './index'

/**
 * create dom
 * @param vNode
 * @returns {Node}
 */
function createDom(vNode) {
  if (typeof vNode === 'undefined') {
    vNode = 'undefined'
  }
  if (vNode === null) {
    vNode = 'null'
  }
  if (isString(vNode)) {
    return document.createTextNode(vNode)
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
      el.appendChild(createDom(child))
    })
  }
  return el
}

/**
 * query selector
 * @param s
 * @param context
 * @returns {any}
 */
function $(s, context = document) {
  if (!s) return null
  let el = null
  if (isString(s)) {
    el = context.querySelector(s)
  } else if (typeof s === 'object' && s.nodeType === 1) {
    el = s
  }
  return el
}

function getSelectItem(el, className, calendar) {
  const itemClassName = '__item'
  let ret = {}
  if (className.includes(itemClassName)) {
    ret.el = el
    ret.className = className
  } else if (el !== calendar) {
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

function removeClass(el, className) {
  const arr = []
  el.className.split(' ').forEach(item => {
    if (item !== className) {
      arr.push(item)
    }
  })
  el.className = arr.join(' ')
}

function addClass(el, cls) {
  const className = el.className.split(' ')
  if (!className.includes(cls)) {
    className.push(cls)
    el.className = className.join(' ')
  }
}

export {
  $,
  addClass,
  createDom,
  getSelectItem,
  removeClass
}
