import lazyLoadImg from './main.js'
lazyLoadImg.install = function (Vue) {
  Vue.directive(lazyLoadImg.name, lazyLoadImg)
}

export default lazyLoadImg
