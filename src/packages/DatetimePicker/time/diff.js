// value改变后，触发新旧values对比
export default {
  /**
   * 对比新旧日期,是否一致
   * @param {Array} values 新日期
   * @param {Number} max 0年1月如此类推
   * @returns {Boolean}
   */
  diff (values, max) {
    return values.slice(0, max + 1).every((obj, i) => obj.name === this._values[i].name)
  },
  /**
   * 对比年份
   * @param {Array} values
   */
  diffYear (values) {
    let {
      $maxMonth,
      $minMonth
    } = values[0]
    let _values = this._values
    // 年是否不一样
    if (!this.diff(values, 0) &&
      (
        $maxMonth !== _values[0].$maxMonth ||
        $minMonth !== _values[0].$minMonth
      )) {
      this.data[1].values = this.getForData(this.options.monthFormat, $maxMonth, $minMonth)
      this.changeMove(values, _values, 1)
    }
  },
  /**
   * 对比月份变化
   * @param {Array} values
   */
  diffMonth (values) {
    let {
      $maxMonth,
      $minMonth,
      $maxDate,
      $minDate
    } = values[0]
    let _values = this._values
    // 年月是否一样
    if (!this.diff(values, 1)) {
      let max = values[0].$moth[values[1].value]
      let oldMax = _values[0].$moth[_values[1].value]
      let min = 1
      let oldMin = 1
      if ($maxDate && $maxMonth === values[1].value) {
        max = $maxDate
      }
      if ($minMonth === values[1].value) {
        min = $minDate
      }
      if (_values[0].$maxDate && $maxMonth === _values[1].value) {
        oldMax = _values[0].$maxDate
      }
      if (_values[0].$minMonth === _values[1].value) {
        oldMin = _values[0].$minMonth
      }
      if (max !== oldMax || min !== oldMin) {
        this.data[2].values = this.getForData(this.options.dateFormat, max, min)
        this.changeMove(values, _values, 2)
      }
    }
  }
}
