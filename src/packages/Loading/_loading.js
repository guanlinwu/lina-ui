/**
 * Loading
 * usage: this.$loading.show(); this.$loading.hide();
 */
import Vue from 'vue'
import LoadingVue from './Loading.vue'

let LoadingConstructor = Vue.extend(LoadingVue)
let instance = null

// 实现loading的关闭方法
LoadingConstructor.prototype.hide = () => {
  instance.time--
  if (instance.time <= 0) {
    instance.isVisible = false
  }
}
// 实现loading的展示方法
LoadingConstructor.prototype.show = () => {
  instance.time++
  instance.isVisible = true
}

let Loading = (options = {}) => {
  if (instance === null) {
    instance = new LoadingConstructor().$mount(document.createElement('div'))
    document.body.appendChild(instance.$el)
  }
  return instance
}

export default Loading
