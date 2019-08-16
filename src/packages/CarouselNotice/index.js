import CarouselNotice from './CarouselNotice'
CarouselNotice.install = function (Vue) {
  Vue.component(CarouselNotice.name, CarouselNotice)
}

export {
  CarouselNotice
}
// 最后将以上内容导出，即可在其他地方进行使用
export default {
  component: CarouselNotice
}
