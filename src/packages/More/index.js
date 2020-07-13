import More from './More'
More.install = function (Vue) {
  Vue.component(More.name, More)
}

export {
  More
}
// 最后将以上内容导出，即可在其他地方进行使用
export default {
  component: More
}