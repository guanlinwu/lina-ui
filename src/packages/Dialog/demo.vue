<template>
  <div class="page-demo-dialog">
    <div class="demo-list-box e-unfold">
      <h4 class="type">基本用法</h4>
      <ul class="demo-list">
        <li class="demo-list-item">
          <a @click="handle1" class="router-link">自定义标题和内容</a>
        </li>
        <li class="demo-list-item">
          <a @click="handle3" class="router-link">禁止点击蒙层关闭窗口</a>
        </li>
        <li class="demo-list-item">
          <a @click="handle4" class="router-link">只有一个按钮</a>
        </li>
        <li class="demo-list-item">
          <a @click="handle5" class="router-link">事件</a>
        </li>
        <li class="demo-list-item">
          <a @click="handle6" class="router-link">自定义弹窗内部内容，例如弹出活动规则</a>
        </li>
        <li class="demo-list-item">
          <a @click="handle9" class="router-link">自定义弹窗内部内容，例如弹出活动规则，内容不限制高度</a>
        </li>
        <li class="demo-list-item">
          <a @click="handle7" class="router-link">拓展性的confirm框(this.$dialog.$confirm), 返回Promise</a>
        </li>
        <li class="demo-list-item">
          <a @click="handle2" class="router-link">不能关闭的弹窗</a>
        </li>
        <li class="demo-list-item">
          <a @click="handle8" class="router-link">隐藏关闭按钮</a>
        </li>
        <li class="demo-list-item">
          <a @click="handle10" class="router-link">设置主题</a>
        </li>
      </ul>
    </div>

    <!-- 活动规则 -->
    <lina-dialog :dialog="ruleDialog">
      <div class="rules">
        <p>1 活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则</p>
        <p>2 活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则</p>
        <p>3 活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则</p>
        <p>4 活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则</p>
        <p>4 活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则</p>
        <p>4 活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则</p>
      </div>
    </lina-dialog>
  </div>
</template>

<script>
export default {
  name: 'demo-dialog',
  data () {
    return {
      ruleDialog: {
        id: 'rule-dialog',
        title: '活动规则',
        isShow: false,
        footer: {
          confirm: {
            text: '确定'
          }
        }
      }
    }
  },
  methods: {
    handle1 () {
      this.$dialog({
        title: '确定删除App？',
        message: '真的不考虑一下留着我吗，<br> 点击蒙层也是可以关闭弹窗',
        footer: {
          cancel: {
            text: '删除'
          },
          confirm: {
            text: '考虑'
          }
        }
      })
    },
    handle2 () {
      this.$dialog({
        id: 'my-dialog',
        title: '对不起',
        message: '你开启了一个不能关闭的按钮，<p>如果要我消失，请刷新吧</p>',
        isHideFooter: true
      })
    },
    handle3 () {
      this.$dialog({
        id: 'preventMaskClose-dialog',
        title: '提示',
        message: '你点蒙层是没反应的',
        preventMaskClose: true
      })
    },
    handle4 () {
      this.$dialog({
        title: '提示',
        message: '只有一个按钮',
        footer: {
          confirm: {
            text: '确定'
          }
        }
      })
    },
    handle5 () {
      this.$dialog({
        title: '提示',
        message: '事件处理',
        footer: {
          cancel: {
            text: '取消',
            callBack () {
              alert('你取消了')
            }
          },
          confirm: {
            text: '确定',
            callBack () {
              alert('你确定了')
            }
          }
        }
      })
    },
    handle6 () {
      this.ruleDialog.isShow = true
      this.ruleDialog.isUnlimitedHeight = false
    },
    handle7 () {
      this.$dialog.$confirm({
        title: '提示',
        message: '此操作将永久删除该文件, 是否继续?'
      }).then(() => {
        console.log('confirm')
        alert('confirm')
      }).catch((error) => {
        console.log(error)
        alert(error)
      })
    },
    handle8 () {
      this.$dialog({
        title: '确定删除App？',
        message: '真的不考虑一下留着我吗，<br> 点击蒙层也是可以关闭弹窗',
        isHideClose: true,
        footer: {
          cancel: {
            text: '删除'
          },
          confirm: {
            text: '考虑'
          }
        }
      })
    },
    handle9 () {
      this.ruleDialog.isShow = true
      this.ruleDialog.isUnlimitedHeight = true
    },
    handle10 () {
      this.$dialog({
        title: '金色主题',
        message: '金色主题，传入属性 {theme: "gold"}',
        theme: 'gold',
        footer: {
          cancel: {
            text: '删除'
          },
          confirm: {
            text: '考虑'
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.page-demo-dialog {
  .rules {
    text-align: left;
    font-size: 28px;
    font-weight: 400;
    color: #929292;
    line-height: 44px;
  }
}
</style>
