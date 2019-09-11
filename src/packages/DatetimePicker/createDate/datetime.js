import date from './date'
import time from './time'
export default function (options) {
  return date(options).concat(time(options))
}
