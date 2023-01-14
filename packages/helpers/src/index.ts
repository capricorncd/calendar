import { formatDate, ILangPackage } from 'date-utils-2020'
import { MODE_SINGLE, DEF_OPTIONS } from '@zx-calendar/core'
import type { ZxCalendarModes } from '@zx-calendar/core'

/**
 *
 * @param result - choose date target array
 * @param mode - calendar's mode
 * @param formatter - format of return value
 * @param langPackage - language package information, see https://github.com/capricorncd/date-utils-2020/blob/main/README.md#langpackage
 * @returns {string | string[]}
 */
export function formatValue(
  result: Array<any>,
  mode: ZxCalendarModes,
  formatter?: string,
  langPackage?: ILangPackage
): string | string[] {
  const arr = result.map((item) => {
    return formatter
      ? formatDate(item.fullText, formatter, langPackage)
      : item.fullText
  })
  return mode === MODE_SINGLE ? arr[0] : arr
}

/**
 *
 * @param props - component's props
 * @returns
 */
export function initOptions(props) {
  const ret = {
    ...props.option,
  }
  let val
  Object.keys(DEF_OPTIONS).forEach((key) => {
    val = props[key]
    if (
      val &&
      (!Array.isArray(DEF_OPTIONS[key]) || DEF_OPTIONS[key].includes(val))
    ) {
      ret[key] = val
    }
  })
  if (props.value) {
    ret.defaultDate = props.value
  }
  return ret
}
