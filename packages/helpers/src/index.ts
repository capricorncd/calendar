import { formatDate, ILangPackage } from 'date-utils-2020'
import { MODE_SINGLE, DEF_OPTIONS } from '@zx-calendar/core'
import type { ZxCalendarModes, ZxCalendarItem } from '@zx-calendar/core'

type FormatValueType<T> = T extends typeof MODE_SINGLE | undefined
  ? string
  : string[]

/**
 *
 * @param result - choose date target array
 * @param mode - calendar's mode
 * @param formatter - format of return value
 * @param langPackage - language package information, see https://github.com/capricorncd/date-utils-2020/blob/main/README.md#langpackage
 * @returns {string | string[]}
 */
export function formatValue<T extends ZxCalendarModes>(
  result: Array<ZxCalendarItem>,
  mode: ZxCalendarModes,
  formatter?: string,
  langPackage?: ILangPackage
): FormatValueType<T> {
  const arr = result.map((item) => {
    return formatter
      ? formatDate(item.fullText, formatter, langPackage)
      : item.fullText
  })
  const res = !mode || mode === MODE_SINGLE ? arr[0] : arr
  return res as FormatValueType<T>
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
      typeof val !== 'undefined' &&
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
