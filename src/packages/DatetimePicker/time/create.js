// 初次化
export default {
  // 创建月份
  createMonths () {
    let year = this.data[0].values[this.data[0].defaultIndex]
    this.data[1].values = this.getForData(this.options.monthFormat, year.$maxMonth, year.$minMonth)
  },
  // 创建日期
  createDates () {
    let data0 = this.data[0].values[0]
    let max = data0.$moth[data0.$maxMonth]
    let min = data0.$minDate
    if (this.options.defaultIndex instanceof Date) {
      let obj = this.data[0].values.find(obj => obj.value === this.defaultDateValue.year)
      let isUnlikeYear = obj.value !== data0.value
      // 不同的年 || 或者月份一样
      if (isUnlikeYear || this.defaultDateValue.month === obj.$maxMonth) {
        max = obj.$maxDate || obj.$moth[this.defaultDateValue.month]
      }
      if (isUnlikeYear || this.defaultDateValue.month === obj.$minMonth) {
        min = obj.$minDate
      }
    }
    this.data[2].values = this.getForData(this.options.dateFormat, max, min)
  },
  // 创建时间
  createDefaultTime () {
    const obj = {
      maxHour: this.maxHour,
      minHour: this.minHour,
      maxMinute: this.maxMinute,
      minMinute: this.minMinute
    }
    console.log(JSON.parse(JSON.stringify(obj)))
    const {
      year,
      month,
      date,
      hour
    } = this.defaultDateValue
    if (this.type === 'time') {
      return obj
    }
    if (
      year === this.getDate.$maxYear &&
      month === this.getDate.$maxMonth &&
      date === this.getDate.$maxDate
    ) {
      obj.maxHour = this.getDate.$maxHour
      if (hour === this.getDate.$maxHour) {
        obj.maxMinute = this.getDate.$maxMinute
      }
    } else if (
      year === this.getDate.$minYear &&
      month === this.getDate.$minMonth &&
      date === this.getDate.$minDate
    ) {
      obj.minHour = this.getDate.$minHour
      if (hour === this.getDate.$minHour) {
        obj.minMinute = this.getDate.$minMinute
      }
    }
    console.log(obj)
    return obj
  }
}
