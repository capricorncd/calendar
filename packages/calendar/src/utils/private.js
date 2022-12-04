/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-08-10 13:41
 */
import { $, addClass, removeClass } from './dom'
import { formatDate } from './index'
import {
  CLASS_NAME_IS_CURRENT,
  CLASS_NAME_IS_DISABLED,
  CLASS_NAME_IS_FIRST_PAGE,
  CLASS_NAME_IS_HOLIDAY,
  CLASS_NAME_IS_LAST_PAGE,
  CLASS_NAME_IS_RANGE_FIRST,
  CLASS_NAME_IS_RANGE_FIRST_LAST,
  CLASS_NAME_IS_RANGE_LAST,
  CLASS_NAME_IS_RANGE_TEMP,
  CLASS_NAME_IS_SELECTED,
  CLASS_NAME_TITLE_WRAPPER,
  TYPE_YEAR,
} from '../config/constants'

function setHeaderBtnStatus(list, startNumber, endNumber, calendar) {
  const isFirstPage = list.some((item) => {
    return startNumber && item.value && item.value < startNumber
  })
  const isLastPage = list.some((item) => {
    return endNumber && item.value && item.value > endNumber
  })
  if (isFirstPage) {
    addClass(calendar, CLASS_NAME_IS_FIRST_PAGE)
  } else {
    removeClass(calendar, CLASS_NAME_IS_FIRST_PAGE)
  }
  if (isLastPage) {
    addClass(calendar, CLASS_NAME_IS_LAST_PAGE)
  } else {
    removeClass(calendar, CLASS_NAME_IS_LAST_PAGE)
  }
}

function createBodyDom(
  dataType,
  data,
  { titleFormatter, type, itemSuffix, showHoliday },
  { header, body }
) {
  const list = data[dataType] || []
  // header
  let title = null
  if (type === TYPE_YEAR) {
    const firstItem = list[0]
    const lastItem = list[list.length - 1]
    let index = 0
    title = titleFormatter.replace(/(y+)/g, () => {
      return index++ === 0 ? firstItem.text : lastItem.text
    })
  } else {
    title = formatDate(data.currentDate, titleFormatter)
  }
  $('.' + CLASS_NAME_TITLE_WRAPPER, header).innerText = title
  // body
  let classList, tempArr, tagTitle
  body.innerHTML = list
    .reduce((prev, item, i) => {
      classList = ['__item']
      if (item.disabled) classList.push(CLASS_NAME_IS_DISABLED)
      if (item.value > 0) {
        tagTitle = ''
        if (item.holiday) {
          classList.push(CLASS_NAME_IS_HOLIDAY)
          tagTitle = ` title="${item.holiday}"`
        }
        if (item.selected) classList.push(CLASS_NAME_IS_SELECTED)
        if (item.current) classList.push(CLASS_NAME_IS_CURRENT)
        if (item.isRangeFirst && item.isRangeLast) {
          classList.push(CLASS_NAME_IS_RANGE_FIRST_LAST)
        } else {
          if (item.isRangeFirst) classList.push(CLASS_NAME_IS_RANGE_FIRST)
          if (item.isRangeLast) classList.push(CLASS_NAME_IS_RANGE_LAST)
        }
        if (item.isRangeTemp) classList.push(CLASS_NAME_IS_RANGE_TEMP)

        tempArr = [
          `<div class="${classList.join(' ')}" data-index="${i}"${tagTitle}>`,
        ]
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
        tempArr = [
          `<div class="${classList.join(
            ' '
          )}"><div class="__inner"></div></div>`,
        ]
      }
      prev.push(tempArr.join(''))
      return prev
    }, [])
    .join('')
}

function changeClassForSelectOneItem(el, { body }, isRange) {
  // remove class is-selected
  const [...currentItems] = body.querySelectorAll('.' + CLASS_NAME_IS_SELECTED)
  currentItems.forEach((item) => {
    removeClass(item, CLASS_NAME_IS_SELECTED)
    if (isRange) {
      removeClass(
        item,
        CLASS_NAME_IS_RANGE_FIRST,
        CLASS_NAME_IS_RANGE_LAST,
        CLASS_NAME_IS_RANGE_FIRST_LAST
      )
    }
  })
  // add class is-selected
  addClass(el, isRange ? CLASS_NAME_IS_RANGE_TEMP : CLASS_NAME_IS_SELECTED)
}

export { changeClassForSelectOneItem, createBodyDom, setHeaderBtnStatus }
