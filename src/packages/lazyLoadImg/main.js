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
    this.off(document, 'scroll', this._throttleFn)
  }
}
Lazy.prototype.unbindListener = function () {
  this.off(document, 'scroll', this._throttleFn)
}

// 使用intersection API
Lazy.prototype.useIntersectionObserver = function (el, binding) {
  let obserConfig = {
    root: null,
    rootMargin: '0px',
    threshold: [0]
  }
  this.observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const target = entry.target
      if (entry.intersectionRatio > 0) {
        this.observer.unobserve(target)
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
    !!binding.value && (el['lina-lazyload-listenser'] = Lazy(el, binding))
  },
  unbind (el) {
    el['lina-lazyload-listenser'].unbindListener()
  }
}
