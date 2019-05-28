<template>
  <transition name="f-fade">
    <div
      class="u-pop"
      :id="dialog.id"
      v-show="dialog && dialog.isShow"
    >
      <div class="pop-mask" @click.self.stop="!dialog.preventMaskClose && !!closeDialog && closeDialog('mask')" @touchmove.prevent></div>
      <div class="pop-content">
        <slot name="header">
          <header v-if="!!dialog.title && dialog.title !== ''" class="pop-header">{{dialog.title}}</header>
        </slot>
        <div class="content">
          <slot>
            <div class="pop-message" v-html="dialog.message"></div>
          </slot>
        </div>
        <div v-if="!dialog.isHideFooter" name="footer" class="pop-footer">
          <slot name="footer">
            <a
              v-for="(item, key) in dialog.footer"
              :key="`btn-${key}`"
              @click="handleBtnClick(item, key)"
              class="btn hardline"
              href="javascript:;"
            >{{item.text}}</a>
          </slot>
        </div>
        <div class="pop-close" v-if="!dialog.isHideClose" @click="!!closeDialog && closeDialog('icon-close')"></div>
      </div>
    </div>
  </transition>
</template>

<script>
/**
 * useage
 *
 * 方法一：
<Dialog :dialog="dialog">
  自定义的内容dom
  <div slot="footer">
    自定义按钮的dom以及事件
  </div>
</Dialog>

 * 方法二：
 *  传入dialog属性，如果有slot，则优先显示方法一的slot内容
 * dialog: { //对话框的基本信息
      title: '标题',
      message: '内容',
      isShow: false,
      isHideFooter: false,
      isHideClose: false,
      preventMaskClose: false,
      footer: {
        confirm: {
          text: '确认',
          callBack: function() {} //点击按钮的回调事件
        },
        cancel: {
          text: '取消',
          callBack: function () { }
        }
      }
    }
*/

export default {
  name: 'Dialog',
  props: {
    dialog: {
      type: Object,
      default () {
        return {
          id: null,
          footer: {
            confirm: {
              text: '确认'
            },
            cancel: {
              text: '取消'
            }
          }
        }
      }
    } // 对话框的基本信息
  },
  data () {
    return {
      promiseCallBack: null, // 构造函数生成的弹窗，用于按钮操作唤起promise
      removeDomCallBack: null // 构造函数生成的弹窗，移除dom的回调函数
    }
  },
  methods: {
    /**
     * 关闭弹窗
     */
    closeDialog (key = '') {
      this.dialog.isShow = false
      this.$emit('update:dialog', this.dialog)
      typeof this.removeDomCallBack === 'function' && this.removeDomCallBack()
      typeof this.promiseCallBack === 'function' && this.promiseCallBack(key) // 返回promise 用于confirm
    },
    /**
     * 处理按钮点击
     */
    handleBtnClick (footerItem, key) {
      let callBack = footerItem.callBack
      typeof callBack === 'function' && callBack()
      this.closeDialog(key)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
//弹窗
.u-pop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // background: rgba(0, 0, 0, 0.8);
  text-align: center;
  z-index: 30;

  .pop-mask {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100vh;
    background-color: rgba(0, 0, 0, .7);
    z-index: 1;
  }

  .pop-content {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%);
    width: 670px;
    background: rgba(255, 255, 255, 1);
    border-radius: 10px;
    z-index: 3;
  }

  .pop-close {
    position: absolute;
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAMAAAAPzWOAAAAAtFBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////oK74hAAAAO3RSTlMAiAOXpQX2Kv3qoVedUql9CfPus5FgJB36jHhdL+DQlOTZv62CSSHHxLdpZU043NVxF7FtDs3Ju0Q/MwS8CrYAAANBSURBVFjDnZfpeqowEIanIJtsggpVVLSurdpq7c7939cxE1wgJJDz/dDHZHzJZJYE4CtKFt7n2NJ16/XLW9grkFXHbk+zksaOq0kg9k6QVSpURw0Rv9+ZQN19A4TxdLU3Z++Dw9a2t4dB99W8YVZ1e/HwmJtOe+7H/cyHm152SfeFezN6o2aP7R+FnVWWXr6eicFnJDp9Uhpzw+7QlQYuz2KR+xw12bNh5ayi0ii6UKOExv+hao4y1jHUKprwKA840dYa5fO82qM+Dg+gmRQHzUue/+kMQyykBEZhfTP0BZpLQY8+770fkJGNJlXnuLv+XexJIloxSCkikdZvdbQh0B1IKsHMhFxL8usdpIW5u79biB7LQ4zH21J+CbAnz8jjTHtdi9T+sTj90u6zUfU3aae4tyQgKXYbkmdO0f5UURpKi13wnERVuyR8qXG2sMBYRvYMqEJI3Jz2CiVvaJkyjOylaKdZ1AvFqqpqlVLKDNaOrmBEJn+ARxEzwCbDK9iS2HSARxEz4EjGbay9CQCXwmegxliF3fOnBwKKkAHP55kWkE6yABFFxIDeeeoLSHC2IKKIGDA8z82A5GsCfIqYgRk1BXErUcUMmu8hMF2bzfV6SIDuCBhiygndsbAiRIz6jWVDzNSLWhfiNZtsbM2JKN94XmHaCxlIEaY9FqD5IWAIKUcaXIN8LUUMpIhaQQwYngGfIaY4eVv0yGWZCRzzF0rpV7RH9XIa/jIFjgyGohbHdpe96ATskeHz+qnNOTKgTRpkXFzmsNWvqBO1xDDM61G0/99jFB9vGrfTXY/kGSPz7jbxQ882aa3J//4KFw1bEoG5ns2LF41wJccwdLzWlG7CX3IXP3whGTIjntKcoWE+rrXCRuNlOJWLbhZG5XJEitJwHcgwmVPCR4rX7AXhGY1PVd2S6DNqEBfcQezMHEqQ1CCUF51hMB5lT4Yw19doZJ54BnaQv4tGXE/y99FwKfB2kqHM+U6riInbzajWK2HsfD23sxy7cEGOk3aYTwWHuhiuutlV4+/UP/T7B199mt5GvRjqtX/P+DK9UdNu07OqEdOBAc2l7dRZmfCWLhWQVewO25vJOAzHk40zdI98y3/0ge6+0uM9swAAAABJRU5ErkJggg==') no-repeat;
    background-size: 38px 38px;
    background-position: center center;
    width: 52px;
    height: 52px;
    top: -62px;
    right: -7px;
  }

  .pop-message {
    padding: 14px 0;
    font-size: 28px;
    font-weight: 400;
    color: #929292;
    line-height: 44px;
  }

  .pop-header {
    height: 90px;
    font-size: 32px;
    font-weight: 400;
    line-height: 90px;
    text-align: center;
    color: #383838;
    overflow: hidden;
    @include border-width-1px(0, 0, 1, 0, #eee);
  }

  .content {
    padding: 30px 30px 20px;
    min-height: 100px;
    max-height: 484px;
    overflow-y: scroll;
    @include border-width-1px(1, 0, 0, 0, #eee, 20px);
  }

  .pop-footer {
    padding: 20px 15px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > a {
      flex: 1;
      margin: 0 15px;
      // width:296px;
      height: 80px;
      line-height: 80px;
      border-radius: 10px;
      font-size: 32px;
      font-weight: 400;
      color: #5995ef;
      background-color: rgba(255, 255, 255, 1);
      @include border-width-1px(1, 1, 1, 1, #5995ef, 10px);

      &:last-child {
        color: #fff;
        background-image: linear-gradient(to right, #04bbfa 0%, #547af4 100%);
        // background-color: #5995EF;
        @include border-width-1px(0, 0, 0, 0, transparent, 10px);
      }
    }
  }

  // 活动规则
  &.e-rule {
    .content {
      text-align: left;
    }

    .pop-footer {
      > a {
        width: 100%;
      }
    }
  }
}

// 针对主题的弹窗
$blue-theme-color: #009cf8; // 蓝色主题

// 蓝色主题
.e-theme-blue {
  .u-pop {
    .pop-footer {
      > a {
        color: $blue-theme-color;
        @include border-width-1px(1, 1, 1, 1, $blue-theme-color, 20px);

        &:last-child {
          color: #fff;
          background-color: $blue-theme-color;
          @include border-width-1px(0, 0, 0, 0, transparent, 20px);
        }
      }
    }
  }
}

// 针对黑色主题的弹窗
$black-theme-bg: #000; // 背景色

// 黑色主题
.e-theme-black {
  .u-pop {
    .pop-footer {
      > a {
        color: #ac9374;
        @include border-width-1px(1, 1, 1, 1, #ac9374, 20px);

        &:last-child {
          color: #fff;
          background: linear-gradient(to right, #d8bb9a, #8b6e4c);
          @include border-width-1px(0, 0, 0, 0, transparent, 20px);
        }
      }
    }
  }
}
</style>
