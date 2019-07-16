/**
 * Loading
 * usage: this.$loading.show(); this.$loading.hide();
 */
import Vue from 'vue'
import LoadingVue from './Loading.vue'

let LoadingConstructor = Vue.extend(LoadingVue)
let instance = null

let transitionend = () => {
  instance.message = ''
  instance.isHideMessage = false
  instance.$el.removeEventListener('transitionend', transitionend)
}

// 实现loading的关闭方法
LoadingConstructor.prototype.hide = () => {
  instance.time--
  if (instance.time <= 0) {
    instance.isVisible = false
    instance.$el.addEventListener('transitionend', transitionend, false)
  }
}
// 实现loading的展示方法
LoadingConstructor.prototype.show = (options) => {
  if (options) {
    instance.message = typeof options === 'string' || typeof options === 'number' ? options : options.message
    instance.isHideMessage = options.isHideMessage
  }
  instance.time++
  instance.isVisible = true
}
// 实现loading的展示方法
LoadingConstructor.prototype.setMessage = (options) => {
  if (options) {
    instance.message = typeof options === 'string' || typeof options === 'number' ? options : options.message
    instance.isHideMessage = false
  }
}

/**
 * 实例构建
 */
let Loading = (options = {}) => {
  if (instance === null) {
    instance = new LoadingConstructor().$mount(document.createElement('div'))
    document.body.appendChild(instance.$el)
  }
  return instance
}

export default Loading
