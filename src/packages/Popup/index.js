import PopupVue from './Popup'
PopupVue.install = function (Vue) {
  Vue.component(PopupVue.name, PopupVue)
}

export {
  PopupVue
}
// 最后将以上内容导出，即可在其他地方进行使用
export default {
  component: PopupVue
}
