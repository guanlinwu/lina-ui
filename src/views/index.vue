<template>
  <div class="page-index">
    <header class="header-box">
      <h3 class="title">LinaUi 1.0 20px</h3>
      <a href="https://github.com/guanlinwu/lina-ui" target="_blank" class="github-btn">Github</a>
      <a href="https://www.npmjs.com/package/lina-ui" target="_blank" class="npm-btn">npm</a>
    </header>
    <div class="demo-list-box" :class="{'e-unfold': !foldStore[index]}" v-for="(demoDataItem, index) in demoData" :key="`demoData-${index}`">
      <h4 class="type" @click="toggleFold(index)">{{demoDataItem.typeName}}<i class="icon-arrow"></i></h4>
      <ul class="demo-list">
        <li class="demo-list-item" v-for="(demoItem, demoItemIndex) in demoDataItem.demoList" :key="`demo-item-${index}-${demoItemIndex}`">
          <router-link class="router-link" :to="demoItem.router">{{demoItem.name}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      demoData: [
        {
          typeName: '操作反馈', // 名称
          demoList: [
            {
              name: 'Toast',
              router: '/demo/Toast'
            },
            {
              name: 'Loading',
              router: '/demo/Loading'
            },
            {
              name: 'Dialog',
              router: '/demo/Dialog'
            },
            {
              name: 'ActionSheet',
              router: '/demo/ActionSheet'
            },
            {
              name: 'Popup',
              router: '/demo/Popup'
            }
          ]
        }
      ],
      foldStore: []
    }
  },
  created () {
    console.log('create')
    let foldStatus = JSON.parse(sessionStorage.getItem('foldStatus'))
    this.foldStore = foldStatus || []
  },
  methods: {
    /**
     * 展开，收起
     */
    toggleFold (index) {
      this.$set(this.foldStore, index, !this.foldStore[index])
      sessionStorage.setItem('foldStatus', JSON.stringify(this.foldStore))
    }
  }
}
</script>

<style lang="scss" scoped>
.page-index {
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;

  .header-box {
    position: relative;
    padding: 40px 0 40px;
    .title {
      text-align: center;
      font-weight: 300;
      font-size: 20px;
    }
    .github-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      height: 52px;
      width: 52px;
      font-size: 0;
      background: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 16 16' width='24' aria-hidden='true'%3E%3Cpath fill-rule='evenodd' fill='%23969696' d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z'/%3E%3C/svg%3E") no-repeat;
      background-size: 100% 100%;
    }
    .npm-btn {
      position: absolute;
      top: 10px;
      left: 10px;
      height: 52px;
      width: 52px;
      font-size: 0;
      background: url("https://static.npmjs.com/58a19602036db1daee0d7863c94673a4.png") no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>
