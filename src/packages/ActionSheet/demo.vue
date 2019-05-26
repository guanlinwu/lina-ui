<template>
  <div class="page-demo-actionsheet">
    <div class="demo-list-box e-unfold">
      <h4 class="type">基本用法</h4>
      <ul class="demo-list">
        <li class="demo-list-item">
          <a @click="handle1" class="router-link">普通用法</a>
        </li>
        <li class="demo-list-item">
          <a @click="handle2" class="router-link">加上取消文本，并添加关闭回调事件</a>
        </li>
        <li class="demo-list-item">
          <a @click="handle3" class="router-link">禁止点击蒙层关闭</a>
        </li>
         <li class="demo-list-item">
          <a @click="handle4" class="router-link">高亮已选项</a>
        </li>
      </ul>
    </div>

    <!-- demo1 -->
    <ActionSheet :menu-items="demo1.menuItems" :cancelText="demo1.cancelText" :isShow.sync="demo1.isShow" @choose="chooseItem"/>
    <!-- demo2 -->
    <ActionSheet :menu-items="demo2.menuItems" :cancelText="demo2.cancelText" :isShow.sync="demo2.isShow" @choose="chooseItem" @close="closeDemo2"/>
    <!-- demo3 -->
    <ActionSheet :menu-items="demo3.menuItems" :cancelText="demo3.cancelText" :isShow.sync="demo3.isShow" @choose="chooseItem" :preventMaskClose="demo3.preventMaskClose"/>
    <!-- demo4 -->
    <ActionSheet :menu-items="demo4.menuItems" :cancelText="demo4.cancelText" :isShow.sync="demo4.isShow" @choose="chooseItemDemo4" :chooseTagValue="demo4.choose"/>
  </div>
</template>

<script>
export default {
  name: 'demo-actionsheet',
  data () {
    return {
      demo1: {
        isShow: false,
        menuItems: [
          {
            'name': '高德地图',
            'value': 0
          },
          {
            'name': '百度地图',
            'value': 1
          }
        ]
      },
      demo2: {
        isShow: false,
        cancelText: '取消',
        menuItems: [
          {
            'name': '高德地图',
            'value': 0
          },
          {
            'name': '百度地图',
            'value': 1
          }
        ]
      },
      demo3: {
        isShow: false,
        preventMaskClose: true,
        cancelText: '取消',
        menuItems: [
          {
            'name': '高德地图',
            'value': 0
          },
          {
            'name': '百度地图',
            'value': 1
          }
        ]
      },
      demo4: {
        choose: '请选择',
        cancelText: '取消',
        isShow: false,
        menuItems: [
          {
            'name': '高德地图',
            'value': 0
          },
          {
            'name': '百度地图',
            'value': 1
          }
        ]
      }
    }
  },
  methods: {
    handle1 () {
      this.demo1.isShow = true
    },
    chooseItem (item) {
      console.log(item)
    },
    handle2 () {
      this.demo2.isShow = true
    },
    closeDemo2 () {
      alert('您选择了关闭')
    },
    handle3 () {
      this.demo3.isShow = true
    },
    handle4 () {
      this.demo4.isShow = true
    },
    chooseItemDemo4 (item) {
      this.demo4.choose = item.name
    }
  }
}
</script>

<style lang="scss" scoped>
.page-demo-actionsheet {
}
</style>
