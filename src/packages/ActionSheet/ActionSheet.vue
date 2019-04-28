<template>
  <div class="u-actionsheet">
    <transition :name="isAnimation?'f-fade':''">
      <div class="u-actionsheet-mask" @click="clickActionSheetMask" v-show="isShow"></div>
    </transition>
    <transition :name="isAnimation?'f-slideUp':''">
      <div class="u-actionsheet-panel" v-show="isShow">
        <div class="u-actionsheet-custom" v-if="$slots.custom">
          <slot name="custom" v-html="custom"></slot>
        </div>
        <dl class="u-actionsheet-modal" v-if="$slots.title || $slots.subTitle ">
          <dt class="u-actionsheet-title">
            <slot name="title" v-html="title"></slot>
          </dt>
          <dd class="u-actionsheet-sub-title">
            <slot name="sub-title" v-html="subTitle"></slot>
          </dd>
        </dl>
        <ul class="u-actionsheet-menu">
          <li
            class="u-actionsheet-item"
            :class="{'u-actionsheet-item-active': isHighlight(item)}"
            v-for="(item, index) of menuItems"
            :key="index"
            @click="chooseItem(item)"
          >{{item[optionTag]}}</li>
        </ul>
        <div class="u-actionsheet-cancel" v-if="cancelTxt" @click="closeActionSheet">{{cancelTxt}}</div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ActionSheet',
  props: {
    isAnimation: {
      type: Boolean,
      default: true
    },
    isShow: {
      type: Boolean,
      default: false
    },
    isClickCloseMask: {
      type: Boolean,
      default: true
    },
    cancelTxt: {
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
    closeActionSheet () {
      this.$emit('close')
      this.$emit('update:isShow', false)
    },
    clickActionSheetMask () {
      !!this.isClickCloseMask && this.closeActionSheet()
    },
    chooseItem (item) {
      this.$emit('choose', item)
      this.closeActionSheet()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scope>
//弹窗
.u-actionsheet {
  text-align: center;

  .u-actionsheet-mask {
    @include fix-fullscreen();
  }

  .u-actionsheet-panel {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: 30;
    background-color: #f6f6f6;
  }
  .u-actionsheet-modal {
    padding: 20px;
    margin: 0;
    text-align: center;
    background-color: #fff;
    border-bottom: 1px solid #F6F6F6;
    .u-actionsheet-title,
    .u-actionsheet-sub-title {
      padding: 10px 0;
    }
    .u-actionsheet-title {
      font-size: 28px;
      color: #2D2D2D;
    }
    .u-actionsheet-sub-title {
      font-size: 24px;
      color: #2D2D2D;
      margin-inline-start: 0px;
    }
  }
  .u-actionsheet-menu {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .u-actionsheet-cancel,
  .u-actionsheet-item {
    height: 96px;
    padding: 0 20px;
    line-height: 96px;
    font-size: 28px;
    color: #2D2D2D;
    text-align: center;
    background-color: #fff;
  }
  .u-actionsheet-item {
    border-bottom: 1px solid #f6f6f6;
  }
  .u-actionsheet-item-active {
    color: #F0250F;
  }
  .u-actionsheet-cancel {
    margin-top: 10px;
    @include border-width-1px(1, 0, 0, 0, #f6f6f6);
  }
}
</style>
