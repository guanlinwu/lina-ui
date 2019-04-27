<template>
  <div class="page-index">
    <div class="demo-list-box" :class="{'e-unfold': foldStore[index]}" v-for="(demoDataItem, index) in demoData" :key="`demoData-${index}`">
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
  data() {
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
            }
          ]
        }
      ],
      foldStore: []
    }
  },
  created() {
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
  padding-top: 40px;
  box-sizing: border-box;
}
</style>
