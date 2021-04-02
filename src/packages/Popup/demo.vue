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
        <li class="demo-list-item">
          <a @click="topShow = true" class="router-link">position: top</a>
        </li>
        <li class="demo-list-item">
          <a @click="rightShow = true" class="router-link">position: right</a>
        </li>
        <li class="demo-list-item">
          <a @click="bottomShow = true" class="router-link">position: bottom</a>
        </li>
        <li class="demo-list-item">
          <a @click="leftShow = true" class="router-link">position: left</a>
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
    <lina-popup v-model="topShow" position="top" :is-hide-close="true">
      <div class="width100 f-c">top</div>
    </lina-popup>
    <lina-popup v-model="rightShow" position="right" :is-hide-close="true">
      <div class="height100 f-c">right</div>
    </lina-popup>
    <lina-popup v-model="bottomShow" position="bottom" :is-hide-close="true">
      <div class="width100 f-c">bottom</div>
    </lina-popup>
    <lina-popup v-model="leftShow" position="left" :is-hide-close="true">
      <div class="height100 f-c">left</div>
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
      topShow: false,
      rightShow: false,
      bottomShow: false,
      leftShow: false,
      Show: false,
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
      this.isShow3 = !this.isShow3
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
  .width100 {
    height: 300px;
    width: 100vw;
    background: #fff;
  }
  .height100 {
    width: 600px;
    height: 100vh;
    background: #fff;
  }
  .f-c {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 42px;
    font-weight: 600;
    color: #666;
  }
}
</style>
