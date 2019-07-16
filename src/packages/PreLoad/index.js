import PreLoad from './_preLoad'

// 插件必须要有一个install方法
PreLoad.install = function (Vue, options = {}) {
  if (PreLoad.installed) return
  Vue.prototype.$preLoad = PreLoad
  PreLoad.installed = true
}
export {
  PreLoad
}
// 最后将以上内容导出，即可在其他地方进行使用
export default {
  method: PreLoad
}
