import PullRefresh from './PullRefresh'
console.log(PullRefresh)
PullRefresh.install = function (Vue) {
  Vue.component(PullRefresh.name, PullRefresh)
}

export {
  PullRefresh
}
// 最后将以上内容导出，即可在其他地方进行使用
export default {
  component: PullRefresh
}
