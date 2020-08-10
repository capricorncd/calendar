/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-08-10 13:41
 */
import { $, addClass, removeClass } from './dom'
import { formatDate } from './index'

function setHeaderBtnStatus(list, startNumber, endNumber, calendar) {
  let isFirstPage = list.some(item => {
    return startNumber && item.value && item.value < startNumber
  })
  let isLastPage = list.some(item => {
    return endNumber && item.value && item.value > endNumber
  })
  if (isFirstPage) {
    addClass(calendar, 'is-first-page')
  } else {
    removeClass(calendar, 'is-first-page')
  }
  if (isLastPage) {
    addClass(calendar, 'is-last-page')
  } else {
    removeClass(calendar, 'is-last-page')
  }
}

function createBodyDom(dataType, data, { titleFormatter, type, itemSuffix, showHoliday }, { header, body }) {
  const list = data[dataType] || []
  // header
  let title = null
  if (type === 'year') {
    const firstItem = list[0]
    const lastItem = list[list.length - 1]
    let index = 0
    title = titleFormatter.replace(/(y+)/g, () => {
      return index++ === 0 ? firstItem.text : lastItem.text
    })
  } else {
    title = formatDate(data.currentDate, titleFormatter)
  }
  $('.__title-wrapper', header).innerText = title
  // body
  let classList, tempArr, tagTitle
  body.innerHTML = list.reduce((prev, item, i) => {
    classList = ['__item']
    if (item.disabled) classList.push('is-disabled')
    if (item.value > 0) {
      tagTitle = ''
      if (item.holiday) {
        classList.push('is-holiday')
        tagTitle = ` title="${item.holiday}"`
      }
      if (item.selected) classList.push('is-selected')
      if (item.current) classList.push('is-current')

      tempArr = [`<div class="${classList.join(' ')}" data-index="${i}"${tagTitle}>`]
      tempArr.push('<div class="__inner">')
      tempArr.push(`<p class="__text">${item.text}`)
      if (itemSuffix) {
        tempArr.push(`<span class="__suffix">${itemSuffix}</span>`)
      }
      if (showHoliday && item.holiday) {
        tempArr.push(`<span class="__holiday">${item.holiday}</span>`)
      }
      tempArr.push('</p></div></div>')
    } else {
      tempArr = [`<div class="${classList.join(' ')}"><div class="__inner"></div></div>`]
    }
    prev.push(tempArr.join(''))
    return prev
  }, []).join('')
}

export {
  createBodyDom,
  setHeaderBtnStatus
}
