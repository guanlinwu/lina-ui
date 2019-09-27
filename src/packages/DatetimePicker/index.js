import DatetimePicker from './DatetimePicker'
DatetimePicker.install = function (Vue) {
  Vue.component(DatetimePicker.name, DatetimePicker)
}

export {
  DatetimePicker
}
// 最后将以上内容导出，即可在其他地方进行使用
export default {
  component: DatetimePicker
}
