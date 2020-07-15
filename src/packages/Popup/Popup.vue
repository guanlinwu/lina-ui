<template>
  <div class="lina-pop-up">
    <transition name="fade">
      <div class="night" v-show="selfShow" @click.self.stop="!preventMaskClose && close()" @touchmove.prevent></div>
    </transition>
    <transition :name="position">
      <div ref="pop" v-show="selfShow" :class="position" class="slot-container">
        <slot></slot>
        <div class="close" v-if="!isHideClose" @click="close"></div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'lina-popup',
  data () {
    return {
    }
  },
  props: {
    isShow: {
      type: Boolean,
      required: true,
      default: false
    },
    position: {
      type: String,
      default: 'center' // center, top, right, bottom, left
    },
    isHideClose: {
      type: Boolean,
      required: false,
      default: false
    },
    closeCallBack: {
      type: Function,
      required: false
    },
    preventMaskClose: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    selfShow: {
      get () {
        return this.isShow
      },
      set (val) {
        this.$emit('isShow', val)
        this.$emit('update:isShow', val)
      }
    }
  },
  model: {
    prop: 'isShow',
    event: 'isShow'
  },
  methods: {
    async close () {
      this.$emit('closeCallBack')
      if (this.closeCallBack) {
        await this.closeCallBack()
      }
      this.selfShow = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'animation';
.layer {
  position: fixed;
  z-index: 100;
}
.lina-pop-up {
  position: absolute;
  top: 0;
  .night {
    @extend .layer;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,.8);
  }
  .slot-container {
    @extend .layer;
  }
  .close {
    position: absolute;
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAMAAAAPzWOAAAAAtFBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////oK74hAAAAO3RSTlMAiAOXpQX2Kv3qoVedUql9CfPus5FgJB36jHhdL+DQlOTZv62CSSHHxLdpZU043NVxF7FtDs3Ju0Q/MwS8CrYAAANBSURBVFjDnZfpeqowEIanIJtsggpVVLSurdpq7c7939cxE1wgJJDz/dDHZHzJZJYE4CtKFt7n2NJ16/XLW9grkFXHbk+zksaOq0kg9k6QVSpURw0Rv9+ZQN19A4TxdLU3Z++Dw9a2t4dB99W8YVZ1e/HwmJtOe+7H/cyHm152SfeFezN6o2aP7R+FnVWWXr6eicFnJDp9Uhpzw+7QlQYuz2KR+xw12bNh5ayi0ii6UKOExv+hao4y1jHUKprwKA840dYa5fO82qM+Dg+gmRQHzUue/+kMQyykBEZhfTP0BZpLQY8+770fkJGNJlXnuLv+XexJIloxSCkikdZvdbQh0B1IKsHMhFxL8usdpIW5u79biB7LQ4zH21J+CbAnz8jjTHtdi9T+sTj90u6zUfU3aae4tyQgKXYbkmdO0f5UURpKi13wnERVuyR8qXG2sMBYRvYMqEJI3Jz2CiVvaJkyjOylaKdZ1AvFqqpqlVLKDNaOrmBEJn+ARxEzwCbDK9iS2HSARxEz4EjGbay9CQCXwmegxliF3fOnBwKKkAHP55kWkE6yABFFxIDeeeoLSHC2IKKIGDA8z82A5GsCfIqYgRk1BXErUcUMmu8hMF2bzfV6SIDuCBhiygndsbAiRIz6jWVDzNSLWhfiNZtsbM2JKN94XmHaCxlIEaY9FqD5IWAIKUcaXIN8LUUMpIhaQQwYngGfIaY4eVv0yGWZCRzzF0rpV7RH9XIa/jIFjgyGohbHdpe96ATskeHz+qnNOTKgTRpkXFzmsNWvqBO1xDDM61G0/99jFB9vGrfTXY/kGSPz7jbxQ882aa3J//4KFw1bEoG5ns2LF41wJccwdLzWlG7CX3IXP3whGTIjntKcoWE+rrXCRuNlOJWLbhZG5XJEitJwHcgwmVPCR4rX7AXhGY1PVd2S6DNqEBfcQezMHEqQ1CCUF51hMB5lT4Yw19doZJ54BnaQv4tGXE/y99FwKfB2kqHM+U6riInbzajWK2HsfD23sxy7cEGOk3aYTwWHuhiuutlV4+/UP/T7B199mt5GvRjqtX/P+DK9UdNu07OqEdOBAc2l7dRZmfCWLhWQVewO25vJOAzHk40zdI98y3/0ge6+0uM9swAAAABJRU5ErkJggg==') no-repeat;
    background-size: 100% 100%;
    width: 34px;
    height: 34px;
    bottom: -49px;
    left: 50%;
    margin-left: -17px;
  }
  .center {
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    transform-origin: 0 0;
  }
  .top {
    top: 0;
    left: 0;
  }
  .right {
    right: 0
  }
  .bottom {
    bottom: 0;
    left: 0;
  }
  .left {
    left: 0;
  }
}
</style>
