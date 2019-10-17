<template>
  <div class="u-picker-slot">
    <ul class="u-picker-slot-container" ref="pickerSlot">
      <li class="u-ps-box" v-for="(item, index) in datas.values" :key="index" :style="{lineHeight, height: lineHeight}">
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
      return this.datas.values[this.getIndex(this.datas.defaultIndex)]
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
        let obj = {}
        if (this.goods.defaultIndex === -1) {
          obj.defaultIndex = 0
        }
        return {
          ...data,
          ...this.goods,
          ...obj
        }
      }
    }
  },
  filters: {
    getValue (item, datas) {
      return typeof item === 'object' ? item[datas.content] : item
    }
  },
  async mounted () {
    this.onScrollAnimation()
    translate.setY(this.element, this.maxY)
    await this.initY()
    this.getsIndex()
    this.getsValue()
    this.$watch('sValue', function () {
      this.$emit('change', this.sValue, this.slotIndex)
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
        end: async event => {
          if (drag.offsetY !== 0) {
            this.exercise(drag.offsetY)
          } else {
            let path = this.whole(translate.getY(element))
            await this.requestAnimationFrame(this.boundary(path))
            this.getsIndex()
          }
        }
      })
    },
    // 设置默认选择位置
    async initY (index = this.datas.defaultIndex) {
      let y = this.calculateLocation(this.getIndex(index))
      await this.requestAnimationFrame(y)
    },
    /**
     * 判断是长滚动，还是短滚动
     * @param {Number} offsetY 手指每次滑动的距离
     */
    exercise (offsetY) {
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
      this.getsIndex()
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
      this.getsIndex()
    },
    /**
     * 滚动
     * @param {Number} path 路程
     * @param {Number} [offsetY = macro.OFFSETY] 手指每次滑动的距离
     * @returns {Promise}
     */
    requestAnimationFrame (path, offsetY = macro.OFFSETY) {
      offsetY = Math.abs(offsetY)
      let coefficient = offsetY > 2 ? offsetY : 3
      return new Promise(resolve => {
        this.running(path, coefficient, resolve)
      })
    },
    /**
     * 滚动逻辑
     * @param {Number} path 路程
     * @param {Number} offsetY 手指每次滑动的距离
     * @param {Function} resolve Promise的resolve
     */
    running (path, coefficient, resolve) {
      cancelAnimationFrame(this.$time)
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
        this.running(path, coefficient, resolve)
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
      // if (currentY > this.maxY || currentY < this.minY) {
      //   let path = translate.getY(this.element) > 0 ? this.maxY : this.minY
      //   this.running(path, macro.OFFSETY, resolve)
      // } else {
      //   resolve(currentY)
      // }
      let path = false
      if (currentY > this.maxY) {
        path = this.maxY
      } else if (currentY < this.minY) {
        path = this.minY
      }
      if (path === false) {
        resolve(currentY)
      } else {
        this.running(path, macro.OFFSETY, resolve)
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
    getsIndex () {
      let y = translate.getY(this.element)
      let lineHeight = parseInt(this.lineHeight)
      this.sIndex = -y / lineHeight + 3
      this.getsValue()
    },
    getsValue () {
      this.sValue = this.datas.values[this.sIndex]
    },
    calculateLocation (defaultIndex) {
      return -defaultIndex * parseInt(this.lineHeight) + this.maxY
    },
    getIndex (index) {
      let length = this.datas.values.length
      let y = 0
      if (index < length && index >= 0) {
        y = index
      } else if (index >= length) {
        y = length
      }
      return y
    },
    /**
     * 用name去比较，然后定位到该地方。用来给二度封装的组件使用
     * @param {Object}
     * * @param {} val 对比的值
     * * @param {String} [key = 'name'] 对比的key
     * * @param {Boolean} [b = false] 是否有动画过渡
     */
    async movePort ({ value, key = 'value', b = false }) {
      let defaultIndex = this.datas.values.findIndex(obj => {
        if (typeof obj === 'object') {
          return obj[key] === value
        } else {
          return obj === value
        }
      })
      defaultIndex = this.getIndex(defaultIndex)
      if (b) {
        await this.initY(defaultIndex)
      } else {
        let y = this.calculateLocation(defaultIndex)
        translate.setY(this.element, y)
      }
      this.getsIndex()
    },
    getNameIndex (name) {
      return this.datas.values.findIndex(obj => obj.name === name)
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
