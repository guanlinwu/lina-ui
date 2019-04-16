import Loading from './_loading'

// 插件必须要有一个install方法
Loading.install = function (Vue, options = {}) {
  if (Loading.installed) return
  /**
   * Loading显示
   */
  Vue.prototype.$loading = Loading()

  Loading.installed = true
}
export {
  Loading
}
// 最后将以上内容导出，即可在其他地方进行使用
export default {
  method: Loading()
}

