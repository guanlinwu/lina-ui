<template>
  <div class="page-demo-popup">
    <div class="demo-list-box e-unfold">
      <h4 class="type">基本用法</h4>
      <ul class="demo-list">
        <li class="demo-list-item">
          <a @click="handle1" class="router-link">显示popup</a>
        </li>
        <li class="demo-list-item">
          <a @click="handle2" class="router-link">关闭之前有事件</a>
        </li>
      </ul>
    </div>
    <Popup :isShow.sync="isShow1" :closeCallBack="() => {this.isShow1 = !this.isShow1}">
      <p style="color: #fff;">这是一个Popup，空空如也</p>
    </Popup>
    <Popup :isShow.sync="isShow2" :closeCallBack="handle2CloseCallBack">
      <p style="color: #fff;">这是一个Popup，关闭之前有事件</p>
    </Popup>
  </div>
</template>

<script>
export default {
  name: 'demo-popup',
  data () {
    return {
      isShow1: false,
      isShow2: false
    }
  },
  methods: {
    handle1 () {
      this.isShow1 = !this.isShow1
    },
    handle2 () {
      this.isShow2 = !this.isShow2
    },
    handle2CloseCallBack () {
      alert('关闭Popup')
    }
  }
}
</script>

<style lang="scss" scoped>
.page-demo-popup {
}
</style>
