/**
 * Toast
 * usage: this.$toast(option)
 */
import Vue from 'vue'
import ToastVue from './Toast.vue'

let ToastConstructor = Vue.extend(ToastVue)

/**
 * 移除dom
 */
let removeDom = event => {
  event.target.parentNode.removeChild(event.target)
}

/**
 * 实现toast的关闭方法
 */
ToastConstructor.prototype.close = function () {
  this.isVisible = false
  this.$el.addEventListener('transitionend', removeDom)
}

let Toast = (options = {}) => {
  let instance = new ToastConstructor().$mount()
  let duration = options.duration || 2500
  instance.message = typeof options === 'string' || typeof options === 'number' ? options : options.message
  instance.position = options.position || 'middle'
  document.body.appendChild(instance.$el)
  Vue.nextTick(() => {
    instance.isVisible = true
    instance.timer = setTimeout(function () {
      instance.close()
    }, duration)
  })
}

export default Toast
