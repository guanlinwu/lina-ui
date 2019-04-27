import ActionSheetVue from './ActionSheet'
ActionSheetVue.install = function (Vue) {
  Vue.component(ActionSheetVue.name, ActionSheetVue)
}

export {
  ActionSheetVue
}
// 最后将以上内容导出，即可在其他地方进行使用
export default {
  component: ActionSheetVue
}
