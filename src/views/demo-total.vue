<template>
  <div class="page-demo-total">
    <!-- <h3 class="nav"><router-link class="back-btn" to="/">返回</router-link></h3> -->
     <lina-nav-bar
        :zIndex=50
        leftText="返回"
         @click-left="$router.replace('/')"
      />
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
    position: relative;
    display: block;
    padding: 20px 30px;
    font-size: 32px;
    z-index: 20;
    background: #f6f6f6;
    .back-btn {
      color: #000;
    }
  }
}
</style>
