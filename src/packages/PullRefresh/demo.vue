<template>
  <div class="page-demo-pull-refresh">
    <PullRefresh
      @refresh="refresh"
      v-bind="pullRefreshSetting"
    >
      <div class="pull-content">
        <a href="javascript:;" class="text">刷新次数: {{ count }}</a>
        <div class="demo-list-box e-unfold">
          <h4 class="type">基本用法</h4>
          <ul class="demo-list">
            <li class="demo-list-item">
              <a @click="handle1" class="router-link">设置下拉过程文案（pullingText）</a>
            </li>
            <li class="demo-list-item">
              <a @click="handle2" class="router-link">设置释放过程文案（loosingText）</a>
            </li>
            <li class="demo-list-item">
              <a @click="handle3" class="router-link">设置加载过程文案（loadingText）</a>
            </li>
          </ul>
        </div>
        <img src="https://dummyimage.com/600x1000/000/fff" alt="">
      </div>
    </PullRefresh>
  </div>
</template>

<script>
export default {
  name: 'demo-pull-refresh',
  data () {
    return {
      count: 0,
      pullRefreshSetting: {
      }
    }
  },
  methods: {
    refresh ({ done }) {
      this.count++
      this.$toast('刷新成功')
      setTimeout(() => {
        done()
      }, 1000)
    },
    handle1 () {
      this.pullRefreshSetting.pullingText = '下拉下拉下拉快下拉'
      this.$toast('设置成功')
    },
    handle2 () {
      this.pullRefreshSetting.loosingText = '释放我，即可刷新刷新'
      this.$toast('设置成功')
    },
    handle3 () {
      this.pullRefreshSetting.loadingText = '加载中，请等待'
      this.$toast('设置成功')
    }
  }
}
</script>

<style lang="scss" scoped>
.page-demo-pull-refresh {
  font-size: 0;
  height: calc(100vh - 88px);

  .pull-content {
    .text {
      margin: 10px 30px;
      font-size: 28px;
      line-height: 44px;
      color: rgba(69, 90, 100, 0.6);
    }
  }
}
</style>
