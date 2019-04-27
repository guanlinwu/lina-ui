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
          <a @click="handle2" class="router-link">不能关闭的弹窗</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo-dialog',
  methods: {
    handle1() {
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
    handle2() {
      this.$dialog({
        id: 'my-dialog',
        title: '对不起',
        message: '你开启了一个不能关闭的按钮，<p>如果要我消失，请刷新吧</p>',
        isHideFooter: true
      })
    },
    handle3() {
      this.$dialog({
        title: '提示',
        message: '你点蒙层是没反应的',
        preventMaskClose: true
      })
    },
    handle4() {
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
    handle5() {
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
    }
  }
}
</script>

<style lang="scss" scoped>
.page-demo-dialog {
}
</style>
