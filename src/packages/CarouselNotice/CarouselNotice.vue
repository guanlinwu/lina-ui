// 旧版本轮播头条 没用到transition
<template>
  <transition name="f-fade">
    <div class="lina-carousel-text">
      <!-- 组件内容 -->
      <section class="u-widget-inner">
        <!-- {{dataTemp}} -->
        <div class="carousel-text-outter" :style="boxStyle">
          <div class="carousel-text-list">
            <transition
              @enter="enter"
              @leave="leave"
              @before-enter="beforeEnter"
              @after-enter="afterEnter"
              v-bind:css="false"
            >
              <div :key="nowIndex" class="carousel-text-item" ref="contentRef">
                <a
                  class="link"
                  href="javascript:;"
                  @click="handleClick(scrollData)"
                >
                  <div class="news-tag-box">
                    <span :style="{borderColor: scrollData.tag && scrollData.tag.color, color: scrollData.tag && scrollData.tag.color}" class="news-tag">{{scrollData.tag && scrollData.tag.title || '消息'}}</span>
                  </div>
                  <h3 class="content">
                    <p ref="contentInnerRef" :style="textStyle" class="content-inner" v-html="scrollData.title"></p>
                  </h3>
                </a>
              </div>
            </transition>
          </div>
        </div>
        <div v-if="isShowClose" @click="close" class="carousel-text-close"></div>
      </section>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'lina-carousel-notice',
  components: {
  },
  data () {
    return {
      nowIndex: 0 // 当先显示的文字的index
    }
  },
  props: {
    intervals: { // 上下滚动的间隔时间，不包括左右滚动  ms
      type: Number,
      default: 3000,
      validator: function (value) {
        return value > 0
      }
    },
    duration: { // 上下动画过渡时间 ms
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
  computed: {
    /**
     * 从传入的数组中实时获取内容
     */
    scrollData () {
      return this.dataList.length ? this.dataList[this.nowIndex] : '请提供内容'
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.startScroll() // 开始轮播
    })
  },
  /**
   * 销毁则停止计时器
   */
  destroyed () {
    console.log('destroyed')
  },
  methods: {
    /**
     * 阻塞
     */
    sleep (time) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, time || 0)
      })
    },
    /**
     *  当内容进入轮播框之前执行的操作
     *  el---> 目标元素
     */
    beforeEnter (el) {
      let outHeight = this.$refs.contentRef.offsetHeight // 获取轮播框的高度
      // 初始化轮播内容的位置和透明度
      el.style = `transition: all ${this.duration}ms ease-in; -webkit-transition: all ${this.duration}ms ease-in;transform: translateY(${outHeight}px);-webkit-transform: translateY(${outHeight}px);opactity: 0;`
    },
    /**
     * 当内容进入这个轮播框时执行的操作，即一些入场动画
     * el ---> 目标元素
     * done 表示进入完成的回调。
     */
    enter (el, done) {
      el.style = `transition: all ${this.duration}ms ease-in; -webkit-transition: all ${this.duration}ms ease-in;transform: translateY(${0}px);-webkit-transform: translateY(${0}px);opactity: 1;`
      setTimeout(() => {
        done()
      }, this.duration)
    },
    /**
     * 当内容离开这个轮播框时执行的操作，即一些出场动画
     * el ---> 目标元素
     * done 表示离开完成的回调。
     */
    leave (el, done) {
      let outHeight = this.$refs.contentRef.offsetHeight // 获取轮播框的高度
      el.style = `transition: all ${this.duration}ms ease-in; -webkit-transition: all ${this.duration}ms ease-in;transform: translateY(-${outHeight}px);-webkit-transform: translateY(-${outHeight}px);opactity: 0;`
      setTimeout(() => {
        done()
      }, this.duration)
    },
    /**
     * 当内容进入后，执行的操作
     * el ---> 目标元素
     */
    async afterEnter (el) {
      await this.scrollHorizontal()
      setTimeout(() => {
        this.changeShow()
      }, this.intervals)
    },
    /**
     * 开始进行轮播滚动，即入口
     */
    async startScroll () {
      await this.sleep(this.intervals)
      await this.scrollHorizontal()
      setTimeout(() => {
        this.changeShow()
      }, this.intervals)
    },
    /**
     * 改变显示的内容，这是触发事件
     */
    changeShow () {
      this.nowIndex++
      this.nowIndex = this.nowIndex % this.dataList.length
    },
    /**
     * 水平方向单条滚动文字
     */
    scrollHorizontal (index) {
      return new Promise((resolve, reject) => {
        let self = this
        let $contentInner = self.$refs.contentInnerRef
        let offsetWidth = $contentInner.offsetWidth
        let scrollWidth = $contentInner.scrollWidth
        /**
         * 文字回复原位置
         */
        self.$refs.contentInnerRef.style.transition = ``
        self.$refs.contentInnerRef.style.transform = `translateX(0)`
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
.lina-carousel-text {
  position: relative;

  .u-widget-inner {
    .carousel-text-outter {
      height: 100px;
      padding: 0 80px 0 30px;
      overflow: hidden;
      background-color: #fff;

      .carousel-text-list {
        position: relative;
        width: 100%;
        height: 100%;
        transition: all 1s ease;
        overflow: hidden;
      }

      .carousel-text-item,
      .link {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
      }

      .carousel-text-item {
        position: absolute;
        top: 0;
        left: 0;
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
