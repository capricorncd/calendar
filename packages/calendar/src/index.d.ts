/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-09-20 10:53
 */
export class ZxCalendar {
  constructor(params?: object)

  formatDate<T>(str: T, fmt: string, langPackage?: object): string

  toDate<T>(str: T): Date | null

  emit(eventName: string, ...args: unknown[]): void

  on(eventName: string, fn: (...args: unknown[]) => void): void

  off(eventName: string): void

  prev(isYear?: boolean): void

  next(isYear?: boolean): void

  setDateRange(start: unknown, end: unknown): void

  setDate(str?: unknown): void

  setCurrentDate(str: unknown): void

  getDate(): object[]

  destroy(): void
}

export type * from './constants'
