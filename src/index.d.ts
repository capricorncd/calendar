/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-09-20 10:53
 */
export class ZxCalendar {

  constructor(params?: object);

  formatDate(str: any, fmt: string, langPackage?: object): string;

  toDate(str: any): Date | null;

  emit(eventName: string, ...params: any[]): void;

  on(eventName: string, fn: Function): void;

  off(eventName: string): void;

  prev(isYear?: boolean): void;

  next(isYear?: boolean): void;

  setDateRange(start: any, end: any): void;

  setDate(str?: any): void;

  setCurrentDate(str: any): void;

  getDate(): object[];

  destroy(): void;
}

