<template>
  <div class="u-picker-slot">
    <ul class="u-picker-slot-container" ref="pickerSlot">
      <li class="u-ps-box" v-for="(item, index) in datas.values" :key="index" :style="{lineHeight}">
        {{item | getValue(datas)}}
      </li>
    </ul>
  </div>
</template>

<script>
import Drag from './src/drag'
import translate from './src/translate'
import macro from './src/macro'
export default {
  name: 'lina-picker-slot',
  data () {
    return {
      sIndex: '',
      sValue: '',
      $time: null
    }
  },
  props: {
    goods: [Array, Object],
    lineHeight: String,
    // 水平位置
    maxY: Number,
    slotIndex: Number
  },
  computed: {
    minY () {
      return -parseInt(this.lineHeight) * (this.datas.values.length - 1 - macro.SHOWNUM_HALF)
    },
    element () {
      return this.$refs.pickerSlot
    },
    defaultValue () {
      return this.datas.values[this.datas.defaultIndex]
    },
    datas () {
      let data = {
        defaultIndex: 0,
        content: 'name'
      }
      if (Array.isArray(this.goods)) {
        return {
          ...data,
          values: this.goods
        }
      } else {
        return {
          ...data,
          ...this.goods
        }
      }
    }
  },
  watch: {
    sIndex () {
      this.sValue = this.datas.values[this.sIndex]
      this.$emit('change', this.sValue, this.slotIndex)
    }
  },
  filters: {
    getValue (item, datas) {
      return typeof item === 'object' ? item[datas.content] : item
    }
  },
  components: {
  },
  created () {},
  mounted () {
    this.onScrollAnimation()
    this.$watch('datas.values.length', this.initY, {
      immediate: true
    })
  },
  methods: {
    // 注册Scroll
    onScrollAnimation () {
      const element = this.element
      const drag = new Drag(element, {
        start: event => {
          cancelAnimationFrame(this.$time)
        },
        move: event => {
          this.runBoundary(drag.offsetY)
        },
        end: event => {
          if (drag.offsetY !== 0) {
            this.exercise(drag.offsetY)
          } else {
            let path = this.whole(translate.getY(element))
            this.requestAnimationFrame(this.boundary(path))
          }
        }
      })
    },
    // 设置默认选择位置
    initY () {
      if (this.datas.defaultIndex < this.datas.values.length) {
        let y = -this.datas.defaultIndex * parseInt(this.lineHeight) + this.maxY
        // this.element.style.setProperty('transform', `translateY(${y}px)`)
        this.requestAnimationFrame(y)
      } else {
        this.requestAnimationFrame(this.maxY)
      }
    },
    /**
     * 判断是长滚动，还是短滚动
     * @param {Number} offsetY 手指每次滑动的距离
     */
    exercise (offsetY) {
      cancelAnimationFrame(this.$time)
      if (Math.abs(offsetY) > 3) {
        this.longAnimation(offsetY)
      } else {
        this.backAnimation(offsetY)
      }
    },
    /**
     * 长滚动
     * @param {Number} offsetY 手指每次滑动的距离
     */
    async longAnimation (offsetY) {
      let path = this.whole(Math.abs(offsetY) * offsetY + translate.getY(this.element))
      await this.requestAnimationFrame(path, offsetY)
      this.getIndex()
    },
    /**
     * 短滚动
     * @param {Number} offsetY 手指每次滑动的距离
     */
    async backAnimation (offsetY) {
      let lineHeight = parseInt(this.lineHeight)
      if (offsetY % lineHeight === 0) {
        return
      }
      let path = this.whole(offsetY + translate.getY(this.element))
      await this.requestAnimationFrame(path, offsetY)
      this.getIndex()
    },
    /**
     * 滚动
     * @param {Number} path 路程
     * @param {Number} [offsetY = macro.OFFSETY] 手指每次滑动的距离
     * @returns {Promise}
     */
    requestAnimationFrame (path, offsetY = macro.OFFSETY) {
      return new Promise(resolve => {
        this.running(path, offsetY, resolve)
      })
    },
    /**
     * 滚动逻辑
     * @param {Number} path 路程
     * @param {Number} offsetY 手指每次滑动的距离
     * @param {Function} resolve Promise的resolve
     */
    running (path, offsetY, resolve) {
      offsetY = Math.abs(offsetY)
      let coefficient = offsetY > 2 ? offsetY : 3
      this.$time = requestAnimationFrame(() => {
        let currentY = translate.getY(this.element)
        if (path === currentY) {
          this.adjustment(currentY, resolve)
          return
        }
        let step = translate.easeOut(path, currentY, coefficient)
        let b = this.runBoundary(step)
        if (b !== false) {
          path = b
        }
        this.running(path, offsetY, resolve)
      })
    },
    /**
     * 滚动的边界
     * @param {Number} step 速度
     * @param {Number|Boolean} 判断是否不等于false，为真则代替path
     */
    runBoundary (step) {
      let y = translate.getY(this.element)
      step = this.getBoundaryStep(step)
      let path = step + y
      let b = this.elasticBoundary(path)
      if (b !== false) {
        translate.setY(this.element, b)
      } else {
        translate.upTranslate(this.element, step)
      }
      return b
    },
    /**
     * 用来监控滚动结束，判断是否需要回弹
     * @param {Number} currentY 当前路程
     * @param {Function} resolve Promise的resolve
    */
    adjustment (currentY, resolve) {
      cancelAnimationFrame(this.$time)
      if (currentY > this.maxY || currentY < this.minY) {
        let path = translate.getY(this.element) > 0 ? this.maxY : this.minY
        this.running(path, macro.OFFSETY, resolve)
      } else {
        resolve(currentY)
      }
    },
    /**
     * 速度边界
     * @param {Number} step 速度
     * @returns {Number} 速度
     */
    getBoundaryStep (step) {
      if (step > macro.MAX_STEP) {
        step = macro.MAX_STEP
      } else if (step < macro.MIN_STEP) {
        step = macro.MIN_STEP
      }
      return step
    },
    /**
     * 滚动路程调整
     * @param {Number} path 路程
     * @returns {Number} 路程
     */
    whole (path) {
      let lineHeight = parseInt(this.lineHeight)
      let result = path / lineHeight
      return Math.round(result) * lineHeight
    },
    /**
     * 边界路程
     * @param {Number} path 路程
     * @returns {Number} 路程
     */
    boundary (path) {
      if (path > this.maxY) {
        path = this.maxY
      } else if (path < this.minX) {
        path = this.minX
      }
      return path
    },
    /**
     * 弹性边界路程
     * @param {Number} path 路程
     * @param {Number|Boolean} 判断是否不等于false，为真则代替path
     */
    elasticBoundary (path) {
      let lineHeight = parseInt(this.lineHeight) / 2
      let maxY = this.maxY + lineHeight
      let minY = this.minY - lineHeight
      let b = false
      if (path > maxY) {
        b = maxY
      } else if (path < minY) {
        b = minY
      }
      return b
    },
    /**
     * 获取index
     */
    getIndex () {
      let y = translate.getY(this.element)
      let lineHeight = parseInt(this.lineHeight)
      this.sIndex = -y / lineHeight + 3
    }
  }
}
</script>

<style lang="scss" scoped>
.u-picker-slot {
  display: flex;
  text-align: center;
  height: 100%;
  overflow: hidden;
  flex: 1;
  .u-picker-slot-container {
    flex: 1 1 0;
  }
}
</style>
