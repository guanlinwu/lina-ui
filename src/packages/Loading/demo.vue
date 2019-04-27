<template>
  <div class="page-demo-loading">
    <div class="demo-list-box e-unfold">
      <h4 class="type">基本用法</h4>
      <ul class="demo-list">
        <li class="demo-list-item">
          <a @click="handle1" class="router-link">显示Loading，2s自动消失</a>
        </li>
        <li class="demo-list-item">
          <a @click="handle2" class="router-link">显示Loading，并且自定义文案</a>
        </li>
        <li class="demo-list-item">
          <a @click="handle3" class="router-link">显示Loading，并且隐藏文案</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo-loading',
  methods: {
    handle1 () {
      this.$loading.show() // 显示
      setTimeout(() => {
        this.$loading.hide() // 隐藏
      }, 2000)
    },
    handle2 () {
      this.$loading.show({
        message: '自定义文案'
      }) // 自定义文案
      setTimeout(() => {
        this.$loading.hide() // 隐藏
      }, 2000)
    },
    handle3 () {
      this.$loading.show({
        isHideMessage: true
      }) // 隐藏文本提示
      setTimeout(() => {
        this.$loading.hide() // 隐藏
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
.page-demo-loading {
}
</style>
