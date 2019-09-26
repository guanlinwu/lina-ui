// 当上一级的时间改变，下一级也有可能改变
export default {
  /**
   * 运动
   * @param {Array} newValue 新的
   * @param {Array} olbValue 旧的
   * @param {Number} i 第几组
   */
  changeMove (newValue, olbValue, i) {
    // console.log(i, 'newValue:', JSON.parse(JSON.stringify(newValue)), 'olbValue:', JSON.parse(JSON.stringify(olbValue)))
    let value = this.changeMoveValue(newValue, olbValue, i)
    // console.log(value)
    this.picker.movePort(i, {
      value
    })
  },
  /**
   * 获取运动的value
   * @param {Array} newValue 新的
   * @param {Array} olbValue 旧的
   * @param {Number} i 第几组
   * @returns {String} 新的value
   */
  changeMoveValue (newValue, olbValue, i) {
    let value = olbValue[i].value
    let newY = newValue[0]
    if (i === 1) {
      value = this.changeYear(value, newY)
    } else if (i === 2) {
      value = this.changeMonth(value, newY, newValue)
    } else if (i === 3) {
      value = this.changeDate(value, newY)
    } else if (i === 4) {
      value = this.changeHour(value, newY)
    }
    return value
  },
  /**
   * 返回运动需要的val
   * @param {String} value 旧的value
   * @param {Object} newY 新的年
   * @returns {String} 新的value
   */
  changeYear (value, newY) {
    if (value <= newY.$minMonth) {
      value = newY.$minMonth
    } else if (value >= newY.$maxMonth) {
      value = newY.$maxMonth
    }
    return value
  },
  /**
   * 返回运动需要的val
   * @param {String} value 旧的年.value
   * @param {Object} newY 新的年
   * @param {Array} newValue 新的
   * @returns {String} 新的value
   */
  changeMonth (value, newY, newValue) {
    let moth = newY.$moth[newValue[1].value]
    if (value <= moth.min) {
      value = moth.min
    } else if (value >= moth.max) {
      value = moth.max
    }
    return value
  },
  /**
   * 返回运动需要的val
   * @param {String} value 旧的年.value
   * @param {Object} newY 新的年
   * @returns {String} 新的value
   */
  changeDate (value, newY) {
    if (value <= newY.$minHour) {
      value = newY.$minHour
    } else if (value >= newY.$maxHour) {
      value = newY.$maxHour
    }
    return value
  },
  /**
   * 返回运动需要的val
   * @param {String} value 旧的年.value
   * @param {Object} newY 新的年
   * @returns {String} 新的value
   */
  changeHour (value, newY) {
    if (value <= newY.$minMinute) {
      value = newY.$minMinute
    } else if (value >= newY.$maxMinute) {
      value = newY.$maxMinute
    }
    return value
  }
}
