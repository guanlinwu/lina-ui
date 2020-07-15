import Vue from 'vue'
import DialogVue from './Dialog'

let DialogConstructor = Vue.extend(DialogVue)
// let instance = null
const defaultData = { // 默认属性
  id: null,
  footer: {
    cancel: {
      text: '取消'
    },
    confirm: {
      text: '确认'
    }
  }
}

/**
 * 移除dom
 */
let removeDom = event => {
  event.target.parentNode.parentNode.removeChild(event.target.parentNode)
}

/**
 * 实例构建
 */
let Dialog = (options = {}) => {
  options.id = options.id || 'dialog-default-id' // 标识符，相同者共享一个实例

  if (options.isHideFooter === true) {
    options.preventMaskClose = true
    options.isHideClose = true
  }

  let instance = new DialogConstructor({
    propsData: {
      dialog: {
        ...defaultData,
        ...options,
        isShow: false
      }
    }
  }).$mount(document.createElement('div'))
  /**
   * 如果不是共用实例的弹窗，关闭后，从dom中移除
   */
  options.id !== 'dialog-default-id' && (instance.removeDomCallBack = () => {
    instance.$el.lastElementChild.addEventListener('animation', removeDom)
  })
  let $dialogDom = document.querySelector('#' + options.id)
  if (options.id && $dialogDom) {
    $dialogDom.parentNode.parentNode.parentNode.replaceChild(instance.$el, $dialogDom.parentNode.parentNode)
  } else {
    document.body.appendChild(instance.$el)
  }
  instance.dialog.isShow = true
  return instance
}
/**
 * 一个懒人的confirm框
 *
 * @param {*} [options={}]
 * @param {*} [options={
    title: '提示',
    message: '此操作将永久删除该文件, 是否继续?',
    footer: {
      confirm: {
        text: '确定'
      },
      cancel: {
        text: '取消'
      }
    }
  }]
 * @returns
 */
Dialog.$confirm = (options = {}) => {
  return new Promise((resolve, reject) => {
    let defaultOptions = {
      id: 'dialog-confirm-default-id',
      footer: {
        cancel: {
          text: '取消'
        },
        confirm: {
          text: '确定'
        }
      }
    }
    let confirmInstance = Dialog({
      ...defaultOptions,
      ...options
    })
    confirmInstance.promiseCallBack = (key) => { // 确定返回resolve，取消返回reject
      if (key === 'confirm') {
        resolve()
      } else if (key === 'cancel') {
        reject('cancel-close')  // eslint-disable-line
      } else if (key === 'mask') {
        reject('mask-close')  // eslint-disable-line
      } else if (key === 'icon-close') {
        reject('icon-close')  // eslint-disable-line
      } else {
        console.warn('footer key wrong')
      }
    }
  })
}

export default Dialog
