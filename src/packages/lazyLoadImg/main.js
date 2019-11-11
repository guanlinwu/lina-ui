import throttleFn from '../../utils/throttle'
/**
 * 懒加载构造函数
 *
 * @param {*} el 指令所绑定的元素，可以用来直接操作 DOM
 * @param {*} binding
 * @returns
 */
function Lazy (el, binding) {
  if (!(this instanceof Lazy)) return new Lazy(el, binding) // 防止忘记用new 创建实例
  this.el = el // 公有属性
  this.binding = binding
  this.judgeEnv = function () {
    // 公有方法
    let self = this
    if ('IntersectionObserver' in window) {
      self.observer = null
      self.useIntersectionObserver(el, binding)
    } else {
      self._throttleFn = throttleFn(
        self.handleLazyLoad.bind(self, el, binding),
        500
      )
      self.on(document, 'scroll', self._throttleFn)
      self.handleLazyLoad()
    }
  }
  this.judgeEnv()
}

/**
 * 事件绑定
 */
Lazy.prototype.on = (function () {
  // 原型方法
  if (document.addEventListener) {
    return (element, event, handler) =>
      element &&
      event &&
      handler &&
      element.addEventListener(event, handler, false)
  }
})()

/**
 * 事件解绑
 */
Lazy.prototype.off = (function () {
  if (document.removeEventListener) {
    return (element, event, handler) =>
      element && event && element.removeEventListener(event, handler, false)
  }
})()

/**
 * 是否进入视野区
 *
 * @param {*} element 被监控的元素
 * @param {*} container 被监控的元素的范围元素, 在该元素盒模型则表示进入
 * @returns
 */
Lazy.prototype.isInView = function (element, container) {
  // 如果不传，默认返回false
  if (!element || !container) {
    return false
  }
  const elRect = element.getBoundingClientRect()
  // window, document, document.documentElement, undefined
  // 若不传container，则取以上默认值
  // 其实只要判断元素出现在四条边（相当于盒模型）之内，就算是进入视野,这里我只用document
  let containerRect = [window, document, document.documentElement, undefined].includes(container)
    ? {
      top: 0,
      right: window.innerWidth,
      bottom: window.innerHeight,
      left: 0
    }
    : container.getBoundingClientRect()
  return (
    elRect.left < containerRect.right && // 即元素出现在窗口的右边的左部
    elRect.top < containerRect.bottom && // 即元素出现在窗口的底部之上
    elRect.bottom > containerRect.top && // 即元素出现在窗口的顶部之下
    elRect.right > containerRect.left
  ) // 即元素出现在窗口的左部的右边
}
/**
 * 处理懒加载，在不支持IntersectionObserver下使用
 */
Lazy.prototype.handleLazyLoad = function () {
  // console.log('图片进入shi野区:', this.isInView(this.el, window))
  console.log(1)
  const { isNeedCache, src } = this.binding.value // 参数
  if (this.isInView(this.el, document)) {
    this.el.setAttribute(
      'src',
      isNeedCache ? `${src}?timeStamp=${+new Date()}` : src
    )
    this.off(document, 'scroll', this._throttleFn) // 进入窗口之后取消监听
  }
}
/**
 * 解绑滚动事件
 */
Lazy.prototype.unbindListener = function () {
  this.off(document, 'scroll', this._throttleFn)
}
/**
 * 处理懒加载，在支持IntersectionObserver下使用
 */
Lazy.prototype.useIntersectionObserver = function (el, binding) {
  let obserConfig = {
    // 监听设置，先把mdn的解释抄过来，方便记
    root: null,
    // The element that is used as the viewport for checking visiblity of the target.
    // Must be the ancestor of the target.
    // Defaults to the browser viewport if not specified or if null.

    rootMargin: '0px',
    // Margin around the root.
    // Can have values similar to the CSS margin property,
    // e.g. "10px 20px 30px 40px" (top, right, bottom, left).
    // The values can be percentages.
    // This set of values serves to grow or shrink each side of the root element's bounding box before computing intersections.
    // Defaults to all zeros.

    threshold: [0]
    // Either a single number or an array of numbers which indicate at what percentage of
    // the target's visibility the observer's callback should be executed.
  }
  this.observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const target = entry.target // 目标元素
      const { isNeedCache, src } = this.binding.value // 参数
      if (entry.intersectionRatio > 0) {
        this.observer.unobserve(target) // 进入窗口之后取消监听
        target.tagName.toLocaleLowerCase() === 'img' &&
          el.setAttribute(
            'src',
            isNeedCache ? `${src}?timeStamp=${+new Date()}` : src
          )
      }
    })
  }, obserConfig)
  this.observer.observe(el)
}
export default {
  name: 'lazyLoadImg',
  inserted (el, binding) {
    // 使用dom来做衔接桥梁，把取消监听方法给弄上去，暂时不知道有没有什么副作用
    !!binding.value.src && (el['lina-lazyload-listenser'] = Lazy(el, binding))
  },
  unbind (el) {
    el['lina-lazyload-listenser'].unbindListener()
  }
}
