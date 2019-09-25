export default class Time {
  constructor (type, picker, options) {
    this.options = options
    this.picker = picker
    this.data = []
    this.type = type
  }
  get type () {
    return this._type
  }
  set type (type) {
    this._type = type
    this.data = this[type]()
    if (this.isYear) {
      this.createMonths()
      this.createDates()
      this.addDefaultIndex({
        arr: this.data[1],
        api: 'getMonth'
      }, {
        arr: this.data[2],
        api: 'getDate'
      })
      this.getDefaultValues()
    }
  }
  get values () {
    return this._values
  }
  set values (values) {
    if (this.isYear && values[0]) {
      this.diffYear(values)
      this.diffMonth(values)
      this._values = values
    }
  }
  get defaultValue () {
    let dataValues = this.data[0].values
    let data0 = dataValues[0]
    let year = dataValues[this.data[0].defaultIndex]
    let defaultValue = {
      maxMonth: year.$maxMonth,
      minMonth: year.$minMonth,
      maxDate: data0.$moth[data0.$maxMonth],
      minDate: data0.$maxDate,
      maxHour: data0.$maxHour,
      minHour: data0.$minHour,
      maxMinute: data0.$maxMinute,
      minMinute: data0.$minMinute
    }
    let obj = this.data[0].values.find(obj => obj.value === this.defaultDateValue.year)
    let isUnlikeYear = obj.value !== data0.value
    // 不同的年 || 或者月份一样
    if (isUnlikeYear || this.defaultDateValue.month === obj.$maxMonth) {
      defaultValue.maxDate = obj.$maxDate || obj.$moth[this.defaultDateValue.month]
      if (this.type !== 'date' && this.defaultDateValue.date === obj.$maxDate) {
        defaultValue.maxHour = obj.$maxHour
        if (this.defaultDateValue.hour === obj.$maxHour) {
          defaultValue.maxMinute = obj.$maxMinute
        }
      }
    }
    if (isUnlikeYear || this.defaultDateValue.month === obj.$minMonth) {
      defaultValue.minDate = obj.$minDate
      if (this.type !== 'date' && this.defaultDateValue.date === obj.$minDate) {
        defaultValue.minHour = obj.$minHour
        if (this.defaultDateValue.hour === obj.$minHour) {
          defaultValue.minMinute = obj.$minMinute
        }
      }
    }
    return defaultValue
  }
  // maxDate和minDate具体时间
  get getDate () {
    const options = this.options
    return {
      $maxYear: options.maxDate.getFullYear(),
      $maxMonth: options.maxDate.getMonth() + 1,
      $maxDate: options.maxDate.getDate(),
      $maxHour: options.maxDate.getHours(),
      $maxMinute: options.maxDate.getMinutes(),
      $minYear: options.minDate.getFullYear(),
      $minMonth: options.minDate.getMonth() + 1,
      $minDate: options.minDate.getDate(),
      $minHour: options.minDate.getHours(),
      $minMinute: options.minDate.getMinutes()
    }
  }
  // 默认时间
  get defaultDateValue () {
    let {
      defaultIndex,
      minDate,
      maxDate
    } = this.options
    if (!(defaultIndex instanceof Date) || defaultIndex < minDate) {
      defaultIndex = minDate
    } else if (defaultIndex > maxDate) {
      defaultIndex = maxDate
    }
    return {
      year: defaultIndex.getFullYear(),
      month: defaultIndex.getMonth() + 1,
      date: defaultIndex.getDate(),
      hour: defaultIndex.getHours(),
      minute: defaultIndex.getMinutes()
    }
  }
  get isYear () {
    return this.type === 'datetime' || this.type === 'date'
  }
  get maxHour () {
    return this.type === 'time'
      ? this.options.maxHour
      : this.getDate.$maxHour
  }
  get minHour () {
    return this.type === 'time'
      ? this.options.minHour
      : this.getDate.$minHour
  }
  get maxMinute () {
    return this.type === 'time'
      ? this.options.maxMinute
      : this.getDate.$maxMinute
  }
  get minMinute () {
    return this.type === 'time'
      ? this.options.minMinute
      : this.getDate.$minMinute
  }
  time () {
    const arr = [
      {
        values: []
      },
      {
        values: []
      }
    ]
    arr[0].values = this.getForData(this.options.hourFormat, this.defaultValue.maxHour, this.defaultValue.minHour)
    arr[1].values = this.getForData(this.options.minuteFormat, this.defaultValue.maxMinute, this.defaultValue.minMinute)
    this.addDefaultIndex({
      arr: arr[0],
      api: 'getHours'
    }, {
      arr: arr[1],
      api: 'getMinutes'
    })
    return arr
  }
  date () {
    const arr = [
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
    const getDate = this.getDate
    const options = this.options
    for (let i = getDate.$minYear; i <= getDate.$maxYear; i++) {
      let obj = {
        value: i,
        name: options.yearFormat.replace(/({value})/g, i),
        $moth: {},
        $maxMonth: 12,
        $maxHour: 23,
        $maxMinute: 59,
        $minDate: 1,
        $minHour: 1,
        $minMinute: 1
      }
      for (let j = 1; j <= 12; j++) {
        obj.$moth[j] = this.getMonth(i, j)
      }
      if (i === getDate.$maxYear) {
        obj.$maxMonth = getDate.$maxMonth
        obj.$maxDate = getDate.$maxDate
        obj.$maxHour = getDate.$maxHour
        obj.$maxMinute = getDate.$maxMinute
        obj.$moth[getDate.$maxMonth] = getDate.$maxDate
      }
      if (i === getDate.$minYear) {
        obj.$minMonth = getDate.$minMonth
        obj.$minDate = getDate.$minDate
        obj.$minHour = getDate.$minHour
        obj.$minMinute = getDate.$minMinute
      }
      arr[0].values.push(obj)
    }
    this.addDefaultIndex({
      arr: arr[0],
      api: 'getFullYear'
    })
    return arr
  }
  datetime () {
    // 为了defaultValue这个值成功计算出来
    this.data = this.date()
    return this.data.concat(this.time())
  }
  /**
   * 生成slot数据
   * @param {String} format 格式
   * @param {Number} max
   * @param {Number} min
   * @returns {Array}
   */
  getForData (format, max, min = 1) {
    const data = []
    for (let i = min; i <= max; i++) {
      data.push({
        value: i,
        name: format.replace(/({value})/g, i.toString().padStart(2, 0))
      })
    }
    return data
  }
  /**
   * 为slot添加defaIndex
   * @param  {...any} apis
   * * @param {String} api Date的方法
   * * @param {String} arr slot数组
   */
  addDefaultIndex (...apis) {
    const {
      defaultIndex,
      minDate,
      maxDate
    } = this.options
    let val = 0
    if (defaultIndex instanceof Date) {
      apis.forEach(obj => {
        if (defaultIndex > maxDate) {
          val = obj.arr.values.length - 1
        } else if (defaultIndex < minDate) {
          val = 0
        } else {
          val = defaultIndex[obj.api]()
          if (obj.api === 'getMonth') {
            val++
          }
          val = obj.arr.values.findIndex(o => o.value === val)
          if (val === -1) {
            val = 0
          }
        }
        obj.arr.defaultIndex = val
      })
    } else {
      apis.forEach(obj => {
        obj.arr.defaultIndex = val
      })
    }
  }
  // 生成默认values
  getDefaultValues () {
    this._values = []
    this.data.forEach((obj, i) => {
      this._values.push(obj.values[this.getLimit(obj.defaultIndex, i)])
    })
  }
  /**
   * index的界限
   * @param {Number} index 目前的index
   * @param {Number} i 第几个数组
   * @returns {Number} 界限内的index
   */
  getLimit (index, i) {
    let length = this.data[i].values.length
    let y = 0
    if (index < length && index >= 0) {
      y = index
    } else if (index >= length) {
      y = length
    }
    return y
  }
  /**
   * 通过value找到index
   * @param {Number} i 第几个数组
   * @param {String} value
   * @returns {Number}
   */
  getIndex (i, value) {
    let index = this.data[i].values.findIndex(obj => obj.value === value)
    return this.getLimit(index, i)
  }
  /**
   * 闰年2月
   * @param {Number} y 年
   * @param {Number} m 月
   * @returns {Number} 有多少日
   */
  getMonth (y, m) {
    if (m === 2) {
      return y % 4 ? 28 : 29
    }
    return Time.mObj[m]
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
