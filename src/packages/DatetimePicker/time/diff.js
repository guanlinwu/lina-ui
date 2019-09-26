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
    let _values = this._values
    // 年月是否一样
    if (!this.diff(values, 1)) {
      console.log('diffMonth')
      let {
        min,
        max
      } = values[0].$moth[values[1].value]
      let {
        min: oldMin,
        max: oldMax
      } = _values[0].$moth[_values[1].value]
      if (max !== oldMax || min !== oldMin) {
        this.data[2].values = this.getForData(this.options.dateFormat, max, min)
        this.changeMove(values, _values, 2)
      }
    }
  },
  /**
   * 对比日期变化
   * @param {Array} values
   */
  diffDate (values) {
    let _values = this._values
    // 年月是否一样
    if (this.type === 'datetime' && !this.diff(values, 2)) {
      let max = 23
      let min = 0
      let oldMax = 23
      let oldMin = 0
      if (
        _values[0].$maxMonth === _values[1].value &&
        _values[0].$maxDate === _values[2].value
      ) {
        oldMax = _values[0].$maxHour
      }
      if (
        _values[0].$minMonth === _values[1].value &&
        _values[0].$minDate === _values[2].value
      ) {
        oldMin = _values[0].$minHour
      }
      if (
        values[0].$maxMonth === values[1].value &&
        values[0].$maxDate === values[2].value
      ) {
        max = values[0].$maxHour
      }
      if (
        values[0].$minMonth === values[1].value &&
        values[0].$minDate === values[2].value
      ) {
        min = values[0].$minHour
      }
      console.log(max, oldMax, min, oldMin)
      if (max !== oldMax || min !== oldMin) {
        this.data[3].values = this.getForData(this.options.hourFormat, max, min)
        this.changeMove(values, _values, 3)
      }
    }
  },
  /**
   * 对比日期变化
   * @param {Array} values
   */
  diffHour (values) {
    let _values = this._values
    // 年月是否一样
    if (this.type === 'datetime' && !this.diff(values, 3)) {
      let max = 59
      let min = 0
      let oldMax = 59
      let oldMin = 0
      if (
        _values[0].$maxMonth === _values[1].value &&
        _values[0].$maxDate === _values[2].value &&
        _values[0].$maxHour === _values[3].value
      ) {
        oldMax = _values[0].$maxMinute
      }
      if (
        _values[0].$minMonth === _values[1].value &&
        _values[0].$minDate === _values[2].value &&
        _values[0].$minHour === _values[3].value
      ) {
        oldMin = _values[0].$minMinute
      }
      if (
        values[0].$maxMonth === values[1].value &&
        values[0].$maxDate === values[2].value &&
        values[0].$maxHour === values[3].value
      ) {
        max = values[0].$maxMinute
      }
      if (
        values[0].$minMonth === values[1].value &&
        values[0].$minDate === values[2].value &&
        values[0].$minHour === values[3].value
      ) {
        min = values[0].$minMinute
      }
      if (max !== oldMax || min !== oldMin) {
        this.data[4].values = this.getForData(this.options.minuteFormat, max, min)
        this.changeMove(values, _values, 4)
      }
    }
  }
}
