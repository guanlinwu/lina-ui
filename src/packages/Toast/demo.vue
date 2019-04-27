<template>
  <div class="page-demo-toast">
    <div class="demo-list-box e-unfold">
      <h4 class="type">基本用法</h4>
      <ul class="demo-list">
        <li class="demo-list-item">
          <a @click="handle1" class="router-link">只有文案</a>
        </li>
        <li class="demo-list-item">
          <a @click="handle2" class="router-link">设置显示时长</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo-toast',
  methods: {
    handle1 () {
      this.$toast('这是一条普通的文案')
    },
    handle2 () {
      this.$toast({
        message: '我设置了显示时长，4s后消失',
        duration: 4000
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.page-demo-toast {
}
</style>
