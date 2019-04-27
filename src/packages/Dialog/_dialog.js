import Vue from 'vue'
import DialogVue from './Dialog'

let DialogConstructor = Vue.extend(DialogVue)
let instance = null
const defaultData = { // 默认属性
  id: null,
  footer: {
    confirm: {
      text: '确认'
    },
    cancel: {
      text: '取消'
    }
  }
}

let Dialog = (options = {}) => {
  options.id = options.id || 'dialog-default-id' // 标识符，相同者共享一个实例

  if (options.isHideFooter === true) {
    options.preventMaskClose = true
  }

  instance = new DialogConstructor({
    propsData: {
      dialog: {
        ...defaultData,
        ...options,
        isShow: true
      }
    }
  }).$mount(document.createElement('div'))

  let $dialogDom = document.querySelector('#' + options.id)
  if (options.id && $dialogDom) {
    $dialogDom.parentNode.replaceChild(instance.$el, $dialogDom)
  } else {
    document.body.appendChild(instance.$el)
  }

  return instance
}

export default Dialog
