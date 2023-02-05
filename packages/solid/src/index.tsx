/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2022-12-30 15:10:21 (GMT+0900)
 */
import { onMount, JSX, createEffect, createSignal } from 'solid-js'
import { ZxCalendar } from '@zx-calendar/core'
import type {
  ZxCalendarItem,
  ZxCalendarOptions,
  ZxCalendarModes,
  ZxCalendarTypes,
} from '@zx-calendar/core'
import { formatValue, initOptions } from '@zx-calendar/helpers'

export * from '@zx-calendar/core'

export interface ZxSolidCalendarProps {
  // Date selected by default
  value?: string | number | Array<string | number>
  // Display type, default `date`
  type?: ZxCalendarTypes
  // Choose mode, default `single`
  mode?: ZxCalendarModes
  // Example: `yyyy/MM/dd`
  format?: string | 'timestamp'
  // language
  lang?: 'en' | 'zh' | 'jp'
  // if `true`, will return `Monday` else `Mon`
  isFullWeek?: boolean
  // Set title display format. Default mode date `yyyy/MM`, month `yyyy`, year `yyyy-yyyy`
  titleFormatter?: string
  // Example: date `日`, month `月`, year `年`
  itemSuffix?: string
  option?: ZxCalendarOptions
  change?: (date: string | string[], dates: ZxCalendarItem[]) => void
  instance?: (instance: ZxCalendar) => void
  header?: JSX.Element
  footer?: JSX.Element
}

export function ZxSolidCalendar(props: ZxSolidCalendarProps) {
  const { change, instance } = props

  const [zxCalendar, setZxCalendar] = createSignal<ZxCalendar>(null)

  let elRef: HTMLDivElement, value: string | string[]

  createEffect(() => {
    if (props.value !== value && zxCalendar()) {
      zxCalendar().setDate(props.value)
    }
  })

  onMount(() => {
    const options = initOptions(props)
    options.el = elRef

    const zxCalendar = new ZxCalendar(options)
    setZxCalendar(zxCalendar)

    instance?.(zxCalendar)

    zxCalendar.on('change', (res: ZxCalendarItem[]) => {
      value = formatValue(
        res,
        options.mode,
        options.format,
        options.langPackage
      )
      change?.(value, res)
    })
  })

  return (
    <div class="zx-calendar-wrapper">
      {props.header}
      <div ref={elRef}></div>
      {props.footer}
    </div>
  )
}
