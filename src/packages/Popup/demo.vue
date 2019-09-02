<template>
  <div class="page-demo-popup">
    <div class="demo-list-box e-unfold">
      <h4 class="type">基本用法</h4>
      <ul class="demo-list">
        <li class="demo-list-item">
          <a @click="handle1" class="router-link">显示popup</a>
        </li>
        <li class="demo-list-item">
          <a @click="handle2" class="router-link">关闭之前有事件 用:closeCallBack</a>
        </li>
        <li class="demo-list-item">
          <a @click="handle3" class="router-link">关闭之前有事件 用@closeCallBack</a>
        </li>
        <li class="demo-list-item">
          <a @click="handle4" class="router-link">显示popup 禁止点击蒙层关闭popup</a>
        </li>
        <li class="demo-list-item">
          <a @click="handle5" class="router-link">显示popup 隐藏close按钮</a>
        </li>
      </ul>
    </div>
    <lina-popup :isShow.sync="isShow1" :isHideClose="isHideClose1" :preventMaskClose="preventMaskClose1" :closeCallBack="() => {this.isShow1 = !this.isShow1}">
      <p style="color: #fff;">这是一个Popup，空空如也</p>
    </lina-popup>
    <lina-popup :isShow.sync="isShow2" :closeCallBack="handle2CloseCallBack">
      <p style="color: #fff;">这是一个Popup，关闭之前有事件</p>
    </lina-popup>
    <lina-popup :isShow.sync="isShow3" @closeCallBack="handle2CloseCallBack">
      <p style="color: #fff;">这是一个Popup，关闭之前有事件</p>
    </lina-popup>
  </div>
</template>

<script>
export default {
  name: 'demo-popup',
  data () {
    return {
      isShow1: false,
      isShow2: false,
      isShow3: false,
      preventMaskClose1: false, // 是否禁止点击蒙层关闭popup
      isHideClose1: false // 是否显示close按钮
    }
  },
  methods: {
    handle1 () {
      this.isShow1 = !this.isShow1
      this.isHideClose1 = false
      this.preventMaskClose1 = false
    },
    handle2 () {
      this.isShow2 = !this.isShow2
    },
    handle3 () {
      this.isShow2 = !this.isShow2
    },
    handle4 () {
      this.preventMaskClose1 = true
      this.isHideClose1 = false
      this.isShow1 = !this.isShow1
    },
    handle5 () {
      this.isShow1 = !this.isShow1
      this.preventMaskClose1 = false
      this.isHideClose1 = true
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
