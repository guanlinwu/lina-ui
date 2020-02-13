<template>
  <div
    class="u-tabs lina-tabs__wrapper"
    ref="tabsRef"
    :style="{height: config.customStyle.height || '1.3333333rem' }"
  >
  <TabNav @onTabClick="onTabClick"/>
    <slot>
      默认内容
    </slot>
  </div>
</template>
<script>
import TabNav from './TabNav'
export default {
  name: 'lina-tabs',
  components: {
    TabNav
  },
  data () {
    return {
    }
  },
  props: {
    config: {
      required: true,
      type: Object,
      default: () => ({
        navData: [{ title: '标签1' }, { title: '标签2' }, { title: '标签3' }, { title: '标签4' }],
        customStyle: {},
        tabClick: () => {},
        isFixed: !1,
        highlightTab: -1,
        slots: this.$slots
      })
    }
  },
  methods: {
    onTabClick (tab, index, event) {
      this.$emit('tabClick', tab, index, event)
    }
  },
  mounted () {
  },
  provide () {
    return {
      tabsConfig: this.config // 把当前实例抽出来，方便子组件使用q
    }
  }
}
</script>
<style lang="scss" scoped>
  .u-tabs{
    /*position: fixed;*/
    /*top: 78px;*/
    padding: 10px 0;
    width: 100%;
  }
</style>
