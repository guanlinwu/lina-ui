<template>
  <lina-popup :isShow="dialog && dialog.isShow" :is-hide-close="true">
    <div class="lina-pop-curtain">
      <div class="pop-content">
        <div class="pop-content-inner">
          <slot>
            <img @click="clickCurtain" :src="dialog.image" alt="" class="pop-content-img">
          </slot>
          <div @click="closeDialog()" class="pop-close" :class="['e-' + (dialog.closeBtnPosition || 'bottom')]">x</div>
        </div>
      </div>
    </div>
  </lina-popup>
</template>

<script>
export default {
  name: 'lina-pop-curtain',
  props: {
    dialog: {
      type: Object,
      default () {
        return {
          isShow: false,
          image: '',
          closeBtnPosition: 'bottom' // 'top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right'
        }
      }
    } // 幕帘的基本信息
  },
  methods: {
    closeDialog () {
      this.dialog.isShow = false
      this.$emit('update:dialog', this.dialog)
    },
    clickCurtain () {
      this.$emit('clickCurtain', this.dialog)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scope>
//弹层幕帘
.lina-pop-curtain {
  transform: translateY(-50%);
  position: fixed;
  width: 100vw;
  height: 100vh;
  text-align: center;
  .pop-content {
    position: absolute;
    transform: translateX(-50%);
    top: 110px;
    border-radius: 10px;
  }
  .pop-content-inner {
    position: relative;
    font-size: 0;
    .pop-content-img {
      width: 570px;
    }
    .pop-close {
      position: absolute;
      width: 70px;
      height: 70px;
      font-size: 48px;
      font-weight: 300;
      line-height: 59px;
      color: rgba(255,255,255,1);
      background:rgba(255,255,255,0.4);
      border:2px solid rgba(255,255,255,1);
      opacity:0.7;
      border-radius:50%;
      overflow: hidden;

      &.e-bottom {
        bottom: -50px;
        left: 50%;
        transform: translate(-50%, 100%);
      }
      &.e-top {
        top: -20px;
        left: 50%;
        transform: translate(-50%, -100%);
      }
      &.e-top-right {
        top: 0;
        right: 0;
        transform: translate(80%, -80%);
      }
      &.e-top-left {
        top: 0;
        transform: translate(-80%, -80%);
      }
      &.e-bottom-left {
        bottom: -50px;
        transform: translate(-80%, 0);
      }
      &.e-bottom-right {
        bottom: -50px;
        right: 0;
        transform: translate(80%, 0);
      }
    }
  }
}

</style>
