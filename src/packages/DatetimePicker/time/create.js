// 初次化
export default {
  // 创建月份
  createMonths () {
    this.data[1].values = this.getForData(this.options.monthFormat, this.defaultValue.maxMonth, this.defaultValue.minMonth)
  },
  // 创建日期
  createDates () {
    this.data[2].values = this.getForData(this.options.dateFormat, this.defaultValue.maxDate, this.defaultValue.minDate)
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
