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

const HOLIDAYS = {
  jp: {},
  zh: {}
}

/**
 * init config
 * @param options
 * @returns {{weeks: (*|{abbr: string[], full: string[]}), holidays: (*|{})}}
 */
function initConfig(options) {
  const lang = options.lang || 'en'
  return {
    weeks: WEEKS[lang] || WEEKS.en,
    holidays: HOLIDAYS[lang] || HOLIDAYS.zh
  }
}

export {
  initConfig,
}
