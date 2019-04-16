import Toast from './_toast'
// 插件必须要有一个install方法
Toast.install = function (Vue, options = {}) {
  if (Toast.installed) return
  /**
   * toast显示
   */
  Vue.prototype.$toast = Toast

  Toast.installed = true
}
export {
  Toast
}
// 最后将以上内容导出，即可在其他地方进行使用
export default {
  method: Toast
}
