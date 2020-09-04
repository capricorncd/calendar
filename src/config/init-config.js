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
export function initConfig({ lang, isFullWeek, langPackage }) {
  return {
    langPackage: {
      ...createTextObj(lang, isFullWeek),
      ...langPackage
    }
  }
}
