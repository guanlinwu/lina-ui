export default function () {
  var lastTime = 0
  var vendors = ['webkit', 'moz']
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame']
    window.cancelAnimationFrame =
          window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame']
  }

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback) {
    /* 调整时间，让一次动画等待和执行时间在最佳循环时间间隔内完成 */
      var currTime = new Date().getTime()
      var timeToCall = Math.max(0, 16 - (currTime - lastTime))
      lastTime = currTime + timeToCall
      return window.setTimeout(function () {
        callback(lastTime)
      }, timeToCall)
    }
  }

  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id)
    }
  }
}
