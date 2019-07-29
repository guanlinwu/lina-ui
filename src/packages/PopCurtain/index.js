import PopCurtain from './PopCurtain'
PopCurtain.install = function (Vue) {
  Vue.component(PopCurtain.name, PopCurtain)
}

export {
  PopCurtain
}
// 最后将以上内容导出，即可在其他地方进行使用
export default {
  component: PopCurtain
}
