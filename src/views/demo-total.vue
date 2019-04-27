<template>
  <div class="page-demo-total">
    <h3 class="nav"><router-link class="back-btn" to="/">返回</router-link></h3>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'demo-total'
}
</script>

<style lang="scss" scoped>
.page-demo-total {
  .nav {
    display: block;
    padding: 20px 30px;
    font-size: 32px;
    .back-btn {
      color: #000;
    }
  }
}
</style>
