<template>
  <div class="lina-picker" @touchmove.prevent>
    <div class="lina-header" :style="{lineHeight, fontSize}" v-if="head">
      <div @click="handleCance" :style="{color: cancelColor}">{{cancelText}}</div>
      <div @click="handleConfirm" :style="{color: confirmColor}">{{confirmText}}</div>
    </div>
    <div class="lina-picker-container" :style="{height}">
      <div class="lina-picker-box" :style="{fontSize}">
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
      <div class="lina-checked-text" :style="{'height': lineHeight}"></div>
      <div class="lina-mask" :style="{backgroundSize: `100% ${backgroundSizeY}`}"></div>
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
    },
    head: Boolean,
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确认'
    },
    cancelColor: String,
    confirmColor: String
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
  components: {
    [PickerSlot.name]: PickerSlot
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  created () {
    console.log(this.$attrs)
  },
  mounted () {
    this.$watch('slots.length', this.getDefaultValue, {
      immediate: true
    })
  },
  methods: {
    handleChange (value, i) {
      this.$set(this.values, i, value)
      // this.getDefaultValue()
      this.$emit('change', this.values)
      this.$emit('update:value', this.values)
    },
    handleConfirm () {
      // this.getDefaultValue()
      this.$emit('confirm', this.values.concat())
    },
    handleCance () {
      this.$emit('cance')
    },
    // 默认values
    getDefaultValue () {
      const pickerSlot = this.$refs.pickerSlot
      if (pickerSlot) {
        const values = this.values
        for (let i = 0; i < values.length; i++) {
          if (values[i] === undefined) {
            this.$set(values, i, pickerSlot[i].defaultValue)
          }
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scope>
.lina-picker {
  .lina-header {
    // @include border-width-1px($border-color: #e8e8e8, $border-width-bottom: 1);
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-bottom: 1px #e8e8e8 solid;
    div {
      color: #26a2ff;
      flex: 1;
      text-align: center;
      &:first-child {
        border-right: 1px #e8e8e8 solid;
        // @include border-width-1px($border-color: #e8e8e8, $border-width-right: 1);
      }
    }
  }
  .lina-picker-container {
    background: #fff;
    position: relative;
    .lina-picker-box {
      height: 100%;
      display: flex;
      justify-content: space-around;
    }
    .lina-checked-text {
      pointer-events: none;
      position: absolute;
      width: 100%;
      transform: translateY(-50%);
      top: 50%;
      background-image: linear-gradient(180deg,#d0d0d0,#d0d0d0,transparent,transparent),linear-gradient(0deg,#d0d0d0,#d0d0d0,transparent,transparent);
      background-position: top,bottom;
      background-size: 100% 1PX;
      background-repeat: no-repeat;
    }
    .lina-mask {
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
