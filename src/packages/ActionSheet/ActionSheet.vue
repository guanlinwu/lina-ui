<template>
  <div class="lina-actionsheet">
    <transition name="f-fade">
      <div class="lina-actionsheet-mask" @click="clickActionSheetMask" v-show="isShow"></div>
    </transition>
    <transition name="f-slide-up">
      <div class="lina-actionsheet-panel" v-show="isShow">
        <div class="lina-actionsheet-custom" v-if="$slots.custom">
          <slot name="custom" v-html="custom"></slot>
        </div>
        <dl class="lina-actionsheet-modal" v-if="$slots.title || $slots.subTitle ">
          <dt class="lina-actionsheet-title">
            <slot name="title" v-html="title"></slot>
          </dt>
          <dd class="lina-actionsheet-sub-title">
            <slot name="sub-title" v-html="subTitle"></slot>
          </dd>
        </dl>
        <ul class="lina-actionsheet-menu">
          <li
            class="lina-actionsheet-item"
            :class="{'lina-actionsheet-item-active': isHighlight(item)}"
            v-for="(item, index) of menuItems"
            :key="index"
            @click="chooseItem(item)"
          >{{item[optionTag]}}</li>
        </ul>
        <div class="lina-actionsheet-cancel" v-if="cancelText" @click="closeActionSheet">{{cancelText}}</div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'lina-action-sheet',
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    preventMaskClose: {
      type: Boolean,
      default: false
    },
    cancelText: {
      type: String,
      default: ''
    },
    optionTag: {
      type: String,
      default: 'name'
    },
    chooseTagValue: {
      type: String,
      default: ''
    },
    menuItems: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  },
  watch: {
    isShow (value) {
      !!value && this.$emit('open')
    }
  },
  methods: {
    isHighlight (item) {
      return (
        (this.chooseTagValue && this.chooseTagValue === item[this.optionTag]) ||
        this.chooseTagValue === 0
      )
    },
    /**
     * 关闭事件
     */
    closeActionSheet () {
      this.$emit('close')
      this.$emit('update:isShow', false)
    },
    /**
     * 点击蒙层
     */
    clickActionSheetMask () {
      !this.preventMaskClose && this.closeActionSheet()
    },
    /**
     * 选中
     */
    chooseItem (item) {
      this.$emit('choose', item)
      this.$emit('update:isShow', false)
      // this.closeActionSheet()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scope>
//弹窗
.lina-actionsheet {
  text-align: center;

  .lina-actionsheet-mask {
    @include fix-fullscreen();
  }

  .lina-actionsheet-panel {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: 30;
    background-color: #f6f6f6;
  }
  .lina-actionsheet-modal {
    padding: 20px;
    margin: 0;
    text-align: center;
    background-color: #fff;
    border-bottom: 1px solid #F6F6F6;
    .lina-actionsheet-title,
    .lina-actionsheet-sub-title {
      padding: 10px 0;
    }
    .lina-actionsheet-title {
      font-size: 28px;
      color: #2D2D2D;
    }
    .lina-actionsheet-sub-title {
      font-size: 24px;
      color: #2D2D2D;
      margin-inline-start: 0px;
    }
  }
  .lina-actionsheet-menu {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .lina-actionsheet-cancel,
  .lina-actionsheet-item {
    height: 96px;
    padding: 0 20px;
    line-height: 96px;
    font-size: 28px;
    color: #2D2D2D;
    text-align: center;
    background-color: #fff;
  }
  .lina-actionsheet-item {
    border-bottom: 1px solid #f6f6f6;
  }
  .lina-actionsheet-item-active {
    color: #F0250F;
  }
  .lina-actionsheet-cancel {
    margin-top: 10px;
    @include border-width-1px(1, 0, 0, 0, #f6f6f6);
  }
}
</style>
