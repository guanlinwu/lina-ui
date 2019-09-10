<template>
  <div class="u-picker-slot">
    <div class="u-picker-slot-container" ref="pickerSlot">
      <div class="u-ps-box" v-for="(item, index) in datas.values" :key="index" :style="{lineHeight}">
        {{item | getValue(datas)}}
      </div>
    </div>
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
    length () {
      return parseInt(this.lineHeight) * (this.datas.values.length - 1)
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
      this.$emit('change', this.datas.values[this.sIndex], this.slotIndex)
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
    this.initY()
    // this.$watch('defaultIndex', this.initY, {
    //   immediate: true
    // })
  },
  methods: {
    onScrollAnimation () {
      const element = this.element
      const drag = new Drag(element, {
        start: event => {
          cancelAnimationFrame(this.$time)
          // console.log('start', drag.startY)
        },
        move: event => {
          // console.log(drag.offsetY)
          // console.log('move', drag.startY, drag.deltaY, drag.offsetY, this.getPath(drag.offsetY, element, false))
          translate.setY(element, this.getPath(drag.offsetY, false))
        },
        end: event => {
          if (drag.offsetY !== 0) {
            this.exercise(drag.offsetY)
          } else {
            let path = this.whole(translate.getY(element))
            this.requestAnimationFrame(this.boundary(path))
          }
          // console.log('end', drag.startY, drag.deltaY, drag.offsetY)
        }
      })
    },
    initY () {
      let y = -this.datas.defaultIndex * parseInt(this.lineHeight) + this.maxY
      this.element.style.setProperty('transform', `translateY(${y}px)`)
    },
    exercise (offsetY) {
      cancelAnimationFrame(this.$time)
      if (Math.abs(offsetY) > 3) {
        this.longAnimation(offsetY)
      } else {
        this.backAnimation(offsetY)
      }
    },
    longAnimation (offsetY) {
      let path = this.getPath(Math.pow(offsetY, 3))
      this.requestAnimationFrame(path, offsetY)
    },
    async backAnimation (offsetY) {
      let lineHeight = parseInt(this.lineHeight)
      if (offsetY % lineHeight === 0) {
        return
      }
      let path = this.getPath(offsetY)
      // console.log('backAnimation', offsetY, path)
      await this.requestAnimationFrame(path, offsetY)
      // this.reserveIndex(element)
    },
    requestAnimationFrame (path, offsetY = macro.OFFSETY) {
      return new Promise(resolve => {
        this.running(path, offsetY, resolve)
      })
    },
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
        // console.log('currentY', currentY, 'coefficient', coefficient, 'step', step)
        translate.upTranslate(this.element, step)
        this.running(path, offsetY, resolve)
      })
    },
    adjustment (currentY, resolve) {
      cancelAnimationFrame(this.$time)
      if (currentY > this.maxY || currentY < this.minY) {
        let path = translate.getY(this.element) > 0 ? this.maxY : this.minY
        this.running(path, macro.OFFSETY, resolve)
      } else {
        this.getIndex()
        resolve(currentY)
      }
    },
    getPath (offsetY, whole = true) {
      let lineHeight = parseInt(this.lineHeight) / 2
      let path = parseInt(translate.getY(this.element) + offsetY)
      let maxY = this.maxY + lineHeight
      let minY = this.minY - lineHeight
      if (path > maxY) {
        path = maxY
      } else if (path < minY) {
        path = minY
      } else if (whole && (path % lineHeight !== 0 || lineHeight % path !== 0)) {
        path = this.whole(path)
      }
      return path
    },
    whole (path) {
      let lineHeight = parseInt(this.lineHeight)
      let result = path / lineHeight
      return Math.round(result) * lineHeight
    },
    boundary (path) {
      if (path > this.maxY) {
        path = this.maxY
      } else if (path < this.minX) {
        path = this.minX
      }
      return path
    },
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
