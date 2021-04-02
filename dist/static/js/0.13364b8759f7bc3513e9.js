(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module) {

module.exports = JSON.parse("{\"packagesTypes\":[{\"typeName\":\"操作反馈\",\"typeEnName\":\"operate feedback\"},{\"typeName\":\"视图组件\",\"typeEnName\":\"view component\"},{\"typeName\":\"通用函数\",\"typeEnName\":\"general function\"},{\"typeName\":\"指令\",\"typeEnName\":\"directive\"}],\"packages\":[{\"version\":\"1.0.0\",\"name\":\"Toast\",\"chnName\":\"轻提示\",\"desc\":\"轻提示。\",\"type\":\"method\",\"belong\":\"operate feedback\",\"author\":[\"lin\"]},{\"version\":\"1.0.0\",\"name\":\"Loading\",\"chnName\":\"加载圈\",\"desc\":\"loading\",\"type\":\"method\",\"belong\":\"operate feedback\",\"author\":[\"lin\"]},{\"version\":\"1.0.1\",\"name\":\"Dialog\",\"chnName\":\"对话框\",\"desc\":\"Dialog\",\"type\":\"method|component\",\"belong\":\"operate feedback\",\"author\":[\"lin\"]},{\"version\":\"1.0.0\",\"name\":\"ActionSheet\",\"chnName\":\"动作面板\",\"desc\":\"ActionSheet\",\"type\":\"component\",\"belong\":\"operate feedback\",\"author\":[\"lin\"]},{\"version\":\"1.0.0\",\"name\":\"Popup\",\"chnName\":\"弹出蒙层\",\"desc\":\"Popup\",\"type\":\"component\",\"belong\":\"operate feedback\",\"author\":[\"lin\"]},{\"version\":\"1.0.0\",\"name\":\"PopCurtain\",\"chnName\":\"广告图弹窗\",\"desc\":\"PopCurtain\",\"type\":\"component\",\"belong\":\"view component\",\"author\":[\"lin\"]},{\"version\":\"1.0.0\",\"name\":\"PreLoad\",\"chnName\":\"预加载\",\"desc\":\"PreLoad\",\"type\":\"method\",\"belong\":\"general function\",\"author\":[\"lin\"]},{\"version\":\"1.0.0\",\"name\":\"CarouselNotice\",\"chnName\":\"滚动公告\",\"desc\":\"滚动公告\",\"type\":\"component\",\"belong\":\"view component\",\"author\":[\"lin\"]},{\"version\":\"1.0.0\",\"name\":\"PullRefresh\",\"chnName\":\"下拉刷新\",\"desc\":\"PullRefresh\",\"type\":\"component\",\"belong\":\"operate feedback\",\"author\":[\"lin\"]},{\"version\":\"1.0.0\",\"name\":\"Picker\",\"chnName\":\"选择器\",\"desc\":\"Picker\",\"type\":\"component\",\"belong\":\"view component\",\"author\":[\"mwc\"]},{\"version\":\"1.0.0\",\"name\":\"DatetimePicker\",\"chnName\":\"时间选择器\",\"desc\":\"DatetimePicker\",\"type\":\"component\",\"belong\":\"view component\",\"author\":[\"mwc\"]},{\"version\":\"1.0.0\",\"name\":\"Tabs\",\"chnName\":\"标签页\",\"desc\":\"Tabs\",\"type\":\"component\",\"belong\":\"view component\",\"author\":[\"lgn\"]},{\"version\":\"1.0.0\",\"name\":\"lazyLoadImg\",\"chnName\":\"图片懒加载\",\"desc\":\"lazyload images\",\"type\":\"directive\",\"belong\":\"directive\",\"author\":[\"lgn\"]},{\"version\":\"1.0.0\",\"name\":\"NavBar\",\"chnName\":\"导航栏\",\"desc\":\"NavBar\",\"type\":\"component\",\"belong\":\"view component\",\"author\":[\"lin\"]},{\"version\":\"1.0.0\",\"name\":\"More\",\"chnName\":\"更多\",\"desc\":\"More\",\"type\":\"component\",\"belong\":\"view component\",\"author\":[\"mwc\"]}]}");

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return throttleFn; });
/*eslint-disable*/
// 关闭eslint，因为为了提高性能用逻辑操作符，进而用了逗号表达式
// atOnce 首次触发时是否立即执行函数
// atTail 停止触发后是否再执行一次,在这里相当于滚动监听完成后再次执行一次fn
// wait 节流停止触发fn的时间，在这段时间内，不会再触发fn的调用
function throttleFn(fn) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$atOnce = _ref.atOnce,
      atOnce = _ref$atOnce === void 0 ? !0 : _ref$atOnce,
      _ref$atTail = _ref.atTail,
      atTail = _ref$atTail === void 0 ? !0 : _ref$atTail;

  var timeout;
  var previous = 0;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = this;
    var now = Date.now() || new Date().getTime(); // previous || 代表第一次触发或定时器触发后的首次触发，不立即执行则将previous改为now

    previous || atOnce || (previous = now);
    var remaining = wait - (now - previous);
    (remaining <= 0 || remaining > wait) && (timeout && (clearTimeout(timeout), timeout = null), previous = now, fn.apply(context, args));
    timeout || !atTail || ( // 若有剩余时间但定时器不存在，且atTail不为false，则设置定时器
    // atTail为false时相当于只用时间戳来实现节流
    timeout = setTimeout(function () {
      // 如果atOnce为false，则将previous改为为0，下次触发时会与下次触发时的now同步，达到首次触发不立即执行
      // 如果直接设为当前时间戳，若停止触发一段时间，下次触发时的remaining为负值，会立即执行
      previous = atOnce ? Date.now() || new Date().getTime() : 0;
      timeout = null;
      fn.apply(context, args);
    }, remaining));
  };
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(4);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(7);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(8);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// CONCATENATED MODULE: ./src/packages/DatetimePicker/time/time.js



var time_Time = /*#__PURE__*/function () {
  function Time(type, picker, options) {
    classCallCheck_default()(this, Time);

    this.options = options;
    this.picker = picker;
    this.data = [];
    this.type = type;
  }

  createClass_default()(Time, [{
    key: "type",
    get: function get() {
      return this._type;
    },
    set: function set(type) {
      this._type = type;
      this.data = this[type]();

      if (this.isYear) {
        this.createMonths();
        this.createDates();
        this.addDefaultIndex({
          arr: this.data[1],
          api: 'getMonth'
        }, {
          arr: this.data[2],
          api: 'getDate'
        });
        this.getDefaultValues();
      }
    }
  }, {
    key: "values",
    get: function get() {
      return this._values;
    },
    set: function set(values) {
      if (this.isYear && values[0]) {
        this.diffYear(values);
        this.diffMonth(values);
        this.diffDate(values);
        this.diffHour(values);
        this._values = values;
      }
    }
  }, {
    key: "defaultValue",
    get: function get() {
      var _this = this;

      var dataValues = this.data[0].values;
      var data0 = dataValues[0];
      var moth = data0.$moth[data0.$maxMonth];
      var year = dataValues[this.data[0].defaultIndex];
      var defaultValue = {
        maxMonth: year.$maxMonth,
        minMonth: year.$minMonth,
        maxDate: moth.max,
        minDate: moth.min,
        maxHour: 23,
        minHour: 1,
        maxMinute: 59,
        minMinute: 1
      };
      var obj = this.data[0].values.find(function (obj) {
        return obj.value === _this.defaultDateValue.year;
      });
      var isUnlikeYear = obj.value !== data0.value;
      this.setDefaultValue('max', {
        defaultValue: defaultValue,
        obj: obj,
        isUnlikeYear: isUnlikeYear
      });
      this.setDefaultValue('min', {
        defaultValue: defaultValue,
        obj: obj,
        isUnlikeYear: isUnlikeYear
      }); // // 不同的年 || 或者月份一样
      // if (isUnlikeYear || this.defaultDateValue.month === obj.$maxMonth) {
      //   defaultValue.maxDate = objMoth.max
      //   if (this.type !== 'date' && this.defaultDateValue.date === obj.$maxDate) {
      //     defaultValue.maxHour = obj.$maxHour
      //     if (this.defaultDateValue.hour === obj.$maxHour) {
      //       defaultValue.maxMinute = obj.$maxMinute
      //     }
      //   }
      // }
      // if (isUnlikeYear || this.defaultDateValue.month === obj.$minMonth) {
      //   defaultValue.minDate = objMoth.min
      //   if (this.type !== 'date' && this.defaultDateValue.date === obj.$minDate) {
      //     defaultValue.minHour = obj.$minHour
      //     if (this.defaultDateValue.hour === obj.$minHour) {
      //       defaultValue.minMinute = obj.$minMinute
      //     }
      //   }
      // }

      return defaultValue;
    }
    /**
     * defaultValue: max和min的抽离
     * @param {String} key max || min
     * @param {*} param1
     */

  }, {
    key: "setDefaultValue",
    value: function setDefaultValue(key, _ref) {
      var defaultValue = _ref.defaultValue,
          obj = _ref.obj,
          isUnlikeYear = _ref.isUnlikeYear;
      var objMoth = obj.$moth[this.defaultDateValue.month]; // 不同的年 || 或者月份一样

      if (isUnlikeYear || this.defaultDateValue.month === obj["$".concat(key, "Month")]) {
        var k = key + 'Date';
        defaultValue[k] = objMoth[key];

        if (this.type !== 'date' && this.defaultDateValue.date === obj['$' + k]) {
          k = key + 'Hour';
          defaultValue[k] = obj['$' + k];

          if (this.defaultDateValue.hour === obj['$' + k]) {
            k = key + 'Minute';
            defaultValue[k] = obj['$' + k];
          }
        }
      }
    } // maxDate和minDate具体时间

  }, {
    key: "getDate",
    get: function get() {
      var options = this.options;
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
      };
    } // 默认时间

  }, {
    key: "defaultDateValue",
    get: function get() {
      var _this$options = this.options,
          defaultDate = _this$options.defaultDate,
          minDate = _this$options.minDate,
          maxDate = _this$options.maxDate;

      if (!(defaultDate instanceof Date) || defaultDate < minDate) {
        defaultDate = minDate;
      } else if (defaultDate > maxDate) {
        defaultDate = maxDate;
      }

      return {
        year: defaultDate.getFullYear(),
        month: defaultDate.getMonth() + 1,
        date: defaultDate.getDate(),
        hour: defaultDate.getHours(),
        minute: defaultDate.getMinutes()
      };
    }
  }, {
    key: "isYear",
    get: function get() {
      return this.type === 'datetime' || this.type === 'date';
    }
  }, {
    key: "maxHour",
    get: function get() {
      return this.type === 'time' ? this.options.maxHour : this.getDate.$maxHour;
    }
  }, {
    key: "minHour",
    get: function get() {
      return this.type === 'time' ? this.options.minHour : this.getDate.$minHour;
    }
  }, {
    key: "maxMinute",
    get: function get() {
      return this.type === 'time' ? this.options.maxMinute : this.getDate.$maxMinute;
    }
  }, {
    key: "minMinute",
    get: function get() {
      return this.type === 'time' ? this.options.minMinute : this.getDate.$minMinute;
    }
  }, {
    key: "time",
    value: function time() {
      var arr = [{
        values: []
      }, {
        values: []
      }];
      var maxHour = this.options.maxHour;
      var minHour = this.options.minHour;
      var maxMinute = this.options.maxMinute;
      var minMinute = this.options.minMinute;

      if (this.type === 'datetime') {
        maxHour = this.defaultValue.maxHour;
        minHour = this.defaultValue.minHour;
        maxMinute = this.defaultValue.maxMinute;
        minMinute = this.defaultValue.minMinute;
      }

      arr[0].values = this.getForData(this.options.hourFormat, maxHour, minHour);
      arr[1].values = this.getForData(this.options.minuteFormat, maxMinute, minMinute);
      this.addDefaultIndex({
        arr: arr[0],
        api: 'getHours'
      }, {
        arr: arr[1],
        api: 'getMinutes'
      });
      return arr;
    }
  }, {
    key: "date",
    value: function date() {
      var arr = [{
        values: []
      }, {
        values: []
      }, {
        values: []
      }];
      var getDate = this.getDate;
      var options = this.options;

      for (var i = getDate.$minYear; i <= getDate.$maxYear; i++) {
        var minMonth = 0;
        var maxMonth = 12;
        var obj = {
          value: i,
          name: options.yearFormat.replace(/({value})/g, i),
          $moth: {},
          $maxMonth: 12,
          $maxHour: 23,
          $maxMinute: 59,
          $minDate: 1,
          $minHour: 0,
          $minMinute: 0
        };

        for (var j = 1; j <= 12; j++) {
          obj.$moth[j] = {
            min: 1,
            max: this.getMonth(i, j)
          };
        }

        if (i === getDate.$maxYear) {
          obj.$maxMonth = getDate.$maxMonth;
          obj.$maxDate = getDate.$maxDate;
          obj.$maxHour = getDate.$maxHour;
          obj.$maxMinute = getDate.$maxMinute;
          maxMonth = getDate.$maxMonth;
          obj.$moth[maxMonth].max = getDate.$maxDate;
        }

        if (i === getDate.$minYear) {
          obj.$minMonth = getDate.$minMonth;
          obj.$minDate = getDate.$minDate;
          obj.$minHour = getDate.$minHour;
          obj.$minMinute = getDate.$minMinute;
          minMonth = getDate.$minMonth;
          obj.$moth[minMonth].min = getDate.$minDate;
        } // for (let j = 1; j < minMonth; j++) {
        //   delete obj.$moth[j]
        // }
        // for (let j = 12; j > minMonth; j--) {
        //   delete obj.$moth[j]
        // }


        arr[0].values.push(obj);
      }

      this.addDefaultIndex({
        arr: arr[0],
        api: 'getFullYear'
      });
      return arr;
    }
  }, {
    key: "datetime",
    value: function datetime() {
      // 为了defaultValue这个值成功计算出来
      this.data = this.date();
      return this.data.concat(this.time());
    }
    /**
     * 生成slot数据
     * @param {String} format 格式
     * @param {Number} max
     * @param {Number} min
     * @returns {Array}
     */

  }, {
    key: "getForData",
    value: function getForData(format, max) {
      var min = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var data = [];

      for (var i = min; i <= max; i++) {
        data.push({
          value: i,
          name: this.getFormat(format, i)
        });
      }

      return data;
    }
  }, {
    key: "getFormat",
    value: function getFormat(format, val) {
      return format.replace(/({value})/g, val.toString().padStart(2, 0));
    }
    /**
     * 为slot添加defaIndex
     * @param  {...any} apis
     * * @param {String} api Date的方法
     * * @param {String} arr slot数组
     */

  }, {
    key: "addDefaultIndex",
    value: function addDefaultIndex() {
      var _this$options2 = this.options,
          defaultDate = _this$options2.defaultDate,
          minDate = _this$options2.minDate,
          maxDate = _this$options2.maxDate;
      var val = 0;

      for (var _len = arguments.length, apis = new Array(_len), _key = 0; _key < _len; _key++) {
        apis[_key] = arguments[_key];
      }

      if (defaultDate instanceof Date) {
        apis.forEach(function (obj) {
          if (defaultDate > maxDate) {
            val = obj.arr.values.length - 1;
          } else if (defaultDate < minDate) {
            val = 0;
          } else {
            val = defaultDate[obj.api]();

            if (obj.api === 'getMonth') {
              val++;
            }

            val = obj.arr.values.findIndex(function (o) {
              return o.value === val;
            });

            if (val === -1) {
              val = 0;
            }
          }

          obj.arr.defaultIndex = val;
        });
      } else {
        apis.forEach(function (obj) {
          obj.arr.defaultIndex = val;
        });
      }
    } // 生成默认values

  }, {
    key: "getDefaultValues",
    value: function getDefaultValues() {
      var _this2 = this;

      this._values = [];
      this.data.forEach(function (obj, i) {
        _this2._values.push(obj.values[_this2.getLimit(obj.defaultIndex, i)]);
      });
    }
    /**
     * index的界限
     * @param {Number} index 目前的index
     * @param {Number} i 第几个数组
     * @returns {Number} 界限内的index
     */

  }, {
    key: "getLimit",
    value: function getLimit(index, i) {
      var length = this.data[i].values.length;
      var y = 0;

      if (index < length && index >= 0) {
        y = index;
      } else if (index >= length) {
        y = length;
      }

      return y;
    }
    /**
     * 通过value找到index
     * @param {Number} i 第几个数组
     * @param {String} value
     * @returns {Number}
     */

  }, {
    key: "getIndex",
    value: function getIndex(i, value) {
      var index = this.data[i].values.findIndex(function (obj) {
        return obj.value === value;
      });
      return this.getLimit(index, i);
    }
    /**
     * 闰年2月
     * @param {Number} y 年
     * @param {Number} m 月
     * @returns {Number} 有多少日
     */

  }, {
    key: "getMonth",
    value: function getMonth(y, m) {
      if (m === 2) {
        return y % 4 ? 28 : 29;
      }

      return Time.mObj[m];
    }
  }]);

  return Time;
}();


time_Time.mObj = {
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
};
// CONCATENATED MODULE: ./src/packages/DatetimePicker/time/create.js
// 初始化
/* harmony default export */ var create = ({
  // 创建月份
  createMonths: function createMonths() {
    this.data[1].values = this.getForData(this.options.monthFormat, this.defaultValue.maxMonth, this.defaultValue.minMonth);
  },
  // 创建日期
  createDates: function createDates() {
    this.data[2].values = this.getForData(this.options.dateFormat, this.defaultValue.maxDate, this.defaultValue.minDate);
  }
});
// CONCATENATED MODULE: ./src/packages/DatetimePicker/time/diff.js
// value改变后，触发新旧values对比
/* harmony default export */ var diff = ({
  /**
   * 对比新旧日期,是否一致
   * @param {Array} values 新日期
   * @param {Number} max 0年1月如此类推
   * @returns {Boolean}
   */
  diff: function diff(values, max) {
    var _this = this;

    return values.slice(0, max + 1).every(function (obj, i) {
      return obj.name === _this._values[i].name;
    });
  },

  /**
   * 对比年份
   * @param {Array} values
   */
  diffYear: function diffYear(values) {
    var _values$ = values[0],
        $maxMonth = _values$.$maxMonth,
        $minMonth = _values$.$minMonth;
    var _values = this._values; // 年是否不一样

    if (!this.diff(values, 0) && ($maxMonth !== _values[0].$maxMonth || $minMonth !== _values[0].$minMonth)) {
      this.data[1].values = this.getForData(this.options.monthFormat, $maxMonth, $minMonth);
      this.changeMove(values, _values, 1);
    }
  },

  /**
   * 对比月份变化
   * @param {Array} values
   */
  diffMonth: function diffMonth(values) {
    var _values = this._values; // 年月是否一样

    if (!this.diff(values, 1)) {
      var _values$0$$moth$value = values[0].$moth[values[1].value],
          min = _values$0$$moth$value.min,
          max = _values$0$$moth$value.max;
      var _values$0$$moth$_valu = _values[0].$moth[_values[1].value],
          oldMin = _values$0$$moth$_valu.min,
          oldMax = _values$0$$moth$_valu.max;

      if (max !== oldMax || min !== oldMin) {
        this.data[2].values = this.getForData(this.options.dateFormat, max, min);
        this.changeMove(values, _values, 2);
      }
    }
  },

  /**
   * 对比日期变化
   * @param {Array} values
   */
  diffDate: function diffDate(values) {
    var _values = this._values; // 年月是否一样

    if (!(this.type === 'datetime' && !this.diff(values, 3))) return;
    var max = 23;
    var min = 0;
    var oldMax = 23;
    var oldMin = 0;

    if (_values[0].$maxMonth === _values[1].value && _values[0].$maxDate === _values[2].value) {
      oldMax = _values[0].$maxHour;
    }

    if (_values[0].$minMonth === _values[1].value && _values[0].$minDate === _values[2].value) {
      oldMin = _values[0].$minHour;
    }

    if (values[0].$maxMonth === values[1].value && values[0].$maxDate === values[2].value) {
      max = values[0].$maxHour;
    }

    if (values[0].$minMonth === values[1].value && values[0].$minDate === values[2].value) {
      min = values[0].$minHour;
    }

    if (max !== oldMax || min !== oldMin) {
      this.data[3].values = this.getForData(this.options.hourFormat, max, min);
      this.changeMove(values, _values, 3);
    }
  },

  /**
   * 对比日期变化
   * @param {Array} values
   */
  diffHour: function diffHour(values) {
    var _values = this._values; // 年月是否一样

    if (!(this.type === 'datetime' && !this.diff(values, 3))) return;
    var max = 59;
    var min = 0;
    var oldMax = 59;
    var oldMin = 0;

    if (_values[0].$maxMonth === _values[1].value && _values[0].$maxDate === _values[2].value && _values[0].$maxHour === _values[3].value) {
      oldMax = _values[0].$maxMinute;
    }

    if (_values[0].$minMonth === _values[1].value && _values[0].$minDate === _values[2].value && _values[0].$minHour === _values[3].value) {
      oldMin = _values[0].$minMinute;
    }

    if (values[0].$maxMonth === values[1].value && values[0].$maxDate === values[2].value && values[0].$maxHour === values[3].value) {
      max = values[0].$maxMinute;
    }

    if (values[0].$minMonth === values[1].value && values[0].$minDate === values[2].value && values[0].$minHour === values[3].value) {
      min = values[0].$minMinute;
    }

    if (max !== oldMax || min !== oldMin) {
      this.data[4].values = this.getForData(this.options.minuteFormat, max, min);
      this.changeMove(values, _values, 4);
    }
  }
});
// CONCATENATED MODULE: ./src/packages/DatetimePicker/time/move.js
// 当上一级的时间改变，下一级也有可能改变
/* harmony default export */ var move = ({
  /**
   * 运动
   * @param {Array} newValue 新的
   * @param {Array} olbValue 旧的
   * @param {Number} i 第几组
   */
  changeMove: function changeMove(newValue, olbValue, i) {
    // console.log(i, 'newValue:', JSON.parse(JSON.stringify(newValue)), 'olbValue:', JSON.parse(JSON.stringify(olbValue)))
    var value = this.changeMoveValue(newValue, olbValue, i); // console.log(value)

    this.picker.movePort(i, {
      value: value
    });
  },

  /**
   * 获取运动的value
   * @param {Array} newValue 新的
   * @param {Array} olbValue 旧的
   * @param {Number} i 第几组
   * @returns {String} 新的value
   */
  changeMoveValue: function changeMoveValue(newValue, olbValue, i) {
    var value = olbValue[i].value;
    var newY = newValue[0];

    if (i === 1) {
      value = this.changeYear(value, newY);
    } else if (i === 2) {
      value = this.changeMonth(value, newY, newValue);
    } else if (i === 3) {
      value = this.changeDate(value, newY);
    } else if (i === 4) {
      value = this.changeHour(value, newY);
    }

    return value;
  },

  /**
   * 返回运动需要的val
   * @param {String} value 旧的value
   * @param {Object} newY 新的年
   * @returns {String} 新的value
   */
  changeYear: function changeYear(value, newY) {
    if (value <= newY.$minMonth) {
      value = newY.$minMonth;
    } else if (value >= newY.$maxMonth) {
      value = newY.$maxMonth;
    }

    return value;
  },

  /**
   * 返回运动需要的val
   * @param {String} value 旧的年.value
   * @param {Object} newY 新的年
   * @param {Array} newValue 新的
   * @returns {String} 新的value
   */
  changeMonth: function changeMonth(value, newY, newValue) {
    var moth = newY.$moth[newValue[1].value];

    if (value <= moth.min) {
      value = moth.min;
    } else if (value >= moth.max) {
      value = moth.max;
    }

    return value;
  },

  /**
   * 返回运动需要的val
   * @param {String} value 旧的年.value
   * @param {Object} newY 新的年
   * @returns {String} 新的value
   */
  changeDate: function changeDate(value, newY) {
    if (value <= newY.$minHour) {
      value = newY.$minHour;
    } else if (value >= newY.$maxHour) {
      value = newY.$maxHour;
    }

    return value;
  },

  /**
   * 返回运动需要的val
   * @param {String} value 旧的年.value
   * @param {Object} newY 新的年
   * @returns {String} 新的value
   */
  changeHour: function changeHour(value, newY) {
    if (value <= newY.$minMinute) {
      value = newY.$minMinute;
    } else if (value >= newY.$maxMinute) {
      value = newY.$maxMinute;
    }

    return value;
  }
});
// CONCATENATED MODULE: ./src/packages/DatetimePicker/time/index.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var time_prototype = time_Time.prototype;

var obj = _objectSpread(_objectSpread(_objectSpread({}, create), diff), move);

Object.keys(obj).forEach(function (key) {
  Object.defineProperty(time_prototype, key, {
    value: obj[key]
  });
});
/* harmony default export */ var time = __webpack_exports__["default"] = (time_Time);

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// export { default as ActionSheet } from './ActionSheet'
// export { default as Dialog } from './Dialog'
// export { default as Loading } from './Loading'
// export { default as Toast } from './Toast'
// export { default as Popup } from './Popup'
// export { default as PreLoad } from './PreLoad'
// export { default as PopCurtain } from './PopCurtain'
// export { default as CarouselNotice } from './CarouselNotice'
// export { default as PullRefresh } from './PullRefresh'
// export { default as Picker } from './Picker'
// export { default as PopupPicker } from './PopupPicker'
// export { default as DatetimePicker } from './DatetimePicker'
// export { default as Tabs } from './Tabs'
// export { default as NavBar } from './NavBar'
// export { default as lazyLoadImg } from './lazyLoadImg'
var files = __webpack_require__(35);

var modules = {};
files.keys().forEach(function (key) {
  if (/\.\/[\w]+\/index\.js/.test(key)) {
    // 如果遵守./*/index.js
    var name = key.match(/\.\/([\w]+)\/index\.js/)[1];
    modules[name] = files(key).default || files(key);
  }
});
module.exports = modules;

/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module) {

module.exports = JSON.parse("{\"a\":\"0.0.33\"}");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 30 */,
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ActionSheet/index.js": 59,
	"./CarouselNotice/index.js": 58,
	"./DatetimePicker/index.js": 64,
	"./DatetimePicker/time/index.js": 10,
	"./Dialog/index.js": 56,
	"./Loading/index.js": 55,
	"./More/index.js": 63,
	"./NavBar/index.js": 65,
	"./Picker/index.js": 51,
	"./PopCurtain/index.js": 60,
	"./Popup/index.js": 61,
	"./PopupPicker/index.js": 62,
	"./PreLoad/index.js": 66,
	"./PullRefresh/index.js": 57,
	"./Tabs/index.js": 53,
	"./Toast/index.js": 54,
	"./index.js": 12,
	"./lazyLoadImg/index.js": 67
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 35;

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionSheet_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionSheet_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionSheet_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselNotice_vue_vue_type_style_index_0_id_31d35fe6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselNotice_vue_vue_type_style_index_0_id_31d35fe6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselNotice_vue_vue_type_style_index_0_id_31d35fe6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_4245a560_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_4245a560_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_4245a560_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_More_vue_vue_type_style_index_0_id_d57af774_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_More_vue_vue_type_style_index_0_id_d57af774_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_More_vue_vue_type_style_index_0_id_d57af774_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PickerSlot_vue_vue_type_style_index_0_id_6726e444_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PickerSlot_vue_vue_type_style_index_0_id_6726e444_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PickerSlot_vue_vue_type_style_index_0_id_6726e444_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Picker_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Picker_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Picker_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PopCurtain_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PopCurtain_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PopCurtain_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Popup_vue_vue_type_style_index_0_id_8b0b5200_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Popup_vue_vue_type_style_index_0_id_8b0b5200_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Popup_vue_vue_type_style_index_0_id_8b0b5200_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PullRefresh_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PullRefresh_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PullRefresh_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_TabNav_vue_vue_type_style_index_0_id_d0fdb894_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_TabNav_vue_vue_type_style_index_0_id_d0fdb894_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_TabNav_vue_vue_type_style_index_0_id_d0fdb894_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_style_index_0_id_d63b3434_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_style_index_0_id_d63b3434_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_style_index_0_id_d63b3434_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Toast_vue_vue_type_style_index_0_id_be65e294_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Toast_vue_vue_type_style_index_0_id_be65e294_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_sass_resources_loader_lib_loader_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Toast_vue_vue_type_style_index_0_id_be65e294_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 50 */,
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Picker", function() { return /* reexport */ Picker; });

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/Picker/Picker.vue?vue&type=template&id=4fd33c26&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "lina-picker",
      on: {
        touchmove: function($event) {
          $event.preventDefault()
        }
      }
    },
    [
      _vm.head
        ? _c(
            "div",
            {
              staticClass: "lina-header",
              style: { lineHeight: _vm.lineHeight, fontSize: _vm.fontSize }
            },
            [
              _c(
                "div",
                {
                  staticClass: "lina-btn",
                  style: { color: _vm.cancelColor },
                  on: { click: _vm.handleCance }
                },
                [_vm._v(_vm._s(_vm.cancelText))]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "lina-slot-title" },
                [_vm._t("title")],
                2
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "lina-btn",
                  style: { color: _vm.confirmColor },
                  on: { click: _vm.handleConfirm }
                },
                [_vm._v(_vm._s(_vm.confirmText))]
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "lina-picker-container", style: { height: _vm.height } },
        [
          _c(
            "div",
            {
              staticClass: "lina-picker-box",
              style: { fontSize: _vm.fontSize }
            },
            _vm._l(_vm.slots, function(item, index) {
              return _c("lina-picker-slot", {
                key: index,
                ref: "pickerSlot",
                refInFor: true,
                attrs: {
                  goods: item,
                  lineHeight: _vm.lineHeight,
                  slotIndex: index,
                  maxY: _vm.maxY
                },
                on: { change: _vm.handleChange }
              })
            }),
            1
          ),
          _vm._v(" "),
          _c("div", {
            staticClass: "lina-checked-text",
            style: { height: _vm.lineHeight }
          }),
          _vm._v(" "),
          _c("div", {
            staticClass: "lina-mask",
            style: { backgroundSize: "100% " + _vm.backgroundSizeY }
          })
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/packages/Picker/Picker.vue?vue&type=template&id=4fd33c26&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(4);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/Picker/PickerSlot.vue?vue&type=template&id=6726e444&scoped=true&
var PickerSlotvue_type_template_id_6726e444_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "u-picker-slot" }, [
    _c(
      "ul",
      { ref: "pickerSlot", staticClass: "u-picker-slot-container" },
      _vm._l(_vm.datas.values, function(item, index) {
        return _c(
          "li",
          {
            key: index,
            staticClass: "u-ps-box",
            style: { lineHeight: _vm.lineHeight, height: _vm.lineHeight }
          },
          [
            _vm._v(
              "\n      " +
                _vm._s(_vm._f("getValue")(item, _vm.datas)) +
                "\n    "
            )
          ]
        )
      }),
      0
    )
  ])
}
var PickerSlotvue_type_template_id_6726e444_scoped_true_staticRenderFns = []
PickerSlotvue_type_template_id_6726e444_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./src/packages/Picker/PickerSlot.vue?vue&type=template&id=6726e444&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(2);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(5);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(7);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(8);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// CONCATENATED MODULE: ./src/packages/Picker/src/drag.js


var isMove = ('ontouchstart' in window);
var eventName = {
  start: isMove ? 'touchstart' : 'mousedown',
  move: isMove ? 'touchmove' : 'mousemove',
  end: isMove ? 'touchend' : 'mouseup',
  quit: isMove ? 'touchcancel' : 'mouseleave'
};
/**
 * @param {HTMLAnchorElement} element
 * @param {Object} options start,move,end
 * @export
 * @class Drag
 */

var drag_Drag = /*#__PURE__*/function () {
  function Drag(element, options) {
    classCallCheck_default()(this, Drag);

    this.element = element;
    this.options = options;
    this.startX = 0;
    this.startY = 0;
    this.deltaX = 0;
    this.deltaY = 0;
    this.offsetX = 0;
    this.offsetY = 0;
    this.isDragging = false;
    this.createEvent();
    this.onEvent();
  } // 创建函数


  createClass_default()(Drag, [{
    key: "createEvent",
    value: function createEvent() {
      var _this = this;

      this.eventFn = {
        start: function start(event) {
          if (_this.isDragging) return;

          _this.resetTouchStatus();

          var site = _this.getSite(event);

          _this.deltaX = _this.startX = site.clientX;
          _this.deltaY = _this.startY = site.clientY;

          _this.EventListener('add');

          _this.handle('start', event);
        },
        move: function move(event) {
          _this.isDragging = true;

          var site = _this.getSite(event);

          _this.offsetX = site.clientX - _this.deltaX;
          _this.offsetY = site.clientY - _this.deltaY;
          _this.deltaX = site.clientX;
          _this.deltaY = site.clientY;

          _this.handle('move', event);
        },
        end: function end(event) {
          _this.EventListener('remove');

          _this.isDragging = false;

          _this.handle('end', event);
        }
      };
    } // 绑定事件

  }, {
    key: "onEvent",
    value: function onEvent() {
      var eventFn = this.eventFn,
          element = this.element;

      if (isMove) {
        Object.keys(eventFn).forEach(function (key) {
          element.addEventListener(eventName[key], eventFn[key]);
        });
      } else {
        element.addEventListener(eventName.start, eventFn.start);
      }

      element.addEventListener(eventName.quit, eventFn.end);
    }
  }, {
    key: "handle",
    value: function handle(name, event) {
      if (typeof this.options[name] === 'function') this.options[name](event);
    }
  }, {
    key: "EventListener",
    value: function EventListener(name) {
      if (!isMove) {
        this.element[name + 'EventListener']('mousemove', this.eventFn.move);
        this.element[name + 'EventListener']('mouseup', this.eventFn.end);
      }
    }
  }, {
    key: "getSite",
    value: function getSite(event) {
      return isMove ? event.changedTouches[0] || event.touches[0] : event;
    } // 重置

  }, {
    key: "resetTouchStatus",
    value: function resetTouchStatus() {
      this.offsetY = this.offsetX = this.deltaY = this.deltaX = 0;
    }
  }]);

  return Drag;
}();


// CONCATENATED MODULE: ./src/packages/Picker/src/translate.js
/**
 * 根据移动距离修改translateY
 * @param {HTMLElement} element dom
 * @param {Number} offsetY 手指每次滑动的距离
 * @returns {Number} element的translateY
 */
function upTranslate(element, offsetY) {
  var y = getY(element) + (offsetY > 0 ? Math.ceil(offsetY) : Math.floor(offsetY));
  setY(element, y);
  return y;
}
/**
 * 获取translateY
 * @param {HTMLElement} element dom
 * @returns {Number}
 */


function getY(element) {
  return Number(element.style.getPropertyValue('transform').replace(/[^-\d]/g, ''));
}
/**
 * 修改translateY
 * @param {HTMLElement} element dom
 * @param {Number} y 距离
 */


function setY(element, y) {
  element.style.setProperty('transform', "translateY(".concat(y, "px)"));
}
/**
 * ease-out
 * @param {Number} target 目标距离
 * @param {Number} current 当前距离
 * @param {Number} part 系数
 * @returns {Number} 前进距离
 */


function easeOut(target, current, part) {
  var step = (target - current) / part;
  step = step > 0 ? Math.ceil(step) : Math.floor(step);
  return step;
}

/* harmony default export */ var translate = ({
  upTranslate: upTranslate,
  getY: getY,
  setY: setY,
  easeOut: easeOut
});
// CONCATENATED MODULE: ./src/packages/Picker/src/macro.js
var SHOWNUM = 7;
var OFFSETY = 3;
var SHOWNUM_HALF = (SHOWNUM - 1) / 2;
var MAX_STEP = 800;
var MIN_STEP = -800;
/* harmony default export */ var macro = ({
  SHOWNUM: SHOWNUM,
  // 展示7列
  OFFSETY: OFFSETY,
  // 拖拽差默认最小参数
  SHOWNUM_HALF: SHOWNUM_HALF,
  // 展示中间
  MAX_STEP: MAX_STEP,
  // 正最大步数
  MIN_STEP: MIN_STEP // 负最大步数

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/Picker/PickerSlot.vue?vue&type=script&lang=js&





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var PickerSlotvue_type_script_lang_js_ = ({
  name: 'lina-picker-slot',
  data: function data() {
    return {
      sIndex: '',
      sValue: '',
      $time: null
    };
  },
  props: {
    goods: [Array, Object],
    lineHeight: String,
    // 水平位置
    maxY: Number,
    slotIndex: Number
  },
  computed: {
    minY: function minY() {
      return -parseInt(this.lineHeight) * (this.datas.values.length - 1 - macro.SHOWNUM_HALF);
    },
    element: function element() {
      return this.$refs.pickerSlot;
    },
    defaultValue: function defaultValue() {
      return this.datas.values[this.getIndex(this.datas.defaultIndex)];
    },
    datas: function datas() {
      var data = {
        defaultIndex: 0,
        content: 'name'
      };

      if (Array.isArray(this.goods)) {
        return _objectSpread(_objectSpread({}, data), {}, {
          values: this.goods
        });
      } else {
        var obj = {};

        if (this.goods.defaultIndex === -1) {
          obj.defaultIndex = 0;
        }

        return _objectSpread(_objectSpread(_objectSpread({}, data), this.goods), obj);
      }
    }
  },
  filters: {
    getValue: function getValue(item, datas) {
      return typeof_default()(item) === 'object' ? item[datas.content] : item;
    }
  },
  mounted: function mounted() {
    var _this = this;

    return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.onScrollAnimation();

              translate.setY(_this.element, _this.maxY);
              _context.next = 4;
              return _this.initY();

            case 4:
              _this.getsIndex();

              _this.getsValue();

              _this.$watch('sValue', function () {
                this.$emit('change', this.sValue, this.slotIndex);
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    // 注册Scroll
    onScrollAnimation: function onScrollAnimation() {
      var _this2 = this;

      var element = this.element;
      var drag = new drag_Drag(element, {
        start: function start(event) {
          cancelAnimationFrame(_this2.$time);
        },
        move: function move(event) {
          _this2.runBoundary(drag.offsetY);
        },
        end: function () {
          var _end = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2(event) {
            var path;
            return regenerator_default.a.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(drag.offsetY !== 0)) {
                      _context2.next = 4;
                      break;
                    }

                    _this2.exercise(drag.offsetY);

                    _context2.next = 8;
                    break;

                  case 4:
                    path = _this2.whole(translate.getY(element));
                    _context2.next = 7;
                    return _this2.requestAnimationFrame(_this2.boundary(path));

                  case 7:
                    _this2.getsIndex();

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          function end(_x) {
            return _end.apply(this, arguments);
          }

          return end;
        }()
      });
    },
    // 设置默认选择位置
    initY: function initY() {
      var _arguments = arguments,
          _this3 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
        var index, y;
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                index = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : _this3.datas.defaultIndex;
                y = _this3.calculateLocation(_this3.getIndex(index));
                _context3.next = 4;
                return _this3.requestAnimationFrame(y);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },

    /**
     * 判断是长滚动，还是短滚动
     * @param {Number} offsetY 手指每次滑动的距离
     */
    exercise: function exercise(offsetY) {
      if (Math.abs(offsetY) > 3) {
        this.longAnimation(offsetY);
      } else {
        this.backAnimation(offsetY);
      }
    },

    /**
     * 长滚动
     * @param {Number} offsetY 手指每次滑动的距离
     */
    longAnimation: function longAnimation(offsetY) {
      var _this4 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee4() {
        var path;
        return regenerator_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                path = _this4.whole(Math.abs(offsetY) * offsetY + translate.getY(_this4.element));
                _context4.next = 3;
                return _this4.requestAnimationFrame(path, offsetY);

              case 3:
                _this4.getsIndex();

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },

    /**
     * 短滚动
     * @param {Number} offsetY 手指每次滑动的距离
     */
    backAnimation: function backAnimation(offsetY) {
      var _this5 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee5() {
        var lineHeight, path;
        return regenerator_default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                lineHeight = parseInt(_this5.lineHeight);

                if (!(offsetY % lineHeight === 0)) {
                  _context5.next = 3;
                  break;
                }

                return _context5.abrupt("return");

              case 3:
                path = _this5.whole(offsetY + translate.getY(_this5.element));
                _context5.next = 6;
                return _this5.requestAnimationFrame(path, offsetY);

              case 6:
                _this5.getsIndex();

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },

    /**
     * 滚动
     * @param {Number} path 路程
     * @param {Number} [offsetY = macro.OFFSETY] 手指每次滑动的距离
     * @returns {Promise}
     */
    requestAnimationFrame: function requestAnimationFrame(path) {
      var _this6 = this;

      var offsetY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : macro.OFFSETY;
      offsetY = Math.abs(offsetY);
      var coefficient = offsetY > 2 ? offsetY : 3;
      return new Promise(function (resolve) {
        _this6.running(path, coefficient, resolve);
      });
    },

    /**
     * 滚动逻辑
     * @param {Number} path 路程
     * @param {Number} offsetY 手指每次滑动的距离
     * @param {Function} resolve Promise的resolve
     */
    running: function running(path, coefficient, resolve) {
      var _this7 = this;

      cancelAnimationFrame(this.$time);
      this.$time = requestAnimationFrame(function () {
        var currentY = translate.getY(_this7.element);

        if (path === currentY) {
          _this7.adjustment(currentY, resolve);

          return;
        }

        var step = translate.easeOut(path, currentY, coefficient);

        var b = _this7.runBoundary(step);

        if (b !== false) {
          path = b;
        }

        _this7.running(path, coefficient, resolve);
      });
    },

    /**
     * 滚动的边界
     * @param {Number} step 速度
     * @param {Number|Boolean} 判断是否不等于false，为真则代替path
     */
    runBoundary: function runBoundary(step) {
      var y = translate.getY(this.element);
      step = this.getBoundaryStep(step);
      var path = step + y;
      var b = this.elasticBoundary(path);

      if (b !== false) {
        translate.setY(this.element, b);
      } else {
        translate.upTranslate(this.element, step);
      }

      return b;
    },

    /**
     * 用来监控滚动结束，判断是否需要回弹
     * @param {Number} currentY 当前路程
     * @param {Function} resolve Promise的resolve
    */
    adjustment: function adjustment(currentY, resolve) {
      cancelAnimationFrame(this.$time); // if (currentY > this.maxY || currentY < this.minY) {
      //   let path = translate.getY(this.element) > 0 ? this.maxY : this.minY
      //   this.running(path, macro.OFFSETY, resolve)
      // } else {
      //   resolve(currentY)
      // }

      var path = false;

      if (currentY > this.maxY) {
        path = this.maxY;
      } else if (currentY < this.minY) {
        path = this.minY;
      }

      if (path === false) {
        resolve(currentY);
      } else {
        this.running(path, macro.OFFSETY, resolve);
      }
    },

    /**
     * 速度边界
     * @param {Number} step 速度
     * @returns {Number} 速度
     */
    getBoundaryStep: function getBoundaryStep(step) {
      if (step > macro.MAX_STEP) {
        step = macro.MAX_STEP;
      } else if (step < macro.MIN_STEP) {
        step = macro.MIN_STEP;
      }

      return step;
    },

    /**
     * 滚动路程调整
     * @param {Number} path 路程
     * @returns {Number} 路程
     */
    whole: function whole(path) {
      var lineHeight = parseInt(this.lineHeight);
      var result = path / lineHeight;
      return Math.round(result) * lineHeight;
    },

    /**
     * 边界路程
     * @param {Number} path 路程
     * @returns {Number} 路程
     */
    boundary: function boundary(path) {
      if (path > this.maxY) {
        path = this.maxY;
      } else if (path < this.minX) {
        path = this.minX;
      }

      return path;
    },

    /**
     * 弹性边界路程
     * @param {Number} path 路程
     * @param {Number|Boolean} 判断是否不等于false，为真则代替path
     */
    elasticBoundary: function elasticBoundary(path) {
      var lineHeight = parseInt(this.lineHeight) / 2;
      var maxY = this.maxY + lineHeight;
      var minY = this.minY - lineHeight;
      var b = false;

      if (path > maxY) {
        b = maxY;
      } else if (path < minY) {
        b = minY;
      }

      return b;
    },

    /**
     * 获取index
     */
    getsIndex: function getsIndex() {
      var y = translate.getY(this.element);
      var lineHeight = parseInt(this.lineHeight);
      this.sIndex = -y / lineHeight + 3;
      this.getsValue();
    },
    getsValue: function getsValue() {
      this.sValue = this.datas.values[this.sIndex];
    },
    calculateLocation: function calculateLocation(defaultIndex) {
      return -defaultIndex * parseInt(this.lineHeight) + this.maxY;
    },
    getIndex: function getIndex(index) {
      var length = this.datas.values.length;
      var y = 0;

      if (index < length && index >= 0) {
        y = index;
      } else if (index >= length) {
        y = length;
      }

      return y;
    },

    /**
     * 用name去比较，然后定位到该地方。用来给二度封装的组件使用
     * @param {Object}
     * * @param {} val 对比的值
     * * @param {String} [key = 'name'] 对比的key
     * * @param {Boolean} [b = false] 是否有动画过渡
     */
    movePort: function movePort(_ref) {
      var _this8 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee6() {
        var value, _ref$key, key, _ref$b, b, defaultIndex, y;

        return regenerator_default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                value = _ref.value, _ref$key = _ref.key, key = _ref$key === void 0 ? 'value' : _ref$key, _ref$b = _ref.b, b = _ref$b === void 0 ? false : _ref$b;
                defaultIndex = _this8.datas.values.findIndex(function (obj) {
                  if (typeof_default()(obj) === 'object') {
                    return obj[key] === value;
                  } else {
                    return obj === value;
                  }
                });
                defaultIndex = _this8.getIndex(defaultIndex);

                if (!b) {
                  _context6.next = 8;
                  break;
                }

                _context6.next = 6;
                return _this8.initY(defaultIndex);

              case 6:
                _context6.next = 10;
                break;

              case 8:
                y = _this8.calculateLocation(defaultIndex);
                translate.setY(_this8.element, y);

              case 10:
                _this8.getsIndex();

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    getNameIndex: function getNameIndex(name) {
      return this.datas.values.findIndex(function (obj) {
        return obj.name === name;
      });
    }
  }
});
// CONCATENATED MODULE: ./src/packages/Picker/PickerSlot.vue?vue&type=script&lang=js&
 /* harmony default export */ var Picker_PickerSlotvue_type_script_lang_js_ = (PickerSlotvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/packages/Picker/PickerSlot.vue?vue&type=style&index=0&id=6726e444&lang=scss&scoped=true&
var PickerSlotvue_type_style_index_0_id_6726e444_lang_scss_scoped_true_ = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/packages/Picker/PickerSlot.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Picker_PickerSlotvue_type_script_lang_js_,
  PickerSlotvue_type_template_id_6726e444_scoped_true_render,
  PickerSlotvue_type_template_id_6726e444_scoped_true_staticRenderFns,
  false,
  null,
  "6726e444",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/packages/Picker/PickerSlot.vue"
/* harmony default export */ var PickerSlot = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/Picker/Picker.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Pickervue_type_script_lang_js_ = ({
  name: 'lina-picker',
  props: {
    slots: Array,
    value: {
      validator: function validator() {
        return true;
      }
    },
    lineHeight: {
      type: String,
      default: '34px'
    },
    fontSize: {
      type: String,
      default: '16px'
    },
    head: Boolean,
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确认'
    },
    cancelColor: String,
    confirmColor: String
  },
  data: function data() {
    return {
      values: []
    };
  },
  computed: {
    height: function height() {
      return parseInt(this.lineHeight) * macro.SHOWNUM + 'px';
    },
    // 上，文字，下
    backgroundSizeY: function backgroundSizeY() {
      return parseInt(this.lineHeight) * 3 + 'px';
    },
    maxY: function maxY() {
      return parseInt(this.lineHeight) * macro.SHOWNUM_HALF;
    }
  },
  watch: {
    slots: {
      handler: function handler(slots) {
        var _this = this;

        if (Array.isArray(slots)) {
          slots.forEach(function (arr, index) {
            _this.$set(_this.values, index);
          });
        }
      },
      immediate: true
    }
  },
  components: defineProperty_default()({}, PickerSlot.name, PickerSlot),
  model: {
    prop: 'value',
    event: 'change'
  },
  mounted: function mounted() {
    this.$watch('slots.length', this.getDefaultValue, {
      immediate: true
    });
  },
  methods: {
    handleChange: function handleChange(value, i) {
      this.$set(this.values, i, value);
      var valuse = JSON.parse(JSON.stringify(this.values));
      this.$emit('change', valuse);
      this.$emit('update:value', valuse);
    },
    handleConfirm: function handleConfirm() {
      this.$emit('confirm', JSON.parse(JSON.stringify(this.values)));
    },
    handleCance: function handleCance() {
      this.$emit('cance');
    },
    // 默认values
    getDefaultValue: function getDefaultValue() {
      var pickerSlot = this.$refs.pickerSlot;

      if (pickerSlot) {
        var values = this.values;

        for (var i = 0; i < values.length; i++) {
          if (values[i] === undefined) {
            this.$set(values, i, pickerSlot[i].defaultValue);
          }
        }

        this.$emit('defaultValue', JSON.parse(JSON.stringify(this.values)));
      }
    },
    movePort: function movePort(index, data) {
      this.$refs.pickerSlot[index].movePort(data);
    },
    getNameIndex: function getNameIndex(index, name) {
      return this.$refs.pickerSlot[index].getNameIndex(name);
    }
  }
});
// CONCATENATED MODULE: ./src/packages/Picker/Picker.vue?vue&type=script&lang=js&
 /* harmony default export */ var Picker_Pickervue_type_script_lang_js_ = (Pickervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/packages/Picker/Picker.vue?vue&type=style&index=0&lang=scss&scope=true&
var Pickervue_type_style_index_0_lang_scss_scope_true_ = __webpack_require__(43);

// CONCATENATED MODULE: ./src/packages/Picker/Picker.vue






/* normalize component */

var Picker_component = Object(componentNormalizer["a" /* default */])(
  Picker_Pickervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Picker_api; }
Picker_component.options.__file = "src/packages/Picker/Picker.vue"
/* harmony default export */ var Picker = (Picker_component.exports);
// CONCATENATED MODULE: ./src/packages/Picker/index.js


Picker.install = function (Vue) {
  Vue.component(Picker.name, Picker);
};

 // 最后将以上内容导出，即可在其他地方进行使用

/* harmony default export */ var packages_Picker = __webpack_exports__["default"] = ({
  component: Picker
});

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90&
var Appvue_type_template_id_7ba5bd90_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "app" } },
    [_c("router-view", { key: _vm.$route.fullPath, staticClass: "app-view" })],
    1
  )
}
var staticRenderFns = []
Appvue_type_template_id_7ba5bd90_render._withStripped = true


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=7ba5bd90&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(2);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  name: 'app',
  data: function data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      navActionSheet: {
        isShow: false,
        cancelTxt: '取消',
        menuItems: [{
          'name': '百度地图',
          'value': 'baidu'
        }, {
          'name': '高德地图',
          'value': 'gaode'
        }, {
          'name': '腾讯地图',
          'value': 'tengxun'
        }]
      }
    };
  },
  created: function created() {
    return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/App.vue?vue&type=style&index=0&lang=scss&
var Appvue_type_style_index_0_lang_scss_ = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/App.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_Appvue_type_script_lang_js_,
  Appvue_type_template_id_7ba5bd90_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/App.vue"
/* harmony default export */ var App = (component.exports);
// CONCATENATED MODULE: ./src/utils/rem.js
/*
 * base on clientWidth,then transform to rem,default 320px == 20rem
 */
function setRem(doc, win) {
  var docEl = doc.documentElement;
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

  var reCaculate = function reCaculate() {
    var clientWidth = docEl.clientWidth; // console.log(clientWidth)

    if (!clientWidth) return;
    var fontSize = 75 * (clientWidth / 750);
    fontSize = Math.min(fontSize, 75);
    docEl.style.fontSize = fontSize + 'px';
  };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, reCaculate, false);
  doc.addEventListener('DOMContentLoaded', reCaculate, false);
}
/**
 * 自适应rem。首先判断用vw，没有支持vw再用js动态改变html的font-size
 *
 * @param {*} docEl
 * @param {*} padBaseSize
 */

var autoRem = function autoRem(docEl, padBaseSize) {
  var width;

  var resize = function resize() {
    var widthDynamic = Math.min(docEl.getBoundingClientRect().width, docEl.clientWidth, padBaseSize);

    if (width !== widthDynamic) {
      width = widthDynamic;
      docEl.style.fontSize = "".concat(width / 10, "px");
    }
  };

  var el = document.createElement('div');
  el.setAttribute('style', 'width: 1vw');

  if (!el.style.width) {
    window.addEventListener && window.addEventListener('orientationchange' in window ? 'orientationchange' : 'resize', resize, false);
    window.addEventListener('DOMContentLoaded', resize, false);
  } else {
    docEl.style.fontSize = '10vw';
  }
};
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__(13);

// EXTERNAL MODULE: ./src/config.json
var config = __webpack_require__(6);

// CONCATENATED MODULE: ./src/router/routes.js

var demoChildrenRoutes = []; // demo路由

config.packages.map(function (item) {
  var name = item.name;
  demoChildrenRoutes.push({
    path: name,
    component: function component(resolve) {
      __webpack_require__.e(/* AMD require */ 4).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(124)("./".concat(name, "/demo"))]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
    }
  });
});
/* harmony default export */ var routes = ([{
  path: '/',
  redirect: '/index'
}, {
  path: '/index',
  name: '首页',
  component: function component(resolve) {
    __webpack_require__.e(/* AMD require */ 5).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(125)]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
  },
  meta: {
    keepAlive: false
  }
}, {
  path: '/demo',
  name: '示例',
  component: function component(resolve) {
    __webpack_require__.e(/* AMD require */ 6).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(126)]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
  },
  children: [].concat(demoChildrenRoutes),
  meta: {
    keepAlive: false
  }
}]);
// CONCATENATED MODULE: ./src/router/index.js





vue_esm["a" /* default */].use(vue_router_esm["a" /* default */]);
function createRouter() {
  var router = new vue_router_esm["a" /* default */]({
    routes: routes
  });
  router.afterEach( /*#__PURE__*/function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(to, from) {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (to.meta.needScrollTop) {
                setTimeout(function () {
                  window.scrollTo(0, 0);
                }, 300);
              }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
  return router;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(4);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./package.json
var package_0 = __webpack_require__(14);

// EXTERNAL MODULE: ./src/packages/index.js
var src_packages = __webpack_require__(12);

// CONCATENATED MODULE: ./src/utils/compatibility/requestAnimationFrame.js
/* harmony default export */ var requestAnimationFrame = (function () {
  var lastTime = 0;
  var vendors = ['webkit', 'moz'];

  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback) {
      /* 调整时间，让一次动画等待和执行时间在最佳循环时间间隔内完成 */
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      lastTime = currTime + timeToCall;
      return window.setTimeout(function () {
        callback(lastTime);
      }, timeToCall);
    };
  }

  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };
  }
});
// EXTERNAL MODULE: ./src/styles/index.scss
var src_styles = __webpack_require__(50);

// CONCATENATED MODULE: ./src/index.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





 // 样式

requestAnimationFrame();
var packagesList = config.packages;
var components = {}; // 组件

var methods = {}; // 方法 $挂载

var directives = {}; // 指令 $挂载

packagesList.map(function (item) {
  var pkg = src_packages[item.name];

  if (!pkg) {
    return;
  }

  if (/component/.test(item.type)) {
    // console.log(pkg.component.name)
    components[pkg.component.name] = pkg.component;
  }

  if (/method/.test(item.type)) {
    methods[item.name] = pkg.method;
  }

  if (/directive/.test(item.type)) {
    directives[item.name] = pkg.directive;
  }
}); // console.log('components', components)
// console.log('methods', methods)

var src_install = function install(Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (install.installed) return;
  /**
   * 安装方法，附加在Vue的原型链，以$ + 名字（小写）暴露出来
   */

  for (var methodKey in methods) {
    Object.defineProperty(Vue.prototype, "$".concat(methodKey.toLowerCase()), {
      value: methods[methodKey]
    });
  }
  /**
   * 安装组件，便于全局直接引用在template中
   */
  // console.log(components)


  for (var componentKey in components) {
    components[componentKey] && components[componentKey].name && Vue.component(components[componentKey].name, components[componentKey]);
  }
  /**
   * 安装指令
   */


  for (var directiveKey in directives) {
    directives[directiveKey] && Vue.use(directives[directiveKey]);
  }

  console.info("\x1B[35m lina-ui has been installed\uFF0C version\uFF1A ".concat(package_0["a" /* version */], " "));
  var styles = ['display: block', 'padding: 0 20px', 'font-weight: bold', 'text-align: center', 'line-height: 40px', 'color: #fff', 'background-image: linear-gradient(#ff70e3, #c706a2)', 'background-color: transparent', 'border-radius: 10px', 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset', 'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)'].join(';');
  console.log('\x1b[35m 配合@linahome/cli（lina指令），拉取指定的ui组件，进行二次开发。详细可戳 👉 https://www.npmjs.com/package/@linahome/cli');
  console.log('%c 安装lina指令: npm i -g @linahome/cli', styles);
  install.installed = true;
};

typeof window !== 'undefined' && window.Vue && src_install(window.Vue);
/* harmony default export */ var src = (_objectSpread({
  version: package_0["a" /* version */],
  install: src_install,
  // ...components,
  components: _objectSpread({}, components)
}, methods));
// CONCATENATED MODULE: ./src/main.js





setRem(document, window);
/* router & 历史栈 */

var main_router = createRouter();
console.log(src);
vue_esm["a" /* default */].use(src);
new vue_esm["a" /* default */]({
  el: '#app',
  router: main_router,
  render: function render(h) {
    return h(App);
  }
});

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Tabs", function() { return /* reexport */ Tabs; });

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/Tabs/Tabs.vue?vue&type=template&id=d63b3434&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "tabsRef",
      staticClass: "u-tabs lina-tabs__wrapper",
      style: {
        height:
          (_vm.config.customStyle && _vm.config.customStyle.height) ||
          "1.3333333rem"
      }
    },
    [
      _c("TabNav", { on: { onTabClick: _vm.onTabClick } }),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/packages/Tabs/Tabs.vue?vue&type=template&id=d63b3434&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/Tabs/TabNav.vue?vue&type=template&id=d0fdb894&scoped=true&
var TabNavvue_type_template_id_d0fdb894_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ul",
    {
      ref: "tabsListsRef",
      class: [
        _vm.tabsConfig.isFixed && _vm.fixedTabsFlag
          ? "lina-tabs-lists e-fixed"
          : "lina-tabs-lists"
      ],
      style: Object.assign({}, _vm.tabsConfig.customStyle, { color: "#000" })
    },
    [
      _vm._l(_vm.tabsConfig.navData, function(el, idx) {
        return _c(
          "li",
          {
            key: "tabsNav" + idx,
            ref: "titles",
            refInFor: true,
            class: [
              _vm.currentSelectIndex === idx ? "e-active nav-item" : "nav-item"
            ],
            style: {
              color:
                (_vm.currentSelectIndex === idx &&
                  _vm.tabsConfig.customStyle &&
                  _vm.tabsConfig.customStyle.color) ||
                "currentColor"
            },
            on: {
              click: function($event) {
                return _vm.handleInnerSelectTabs(el, idx, $event)
              }
            }
          },
          [_vm._v(_vm._s(typeof el === "string" ? el : el.title) + "\n  ")]
        )
      }),
      _vm._v(" "),
      _c("i", {
        ref: "iconBarRef",
        staticClass: "icon-bar",
        style: {
          background:
            (_vm.tabsConfig.customStyle && _vm.tabsConfig.customStyle.color) ||
            "currentColor"
        }
      })
    ],
    2
  )
}
var TabNavvue_type_template_id_d0fdb894_scoped_true_staticRenderFns = []
TabNavvue_type_template_id_d0fdb894_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./src/packages/Tabs/TabNav.vue?vue&type=template&id=d0fdb894&scoped=true&

// EXTERNAL MODULE: ./src/utils/throttle.js
var throttle = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/Tabs/TabNav.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var TabNavvue_type_script_lang_js_ = ({
  name: 'TabNav',
  data: function data() {
    return {
      throttle: Function,
      // 存储监听的函数
      fixedTabsFlag: !1,
      // 控制是否固定tab
      currentSelectIndex: 0 // 默认选中第一个

    };
  },
  watch: {
    highlightTab: function highlightTab(n, o) {
      try {
        var ulNode = this.$refs.tabsListsRef;
        var liNodeArr = Array.prototype.slice.call(ulNode.children).filter(function (node) {
          return node.tagName === 'LI';
        });

        if (n >= liNodeArr.length) {
          console.error('索引超过数组数量！！');
          return undefined;
        }

        !!~n && (this.currentSelectIndex = n);
        !!~n && this.calculateTransform(liNodeArr[n]);
      } catch (e) {
        console.error(e.message);
      }
    }
  },
  inject: ['tabsConfig', 'tabsVm'],
  methods: {
    listenScroll: function listenScroll() {
      // 监听滚动然后固定在顶部
      // console.count('listeningScrollTimes')
      // console.log(this.tabsVm.$refs.tabsRef)
      var tabsRef = this.tabsVm.$refs.tabsRef;
      var tabsTop = tabsRef.getBoundingClientRect().top;
      var ulNode = this.$refs.tabsListsRef;
      if (!tabsRef || !ulNode) return undefined;
      var liNodeArr = Array.prototype.slice.call(ulNode.children).filter(function (node) {
        return node.tagName === 'LI';
      }); // 获取tab节点

      this.fixedTabsFlag = tabsTop <= 0; // console.time('calculateTranslateXaxis')

      this.calculateTransform(liNodeArr[this.currentSelectIndex]); // 固定之后重新计算
      // console.timeEnd('calculateTranslateXaxis')
    },
    handleInnerSelectTabs: function handleInnerSelectTabs(item, index, e) {
      if (e.target.classList.contains('e-active')) return undefined;
      this.currentSelectIndex = index;
      this.$emit('onTabClick', item, index, e);

      try {
        this.calculateTransform(e);
      } catch (e) {
        console.error(e);
      }

      this.scrollIntoView(index);
    },
    scrollIntoView: function scrollIntoView(index) {
      // 处理水平滚动
      var _this$$refs = this.$refs,
          titles = _this$$refs.titles,
          tabsListsRef = _this$$refs.tabsListsRef;

      if (!titles || !titles[index]) {
        return;
      }

      var title = titles[index];
      var to = title.offsetLeft - (tabsListsRef.offsetWidth - title.offsetWidth) / 2; // 计算需要滚动的距离

      var from = tabsListsRef.scrollLeft; // x轴的ul的横向滚动距离

      tabsListsRef.scrollBy({
        left: to - from,
        top: 0,
        behavior: 'smooth'
      });
    },
    calculateTransform: function calculateTransform(e) {
      // e可能是事件对象，也可能是dom对象
      var _this$$refs2 = this.$refs,
          iconBarRef = _this$$refs2.iconBarRef,
          tabsListsRef = _this$$refs2.tabsListsRef;

      var _ref = e.target || e,
          offsetLeft = _ref.offsetLeft,
          offsetWidth = _ref.offsetWidth,
          offsetHeight = _ref.offsetHeight; // li元素的offset


      var iconOffsetWidth = iconBarRef.offsetWidth,
          iconOffsetHeight = iconBarRef.offsetHeight; // i元素的offset

      var x = offsetLeft + offsetWidth / 2 - iconOffsetWidth / 2; // 计算x滚动的距离
      // console.log(iconBarRef)

      Object.assign(iconBarRef.style, {
        transform: "translate3d(".concat(x, "px,0,0)"),
        webkitTransform: "translate3d(".concat(x, "px,0,0)"),
        // top: `calc(${offsetHeight}px - ${iconOffsetHeight}px)`
        top: offsetHeight === tabsListsRef.offsetHeight ? "calc(".concat(offsetHeight, "px - ").concat(iconOffsetHeight, "px)") : "calc(50% - ".concat(offsetHeight / 2, "px + ").concat(offsetHeight, "px)")
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('scroll', this.throttle);
    console.log("\x1B[3".concat(~~(Math.random() * 8), "m", '-----tabComponent beforeDestroy------', "\x1B[0m"));
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      try {
        var tabsListsRef = _this.$refs.tabsListsRef;

        _this.calculateTransform(tabsListsRef.firstChild); // 刚开始进来默认把iconbar移动到第一个tab的下面


        _this.throttle = Object(throttle["a" /* default */])(_this.listenScroll);
        _this.tabsConfig.isFixed && window.addEventListener('scroll', _this.throttle);
      } catch (e) {
        console.log(e);
      }
    });
  }
});
// CONCATENATED MODULE: ./src/packages/Tabs/TabNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var Tabs_TabNavvue_type_script_lang_js_ = (TabNavvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/packages/Tabs/TabNav.vue?vue&type=style&index=0&id=d0fdb894&lang=scss&scoped=true&
var TabNavvue_type_style_index_0_id_d0fdb894_lang_scss_scoped_true_ = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/packages/Tabs/TabNav.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Tabs_TabNavvue_type_script_lang_js_,
  TabNavvue_type_template_id_d0fdb894_scoped_true_render,
  TabNavvue_type_template_id_d0fdb894_scoped_true_staticRenderFns,
  false,
  null,
  "d0fdb894",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/packages/Tabs/TabNav.vue"
/* harmony default export */ var TabNav = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/Tabs/Tabs.vue?vue&type=script&lang=js&
var Tabsvue_type_script_lang_js_this = undefined;

//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Tabsvue_type_script_lang_js_ = ({
  name: 'lina-tabs',
  components: {
    TabNav: TabNav
  },
  data: function data() {
    return {};
  },
  props: {
    config: {
      required: true,
      type: Object,
      default: function _default() {
        return {
          navData: [{
            title: '标签1'
          }, {
            title: '标签2'
          }, {
            title: '标签3'
          }, {
            title: '标签4'
          }],
          customStyle: {},
          tabClick: function tabClick() {},
          isFixed: false,
          highlightTab: -1,
          tabsRef: Tabsvue_type_script_lang_js_this.$refs.tabsRef
        };
      }
    }
  },
  methods: {
    onTabClick: function onTabClick(tab, index, event) {
      this.$emit('tabClick', tab, index, event);
    }
  },
  mounted: function mounted() {// window.hh = this
  },
  provide: function provide() {
    return {
      tabsConfig: this.config,
      tabsVm: this
    };
  }
});
// CONCATENATED MODULE: ./src/packages/Tabs/Tabs.vue?vue&type=script&lang=js&
 /* harmony default export */ var Tabs_Tabsvue_type_script_lang_js_ = (Tabsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/packages/Tabs/Tabs.vue?vue&type=style&index=0&id=d63b3434&lang=scss&scoped=true&
var Tabsvue_type_style_index_0_id_d63b3434_lang_scss_scoped_true_ = __webpack_require__(48);

// CONCATENATED MODULE: ./src/packages/Tabs/Tabs.vue






/* normalize component */

var Tabs_component = Object(componentNormalizer["a" /* default */])(
  Tabs_Tabsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "d63b3434",
  null
  
)

/* hot reload */
if (false) { var Tabs_api; }
Tabs_component.options.__file = "src/packages/Tabs/Tabs.vue"
/* harmony default export */ var Tabs = (Tabs_component.exports);
// CONCATENATED MODULE: ./src/packages/Tabs/index.js


Tabs.install = function (Vue) {
  Vue.component(Tabs.name, Tabs);
};


/* harmony default export */ var packages_Tabs = __webpack_exports__["default"] = ({
  component: Tabs
});

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Toast", function() { return /* reexport */ _toast; });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/Toast/Toast.vue?vue&type=template&id=be65e294&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _c(
      "section",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.isVisible,
            expression: "isVisible"
          }
        ],
        staticClass: "lina-toast",
        class: ["e-" + _vm.position]
      },
      [
        _c("div", { staticClass: "message" }, [
          _c("div", {
            staticClass: "message-inner",
            domProps: { innerHTML: _vm._s(_vm.message) }
          })
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/packages/Toast/Toast.vue?vue&type=template&id=be65e294&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/Toast/Toast.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Toastvue_type_script_lang_js_ = ({
  name: 'lina-toast',
  data: function data() {
    return {
      isVisible: false,
      message: '',
      position: ''
    };
  }
});
// CONCATENATED MODULE: ./src/packages/Toast/Toast.vue?vue&type=script&lang=js&
 /* harmony default export */ var Toast_Toastvue_type_script_lang_js_ = (Toastvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/packages/Toast/Toast.vue?vue&type=style&index=0&id=be65e294&lang=scss&scoped=true&
var Toastvue_type_style_index_0_id_be65e294_lang_scss_scoped_true_ = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/packages/Toast/Toast.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Toast_Toastvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "be65e294",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/packages/Toast/Toast.vue"
/* harmony default export */ var Toast_Toast = (component.exports);
// CONCATENATED MODULE: ./src/packages/Toast/_toast.js
/**
 * Toast
 * usage: this.$toast(option)
 */


var ToastConstructor = vue_esm["a" /* default */].extend(Toast_Toast);
/**
 * 移除dom
 */

var removeDom = function removeDom(event) {
  event.target.parentNode.removeChild(event.target);
};
/**
 * 实现toast的关闭方法
 */


ToastConstructor.prototype.close = function () {
  this.isVisible = false;
  this.$el.addEventListener('transitionend', removeDom);
};
/**
 * 实例构建
 */


var _toast_Toast = function Toast() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var instance = new ToastConstructor().$mount();
  var duration = options.duration || 2500;
  instance.message = typeof options === 'string' || typeof options === 'number' ? options : options.message;
  instance.position = options.position || 'middle';
  document.body.appendChild(instance.$el);
  vue_esm["a" /* default */].nextTick(function () {
    instance.isVisible = true;
    instance.timer = setTimeout(function () {
      instance.close();
    }, duration);
  });
};

/* harmony default export */ var _toast = (_toast_Toast);
// CONCATENATED MODULE: ./src/packages/Toast/index.js
 // 插件必须要有一个install方法

_toast.install = function (Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (_toast.installed) return;
  /**
   * toast显示
   */

  Vue.prototype.$toast = _toast;
  _toast.installed = true;
};

 // 最后将以上内容导出，即可在其他地方进行使用

/* harmony default export */ var packages_Toast = __webpack_exports__["default"] = ({
  method: _toast
});

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Loading", function() { return /* reexport */ _loading; });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/Loading/Loading.vue?vue&type=template&id=4245a560&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "f-fade" } }, [
    _c(
      "section",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.isVisible,
            expression: "isVisible"
          }
        ],
        staticClass: "lina-loading"
      },
      [
        _c("div", { staticClass: "loading-inner" }, [
          _c("div", { staticClass: "icon-loading" }),
          _vm._v(" "),
          !_vm.isHideMessage
            ? _c("div", {
                staticClass: "loading-toast",
                domProps: {
                  innerHTML: _vm._s(_vm.message || _vm.defaultMessage)
                }
              })
            : _vm._e()
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/packages/Loading/Loading.vue?vue&type=template&id=4245a560&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/Loading/Loading.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Loadingvue_type_script_lang_js_ = ({
  name: 'lina-loading',
  data: function data() {
    return {
      time: 0,
      // 调用次数
      isVisible: false,
      defaultMessage: '加载中',
      message: '',
      isHideMessage: false
    };
  }
});
// CONCATENATED MODULE: ./src/packages/Loading/Loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var Loading_Loadingvue_type_script_lang_js_ = (Loadingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/packages/Loading/Loading.vue?vue&type=style&index=0&id=4245a560&lang=scss&scoped=true&
var Loadingvue_type_style_index_0_id_4245a560_lang_scss_scoped_true_ = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/packages/Loading/Loading.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Loading_Loadingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "4245a560",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/packages/Loading/Loading.vue"
/* harmony default export */ var Loading = (component.exports);
// CONCATENATED MODULE: ./src/packages/Loading/_loading.js
/**
 * Loading
 * usage: this.$loading.show(); this.$loading.hide();
 */


var LoadingConstructor = vue_esm["a" /* default */].extend(Loading);
var instance = null;

var transitionend = function transitionend() {
  instance.message = '';
  instance.isHideMessage = false;
  instance.$el.removeEventListener('transitionend', transitionend);
}; // 实现loading的关闭方法


LoadingConstructor.prototype.hide = function () {
  instance.time--;

  if (instance.time <= 0) {
    instance.isVisible = false;
    instance.$el.addEventListener('transitionend', transitionend, false);
  }
}; // 实现loading的展示方法


LoadingConstructor.prototype.show = function (options) {
  if (options) {
    instance.message = typeof options === 'string' || typeof options === 'number' ? options : options.message;
    instance.isHideMessage = options.isHideMessage;
  }

  instance.time++;
  instance.isVisible = true;
}; // 实现loading的展示方法


LoadingConstructor.prototype.setMessage = function (options) {
  if (options) {
    instance.message = typeof options === 'string' || typeof options === 'number' ? options : options.message;
    instance.isHideMessage = false;
  }
};
/**
 * 实例构建
 */


var _loading_Loading = function Loading() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (instance === null) {
    instance = new LoadingConstructor().$mount(document.createElement('div'));
    document.body.appendChild(instance.$el);
  }

  return instance;
};

/* harmony default export */ var _loading = (_loading_Loading);
// CONCATENATED MODULE: ./src/packages/Loading/index.js
 // 插件必须要有一个install方法

_loading.install = function (Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (_loading.installed) return;
  /**
   * Loading显示
   */

  Vue.prototype.$loading = _loading();
  _loading.installed = true;
};

 // 最后将以上内容导出，即可在其他地方进行使用

/* harmony default export */ var packages_Loading = __webpack_exports__["default"] = ({
  method: _loading()
});

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Dialog", function() { return /* reexport */ _dialog; });
__webpack_require__.d(__webpack_exports__, "DialogVue", function() { return /* reexport */ Dialog; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(4);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/Dialog/Dialog.vue?vue&type=template&id=96b01234&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "lina-popup",
    {
      attrs: {
        isShow: _vm.dialog && _vm.dialog.isShow,
        "is-hide-close": true,
        "prevent-mask-close": _vm.dialog.preventMaskClose && !!_vm.closeDialog
      },
      on: {
        isShow: function($event) {
          return _vm.closeDialog("mask")
        }
      }
    },
    [
      _c(
        "div",
        {
          staticClass: "lina-dialog",
          class: ["e-theme-" + _vm.dialog.theme],
          attrs: { id: _vm.dialog.id }
        },
        [
          _c(
            "div",
            { staticClass: "pop-content" },
            [
              _vm._t("header", [
                !!_vm.dialog.title && _vm.dialog.title !== ""
                  ? _c("header", { staticClass: "pop-header" }, [
                      _vm._v(_vm._s(_vm.dialog.title))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "content",
                  class: [
                    { "e-unlimited-height": _vm.dialog.isUnlimitedHeight }
                  ]
                },
                [
                  _vm._t("default", [
                    _c("div", {
                      staticClass: "pop-message",
                      domProps: { innerHTML: _vm._s(_vm.dialog.message) }
                    })
                  ])
                ],
                2
              ),
              _vm._v(" "),
              !_vm.dialog.isHideFooter
                ? _c(
                    "div",
                    { staticClass: "pop-footer", attrs: { name: "footer" } },
                    [
                      _vm._t(
                        "footer",
                        _vm._l(_vm.dialog.footer, function(item, key) {
                          return _c(
                            "a",
                            {
                              key: "btn-" + key,
                              staticClass: "btn hardline",
                              attrs: { href: "javascript:;" },
                              on: {
                                click: function($event) {
                                  return _vm.handleBtnClick(item, key)
                                }
                              }
                            },
                            [_vm._v(_vm._s(item.text))]
                          )
                        })
                      )
                    ],
                    2
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.dialog.isHideClose
                ? _c("div", {
                    staticClass: "pop-close",
                    on: {
                      click: function($event) {
                        !!_vm.closeDialog && _vm.closeDialog("icon-close")
                      }
                    }
                  })
                : _vm._e()
            ],
            2
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/packages/Dialog/Dialog.vue?vue&type=template&id=96b01234&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/Dialog/Dialog.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * useage
 *
 * 方法一：
<Dialog :dialog="dialog">
  自定义的内容dom
  <div slot="footer">
    自定义按钮的dom以及事件
  </div>
</Dialog>

 * 方法二：
 *  传入dialog属性，如果有slot，则优先显示方法一的slot内容
 * dialog: { //对话框的基本信息
      title: '标题',
      message: '内容',
      isShow: false,
      isUnlimitedHeight: false,
      isHideFooter: false,
      isHideClose: false,
      preventAutoClose: false,
      preventMaskClose: false,
      footer: {
        confirm: {
          text: '确认',
          callBack: function() {} //点击按钮的回调事件
        },
        cancel: {
          text: '取消',
          callBack: function () { }
        }
      }
    }
*/
/* harmony default export */ var Dialogvue_type_script_lang_js_ = ({
  name: 'lina-dialog',
  props: {
    dialog: {
      type: Object,
      default: function _default() {
        return {
          id: null,
          footer: {
            confirm: {
              text: '确认'
            },
            cancel: {
              text: '取消'
            }
          }
        };
      }
    } // 对话框的基本信息

  },
  data: function data() {
    return {
      promiseCallBack: null,
      // 构造函数生成的弹窗，用于按钮操作唤起promise
      removeDomCallBack: null // 构造函数生成的弹窗，移除dom的回调函数

    };
  },
  methods: {
    /**
     * 关闭弹窗
     */
    closeDialog: function closeDialog() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.dialog.isShow = false;
      this.$emit('update:dialog', this.dialog);
      this.$emit('close', key);
      typeof this.removeDomCallBack === 'function' && this.removeDomCallBack();
      typeof this.promiseCallBack === 'function' && this.promiseCallBack(key); // 返回promise 用于confirm
    },

    /**
     * 处理按钮点击
     */
    handleBtnClick: function handleBtnClick(footerItem, key) {
      var callBack = footerItem.callBack;
      typeof callBack === 'function' && callBack();
      !this.dialog.preventAutoClose && this.closeDialog(key);
    }
  }
});
// CONCATENATED MODULE: ./src/packages/Dialog/Dialog.vue?vue&type=script&lang=js&
 /* harmony default export */ var Dialog_Dialogvue_type_script_lang_js_ = (Dialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/packages/Dialog/Dialog.vue?vue&type=style&index=0&lang=scss&
var Dialogvue_type_style_index_0_lang_scss_ = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/packages/Dialog/Dialog.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Dialog_Dialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/packages/Dialog/Dialog.vue"
/* harmony default export */ var Dialog = (component.exports);
// CONCATENATED MODULE: ./src/packages/Dialog/_dialog.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var DialogConstructor = vue_esm["a" /* default */].extend(Dialog); // let instance = null

var defaultData = {
  // 默认属性
  id: null,
  footer: {
    cancel: {
      text: '取消'
    },
    confirm: {
      text: '确认'
    }
  }
};
/**
 * 移除dom
 */

var removeDom = function removeDom(event) {
  event.target.parentNode.parentNode.removeChild(event.target.parentNode);
};
/**
 * 实例构建
 */


var _dialog_Dialog = function Dialog() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  options.id = options.id || 'dialog-default-id'; // 标识符，相同者共享一个实例

  if (options.isHideFooter === true) {
    options.preventMaskClose = true;
    options.isHideClose = true;
  }

  var instance = new DialogConstructor({
    propsData: {
      dialog: _objectSpread(_objectSpread(_objectSpread({}, defaultData), options), {}, {
        isShow: false
      })
    }
  }).$mount(document.createElement('div'));
  /**
   * 如果不是共用实例的弹窗，关闭后，从dom中移除
   */

  options.id !== 'dialog-default-id' && (instance.removeDomCallBack = function () {
    instance.$el.lastElementChild.addEventListener('animation', removeDom);
  });
  var $dialogDom = document.querySelector('#' + options.id);

  if (options.id && $dialogDom) {
    $dialogDom.parentNode.parentNode.parentNode.replaceChild(instance.$el, $dialogDom.parentNode.parentNode);
  } else {
    document.body.appendChild(instance.$el);
  }

  instance.dialog.isShow = true;
  return instance;
};
/**
 * 一个懒人的confirm框
 *
 * @param {*} [options={}]
 * @param {*} [options={
    title: '提示',
    message: '此操作将永久删除该文件, 是否继续?',
    footer: {
      confirm: {
        text: '确定'
      },
      cancel: {
        text: '取消'
      }
    }
  }]
 * @returns
 */


_dialog_Dialog.$confirm = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new Promise(function (resolve, reject) {
    var defaultOptions = {
      id: 'dialog-confirm-default-id',
      footer: {
        cancel: {
          text: '取消'
        },
        confirm: {
          text: '确定'
        }
      }
    };
    var confirmInstance = _dialog_Dialog(_objectSpread(_objectSpread({}, defaultOptions), options));

    confirmInstance.promiseCallBack = function (key) {
      // 确定返回resolve，取消返回reject
      if (key === 'confirm') {
        resolve();
      } else if (key === 'cancel') {
        reject('cancel-close'); // eslint-disable-line
      } else if (key === 'mask') {
        reject('mask-close'); // eslint-disable-line
      } else if (key === 'icon-close') {
        reject('icon-close'); // eslint-disable-line
      } else {
        console.warn('footer key wrong');
      }
    };
  });
};

/* harmony default export */ var _dialog = (_dialog_Dialog);
// CONCATENATED MODULE: ./src/packages/Dialog/index.js

 // 插件必须要有一个install方法

_dialog.install = function (Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (_dialog.installed) return;
  Vue.prototype.$dialog = _dialog;
  Vue.component(Dialog.name, Dialog);
  _dialog.installed = true;
};

 // 最后将以上内容导出，即可在其他地方进行使用

/* harmony default export */ var packages_Dialog = __webpack_exports__["default"] = ({
  method: _dialog,
  component: Dialog
});

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "PullRefresh", function() { return /* reexport */ PullRefresh; });

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/PullRefresh/PullRefresh.vue?vue&type=template&id=6ed2be14&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "lina-pull-refresh" }, [
    _c(
      "div",
      {
        ref: "innerRef",
        staticClass: "inner",
        on: {
          touchstart: _vm.onTouchStart,
          touchmove: _vm.onTouchMove,
          touchend: _vm.onTouchEnd,
          touchcancel: _vm.onTouchEnd
        }
      },
      [
        _c("div", { staticClass: "head-box" }, [
          _vm._v(_vm._s(_vm.statusText))
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "pull-content" }, [_vm._t("default")], 2)
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/packages/PullRefresh/PullRefresh.vue?vue&type=template&id=6ed2be14&

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__(3);

// CONCATENATED MODULE: ./src/mixins/touch.js

var MIN_DISTANCE = 10;

function getDirection(x, y) {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal';
  }

  if (y > x && y > MIN_DISTANCE) {
    return 'vertical';
  }

  return '';
}

var TouchMixin = vue_esm["a" /* default */].extend({
  data: function data() {
    return {
      startX: 0,
      startY: 0,
      deltaX: 0,
      deltaY: 0,
      offsetX: 0,
      offsetY: 0,
      direction: ''
    };
  },
  methods: {
    touchStart: function touchStart(event) {
      this.resetTouchStatus();
      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;
    },
    touchMove: function touchMove(event) {
      var touch = event.touches[0];
      this.deltaX = touch.clientX - this.startX;
      this.deltaY = touch.clientY - this.startY;
      this.offsetX = Math.abs(this.deltaX);
      this.offsetY = Math.abs(this.deltaY);
      this.direction = this.direction || getDirection(this.offsetX, this.offsetY);
    },
    resetTouchStatus: function resetTouchStatus() {
      this.direction = '';
      this.deltaX = 0;
      this.deltaY = 0;
      this.offsetX = 0;
      this.offsetY = 0;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/PullRefresh/PullRefresh.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var PullRefreshvue_type_script_lang_js_ = ({
  name: 'lina-pull-refresh',
  props: {
    // boxStyle: { // 外框内容样式
    //   type: Object
    // },
    headHeight: {
      // 顶部内容高度
      type: Number,
      default: 50
    },
    pullingText: {
      // 下拉过程文案
      type: String,
      default: '下拉即可刷新...'
    },
    loosingText: {
      // 释放过程文案
      type: String,
      default: '释放即可刷新...'
    },
    loadingText: {
      // 加载过程文案
      type: String,
      default: '加载中...'
    },
    disabled: {
      // 是否禁用
      type: Boolean,
      default: false
    }
  },
  mixins: [TouchMixin],
  data: function data() {
    return {
      status: 'normal',
      // 头部提示文本的状态 normal  pulling  loosing  loading
      distance: 0 // 最后松开下拉的距离

    };
  },
  computed: {
    /**
     * 下拉提示
     */
    statusText: function statusText() {
      var text = '';

      switch (this.status) {
        case 'loading':
          text = this.loadingText;
          break;

        case 'normal':
          text = '';
          break;

        case 'pulling':
          text = this.pullingText;
          break;

        case 'loosing':
          text = this.loosingText;
          break;

        default:
          break;
      }

      return text;
    },

    /**
     * 不可下拉
     */
    untouchable: function untouchable() {
      return this.status === 'loading' || this.disabled;
    }
  },
  watch: {},
  methods: {
    /**
     * touchStart
     */
    onTouchStart: function onTouchStart(event) {
      var self = this;
      console.log('onTouchStart');
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

      if (!self.untouchable && scrollTop <= 0) {
        // 首先判断有没有滚动条，如果有则禁止下拉刷新
        self.touchStart(event);
      }
    },

    /**
     * touchMove
     */
    onTouchMove: function onTouchMove(event) {
      var self = this;

      if (self.untouchable) {
        return;
      }

      console.log('onTouchMove');
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // 首先判断有没有滚动条，如果有则禁止下拉刷新

      if (scrollTop > 0) {
        self.$refs.innerRef.style.transition = 'all ease 0s';
        self.startY = event.touches[0].clientY;
        self.deltaY = 0;
        return;
      }

      self.touchMove(event);

      if (self.deltaY > 0) {
        event.preventDefault();
        self.distance = self.ease(self.deltaY);
        self.setStatus(self.distance);
        self.$refs.innerRef.style.transition = 'all ease 0s';
        self.$refs.innerRef.style.transform = "translateY(".concat(self.distance, "px)");
      }
    },

    /**
     * onTouchEnd
     */
    onTouchEnd: function onTouchEnd(event) {
      var self = this;

      if (self.untouchable) {
        return;
      }

      self.$refs.innerRef.style.transition = 'all ease 300ms';

      if (self.status === 'loosing') {
        // 如果是达到可以释放距离，则触发刷新事件
        self.$nextTick(function () {
          self.$emit('refresh', {
            done: self.done
          });
        });
        self.setStatus(self.headHeight, true); // 设置为loading状态

        self.$refs.innerRef.style.transform = "translateY(".concat(self.headHeight, "px)");
      } else {
        self.$refs.innerRef.style.transform = 'translateY(0)';
        self.setStatus(0);
      }
      /**
       * 重置状态
       */


      self.resetTouchStatus();
    },

    /**
     * 滑动距离
     */
    ease: function ease(distance) {
      var headHeight = this.headHeight;
      return Math.round(distance < headHeight ? distance : distance < headHeight * 2 ? headHeight + (distance - headHeight) / 2 : headHeight * 1.5 + (distance - headHeight * 2) / 4);
    },

    /**
     * 结束refresh之后的回调函数，用以取消loading
     */
    done: function done() {
      var self = this;
      self.$refs.innerRef.style.transform = 'translateY(0)';
      setTimeout(function () {
        // 延迟500ms，等动画过渡
        self.setStatus(0);
      }, 500);
    },

    /**
     * 设置下拉状态
     */
    setStatus: function setStatus(distance, isLoading) {
      var status = isLoading ? 'loading' : distance === 0 ? 'normal' : distance < this.headHeight ? 'pulling' : 'loosing';

      if (status !== this.status) {
        this.status = status;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/packages/PullRefresh/PullRefresh.vue?vue&type=script&lang=js&
 /* harmony default export */ var PullRefresh_PullRefreshvue_type_script_lang_js_ = (PullRefreshvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/packages/PullRefresh/PullRefresh.vue?vue&type=style&index=0&lang=scss&scope=true&
var PullRefreshvue_type_style_index_0_lang_scss_scope_true_ = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/packages/PullRefresh/PullRefresh.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  PullRefresh_PullRefreshvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/packages/PullRefresh/PullRefresh.vue"
/* harmony default export */ var PullRefresh = (component.exports);
// CONCATENATED MODULE: ./src/packages/PullRefresh/index.js


PullRefresh.install = function (Vue) {
  Vue.component(PullRefresh.name, PullRefresh);
};

 // 最后将以上内容导出，即可在其他地方进行使用

/* harmony default export */ var packages_PullRefresh = __webpack_exports__["default"] = ({
  component: PullRefresh
});

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CarouselNotice", function() { return /* reexport */ CarouselNotice; });

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/CarouselNotice/CarouselNotice.vue?vue&type=template&id=31d35fe6&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "f-fade" } }, [
    _c("div", { staticClass: "lina-carousel-text" }, [
      _c("section", { staticClass: "u-widget-inner" }, [
        _c(
          "div",
          { staticClass: "carousel-text-outter", style: _vm.boxStyle },
          [
            _c(
              "div",
              { staticClass: "carousel-text-list" },
              [
                _c(
                  "transition",
                  {
                    attrs: { css: false },
                    on: {
                      enter: _vm.enter,
                      leave: _vm.leave,
                      "before-enter": _vm.beforeEnter,
                      "after-enter": _vm.afterEnter
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        key: _vm.nowIndex,
                        ref: "contentRef",
                        staticClass: "carousel-text-item"
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "link",
                            attrs: { href: "javascript:;" },
                            on: {
                              click: function($event) {
                                return _vm.handleClick(_vm.scrollData)
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "news-tag-box" }, [
                              _c(
                                "span",
                                {
                                  staticClass: "news-tag",
                                  style: {
                                    borderColor:
                                      _vm.scrollData.tag &&
                                      _vm.scrollData.tag.color,
                                    color:
                                      _vm.scrollData.tag &&
                                      _vm.scrollData.tag.color
                                  }
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      (_vm.scrollData.tag &&
                                        _vm.scrollData.tag.title) ||
                                        "消息"
                                    )
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("h3", { staticClass: "content" }, [
                              _c("p", {
                                ref: "contentInnerRef",
                                staticClass: "content-inner",
                                style: _vm.textStyle,
                                domProps: {
                                  innerHTML: _vm._s(_vm.scrollData.title)
                                }
                              })
                            ])
                          ]
                        )
                      ]
                    )
                  ]
                )
              ],
              1
            )
          ]
        ),
        _vm._v(" "),
        _vm.isShowClose
          ? _c("div", {
              staticClass: "carousel-text-close",
              on: { click: _vm.close }
            })
          : _vm._e()
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/packages/CarouselNotice/CarouselNotice.vue?vue&type=template&id=31d35fe6&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(2);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/CarouselNotice/CarouselNotice.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CarouselNoticevue_type_script_lang_js_ = ({
  name: 'lina-carousel-notice',
  components: {},
  data: function data() {
    return {
      nowIndex: 0 // 当先显示的文字的index

    };
  },
  props: {
    intervals: {
      // 上下滚动的间隔时间，不包括左右滚动  ms
      type: Number,
      default: 3000,
      validator: function validator(value) {
        return value > 0;
      }
    },
    duration: {
      // 上下动画过渡时间 ms
      type: Number,
      default: 500,
      validator: function validator(value) {
        return value > 0;
      }
    },
    textStyle: {
      // 文本内容样式
      type: Object
    },
    boxStyle: {
      // 外框内容样式
      type: Object
    },
    dataList: {
      // 数据
      type: Array
    },
    isShowClose: {
      // 是否显示关闭按钮
      type: Boolean,
      default: false
    },
    isNeedHorizontal: {
      // 是否需要先横向滚动文字，滚动完毕纵向滚动
      type: Boolean,
      default: true
    },
    slideSpeed: {
      // 横向移动的速度 像素/s
      type: Number,
      default: 50,
      validator: function validator(value) {
        return value > 0;
      }
    }
  },
  computed: {
    /**
     * 从传入的数组中实时获取内容
     */
    scrollData: function scrollData() {
      return this.dataList.length ? this.dataList[this.nowIndex] : '请提供内容';
    }
  },
  mounted: function mounted() {
    this.$nextTick(function () {
      this.startScroll(); // 开始轮播
    });
  },

  /**
   * 销毁则停止计时器
   */
  destroyed: function destroyed() {
    console.log('destroyed');
  },
  methods: {
    /**
     * 阻塞
     */
    sleep: function sleep(time) {
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve();
        }, time || 0);
      });
    },

    /**
     *  当内容进入轮播框之前执行的操作
     *  el---> 目标元素
     */
    beforeEnter: function beforeEnter(el) {
      var outHeight = this.$refs.contentRef.offsetHeight; // 获取轮播框的高度
      // 初始化轮播内容的位置和透明度

      el.style = "transition: all ".concat(this.duration, "ms ease-in; -webkit-transition: all ").concat(this.duration, "ms ease-in;transform: translateY(").concat(outHeight, "px);-webkit-transform: translateY(").concat(outHeight, "px);opactity: 0;");
    },

    /**
     * 当内容进入这个轮播框时执行的操作，即一些入场动画
     * el ---> 目标元素
     * done 表示进入完成的回调。
     */
    enter: function enter(el, done) {
      el.style = "transition: all ".concat(this.duration, "ms ease-in; -webkit-transition: all ").concat(this.duration, "ms ease-in;transform: translateY(", 0, "px);-webkit-transform: translateY(", 0, "px);opactity: 1;");
      setTimeout(function () {
        done();
      }, this.duration);
    },

    /**
     * 当内容离开这个轮播框时执行的操作，即一些出场动画
     * el ---> 目标元素
     * done 表示离开完成的回调。
     */
    leave: function leave(el, done) {
      var outHeight = this.$refs.contentRef.offsetHeight; // 获取轮播框的高度

      el.style = "transition: all ".concat(this.duration, "ms ease-in; -webkit-transition: all ").concat(this.duration, "ms ease-in;transform: translateY(-").concat(outHeight, "px);-webkit-transform: translateY(-").concat(outHeight, "px);opactity: 0;");
      setTimeout(function () {
        done();
      }, this.duration);
    },

    /**
     * 当内容进入后，执行的操作
     * el ---> 目标元素
     */
    afterEnter: function afterEnter(el) {
      var _this = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.scrollHorizontal();

              case 2:
                setTimeout(function () {
                  _this.changeShow();
                }, _this.intervals);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },

    /**
     * 开始进行轮播滚动，即入口
     */
    startScroll: function startScroll() {
      var _this2 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.sleep(_this2.intervals);

              case 2:
                _context2.next = 4;
                return _this2.scrollHorizontal();

              case 4:
                setTimeout(function () {
                  _this2.changeShow();
                }, _this2.intervals);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },

    /**
     * 改变显示的内容，这是触发事件
     */
    changeShow: function changeShow() {
      this.nowIndex++;
      this.nowIndex = this.nowIndex % this.dataList.length;
    },

    /**
     * 水平方向单条滚动文字
     */
    scrollHorizontal: function scrollHorizontal(index) {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        var self = _this3;
        var $contentInner = self.$refs.contentInnerRef;
        var offsetWidth = $contentInner.offsetWidth;
        var scrollWidth = $contentInner.scrollWidth;
        /**
         * 文字回复原位置
         */

        self.$refs.contentInnerRef.style.transition = "";
        self.$refs.contentInnerRef.style.transform = "translateX(0)";

        if (scrollWidth > offsetWidth) {
          // 如果文本超出，则先向左滚动至完全显示
          var slideDistance = scrollWidth - offsetWidth; // 滚动距离

          slideDistance *= 1.0; // 实际横向滚动的距离，比传进来的内容多10%的距离

          var slideSpeed = self.slideSpeed; // 滚动速率

          var slideTime = +(slideDistance / slideSpeed).toFixed(3); // 滚动时间 = 滚动距离 / 滚动速率

          /**
           * 1s后开始滚动 同时缓解一个bug
           */

          setTimeout(function () {
            $contentInner.style.transition = "transform ".concat(slideTime, "s linear");
            $contentInner.style.transform = "translateX(".concat(-slideDistance, "px)");
          }, 1000);
          /**
          * 滚动结束，下一条
          */

          setTimeout(function () {
            resolve();
          }, slideTime * 1000);
        } else {
          resolve();
        }
      });
    },

    /**
     * 处理每一个公告点击
     */
    handleClick: function handleClick(item) {
      this.$emit('click');
    },

    /**
     * 点击关闭按钮
     */
    close: function close() {
      this.isShowClose && this.$emit('close');
    }
  }
});
// CONCATENATED MODULE: ./src/packages/CarouselNotice/CarouselNotice.vue?vue&type=script&lang=js&
 /* harmony default export */ var CarouselNotice_CarouselNoticevue_type_script_lang_js_ = (CarouselNoticevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/packages/CarouselNotice/CarouselNotice.vue?vue&type=style&index=0&id=31d35fe6&lang=scss&scoped=true&
var CarouselNoticevue_type_style_index_0_id_31d35fe6_lang_scss_scoped_true_ = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/packages/CarouselNotice/CarouselNotice.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  CarouselNotice_CarouselNoticevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "31d35fe6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/packages/CarouselNotice/CarouselNotice.vue"
/* harmony default export */ var CarouselNotice = (component.exports);
// CONCATENATED MODULE: ./src/packages/CarouselNotice/index.js


CarouselNotice.install = function (Vue) {
  Vue.component(CarouselNotice.name, CarouselNotice);
};

 // 最后将以上内容导出，即可在其他地方进行使用

/* harmony default export */ var packages_CarouselNotice = __webpack_exports__["default"] = ({
  component: CarouselNotice
});

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "ActionSheetVue", function() { return /* reexport */ ActionSheet; });

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/ActionSheet/ActionSheet.vue?vue&type=template&id=5a47430c&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "lina-popup",
    {
      attrs: { isShow: _vm.isShow, position: "bottom", "is-hide-close": true },
      on: { isShow: _vm.clickActionSheetMask }
    },
    [
      _c("div", { staticClass: "lina-actionsheet" }, [
        _c("div", { staticClass: "lina-actionsheet-panel" }, [
          _vm.$slots.custom
            ? _c(
                "div",
                { staticClass: "lina-actionsheet-custom" },
                [_vm._t("custom")],
                2
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.$slots.title || _vm.$slots.subTitle
            ? _c("dl", { staticClass: "lina-actionsheet-modal" }, [
                _c(
                  "dt",
                  { staticClass: "lina-actionsheet-title" },
                  [_vm._t("title")],
                  2
                ),
                _vm._v(" "),
                _c(
                  "dd",
                  { staticClass: "lina-actionsheet-sub-title" },
                  [_vm._t("sub-title")],
                  2
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "ul",
            { staticClass: "lina-actionsheet-menu" },
            _vm._l(_vm.menuItems, function(item, index) {
              return _c(
                "li",
                {
                  key: index,
                  staticClass: "lina-actionsheet-item",
                  class: {
                    "lina-actionsheet-item-active": _vm.isHighlight(item)
                  },
                  on: {
                    click: function($event) {
                      return _vm.chooseItem(item)
                    }
                  }
                },
                [_vm._v(_vm._s(item[_vm.optionTag]))]
              )
            }),
            0
          ),
          _vm._v(" "),
          _vm.cancelText
            ? _c(
                "div",
                {
                  staticClass: "lina-actionsheet-cancel",
                  on: { click: _vm.closeActionSheet }
                },
                [_vm._v(_vm._s(_vm.cancelText))]
              )
            : _vm._e()
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/packages/ActionSheet/ActionSheet.vue?vue&type=template&id=5a47430c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/ActionSheet/ActionSheet.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ActionSheetvue_type_script_lang_js_ = ({
  name: 'lina-action-sheet',
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    preventMaskClose: {
      type: Boolean,
      default: false
    },
    cancelText: {
      type: String,
      default: ''
    },
    optionTag: {
      type: String,
      default: 'name'
    },
    chooseTagValue: {
      type: String,
      default: ''
    },
    menuItems: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {};
  },
  watch: {
    isShow: function isShow(value) {
      !!value && this.$emit('open');
    }
  },
  methods: {
    isHighlight: function isHighlight(item) {
      return this.chooseTagValue && this.chooseTagValue === item[this.optionTag] || this.chooseTagValue === 0;
    },

    /**
     * 关闭事件
     */
    closeActionSheet: function closeActionSheet() {
      this.$emit('close');
      this.$emit('update:isShow', false);
    },

    /**
     * 点击蒙层
     */
    clickActionSheetMask: function clickActionSheetMask() {
      !this.preventMaskClose && this.closeActionSheet();
    },

    /**
     * 选中
     */
    chooseItem: function chooseItem(item) {
      this.$emit('choose', item);
      this.$emit('update:isShow', false); // this.closeActionSheet()
    }
  }
});
// CONCATENATED MODULE: ./src/packages/ActionSheet/ActionSheet.vue?vue&type=script&lang=js&
 /* harmony default export */ var ActionSheet_ActionSheetvue_type_script_lang_js_ = (ActionSheetvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/packages/ActionSheet/ActionSheet.vue?vue&type=style&index=0&lang=scss&scope=true&
var ActionSheetvue_type_style_index_0_lang_scss_scope_true_ = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/packages/ActionSheet/ActionSheet.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ActionSheet_ActionSheetvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/packages/ActionSheet/ActionSheet.vue"
/* harmony default export */ var ActionSheet = (component.exports);
// CONCATENATED MODULE: ./src/packages/ActionSheet/index.js


ActionSheet.install = function (Vue) {
  Vue.component(ActionSheet.name, ActionSheet);
};

 // 最后将以上内容导出，即可在其他地方进行使用

/* harmony default export */ var packages_ActionSheet = __webpack_exports__["default"] = ({
  component: ActionSheet
});

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "PopCurtain", function() { return /* reexport */ PopCurtain; });

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/PopCurtain/PopCurtain.vue?vue&type=template&id=73830274&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "lina-popup",
    {
      attrs: { isShow: _vm.dialog && _vm.dialog.isShow, "is-hide-close": true }
    },
    [
      _c("div", { staticClass: "lina-pop-curtain" }, [
        _c("div", { staticClass: "pop-content" }, [
          _c(
            "div",
            { staticClass: "pop-content-inner" },
            [
              _vm._t("default", [
                _c("img", {
                  staticClass: "pop-content-img",
                  attrs: { src: _vm.dialog.image, alt: "" },
                  on: { click: _vm.clickCurtain }
                })
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "pop-close",
                  class: ["e-" + (_vm.dialog.closeBtnPosition || "bottom")],
                  on: {
                    click: function($event) {
                      return _vm.closeDialog()
                    }
                  }
                },
                [_vm._v("x")]
              )
            ],
            2
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/packages/PopCurtain/PopCurtain.vue?vue&type=template&id=73830274&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/PopCurtain/PopCurtain.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var PopCurtainvue_type_script_lang_js_ = ({
  name: 'lina-pop-curtain',
  props: {
    dialog: {
      type: Object,
      default: function _default() {
        return {
          isShow: false,
          image: '',
          closeBtnPosition: 'bottom' // 'top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right'

        };
      }
    } // 幕帘的基本信息

  },
  methods: {
    closeDialog: function closeDialog() {
      this.dialog.isShow = false;
      this.$emit('update:dialog', this.dialog);
    },
    clickCurtain: function clickCurtain() {
      this.$emit('clickCurtain', this.dialog);
    }
  }
});
// CONCATENATED MODULE: ./src/packages/PopCurtain/PopCurtain.vue?vue&type=script&lang=js&
 /* harmony default export */ var PopCurtain_PopCurtainvue_type_script_lang_js_ = (PopCurtainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/packages/PopCurtain/PopCurtain.vue?vue&type=style&index=0&lang=scss&scope=true&
var PopCurtainvue_type_style_index_0_lang_scss_scope_true_ = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/packages/PopCurtain/PopCurtain.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  PopCurtain_PopCurtainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/packages/PopCurtain/PopCurtain.vue"
/* harmony default export */ var PopCurtain = (component.exports);
// CONCATENATED MODULE: ./src/packages/PopCurtain/index.js


PopCurtain.install = function (Vue) {
  Vue.component(PopCurtain.name, PopCurtain);
};

 // 最后将以上内容导出，即可在其他地方进行使用

/* harmony default export */ var packages_PopCurtain = __webpack_exports__["default"] = ({
  component: PopCurtain
});

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "PopupVue", function() { return /* reexport */ Popup; });

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/Popup/Popup.vue?vue&type=template&id=8b0b5200&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "lina-pop-up" },
    [
      _c("transition", { attrs: { name: "fade" } }, [
        _c("div", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.selfShow,
              expression: "selfShow"
            }
          ],
          staticClass: "night",
          on: {
            click: function($event) {
              if ($event.target !== $event.currentTarget) {
                return null
              }
              $event.stopPropagation()
              !_vm.preventMaskClose && _vm.close()
            },
            touchmove: function($event) {
              $event.preventDefault()
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("transition", { attrs: { name: _vm.position } }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.selfShow,
                expression: "selfShow"
              }
            ],
            ref: "pop",
            staticClass: "slot-container",
            class: _vm.position
          },
          [
            _vm._t("default"),
            _vm._v(" "),
            !_vm.isHideClose
              ? _c("div", { staticClass: "close", on: { click: _vm.close } })
              : _vm._e()
          ],
          2
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/packages/Popup/Popup.vue?vue&type=template&id=8b0b5200&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(2);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/Popup/Popup.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Popupvue_type_script_lang_js_ = ({
  name: 'lina-popup',
  data: function data() {
    return {};
  },
  props: {
    isShow: {
      type: Boolean,
      required: true,
      default: false
    },
    position: {
      type: String,
      default: 'center' // center, top, right, bottom, left

    },
    isHideClose: {
      type: Boolean,
      required: false,
      default: false
    },
    closeCallBack: {
      type: Function,
      required: false
    },
    preventMaskClose: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    selfShow: {
      get: function get() {
        return this.isShow;
      },
      set: function set(val) {
        this.$emit('isShow', val);
        this.$emit('update:isShow', val);
      }
    }
  },
  model: {
    prop: 'isShow',
    event: 'isShow'
  },
  methods: {
    close: function close() {
      var _this = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.$emit('closeCallBack');

                if (!_this.closeCallBack) {
                  _context.next = 4;
                  break;
                }

                _context.next = 4;
                return _this.closeCallBack();

              case 4:
                _this.selfShow = false;

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./src/packages/Popup/Popup.vue?vue&type=script&lang=js&
 /* harmony default export */ var Popup_Popupvue_type_script_lang_js_ = (Popupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/packages/Popup/Popup.vue?vue&type=style&index=0&id=8b0b5200&lang=scss&scoped=true&
var Popupvue_type_style_index_0_id_8b0b5200_lang_scss_scoped_true_ = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/packages/Popup/Popup.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Popup_Popupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "8b0b5200",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/packages/Popup/Popup.vue"
/* harmony default export */ var Popup = (component.exports);
// CONCATENATED MODULE: ./src/packages/Popup/index.js


Popup.install = function (Vue) {
  Vue.component(Popup.name, Popup);
};

 // 最后将以上内容导出，即可在其他地方进行使用

/* harmony default export */ var packages_Popup = __webpack_exports__["default"] = ({
  component: Popup
});

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "PopupPicker", function() { return /* reexport */ PopupPicker; });

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/PopupPicker/PopupPicker.vue?vue&type=template&id=a23ed9c8&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("lina-popup", [_c("lina-picker")], 1)
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/packages/PopupPicker/PopupPicker.vue?vue&type=template&id=a23ed9c8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/PopupPicker/PopupPicker.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var PopupPickervue_type_script_lang_js_ = ({
  name: 'lina-popup-picker',
  data: function data() {
    return {};
  },
  computed: {},
  created: function created() {},
  mounted: function mounted() {},
  beforeDestroy: function beforeDestroy() {},
  destroyed: function destroyed() {},
  methods: {}
});
// CONCATENATED MODULE: ./src/packages/PopupPicker/PopupPicker.vue?vue&type=script&lang=js&
 /* harmony default export */ var PopupPicker_PopupPickervue_type_script_lang_js_ = (PopupPickervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/packages/PopupPicker/PopupPicker.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  PopupPicker_PopupPickervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "a23ed9c8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/packages/PopupPicker/PopupPicker.vue"
/* harmony default export */ var PopupPicker = (component.exports);
// CONCATENATED MODULE: ./src/packages/PopupPicker/index.js


PopupPicker.install = function (Vue) {
  Vue.component(PopupPicker.name, PopupPicker);
};

 // 最后将以上内容导出，即可在其他地方进行使用

/* harmony default export */ var packages_PopupPicker = __webpack_exports__["default"] = ({
  component: PopupPicker
});

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "More", function() { return /* reexport */ More; });

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/More/More.vue?vue&type=template&id=d57af774&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "lina-more" },
    [
      _c(
        "div",
        {
          ref: "more",
          staticClass: "lina-more-box",
          class: {
            "lina-more-true": _vm.isMore,
            "lina-more-false": _vm.isBottomUi && !_vm.isMore
          },
          style: {
            maxHeight: _vm.maxHeight,
            height: this.isMore && _vm.maxHeight
          }
        },
        [_c("div", { ref: "content" }, [_vm._t("content")], 2)]
      ),
      _vm._v(" "),
      _vm.isBottomUi
        ? [
            _vm.isToggleSlot
              ? _c(
                  "div",
                  { ref: "toggle" },
                  [_vm._t("toggle", null, { isMore: _vm.isMore })],
                  2
                )
              : _c(
                  "div",
                  { staticClass: "lina-operation", on: { click: _vm.toggle } },
                  [
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.isMore,
                            expression: "isMore"
                          }
                        ],
                        staticClass: "lina-btn-more"
                      },
                      [
                        _vm._t("pack", [
                          _c("span", { staticClass: "lina-more-text" }, [
                            _vm._v("收起")
                          ])
                        ])
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: !_vm.isMore,
                            expression: "!isMore"
                          }
                        ],
                        ref: "moreSlot",
                        staticClass: "lina-btn-no-more",
                        style: {
                          marginTop: "-" + _vm.noMoreHeight + "px",
                          background:
                            "linear-gradient(" + _vm.linearGradient + ")"
                        }
                      },
                      [
                        _vm._t("more", [
                          _c("span", { staticClass: "lina-more-text" }, [
                            _vm._v("展开")
                          ])
                        ])
                      ],
                      2
                    )
                  ]
                )
          ]
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/packages/More/More.vue?vue&type=template&id=d57af774&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/More/More.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Morevue_type_script_lang_js_ = ({
  name: 'lina-more',
  props: {
    packHeight: {
      // 收起高度
      type: String,
      required: true
    },
    moreHeight: String,
    // 展开高度，没有得话自适应
    linearGradient: String // 收起渐变颜色

  },
  data: function data() {
    return {
      isMore: false,
      isBottomUi: true,
      height: '',
      noMoreHeight: 0,
      slots: {},
      scopedSlots: []
    };
  },
  computed: {
    maxHeight: function maxHeight() {
      if (this.isMore) {
        return this.moreHeight || this.height;
      } else {
        return this.packHeight;
      }
    },
    isToggleSlot: function isToggleSlot() {
      return this.slots.toggle && this.slots.toggle.length || this.$scopedSlots.toggle;
    }
  },
  mounted: function mounted() {
    this.$watch('packHeight', function () {
      this.needMore();
      this.setMarginTop();
    }, {
      immediate: true
    });
    this.setHeight();
  },
  methods: {
    toggle: function toggle() {
      this.isMore = !this.isMore;
    },
    // 内容高度小于收起高度,隐藏掉收起&展开
    needMore: function needMore() {
      var contentHeight = this.$refs.content.getBoundingClientRect().height;
      var packHeight = this.$refs.more.getBoundingClientRect().height;
      this.isBottomUi = contentHeight > packHeight;
    },
    // 获得height
    setMarginTop: function setMarginTop() {
      if (this.isBottomUi) {
        var ref = this.$refs.moreSlot;

        if (this.isToggleSlot) {
          ref = this.$refs.toggle;
        }

        this.noMoreHeight = ref.getBoundingClientRect().height;
      }
    },
    setHeight: function setHeight() {
      if (this.isBottomUi) {
        this.height = this.$refs.content.getBoundingClientRect().height + 'px';
      }
    }
  }
});
// CONCATENATED MODULE: ./src/packages/More/More.vue?vue&type=script&lang=js&
 /* harmony default export */ var More_Morevue_type_script_lang_js_ = (Morevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/packages/More/More.vue?vue&type=style&index=0&id=d57af774&lang=scss&scoped=true&
var Morevue_type_style_index_0_id_d57af774_lang_scss_scoped_true_ = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/packages/More/More.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  More_Morevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "d57af774",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/packages/More/More.vue"
/* harmony default export */ var More = (component.exports);
// CONCATENATED MODULE: ./src/packages/More/index.js


More.install = function (Vue) {
  Vue.component(More.name, More);
};

 // 最后将以上内容导出，即可在其他地方进行使用

/* harmony default export */ var packages_More = __webpack_exports__["default"] = ({
  component: More
});

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "DatetimePicker", function() { return /* reexport */ DatetimePicker; });

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/DatetimePicker/DatetimePicker.vue?vue&type=template&id=0fc1bbc6&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "lina-picker",
    {
      ref: "picker",
      attrs: {
        slots: _vm.time.data,
        lineHeight: _vm.lineHeight,
        fontSize: _vm.fontSize,
        head: _vm.head,
        cancelText: _vm.cancelText,
        confirmText: _vm.confirmText,
        cancelColor: _vm.cancelColor,
        confirmColor: _vm.confirmColor
      },
      on: {
        change: _vm.handleChange,
        confirm: _vm.handleConfirm,
        cance: _vm.handleCance
      }
    },
    [_vm._t("title", null, { slot: "title" })],
    2
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/packages/DatetimePicker/DatetimePicker.vue?vue&type=template&id=0fc1bbc6&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(5);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: ./src/packages/DatetimePicker/time/index.js + 4 modules
var time = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/DatetimePicker/DatetimePicker.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var DatetimePickervue_type_script_lang_js_ = ({
  name: 'lina-datetime-picker',
  props: {
    type: {
      type: String,
      default: 'datetime' // 'datetime', 'date', 'time'

    },
    defaultDate: Date,
    // 当前时间
    minDate: {
      type: Date,
      default: function _default() {
        return new Date("".concat(new Date().getFullYear() - 10, "/1/1"));
      }
    },
    maxDate: {
      type: Date,
      default: function _default() {
        return new Date("".concat(new Date().getFullYear() + 10, "/12/31"));
      }
    },
    minHour: {
      type: Number,
      default: 0
    },
    maxHour: {
      type: Number,
      default: 23
    },
    minMinute: {
      type: Number,
      default: 0
    },
    maxMinute: {
      type: Number,
      default: 59
    },
    filterData: Function,
    yearFormat: {
      type: String,
      default: '{value}'
    },
    monthFormat: {
      type: String,
      default: '{value}'
    },
    dateFormat: {
      type: String,
      default: '{value}'
    },
    hourFormat: {
      type: String,
      default: '{value}'
    },
    minuteFormat: {
      type: String,
      default: '{value}'
    },
    value: {
      validator: function validator() {
        return true;
      }
    },
    lineHeight: {
      type: String,
      default: '34px'
    },
    fontSize: {
      type: String,
      default: '16px'
    },
    head: {
      type: Boolean,
      default: true
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确认'
    },
    cancelColor: String,
    confirmColor: String
  },
  data: function data() {
    return {
      time: {}
    };
  },
  computed: {
    values: function values() {
      return this.time.values;
    },
    isYear: function isYear() {
      return typeof_default()(this.values[0]) === 'object';
    },
    options: function options() {
      var defaultDate = this.defaultDate,
          minDate = this.minDate,
          maxDate = this.maxDate,
          minHour = this.minHour,
          maxHour = this.maxHour,
          minMinute = this.minMinute,
          maxMinute = this.maxMinute,
          yearFormat = this.yearFormat,
          monthFormat = this.monthFormat,
          dateFormat = this.dateFormat,
          hourFormat = this.hourFormat,
          minuteFormat = this.minuteFormat;
      return {
        defaultDate: defaultDate,
        minDate: minDate,
        maxDate: maxDate,
        minHour: minHour,
        maxHour: maxHour,
        minMinute: minMinute,
        maxMinute: maxMinute,
        yearFormat: yearFormat,
        monthFormat: monthFormat,
        dateFormat: dateFormat,
        hourFormat: hourFormat,
        minuteFormat: minuteFormat
      };
    }
  },
  mounted: function mounted() {
    this.$watch('type', this.getDateSlots, {
      immediate: true
    });
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  methods: {
    getDateSlots: function getDateSlots(type) {
      if (!(this.time instanceof time["default"])) {
        this.time = new time["default"](type, this.$refs.picker, this.options);
      } else {
        this.time.type = type;
      }
    },
    handleChange: function handleChange(values) {
      this.time.values = values;
      values = this.filterValue(values);
      this.$emit('change', values);
      this.$emit('update:value', values);
    },
    handleConfirm: function handleConfirm(values) {
      values = this.filterValue(values);
      this.$emit('confirm', values);
    },
    handleCance: function handleCance() {
      this.$emit('cance');
    },
    filterValue: function filterValue(values) {
      var str = '';
      var date = null;
      values = JSON.parse(JSON.stringify(values));
      var arr = values.map(function (obj) {
        return obj.value.toString().padStart(2, 0);
      });

      if (this.type === 'time') {
        str = arr.join(':');
        date = str;
      } else {
        var times = arr.splice(3);
        str = arr.join('-');

        if (times.length) {
          str += ' ' + times.join(':');
        }

        date = new Date(str).getTime();
      }

      if (typeof this.filterData === 'function') {
        str = this.filterData(values, date);
      }

      return str;
    }
  }
});
// CONCATENATED MODULE: ./src/packages/DatetimePicker/DatetimePicker.vue?vue&type=script&lang=js&
 /* harmony default export */ var DatetimePicker_DatetimePickervue_type_script_lang_js_ = (DatetimePickervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/packages/DatetimePicker/DatetimePicker.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  DatetimePicker_DatetimePickervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "0fc1bbc6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/packages/DatetimePicker/DatetimePicker.vue"
/* harmony default export */ var DatetimePicker = (component.exports);
// CONCATENATED MODULE: ./src/packages/DatetimePicker/index.js


DatetimePicker.install = function (Vue) {
  Vue.component(DatetimePicker.name, DatetimePicker);
};

 // 最后将以上内容导出，即可在其他地方进行使用

/* harmony default export */ var packages_DatetimePicker = __webpack_exports__["default"] = ({
  component: DatetimePicker
});

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "NavBar", function() { return /* reexport */ NavBar; });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/NavBar/NavBar.vue?vue&type=script&lang=js&
//
/* harmony default export */ var NavBarvue_type_script_lang_js_ = ({
  name: 'lina-nav-bar',
  props: {
    title: {
      // 标题内容
      type: String
    },
    zIndex: {
      // 层级
      type: Number,
      default: 1
    },
    leftText: {
      // 左边导航文本
      type: String
    },
    rightText: {
      // 右边导航文本
      type: String
    },
    isHideLeftArrow: {
      // 是否隐藏左边导航箭头
      type: Boolean,
      default: false
    }
  },
  methods: {
    clickLeft: function clickLeft() {
      console.log('clickLeft');
      var fn = this.$listeners['click-left'];
      fn && typeof fn === 'function' && fn();
    },
    clickRight: function clickRight() {
      console.log('clickRight');
      var fn = this.$listeners['click-right'];
      fn && typeof fn === 'function' && fn();
    }
  },
  mounted: function mounted() {// console.log(this)
    // console.log(this.$slots)
    // console.log(this.$listeners)
  },
  render: function render(h) {
    return h("transition", {
      attrs: {
        name: 'f-fade'
      }
    }, [h("div", {
      "class": "lina-nav-bar",
      style: {
        zIndex: this.zIndex
      }
    }, [h("div", {
      "class": "left",
      on: {
        "click": this.clickLeft
      }
    }, [this.$slots.left ? this.$slots.left : [!this.isHideLeftArrow && h("i", {
      "class": "icon-left-arrow"
    }), this.leftText && h("span", {
      "class": "nav-text"
    }, [this.leftText])]]), h("div", {
      "class": "moddle"
    }, [this.$slots.title ? this.$slots.title : h("h3", {
      "class": "title"
    }, [this.title])]), h("div", {
      "class": "right",
      on: {
        "click": this.clickRight
      }
    }, [this.$slots.right ? this.$slots.right : [this.rightText && h("span", {
      "class": "nav-text"
    }, [this.rightText])]])])]);
  }
});
// CONCATENATED MODULE: ./src/packages/NavBar/NavBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var NavBar_NavBarvue_type_script_lang_js_ = (NavBarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/packages/NavBar/NavBar.vue?vue&type=style&index=0&lang=scss&scope=true&
var NavBarvue_type_style_index_0_lang_scss_scope_true_ = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/packages/NavBar/NavBar.vue
var render, staticRenderFns





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  NavBar_NavBarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/packages/NavBar/NavBar.vue"
/* harmony default export */ var NavBar = (component.exports);
// CONCATENATED MODULE: ./src/packages/NavBar/index.js


NavBar.install = function (Vue) {
  Vue.component(NavBar.name, NavBar);
};

 // 最后将以上内容导出，即可在其他地方进行使用

/* harmony default export */ var packages_NavBar = __webpack_exports__["default"] = ({
  component: NavBar
});

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "PreLoad", function() { return /* reexport */ _preLoad; });

// CONCATENATED MODULE: ./src/packages/PreLoad/_preLoad.js
/**
 * 预加载图片
 * @param {array | object} opts         如果opts是数组，则直接作为opts.urls处理
 * @param {array} opts.urls             图片链接
 * @param {function} opts.eachLoadFunc  每张图片加载完毕的回调，回调参数是percent（加载的百分数，1-100）
 * @param {function} opts.callback      所有图片加载完毕的回调
 * @param {function} opts.maxPercent    加载完毕后最大百分数,默认是100，需要设置的情形是，假如设置80，则先加载完成图片，百分数是80%，然后剩下20%，额外处理，例如加载视频或者其他东西
 * @returns Promise
 */
var loadImgs = function loadImgs(opts) {
  return new Promise(function (resolve) {
    var urls = (Object.prototype.toString.apply(opts) === '[object Array]' ? opts : opts.urls) || []; // 需要预加载的图片队列

    var eachLoadFunc = opts.eachLoadFunc; // 每张图片加载完毕的回调

    var callback = opts.callback; // 所有图片加载完毕的回调

    var imgNumbers = urls.length;
    var loadImgNumbers = 0; // 已经加载的图片数量

    var percent = 0; // 加载的百分数

    var maxPercent = opts.maxPercent || 100; // 加载完毕后最大百分数，由于还要加载视频，所以设置80

    if (imgNumbers <= 0) {
      // 如果没有图片 直接调用回调函数
      _callback();

      return;
    }

    for (var i = 0; i < urls.length; i++) {
      var obj = new Image();
      obj.src = urls[i];

      obj.onload = function () {
        loadImgNumbers++;

        _onEvent();
      };

      obj.onerror = function () {
        imgNumbers--;

        _onEvent();
      };
    }
    /**
     * 图片每次加载的回调
     */


    function _onEvent() {
      percent = Math.ceil(loadImgNumbers / imgNumbers * maxPercent);
      eachLoadFunc && typeof eachLoadFunc === 'function' && eachLoadFunc(percent); // 每一次load完都执行的函数

      if (percent >= maxPercent) {
        // 加载结束后，隐藏相应的 loading 或遮罩
        console.log('img all load');

        _callback();
      }
    }
    /**
     * 图片加载结束的回调
     */


    function _callback() {
      callback && typeof callback === 'function' && callback();
      resolve();
    }
  });
};
/* harmony default export */ var _preLoad = ({
  loadImgs: loadImgs
});
// CONCATENATED MODULE: ./src/packages/PreLoad/index.js
 // 插件必须要有一个install方法

_preLoad.install = function (Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (_preLoad.installed) return;
  Vue.prototype.$preLoad = _preLoad;
  _preLoad.installed = true;
};

 // 最后将以上内容导出，即可在其他地方进行使用

/* harmony default export */ var PreLoad = __webpack_exports__["default"] = ({
  method: _preLoad
});

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/utils/throttle.js
var throttle = __webpack_require__(9);

// CONCATENATED MODULE: ./src/packages/lazyLoadImg/main.js

/**
 * 懒加载构造函数
 *
 * @param {*} el 指令所绑定的元素，可以用来直接操作 DOM
 * @param {*} binding
 * @returns
 */

function Lazy(el, binding) {
  if (!(this instanceof Lazy)) return new Lazy(el, binding); // 防止忘记用new 创建实例

  this.el = el; // 公有属性

  this.binding = binding;

  function hasIntersectionObserver() {
    // 私有方法,实例无法获取
    if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
      return true;
    }

    return false;
  }

  this.judgeEnv = function () {
    // 公有方法
    var self = this; // console.log(`\u001b[3${~~(Math.random() * 8)}m${hasIntersectionObserver()}\u001b[0m`)

    if (hasIntersectionObserver()) {
      self.observer = null;
      self.useIntersectionObserver(el, binding);
    } else {
      self._throttleFn = Object(throttle["a" /* default */])(self.handleLazyLoad.bind(self, el, binding), 500);
      self.on(document, 'scroll', self._throttleFn);
      self.handleLazyLoad();
    }
  };

  this.judgeEnv();
}
/**
 * 事件绑定
 */


Lazy.prototype.on = function () {
  // 原型方法
  if (document.addEventListener) {
    return function (element, event, handler) {
      return element && event && handler && element.addEventListener(event, handler, false);
    };
  }
}();
/**
 * 事件解绑
 */


Lazy.prototype.off = function () {
  if (document.removeEventListener) {
    return function (element, event, handler) {
      return element && event && element.removeEventListener(event, handler, false);
    };
  }
}();
/**
 * 是否进入视野区
 *
 * @param {*} element 被监控的元素
 * @param {*} container 被监控的元素的范围元素, 在该元素盒模型则表示进入
 * @returns
 */


Lazy.prototype.isInView = function (element, container) {
  // 如果不传，默认返回false
  if (!element || !container) {
    return false;
  }

  var elRect = element.getBoundingClientRect(); // window, document, document.documentElement, undefined
  // 若不传container，则取以上默认值
  // 其实只要判断元素出现在四条边（相当于盒模型）之内，就算是进入视野,这里我只用document

  var containerRect = [window, document, document.documentElement, undefined].includes(container) ? {
    top: 0,
    right: window.innerWidth,
    bottom: window.innerHeight,
    left: 0
  } : container.getBoundingClientRect();
  return elRect.left < containerRect.right && // 即元素出现在窗口的右边的左部
  elRect.top < containerRect.bottom && // 即元素出现在窗口的底部之上
  elRect.bottom > containerRect.top && // 即元素出现在窗口的顶部之下
  elRect.right > containerRect.left; // 即元素出现在窗口的左部的右边
};
/**
 * 处理懒加载，在不支持IntersectionObserver下使用
 */


Lazy.prototype.handleLazyLoad = function () {
  // console.log('图片进入shi野区:', this.isInView(this.el, window))
  // console.log(1)
  var _this$binding$value = this.binding.value,
      isNeedCache = _this$binding$value.isNeedCache,
      src = _this$binding$value.src; // 参数

  if (this.isInView(this.el, document)) {
    this.el.setAttribute('src', isNeedCache ? src : "".concat(src, "?timeStamp=").concat(+new Date()));
    this.off(document, 'scroll', this._throttleFn); // 进入窗口之后取消监听
  }
};
/**
 * 解绑滚动事件
 */


Lazy.prototype.unbindListener = function () {
  this.off(document, 'scroll', this._throttleFn);
};
/**
 * 处理懒加载，在支持IntersectionObserver下使用
 */


Lazy.prototype.useIntersectionObserver = function (el, binding) {
  var _this = this;

  var obserConfig = {
    // 监听设置，先把mdn的解释抄过来，方便记
    root: null,
    // The element that is used as the viewport for checking visiblity of the target.
    // Must be the ancestor of the target.
    // Defaults to the browser viewport if not specified or if null.
    rootMargin: '0px',
    // Margin around the root.
    // Can have values similar to the CSS margin property,
    // e.g. "10px 20px 30px 40px" (top, right, bottom, left).
    // The values can be percentages.
    // This set of values serves to grow or shrink each side of the root element's bounding box before computing intersections.
    // Defaults to all zeros.
    threshold: [0] // Either a single number or an array of numbers which indicate at what percentage of
    // the target's visibility the observer's callback should be executed.

  };
  this.observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var target = entry.target; // 目标元素

      var _this$binding$value2 = _this.binding.value,
          isNeedCache = _this$binding$value2.isNeedCache,
          src = _this$binding$value2.src; // 参数

      if (entry.intersectionRatio > 0) {
        _this.observer.unobserve(target); // 进入窗口之后取消监听


        target.tagName.toLocaleLowerCase() === 'img' && el.setAttribute('src', isNeedCache ? src : "".concat(src, "?timeStamp=").concat(+new Date()));
      }
    });
  }, obserConfig);
  this.observer.observe(el);
};

/* harmony default export */ var main = ({
  name: 'lazyLoadImg',
  inserted: function inserted(el, binding) {
    // 使用dom来做衔接桥梁，把取消监听方法给弄上去，暂时不知道有没有什么副作用
    !!binding.value.src && (el['lina-lazyload-listenser'] = Lazy(el, binding));
  },
  unbind: function unbind(el) {
    el['lina-lazyload-listenser'].unbindListener();
  }
});
// CONCATENATED MODULE: ./src/packages/lazyLoadImg/index.js


main.install = function (Vue) {
  Vue.directive(main.name, main);
};

/* harmony default export */ var lazyLoadImg = __webpack_exports__["default"] = ({
  directive: main
});

/***/ })
],[[52,1,2,3]]]);