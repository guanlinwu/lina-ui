<script>
import TabNav from './TabNav'
export default {
  name: 'lina-tabs',
  props: {
    config: {
      required: true,
      type: Object,
      default: () => ({
        navData: [{ title: '标签1' }, { title: '标签2' }, { title: '标签3' }, { title: '标签66666' }],
        customStyle: {},
        tabClick: () => {},
        isFixed: !1,
        highlightTab: -1
      })
    }
  },
  data () {
    return {
    }
  },
  methods: {
    handleTabClick (tab, index, event) {
      this.$emit('tabClick', tab, index, event)
    }
  },
  mounted () {
    console.log('😄')
  },
  provide () {
    return {
      tabsWrapperInstance: this // 把当前实例抽出来，方便子组件使用q
    }
  },
  render (h) {
    const navProps = {
      navData: this.config.navData,
      onTabClick: this.handleTabClick,
      customStyle: this.config.customStyle,
      isFixed: this.config.isFixed,
      highlightTab: this.config.highlightTab
    }
    return (
      <div
        class = 'u-tabs lina-tabs-wrapper'
        ref = 'tabsRef'
        style = {{ height: (navProps.customStyle && navProps.customStyle.height) || '1.3333333rem' }}
      >
        <TabNav { ...{ attrs: navProps } } />
      </div>
    )
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
