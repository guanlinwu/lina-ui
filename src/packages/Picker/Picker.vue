<template>
  <div class="u-picker" @touchmove.prevent>
    <div class="u-picker-container" :style="{height}">
      <div class="u-picker-box" :style="{fontSize}">
        <lina-picker-slot
        v-for="(item, index) in slots"
        ref="pickerSlot"
        :key="index"
        :goods="item"
        :lineHeight="lineHeight"
        :slotIndex="index"
        :maxY="maxY"
        @change="handleChange"></lina-picker-slot>
      </div>
      <div class="u-checked-text" :style="{'height': lineHeight}"></div>
      <div class="u-mask" :style="{backgroundSize: `100% ${backgroundSizeY}`}"></div>
    </div>
  </div>
</template>

<script>
import PickerSlot from './PickerSlot'
import macro from './src/macro'
export default {
  name: 'lina-picker',
  props: {
    slots: Array,
    value: Array,
    lineHeight: {
      type: String,
      default: '34px'
    },
    fontSize: {
      type: String,
      default: '16px'
    }
  },
  data () {
    return {
      values: []
    }
  },
  computed: {
    height () {
      return parseInt(this.lineHeight) * macro.SHOWNUM + 'px'
    },
    // 上，文字，下
    backgroundSizeY () {
      return parseInt(this.lineHeight) * 3 + 'px'
    },
    maxY () {
      return parseInt(this.lineHeight) * macro.SHOWNUM_HALF
    }
  },
  watch: {
    slots: {
      handler (slots) {
        slots.forEach((arr, index) => {
          this.$set(this.values, index)
        })
      },
      immediate: true
    }
  },
  filters: {

  },
  components: {
    [PickerSlot.name]: PickerSlot
  },
  mounted () {
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  methods: {
    handleChange (value, i) {
      this.$set(this.values, i, value)
      this.changeValue('change')
    },
    changeValue (event, value) {
      this.getDefaultValue()
      this.$emit(event, this.values)
      this.$emit('update:value', this.values)
    },
    getDefaultValue () {
      const pickerSlot = this.$refs.pickerSlot
      const values = this.values
      for (let i = 0; i < values.length; i++) {
        if (values[i] === undefined) {
          this.$set(values, i, pickerSlot[i].defaultValue)
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scope>
//弹窗
.u-picker {
  .u-picker-container {
    background: #fff;
    position: relative;
    .u-picker-box {
      height: 100%;
      display: flex;
      justify-content: space-around;
    }
    .u-checked-text {
      pointer-events: none;
      position: absolute;
      width: 100%;
      transform: translateY(-50%);
      top: 50%;
      background-image: linear-gradient(180deg,#d0d0d0,#d0d0d0,transparent,transparent),linear-gradient(0deg,#d0d0d0,#d0d0d0,transparent,transparent);
      background-position: top,bottom;
      background-size: 100% 1PX;
      background-repeat: no-repeat;
      // &::before {
      //   box-sizing: border-box;
      //   content: " ";
      //   position: absolute;
      //   left: 0;
      //   top: 0;
      //   width: 200%;
      //   border: {
      //     top: 1PX solid #999;
      //     bottom: 1PX solid #999;
      //   }
      //   height: 200%;
      //   transform-origin: left top;
      //   transform: scale(0.5);
      // }
    }
    .u-mask {
      position: absolute;
      background-image: linear-gradient(180deg,hsla(0,0%,100%,.95),hsla(0,0%,100%,.6)),linear-gradient(0deg,hsla(0,0%,100%,.95),hsla(0,0%,100%,.6));
      background-position: top,bottom;
      background-repeat: no-repeat;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      pointer-events: none;
    }
  }
}
</style>
