export default class Time {
  constructor (options) {
    this.options = options
    this.data = []
    this._value = []
    this[options.type]()
  }
  get value () {
    return this._value
  }
  set value (value) {
    this._value = value
    if (this.options.type === 'datetime') {
      this.getMonths(value.$maxMonth, value.$minMonth)
      this.getDates(value.$maxDate || value.$moth[value[1]], value.$minDate)
    }
  }
  time () {
    const options = this.options
    this.data = [
      {
        values: []
      },
      {
        values: []
      }
    ]
    for (let i = options.minHour; i <= options.maxHour; i++) {
      this.data[0].values.push(options.hourFormat.replace(/({value})/g, i.toString().padStart(2, 0)))
    }
    for (let i = options.minMinute; i <= options.maxMinute; i++) {
      this.data[1].values.push(options.minuteFormat.replace(/({value})/g, i.toString().padStart(2, 0)))
    }
  }
  date () {
    this.data = [
      {
        values: []
      },
      {
        values: []
      },
      {
        values: []
      }
    ]
    const options = this.options
    let minYear = options.minDate.getFullYear()
    let minMonth = options.minDate.getMonth() + 1
    let minDate = options.minDate.getDate()
    let maxYear = options.maxDate.getFullYear()
    let maxMonth = options.maxDate.getMonth() + 1
    let maxDate = options.maxDate.getDate()
    for (let i = minYear; i <= maxYear; i++) {
      let obj = {
        name: options.yearFormat.replace(/({value})/g, i),
        $minMonth: 1,
        $maxMonth: 12,
        $minDate: 1,
        $moth: []
      }
      if (i === minYear) {
        obj.$minMonth = minMonth
        obj.$minDate = minDate
      }
      if (i === maxYear) {
        obj.$maxMonth = maxMonth
        obj.$maxDate = maxDate
      }
      for (let j = 1; j <= 12; j++) {
        obj.$moth.push(this.getMonth(i, j))
      }
      this.data[0].values.push(obj)
    }
  }
  datetime () {
    this.data = this.date(this.options).concat(this.time(this.options))
  }
  getMonth (y, m) {
    if (m === 2) {
      return y % 4 ? 28 : 29
    }
    return Time.mObj[m]
  }
  getMonths (max = 12, min = 1) {
    for (let i = min; i <= max; i++) {
      this.data[1].values.push(this.options.monthFormat.replace(/({value})/g, i.toString().padStart(2, 0)))
    }
  }
  getDates (max, min = 1) {
    for (let i = min; i <= max; i++) {
      this.data[2].values.push(this.options.dateFormat.replace(/({value})/g, i.toString().padStart(2, 0)))
    }
  }
}
Time.mObj = {
  1: 31,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31
}
