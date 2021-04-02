<template>
  <div
    class="u-tabs lina-tabs__wrapper"
    ref="tabsRef"
    :style="{height: config.customStyle && config.customStyle.height || '1.3333333rem'}"
  >
    <TabNav @onTabClick="onTabClick"/>
    <slot/>
  </div>
</template>
<script>
import TabNav from './TabNav'

export default {
  name: 'lina-tabs',
  components: {
    TabNav
  },
  data() {
    return {}
  },
  props: {
    config: {
      required: true,
      type: Object,
      default: () => ({
        navData: [{ title: '标签1' }, { title: '标签2' }, { title: '标签3' }, { title: '标签4' }],
        customStyle: {},
        tabClick: () => {
        },
        isFixed: false,
        highlightTab: -1,
        tabsRef: this.$refs.tabsRef
      })
    }
  },
  methods: {
    onTabClick(tab, index, event) {
      this.$emit('tabClick', tab, index, event)
    }
  },
  mounted() {
    // window.hh = this
  },
  provide() {
    return {
      tabsConfig: this.config,
      tabsVm: this
    }
  }
}
</script>
<style lang="scss" scoped>
  .u-tabs {
    /*position: fixed;*/
    /*top: 78px;*/
    padding: 10px 0;
    width: 100%;
  }
</style>
