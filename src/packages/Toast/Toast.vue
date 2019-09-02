<template>
  <transition name="fade">
    <section v-show="isVisible" :class="[`e-${position}`]" class="lina-toast">
      <div class="message">
        <div class="message-inner" v-html="message"></div>
      </div>
    </section>
  </transition>
</template>

<script>
export default {
  name: 'lina-toast',
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

.lina-toast {
  position: fixed;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%) scale(1);
  width: 100%;
  font-size: 0;
  text-align: center;
  font-size: 0;
  border-radius: 50px;
  z-index: 999;

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
.lina-toast.e-middle {
  top: 45%;
}
.lina-toast.e-top {
  top: 10%;
}
.lina-toast.e-bottom {
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
