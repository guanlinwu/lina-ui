import PopupPicker from './PopupPicker'
PopupPicker.install = function (Vue) {
  Vue.component(PopupPicker.name, PopupPicker)
}

export {
  PopupPicker
}
// 最后将以上内容导出，即可在其他地方进行使用
export default {
  component: PopupPicker
}
