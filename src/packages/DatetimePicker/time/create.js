// 初始化
export default {
  // 创建月份
  createMonths () {
    this.data[1].values = this.getForData(this.options.monthFormat, this.defaultValue.maxMonth, this.defaultValue.minMonth)
  },
  // 创建日期
  createDates () {
    this.data[2].values = this.getForData(this.options.dateFormat, this.defaultValue.maxDate, this.defaultValue.minDate)
  }
}
