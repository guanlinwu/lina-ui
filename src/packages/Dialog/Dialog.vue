<template>
  <transition name='f-fade'>
    <div class="u-pop" :id="dialog.id" @click.self.stop="!dialog.preventMaskClose && !!closeDialog && closeDialog()" v-show="dialog && dialog.isShow">
      <div class="pop-content">
          <header v-if="!!dialog.title && dialog.title !== ''" class="pop-header">{{dialog.title}}</header>
          <div class="content">
            <slot>
              <div class="pop-message" v-html="dialog.message"></div>
            </slot>
          </div>
          <div v-if="dialog.isShowFooter || dialog.isShowFooter === undefined" name="footer" class="pop-footer">
            <slot name="footer">
              <a v-for="(item, index) in dialog.footer" :key="`btn-${index}`" @click="handleBtnClick(item)" class="btn hardline" href="javascript:;">{{item.text}}</a>
            </slot>
          </div>
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
      isShowFooter: true,
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
      default() {
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
  methods: {
    closeDialog () {
      this.dialog.isShow = false
      this.$emit('update:dialog', false)
    },
    handleBtnClick (footerItem) {
      let callBack = footerItem.callBack
      typeof callBack === 'function' && callBack()
      this.closeDialog()
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
  background: rgba(0, 0, 0, 0.8);
  z-index: 30;
  text-align: center;

  .pop-content {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%);
    width: 670px;
    background: rgba(255, 255, 255, 1);
    border-radius: 10px;
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

    @include border-width-1px(0, 0, 1, 0, #eee);
  }

  .content {
    padding: 30px 30px 0;
    min-height: 100px;
    max-height: 484px;
    overflow-y: scroll;
    @include border-width-1px(1, 0, 0, 0, #eee);
  }

  .pop-footer {
    padding: 30px 30px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    >a {
      flex: 1;
      margin: 0 30px;
      // width:296px;
      height: 80px;
      line-height: 80px;
      border-radius: 10px;
      font-size: 32px;
      font-weight: 400;
      color: #5995EF;
      background-color: rgba(255, 255, 255, 1);
      @include border-width-1px(1, 1, 1, 1, #5995EF, 20px);

      &:last-child {
        color: #fff;
        background-image: linear-gradient(to right, #04BBFA 0%, #547AF4 100%);
        // background-color: #5995EF;
        @include border-width-1px(0, 0, 0, 0, transparent, 20px);
      }
    }
  }

  // 活动规则
  &.e-rule {
    .content {
      text-align: left;
    }

    .pop-footer {
      >a {
        width: 100%;
      }
    }
  }
}

// 针对主题的弹窗
$blue-theme-color: #009CF8; // 蓝色主题

// 蓝色主题
.e-theme-blue {
  .u-pop {
    .pop-footer {
      >a {
        color:$blue-theme-color;
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
      >a {
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
