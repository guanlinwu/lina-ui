// 轮播头条
<template>
  <transition name="f-fade">
    <div class="u-app-carousel-text">
      <!-- 组件内容 -->
      <section class="u-widget-inner">
        <!-- {{dataTemp}} -->
        <div class="carousel-text-outter" :style="boxStyle">
          <ul class="carousel-text-list" :style="scrollStyle" v-if="list.length > 0">
            <li
              class="carousel-text-item"
              ref="carouselItemRef"
              v-for="(item, index) in list"
              :key="`carousel-text-item-${index}`"
            >
              <a
                class="link"
                href="javascript:;"
                @click="handleClick(item)"
              >
                <div class="news-tag-box">
                  <span :style="{borderColor: item.tag && item.tag.color, color: item.tag && item.tag.color}" class="news-tag">{{item.tag && item.tag.title || '消息'}}</span>
                </div>
                <h3 class="content">
                  <p ref="contentInnerRef" :style="textStyle" class="content-inner" v-html="item.title"></p>
                </h3>
              </a>
            </li>
          </ul>
        </div>
        <div v-if="isShowClose" @click="close" class="carousel-text-close"></div>
      </section>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'CarouselNotice',
  components: {
  },
  data () {
    return {
      timer: null, // 事件器
      list: [], // 被渲染的数组
      scrollStyle: '' // 外层box的滚动控制
    }
  },
  props: {
    intervals: { // 上下滚动的间隔时间，不包括左右滚动 毫秒
      type: Number,
      default: 3000,
      validator: function (value) {
        return value > 0
      }
    },
    duration: { // 上下动画过渡时间  毫秒
      type: Number,
      default: 500,
      validator: function (value) {
        return value > 0
      }
    },
    textStyle: { // 文本内容样式
      type: Object
    },
    boxStyle: { // 外框内容样式
      type: Object
    },
    dataList: { // 数据
      type: Array
    },
    isShowClose: { // 是否显示关闭按钮
      type: Boolean,
      default: false
    },
    isNeedHorizontal: { // 是否需要先横向滚动文字，滚动完毕纵向滚动
      type: Boolean,
      default: true
    },
    slideSpeed: { // 横向移动的速度 像素/s
      type: Number,
      default: 50,
      validator: function (value) {
        return value > 0
      }
    }
  },
  watch: {
    dataList () {
      clearTimeout(this.timer)
      this.timer = null
      this.initScroll()
    }
  },
  created () {
    this.initScroll()
  },
  /**
   * 销毁则停止计时器
   */
  destroyed () {
    console.log('destroyed')
    clearTimeout(this.timer)
    this.timer = null
  },
  methods: {
    /**
     * 初始化轮播
    */
    initScroll () {
      let self = this
      let length = self.dataList.length // 实际记录，多的那条是放在最后的
      let loop = 0
      let ITEMHEIGHT = ''
      let _list = [
        ...self.dataList
      ]
      // console.log('length ', self.dataList.length)
      if (length <= 1) {
        self.list = _list
        self.$nextTick(function () {
          self.scrollHorizontal(0)
        })
        return
      }
      _list.push(_list[0])
      self.list = _list

      // console.log('length after', self.list.length)

      self.$nextTick(function () {
        ITEMHEIGHT = self.$refs.carouselItemRef[0].offsetHeight
        // console.log('ITEMHEIGHT ', ITEMHEIGHT)
        scrollUp()
      })
      /**
       * 轮播
       */
      async function scrollUp () {
        // console.log(loop)
        if (loop <= length) {
          // console.log('loop <= length')
          // console.log(`-${loop * ITEMHEIGHT}px`)
          self.scrollStyle = `transition: all ${self.duration}ms ease-in; -webkit-transition: all ${self.duration}ms ease-in;transform: translateY(-${loop * ITEMHEIGHT}px);-webkit-transform: translateY(-${loop * ITEMHEIGHT}px);`
          self.$refs.contentInnerRef && self.isNeedHorizontal && await self.scrollHorizontal(loop)
          loop++
          self.timer = setTimeout(scrollUp, self.intervals)
        } else {
          // console.log('not loop <= length')
          self.scrollStyle = `transition: none; -webkit-transition: none;transform: translateY(0px);-webkit-transform: translateY(0px);`
          loop = 1
          self.timer = setTimeout(scrollUp, 100)
        }
      }
    },
    /**
     * 水平方向单条滚动文字
     */
    scrollHorizontal (index) {
      return new Promise((resolve, reject) => {
        let self = this
        let $contentInner = self.$refs.contentInnerRef[index]
        // console.log('$contentInner ', $contentInner)
        let offsetWidth = $contentInner.offsetWidth
        let scrollWidth = $contentInner.scrollWidth
        /**
         * 文字回复原位置
         */
        self.$refs.contentInnerRef[index].style.transition = ``
        self.$refs.contentInnerRef[index].style.transform = `translateX(0)`
        if (scrollWidth > offsetWidth) { // 如果文本超出，则先向左滚动至完全显示
          let slideDistance = scrollWidth - offsetWidth // 滚动距离
          slideDistance *= 1.0 // 实际横向滚动的距离，比传进来的内容多10%的距离
          const slideSpeed = self.slideSpeed // 滚动速率
          const slideTime = +(slideDistance / slideSpeed).toFixed(3) // 滚动时间 = 滚动距离 / 滚动速率
          /**
           * 1s后开始滚动 同时缓解一个bug
           */
          setTimeout(() => {
            $contentInner.style.transition = `transform ${slideTime}s linear`
            $contentInner.style.transform = `translateX(${-slideDistance}px)`
          }, 1000)
          /**
          * 滚动结束，下一条
          */
          setTimeout(() => {
            resolve()
          }, slideTime * 1000)
        } else {
          resolve()
        }
      })
    },
    /**
     * 处理每一个公告点击
     */
    handleClick (item) {
      this.$emit('click')
    },
    /**
     * 点击关闭按钮
     */
    close () {
      this.isShowClose && this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.u-app-carousel-text {
  position: relative;

  .u-widget-inner {
    .carousel-text-outter {
      height: 100px;
      padding: 0 80px 0 30px;
      overflow: hidden;
      background-color: #fff;

      .carousel-text-list {
        width: 100%;
        transition: all 1s ease;
      }

      .carousel-text-item,
      .link {
        height: 100px;
        width: 100%;
        display: flex;
        align-items: center;
      }
      .content {
        margin-left: 18px;
        font-size: 28px;
        color: #4d4d4d;
        overflow: hidden;
        .content-inner {
          white-space: nowrap;
          // @extend %ellipsis;
        }
      }

      // 标签
      .news-tag-box {
        font-size: 0;

        .news-tag {
          display: inline-block;
          vertical-align: middle;
          white-space: nowrap;
          padding: 0 10px;
          height: 42px;
          line-height: 42px;
          font-size: 28px;
          color: #fa5661;
          border: 1Px solid #fa5661;
          border-radius: 4px;
        }
      }
    }

    .carousel-text-close {
      position: absolute;
      width: 60px;
      height: 60px;
      top: 50%;
      transform: translateY(-50%);
      right: 15px;
      background-size: 20px 20px;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAAD1BMVEUAAAAzMzMzMzMzMzMzMzNw57/sAAAABHRSTlMAaUk6EyK7ywAAAFBJREFUCNdjYDJgAANmBQYVRwhTxInBxEUAxGJ0cQZiR7AgUARMgAXAJJQPpsBciDBYECIMEoQKwwQRTIQChDaEYahWICxGOAfZkQinI3kIABK5EHmS9lq1AAAAAElFTkSuQmCC);
      background-repeat: no-repeat;
      background-position: center;
    }
  }
}
</style>
