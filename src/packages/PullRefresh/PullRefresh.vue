<template>
  <div class="lina-pull-refresh">
    <div
      class="inner"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
      @touchcancel="onTouchEnd"
      ref="innerRef"
    >
      <div class="head-box">{{statusText}}</div>
      <div class="pull-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { TouchMixin } from '../../mixins/touch'
export default {
  name: 'lina-pull-refresh',
  props: {
    // boxStyle: { // 外框内容样式
    //   type: Object
    // },
    headHeight: { // 顶部内容高度
      type: Number,
      default: 50
    },
    pullingText: { // 下拉过程文案
      type: String,
      default: '下拉即可刷新...'
    },
    loosingText: { // 释放过程文案
      type: String,
      default: '释放即可刷新...'
    },
    loadingText: { // 加载过程文案
      type: String,
      default: '加载中...'
    },
    disabled: { // 是否禁用
      type: Boolean,
      default: false
    }
  },
  mixins: [TouchMixin],
  data () {
    return {
      status: 'normal', // 头部提示文本的状态 normal  pulling  loosing  loading
      distance: 0 // 最后松开下拉的距离
    }
  },
  computed: {
    /**
     * 下拉提示
     */
    statusText () {
      let text = ''
      switch (this.status) {
        case 'loading':
          text = this.loadingText
          break
        case 'normal':
          text = ''
          break
        case 'pulling':
          text = this.pullingText
          break
        case 'loosing':
          text = this.loosingText
          break
        default:
          break
      }
      return text
    },
    /**
     * 不可下拉
     */
    untouchable () {
      return this.status === 'loading' || this.disabled
    }
  },
  watch: {
  },
  methods: {
    /**
     * touchStart
     */
    onTouchStart (event) {
      let self = this
      console.log('onTouchStart')
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (!self.untouchable && scrollTop <= 0) { // 首先判断有没有滚动条，如果有则禁止下拉刷新
        self.touchStart(event)
      }
    },
    /**
     * touchMove
     */
    onTouchMove (event) {
      let self = this
      if (self.untouchable) {
        return
      }
      console.log('onTouchMove')
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop // 首先判断有没有滚动条，如果有则禁止下拉刷新
      if (scrollTop > 0) {
        self.$refs.innerRef.style.transition = 'all ease 0s'
        self.startY = event.touches[0].clientY
        self.deltaY = 0
        return
      }

      self.touchMove(event)

      if (self.deltaY > 0) {
        event.preventDefault()
        self.distance = self.ease(self.deltaY)
        self.setStatus(self.distance)
        self.$refs.innerRef.style.transition = 'all ease 0s'
        self.$refs.innerRef.style.transform = `translateY(${self.distance}px)`
      }
    },
    /**
     * onTouchEnd
     */
    onTouchEnd (event) {
      let self = this
      if (self.untouchable) {
        return
      }
      self.$refs.innerRef.style.transition = 'all ease 300ms'
      if (self.status === 'loosing') { // 如果是达到可以释放距离，则触发刷新事件
        self.$nextTick(() => {
          self.$emit('refresh', {
            done: self.done
          })
        })
        self.setStatus(self.headHeight, true) // 设置为loading状态
        self.$refs.innerRef.style.transform = `translateY(${self.headHeight}px)`
      } else {
        self.$refs.innerRef.style.transform = 'translateY(0)'
        self.setStatus(0)
      }
      /**
       * 重置状态
       */
      self.resetTouchStatus()
    },
    /**
     * 滑动距离
     */
    ease (distance) {
      const { headHeight } = this
      return Math.round(
        distance < headHeight
          ? distance
          : distance < headHeight * 2
            ? headHeight + (distance - headHeight) / 2
            : headHeight * 1.5 + (distance - headHeight * 2) / 4
      )
    },
    /**
     * 结束refresh之后的回调函数，用以取消loading
     */
    done () {
      let self = this
      self.$refs.innerRef.style.transform = 'translateY(0)'
      setTimeout(() => { // 延迟500ms，等动画过渡
        self.setStatus(0)
      }, 500)
    },
    /**
     * 设置下拉状态
     */
    setStatus (distance, isLoading) {
      const status = isLoading
        ? 'loading'
        : distance === 0
          ? 'normal'
          : distance < this.headHeight
            ? 'pulling'
            : 'loosing'

      if (status !== this.status) {
        this.status = status
      }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scope>
//弹窗
.lina-pull-refresh {
  position: relative;
  height: 100%;

  .inner {
    position: relative;
    height: 100%;
  }

  .head-box {
    position: absolute;
    top: -50PX;
    left: 0;
    width: 100%;
    height: 50PX;
    overflow: hidden;
    color: #969799;
    font-size: 14PX;
    line-height: 50PX;
    text-align: center;
  }
}
</style>
