import NavBar from './NavBar'
NavBar.install = function (Vue) {
  Vue.component(NavBar.name, NavBar)
}

export {
  NavBar
}
// 最后将以上内容导出，即可在其他地方进行使用
export default {
  component: NavBar
}
