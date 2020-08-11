/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-08-08 16:25
 */
const WEEKS = {
  en: {
    full: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    // abbreviation
    abbr: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  },
  jp: {
    full: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
    abbr: ['日', '月', '火', '水', '木', '金', '土']
  },
  zh: {
    full: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
    abbr: ['日', '一', '二', '三', '四', '五', '六']
  }
}

// text
const TEXT_KEYS = ['confirmButton', 'cancelButton', 'clearButton']
const TEXT_VALUES = {
  en: ['ok', 'cancel', 'clear'],
  jp: ['選択', 'キャンセル', 'クリアー'],
  zh: ['确定', '取消', '清除']
}

function createTextObj(lang = 'en', isFullWeek) {
  const values = TEXT_VALUES[lang] || TEXT_VALUES.en
  const ret = TEXT_KEYS.reduce((prev, key, index) => {
    prev[key] = values[index]
    return prev
  }, {})
  const weeks = WEEKS[lang] || WEEKS.en
  ret.weeks = isFullWeek ? weeks.full : weeks.abbr
  return ret
}

/**
 * init config
 * @param options
 * @returns {{weeks: (*|{abbr: string[], full: string[]}), holidays: (*|{})}}
 */
function initConfig({ lang, isFullWeek }) {
  return {
    langPackage: createTextObj(lang, isFullWeek)
  }
}

// header title formatter
const HEADER_TITLE_FORMAT_DATE = 'yyyy/MM'
const HEADER_TITLE_FORMAT_YEAR = 'yyyy-yyyy'
const HEADER_TITLE_FORMAT_MONTH = 'yyyy'

// class name
const CLASS_NAME_IS_SELECTED = 'is-selected'
const CLASS_NAME_IS_DISABLED = 'is-disabled'
const CLASS_NAME_IS_HOLIDAY = 'is-holiday'
const CLASS_NAME_IS_CURRENT = 'is-current'
const CLASS_NAME_IS_RANGE_FIRST = 'is-range-first'
const CLASS_NAME_IS_RANGE_LAST = 'is-range-last'
const CLASS_NAME_IS_RANGE_TEMP = 'is-range-temp'
const CLASS_NAME_IS_FIRST_PAGE = 'is-first-page'
const CLASS_NAME_IS_LAST_PAGE = 'is-last-page'
const CLASS_NAME_IS_WEEKEND = 'is-weekend'
const CLASS_NAME_DATE_ONLY = 'date-only'
const CLASS_NAME_PREV_BUTTON = '__prev-button'
const CLASS_NAME_NEXT_BUTTON = '__next-button'
const CLASS_NAME_TITLE_WRAPPER = '__title-wrapper'
const CLASS_NAME_ITEM_WEEK = '__item-week'

const CLASS_NAME_CONFIRM_BUTTON = '__confirm-button'
const CLASS_NAME_CLEAR_BUTTON = '__clear-button'
const CLASS_NAME_CANCEL_BUTTON = '__cancel-button'

// mode
const MODE_MULTIPLE = 'multiple'
const MODE_RANGE = 'range'
const MODE_SINGLE = 'single'

// type
const TYPE_DATE = 'date'
const TYPE_MONTH = 'month'
const TYPE_YEAR = 'year'

export {
  CLASS_NAME_IS_DISABLED,
  CLASS_NAME_IS_SELECTED,
  CLASS_NAME_IS_HOLIDAY,
  CLASS_NAME_IS_FIRST_PAGE,
  CLASS_NAME_IS_LAST_PAGE,
  CLASS_NAME_IS_CURRENT,
  CLASS_NAME_IS_RANGE_FIRST,
  CLASS_NAME_IS_RANGE_LAST,
  CLASS_NAME_IS_RANGE_TEMP,
  CLASS_NAME_IS_WEEKEND,
  CLASS_NAME_DATE_ONLY,
  CLASS_NAME_ITEM_WEEK,
  CLASS_NAME_NEXT_BUTTON,
  CLASS_NAME_PREV_BUTTON,
  CLASS_NAME_TITLE_WRAPPER,
  CLASS_NAME_CONFIRM_BUTTON,
  CLASS_NAME_CLEAR_BUTTON,
  CLASS_NAME_CANCEL_BUTTON,
  HEADER_TITLE_FORMAT_DATE,
  HEADER_TITLE_FORMAT_MONTH,
  HEADER_TITLE_FORMAT_YEAR,
  initConfig,
  MODE_MULTIPLE,
  MODE_RANGE,
  MODE_SINGLE,
  TYPE_DATE,
  TYPE_MONTH,
  TYPE_YEAR
}
