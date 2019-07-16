/**
 * 预加载图片
 * @param {array | object} opts         如果opts是数组，则直接作为opts.urls处理
 * @param {array} opts.urls             图片链接
 * @param {function} opts.eachLoadFunc  每张图片加载完毕的回调，回调参数是percent（加载的百分数，1-100）
 * @param {function} opts.callback      所有图片加载完毕的回调
 * @param {function} opts.maxPercent    加载完毕后最大百分数,默认是100，需要设置的情形是，假如设置80，则先加载完成图片，百分数是80%，然后剩下20%，额外处理，例如加载视频或者其他东西
 * @returns Promise
 */
export const loadImgs = (opts) => {
  return new Promise(resolve => {
    let urls = (Object.prototype.toString.apply(opts) === '[object Array]' ? opts : opts.urls) || [] // 需要预加载的图片队列
    let eachLoadFunc = opts.eachLoadFunc // 每张图片加载完毕的回调
    let callback = opts.callback // 所有图片加载完毕的回调
    let imgNumbers = urls.length
    let loadImgNumbers = 0 // 已经加载的图片数量
    let percent = 0 // 加载的百分数
    let maxPercent = opts.maxPercent || 100 // 加载完毕后最大百分数，由于还要加载视频，所以设置80

    if (imgNumbers <= 0) { // 如果没有图片 直接调用回调函数
      _callback()
      return
    }

    for (let i = 0; i < urls.length; i++) {
      let obj = new Image()
      obj.src = urls[i]
      obj.onload = function () {
        loadImgNumbers++
        _onEvent()
      }
      obj.onerror = function () {
        imgNumbers--
        _onEvent()
      }
    }

    /**
     * 图片每次加载的回调
     */
    function _onEvent () {
      percent = Math.ceil((loadImgNumbers / imgNumbers) * maxPercent)
      eachLoadFunc && typeof eachLoadFunc === 'function' && eachLoadFunc(percent) // 每一次load完都执行的函数
      if (percent >= maxPercent) { // 加载结束后，隐藏相应的 loading 或遮罩
        console.log('img all load')
        _callback()
      }
    }

    /**
     * 图片加载结束的回调
     */
    function _callback () {
      callback && typeof callback === 'function' && callback()
      resolve()
    }
  })
}

export default {
  loadImgs
}
