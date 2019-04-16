import Dialog from './_dialog'
import DialogVue from './Dialog'

// 插件必须要有一个install方法
Dialog.install = function (Vue, options = {}) {
  if (Dialog.installed) return
  Vue.prototype.$dialog = Dialog
  Vue.component(DialogVue.name, DialogVue)
  Dialog.installed = true
}
export {
  Dialog,
  DialogVue
}
// 最后将以上内容导出，即可在其他地方进行使用
export default {
  method: Dialog,
  component: DialogVue
}
