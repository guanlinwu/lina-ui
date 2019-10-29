import throttleFn from '../../utils/throttle'
function Lazy (el, binding) {
  if (!(this instanceof Lazy)) return new Lazy(el, binding)
  this.el = el
  this.binding = binding
  if ('IntersectionObserver' in window) {
    this.observer = null
    this.useIntersectionObserver(el, binding)
  } else {
    this._throttleFn = throttleFn(this.handleLazyLoad.bind(this, this.el, this.binding), 500)
    this.on(document, 'scroll', this._throttleFn)
    this.handleLazyLoad()
  }
}
// 使用常规的getboundingclientreact来判断
Lazy.prototype.on = (function () {
  if (document.addEventListener) {
    return (element, event, handler) => element && event && handler && element.addEventListener(event, handler, false)
  }
})()
Lazy.prototype.off = (function () {
  if (document.removeEventListener) {
    return (element, event, handler) => element && event && element.removeEventListener(event, handler, false)
  }
})()
Lazy.prototype.isInView = function (element, container) {
  // 如果不传，默认返回false
  if (!element || !container) return !1
  const elRect = element.getBoundingClientRect()
  let containerRect
  // window, document, document.documentElement, undefined
  // 暂时只能想到是这几个
  [window, document, document.documentElement, undefined].includes(container)
    ? containerRect = {
      top: 0,
      right: window.innerWidth,
      bottom: window.innerHeight,
      left: 0
    }
    : containerRect = container.getBoundingClientRect()
  // 其实只要判断元素出现在四条边（相当于盒模型）之内，就算是进入视野,这里我只用document
  return elRect.left < containerRect.right &&// 即元素出现在窗口的右边的左部
    elRect.top < containerRect.bottom && // 即元素出现在窗口的底部之上
    elRect.bottom > containerRect.top && // 即元素出现在窗口的顶部之下
    elRect.right > containerRect.left // 即元素出现在窗口的左部的右边
}
Lazy.prototype.handleLazyLoad = function () {
  // console.log('图片进入shi野区:', this.isInView(this.el, window))
  if (this.isInView(this.el, document)) {
    this.el.setAttribute('src', `${this.binding.value}?timeStamp=${+new Date()}`)
    this.off(document, 'scroll', this._throttleFn) // 进入窗口之后取消监听
  }
}
Lazy.prototype.unbindListener = function () {
  this.off(document, 'scroll', this._throttleFn)
}

// 使用intersection API
Lazy.prototype.useIntersectionObserver = function (el, binding) {
  let obserConfig = { // 监听设置，先把mdn的解释抄过来，方便记
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
      if (entry.intersectionRatio > 0) {
        this.observer.unobserve(target) // 进入窗口之后取消监听
        const src = binding.value;
        (target.tagName.toLocaleLowerCase() === 'img') && el.setAttribute('src', src)
      }
    })
  }, obserConfig)
  this.observer.observe(el)
}
export default {
  name: 'lazyLoadImg',
  inserted: function (el, binding) {
    // 使用dom来做衔接桥梁，把取消监听方法给弄上去，暂时不知道有没有什么副作用
    !!binding.value && (el['lina-lazyload-listenser'] = Lazy(el, binding))
  },
  unbind (el) {
    el['lina-lazyload-listenser'].unbindListener()
  }
}
