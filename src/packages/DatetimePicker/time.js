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
      let date = this.getDate()
      this.data[1].values = this.getForData(this.options.monthFormat, date.$maxMonth, date.$minMonth)
      let max = date.$maxDate
      let min = date.$minDate
      if (this.options.defaultIndex instanceof Date) {
        let defaultDate = this.getDefaultDate()
        let obj = this.data[0].values.find(obj => obj.value === defaultDate.year)
        if (defaultDate.month !== obj.$maxMonth) {
          max = obj.$moth[defaultDate.month]
        }
        if (defaultDate.month !== obj.$maxMonth) {
          min = 1
        }
      }
      this.data[2].values = this.getForData(this.options.dateFormat, max, min)
      this.setTypeValue()
      this.getDefaultValues()
      console.log(JSON.parse(JSON.stringify(this.data)))
    }
  }
  get values () {
    return this._values
  }
  set values (values) {
    if (this.isYear && values[0]) {
      let {
        $maxMonth,
        $minMonth,
        $maxDate,
        $minDate
      } = values[0]
      this.selValue(values)
      if (this._values) {
        console.log(this._values[0].$maxMonth, $maxMonth, values[0].$minMonth, $minMonth)
        console.log(JSON.parse(JSON.stringify(this._values[0])), JSON.parse(JSON.stringify(values[0])))
      }
      if (this._values && (this._values[0].$maxMonth !== $maxMonth || values[0].$minMonth !== $minMonth)) {
        this.changeMove(this._values, 1)
      }
      if (this._values && (this._values[0].$maxDate !== $maxDate || values[0].$minDate !== $minDate)) {
        this.changeMove(this._values, 2)
      }
      this._values = values
    }
  }
  get isYear () {
    return this.type === 'datetime' || this.type === 'date'
  }
  selValue (data) {
    let {
      $maxMonth,
      $minMonth,
      $maxDate,
      $minDate
    } = data[0]
    let max = data[0].$moth[data[1].value]
    let min = 1
    if ($maxDate && $maxMonth === data[1].value) {
      max = $maxDate
    }
    if ($minMonth === data[1].value) {
      min = $minDate
    }
    this.data[1].values = this.getForData(this.options.monthFormat, $maxMonth, $minMonth)
    this.data[2].values = this.getForData(this.options.dateFormat, max, min)
  }
  setTypeValue () {
    this.getDefaultIndex({
      arr: this.data[1],
      api: 'getMonth'
    }, {
      arr: this.data[2],
      api: 'getDate'
    })
  }
  time () {
    const options = this.options
    const arr = [
      {
        values: []
      },
      {
        values: []
      }
    ]
    arr[0].values = this.getForData(this.options.hourFormat, options.maxHour, options.minHour)
    arr[1].values = this.getForData(this.options.minuteFormat, options.maxMinute, options.minMinute)
    this.getDefaultIndex({
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
    const options = this.options
    let {
      $minYear,
      $minMonth,
      $minDate,
      $maxYear,
      $maxMonth,
      $maxDate
    } = this.getDate()
    for (let i = $minYear; i <= $maxYear; i++) {
      let obj = {
        value: i,
        name: options.yearFormat.replace(/({value})/g, i),
        $minMonth: 1,
        $maxMonth: 12,
        $minDate: 1,
        $moth: {}
      }
      if (i === $minYear) {
        obj.$minMonth = $minMonth
        obj.$minDate = $minDate
      }
      if (i === $maxYear) {
        obj.$maxMonth = $maxMonth
        obj.$maxDate = $maxDate
      }
      for (let j = 1; j <= 12; j++) {
        obj.$moth[j] = this.getMonth(i, j)
      }
      arr[0].values.push(obj)
    }
    this.getDefaultIndex({
      arr: arr[0],
      api: 'getFullYear'
    })
    return arr
  }
  datetime () {
    return this.date().concat(this.time())
  }
  getMonth (y, m) {
    if (m === 2) {
      return y % 4 ? 28 : 29
    }
    return Time.mObj[m]
  }
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
  changeMove (values, i) {
    if (values) {
      this.picker.movePort(i, {
        val: values[i].name
      })
    }
  }
  getDefaultIndex (...apis) {
    const date = this.options.defaultIndex
    if (date instanceof Date) {
      let val
      apis.forEach(obj => {
        val = date[obj.api]()
        if (obj.api === 'getMonth') {
          val++
        }
        let defaultIndex = obj.arr.values.findIndex(o => o.value === val)
        if (defaultIndex !== -1) {
          obj.arr.defaultIndex = defaultIndex
        }
      })
    } else {
      apis.forEach(obj => {
        obj.arr.defaultIndex = 0
      })
    }
  }
  getDefaultValues () {
    this._values = []
    this.data.map(obj => {
      let index = 0
      let defaultIndex = obj.defaultIndex
      let length = obj.values.length
      if (defaultIndex < length && defaultIndex >= 0) {
        index = defaultIndex
      } else if (defaultIndex >= length) {
        index = length - 1
      }
      this._values.push(obj.values[index])
    })
  }
  getDate () {
    const options = this.options
    return {
      $minYear: options.minDate.getFullYear(),
      $minMonth: options.minDate.getMonth() + 1,
      $minDate: options.minDate.getDate(),
      $maxYear: options.maxDate.getFullYear(),
      $maxMonth: options.maxDate.getMonth() + 1,
      $maxDate: options.maxDate.getDate()
    }
  }
  getDefaultDate () {
    const defaultIndex = this.options.defaultIndex
    return {
      year: defaultIndex.getFullYear(),
      month: defaultIndex.getMonth() + 1,
      date: defaultIndex.getDate()
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
