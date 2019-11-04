/*eslint-disable*/
// 关闭eslint，因为为了提高性能用逻辑操作符，进而用了逗号表达式
// atOnce 首次触发时是否立即执行函数
// atTail 停止触发后是否再执行一次,在这里相当于滚动监听完成后再次执行一次fn
// wait 节流停止触发fn的时间，在这段时间内，不会再触发fn的调用
export default function throttleFn (fn, wait = 100, { atOnce = !0, atTail = !0 } = {}) {
  let timeout
  let previous = 0
  return function (...args) {
    let context = this
    let now = Date.now() || new Date().getTime()
    // previous || 代表第一次触发或定时器触发后的首次触发，不立即执行则将previous改为now
    previous || atOnce || (previous = now)
    let remaining = wait - (now - previous);
    (remaining <= 0 || remaining > wait) && (
      timeout && (clearTimeout(timeout), timeout = null),
      previous = now,
      fn.apply(context, args)
    )
    timeout || !atTail || (
      // 若有剩余时间但定时器不存在，且atTail不为false，则设置定时器
      // atTail为false时相当于只用时间戳来实现节流
      timeout = setTimeout(() => {
        // 如果atOnce为false，则将previous改为为0，下次触发时会与下次触发时的now同步，达到首次触发不立即执行
        // 如果直接设为当前时间戳，若停止触发一段时间，下次触发时的remaining为负值，会立即执行
        previous = atOnce ? Date.now() || new Date().getTime() : 0
        timeout = null
        fn.apply(context, args)
      }, remaining)
    )
  }
}
