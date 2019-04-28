<template>
  <transition name="fade">
    <section v-show="isVisible" :class="position" class="u-toast">
      <div class="message">
        <div class="message-inner" v-html="message"></div>
      </div>
    </section>
  </transition>
</template>

<script>
export default {
  name: 'Toast',
  data () {
    return {
      isVisible: false,
      message: '',
      position: ''
    }
  }
}
</script>

<style lang="scss" scoped>
//toast
$toast-text-color: #fff; //文本颜色
$toast-theme-color: rgba(79, 79, 79, 0.9); //背景和阴影颜色

.u-toast {
  position: fixed;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%) scale(1);
  width: 100%;
  font-size: 0;
  text-align: center;
  font-size: 0;
  border-radius: 50px;
  z-index: 9999;

  > .message {
    position: relative;
    display: inline-block;
    min-width: 40%;
    min-height: 100px;
    max-width: 70%;

    padding: 30px 32px;
    font-size: 24px;
    line-height: 46px;
    color: $toast-text-color;
    word-wrap: break-word;
    // box-shadow: 0 2px 6px $toast-theme-color;
    border-radius: 10px;
    background: $toast-theme-color;

    .message-inner {
      // position: absolute;
      // top: 50%;
      // left: 50%;
      // transform: translate(-50%, -50%);
    }
  }
}
.u-toast.middle {
  top: 45%;
}
.u-toast.top {
  top: 10%;
}
.u-toast.bottom {
  top: 90%;
}
.fade-enter-active,
.fade-leave-active {
  transition: transform 0.5s;
}
.fade-enter,
.fade-leave-active {
  transform: translate(-50%, -50%) scale(0);
}
</style>
