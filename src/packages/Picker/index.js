import Picker from './Picker'
console.log(Picker)
Picker.install = function (Vue) {
  Vue.component(Picker.name, Picker)
}

export {
  Picker
}
// 最后将以上内容导出，即可在其他地方进行使用
export default {
  component: Picker
}
