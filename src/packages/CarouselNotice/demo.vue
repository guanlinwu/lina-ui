<template>
  <div class="page-demo-carouselNotice">
    <div class="demo-list-box e-unfold e-view">
      <ul class="demo-list">
        <li class="demo-list-item e-view">
          <a href="javascript:;" class="router-link">上下跑马灯</a>
          <div class="view-content">
            <CarouselNotice :dataList="dataList" :isNeedHorizontal="false" :isShow="true"/>
          </div>
        </li>
        <li class="demo-list-item e-view">
          <a href="javascript:;" class="router-link">先左右再上下跑马灯（默认）</a>
          <div class="view-content">
            <CarouselNotice :dataList="dataList" :isShow="true"/>
          </div>
        </li>
        <li class="demo-list-item e-view">
          <a href="javascript:;" class="router-link">显示关闭按钮</a>
          <div class="view-content">
            <CarouselNotice :dataList="dataList" :isShowClose="true" :isShow="true" @close="close3"/>
          </div>
        </li>
        <li class="demo-list-item e-view">
          <a href="javascript:;" class="router-link">设置横行滚动速度</a>
          <div class="view-content">
            <CarouselNotice :dataList="dataList" :slideSpeed="100" :isShow="true"/>
          </div>
        </li>
        <li class="demo-list-item e-view">
          <a href="javascript:;" class="router-link">设置内容文本样式</a>
          <div class="view-content">
            <CarouselNotice :dataList="dataList" :textStyle="textStyle" :isShow="true"/>
          </div>
        </li>
        <li class="demo-list-item e-view">
          <a href="javascript:;" class="router-link">设置外框样式</a>
          <div class="view-content">
            <CarouselNotice :dataList="dataList" :boxStyle="boxStyle" :isShow="true"/>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo-carouselNotice',
  data () {
    return {
      textStyle: { // 设置内容文本样式
        color: '#20aadf',
        fontWeight: 300
      },
      boxStyle: { // 设置外框样式
        height: '36px',
        borderRadius: '30px',
        opacity: 0.8,
        backgroundColor: '#0c0c0c'
      },
      dataList: [
        {
          id: 0,
          title: '这是轮播公告栏',
          tag: {
            title: '基础'
          }
        },
        {
          id: 1,
          title: '请注意，请注意，如果字数溢出，则先左右轮播，然后再上下轮播'
        },
        {
          id: 2,
          title: '被设置了tag的内容和颜色',
          tag: {
            title: '重点',
            borderColor: '#20aadf',
            color: '#20aadf'
          }
        }
      ],
      data1: {
      }
    }
  },
  methods: {
    handle1 () {
    },
    close3 () {
      this.$toast('close, you can do something')
    }
  }
}
</script>

<style lang="scss" scoped>
.page-demo-carouselNotice {
}
</style>
