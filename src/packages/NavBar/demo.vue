<template>
  <div class="page-demo-navbar">
    <div class="demo-list-box e-unfold e-view">
      <ul class="demo-list" style="padding: 0;">
        <li class="demo-list-item e-view" style="margin: 0;">
          <a href="javascript:;" class="router-link" style="margin: 0 10px;">普通用法</a>
          <div class="view-content">
            <lina-nav-bar
              title="标题"
              leftText="返回"
              rightText="按钮"
              @click-left="onClickLeft"
              @click-right="onClickRight"
            />
          </div>
        </li>
        <li class="demo-list-item e-view" style="margin: 0;">
          <a href="javascript:;" class="router-link" style="margin: 0 10px;">普通用法</a>
          <div class="view-content">
            <lina-nav-bar
              title="标题"
              @click-left="onClickLeft"
            />
          </div>
        </li>
        <li class="demo-list-item e-view" style="margin: 0;">
          <a href="javascript:;" class="router-link" style="margin: 0 10px;">slot用法</a>
          <div class="view-content">
            <lina-nav-bar
              @click-left="onClickLeft"
              @click-right="onClickRight"
              >
              <template v-slot:title>
                <h1 style="font-size: 20px;">自定义标题</h1>
              </template>
              <template v-slot:left>
                <h1 style="font-size: 14px;">自定义左边</h1>
              </template>
              <template v-slot:right>
                <h1 style="font-size: 14px;">自定义右边</h1>
              </template>
            </lina-nav-bar>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo-navbar',
  data () {
    return {

    }
  },
  methods: {
    handle1 () {
    },
    onClickLeft () {
      this.$toast('left')
    },
    onClickRight () {
      this.$toast('right')
    }
  }
}
</script>

<style lang="scss" scoped>
.page-demo-navbar {
}
</style>
