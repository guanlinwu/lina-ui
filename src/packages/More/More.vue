<template>
  <div class="lina-more">
    <div class="lina-more-box" ref="more" :class="{'lina-more-true': isMore, 'lina-more-false': isBottomUi && !isMore}" :style="{maxHeight, height: this.isMore && maxHeight}">
      <div ref="content">
        <slot name="content"></slot>
      </div>
    </div>
    <template v-if="isBottomUi">
      <div ref="toggle" v-if="isToggleSlot">
        <slot name="toggle" :is-more="isMore"></slot>
      </div>
      <div class="lina-operation" @click="toggle" v-else>
        <div v-show="isMore" class="lina-btn-more">
          <slot name="pack"><span class="lina-more-text">收起</span></slot>
        </div>
        <div v-show="!isMore" class="lina-btn-no-more" :style="{marginTop: `-${noMoreHeight}px`, background: `linear-gradient(${linearGradient})`}" ref="moreSlot">
          <slot name="more"><span class="lina-more-text">展开</span></slot>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'lina-more',
  props: {
    packHeight: { // 收起高度
      type: String,
      required: true
    },
    moreHeight: String, // 展开高度，没有得话自适应
    linearGradient: String // 收起渐变颜色
  },
  data () {
    return {
      isMore: false,
      isBottomUi: true,
      height: '',
      noMoreHeight: 0,
      slots: {},
      scopedSlots: []
    }
  },
  computed: {
    maxHeight () {
      if (this.isMore) {
        return this.moreHeight || this.height
      } else {
        return this.packHeight
      }
    },
    isToggleSlot () {
      return (this.slots.toggle && this.slots.toggle.length) || this.$scopedSlots.toggle
    }
  },
  mounted () {
    this.$watch('packHeight', function () {
      this.needMore()
      this.setMarginTop()
    }, {
      immediate: true
    })
    this.setHeight()
  },
  methods: {
    toggle () {
      this.isMore = !this.isMore
    },
    // 内容高度小于收起高度,隐藏掉收起&展开
    needMore () {
      const contentHeight = this.$refs.content.getBoundingClientRect().height
      const packHeight = this.$refs.more.getBoundingClientRect().height
      this.isBottomUi = contentHeight > packHeight
    },
    // 获得height
    setMarginTop () {
      if (this.isBottomUi) {
        let ref = this.$refs.moreSlot
        if (this.isToggleSlot) {
          ref = this.$refs.toggle
        }
        this.noMoreHeight = ref.getBoundingClientRect().height
      }
    },
    setHeight () {
      if (this.isBottomUi) {
        this.height = this.$refs.content.getBoundingClientRect().height + 'px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.lina-more {
  .lina-more-box {
    &.lina-more-false {
      overflow-y: hidden;
    }
    &.lina-more-true {
      overflow-y: auto;
    }
    position: relative;
    transition: max-height 0.2s linear;
  }
  .lina-operation {
    z-index: 2;
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    .lina-btn-more,
    .lina-btn-no-more {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .lina-more-text {
      font-size: 26px;
    }
    .lina-btn-no-more {
      background: linear-gradient(rgba(255,255,255,1), rgba(255,255,255,.75))
    }
    .lina-btn-more {
      margin-top: 10px;
    }
  }
}
</style>
