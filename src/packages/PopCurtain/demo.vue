<template>
  <div class="page-demo-popCurtain">
    <div class="demo-list-box e-unfold">
      <h4 class="type">基本用法</h4>
      <ul class="demo-list">
        <li class="demo-list-item">
          <a @click="handle1" class="router-link">普通用法</a>
        </li>
        <li class="demo-list-item">
          <a @click="handle2" class="router-link">内嵌slot</a>
        </li>
        <li class="demo-list-item">
          <a @click="handle3" class="router-link">设置关闭按钮位置</a>
        </li>
        <li class="demo-list-item">
          <a @click="handle4" class="router-link">监听点击幕帘内容事件</a>
        </li>
      </ul>
    </div>
    <!-- 普通用法 -->
    <lina-pop-curtain :dialog.sync="dialog1"/>
    <!-- 内嵌slot -->
    <lina-pop-curtain :dialog.sync="dialog2">
      <img style="width: 300px;" src="https://dummyimage.com/600x400/ff45ff/ffffff" alt="">
    </lina-pop-curtain>
    <!-- 设置关闭按钮 -->
    <lina-pop-curtain :dialog.sync="dialog3" />
    <!-- 监听点击幕帘内容事件 -->
    <lina-pop-curtain :dialog.sync="dialog4" @clickCurtain="handleClickDialog" />
  </div>
</template>

<script>
export default {
  name: 'demo-popCurtain',
  data () {
    return {
      dialog1: {
        image: 'https://dummyimage.com/600x400/ff45ff/ffffff',
        isShow: false
      },
      dialog3: {
        image: 'https://dummyimage.com/600x400/ff45ff/ffffff',
        isShow: false
      },
      dialog2: {
        isShow: false
      },
      dialog4: {
        image: 'https://dummyimage.com/600x400/ff45ff/ffffff',
        link: 'http://www.baidu.com',
        isShow: false
      }
    }
  },
  methods: {
    handle1 () {
      this.dialog1.isShow = true
    },
    handle2 () {
      this.dialog2.isShow = true
    },
    handle3 () {
      this.dialog3.isShow = true
      this.dialog3.closeBtnPosition = 'top'
    },
    handle4 () {
      this.dialog4.isShow = true
    },
    handleClickDialog (dialog) {
      this.$toast('即将跳转链接')
      setTimeout(() => {
        window.location.href = dialog.link
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
.page-demo-popCurtain {
}
</style>
