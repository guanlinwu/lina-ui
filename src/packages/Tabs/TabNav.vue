<script>
import throttleFn from '../../utils/throttle'
function noop () {
  // 搞个空操作,防止未传处理函数而报错
}
export default {
  name: 'TabNav',
  data () {
    return {
      throttle: Function, // 存储监听的函数
      fixedTabsFlag: !1, // 控制是否固定tab
      currentSelectIndex: 0 // 默认选中第一个
    }
  },
  props: {
    navData: Array,
    onTabClick: {
      type: Function,
      default: noop
    },
    customStyle: {},
    isFixed: Boolean,
    highlightTab: {
      type: Number,
      default: -1
    }
  },
  watch: {
    highlightTab (n, o) {
      try {
        const ulNode = this.$refs.tabsListsRef
        const liNodeArr = Array.prototype.slice.call(ulNode.children).filter(node => node.tagName === 'LI')
        if (n >= liNodeArr.length) { console.error('索引超过数组数量！！'); return undefined }
        !!~n && (this.currentSelectIndex = n)
        !!~n && this.calculateTransform(liNodeArr[n])
      } catch (e) {
        console.error(e.message)
      }
    }
  },
  inject: ['tabsWrapperInstance'], // 父组件实例
  render (h) {
    let {
      onTabClick,
      navData,
      currentSelectIndex,
      handleInnerSelectTabs, // 内部切换时使用的处理函数，不开放，只暴露onTabClick 😄
      fixedTabsFlag,
      customStyle
    } = this
    return (
      <ul
        class={ fixedTabsFlag ? 'lina-tabs-lists e-fixed' : 'lina-tabs-lists'}
        style={{ ...customStyle, color: '#000' }}
        ref='tabsListsRef'
      >
        {
          navData.map((el, idx) => (
            <li class={currentSelectIndex === idx ? 'e-active nav-item' : 'nav-item'}
              style={currentSelectIndex === idx && ({ color: customStyle && customStyle.color })}
              key={`tabsNav${idx}`}
              on-click={e => {
                e.target.tagName === 'LI' && onTabClick(el, idx, e)
                handleInnerSelectTabs(idx, e)
              }}
            >
              {typeof el === 'string' ? el : el.title}
              {
                /*
                * 更多功能后续添加
                */
              }
            </li>
          )).concat(
            <i class="icon-bar" ref="iconBarRef"
              style={{ background: customStyle && customStyle.color }}/>
          )
        }
      </ul>
    )
  },
  methods: {
    listenScroll: function () { // 监听滚动然后固定在顶部
      // console.count('listeningScrollTimes')
      const { tabsRef } = this.tabsWrapperInstance.$refs
      const tabsTop = tabsRef.getBoundingClientRect().top
      const ulNode = this.$refs.tabsListsRef
      if (!tabsRef || !ulNode) return undefined
      const liNodeArr = Array.prototype.slice.call(ulNode.children).filter(node => node.tagName === 'LI') // 获取tab节点
      this.fixedTabsFlag = tabsTop <= 0
      // console.time('calculateTranslateXaxis')
      this.calculateTransform(liNodeArr[this.currentSelectIndex]) // 固定之后重新计算
      // console.timeEnd('calculateTranslateXaxis')
    },
    handleInnerSelectTabs (index, e) {
      if (e.target.classList.contains('e-active')) return undefined
      this.currentSelectIndex = index
      try {
        this.calculateTransform(e)
      } catch (e) {
        console.log(e)
      }
    },
    calculateTransform (e) { // e可能是事件对象，也可能是dom对象
      // debugger
      const { iconBarRef, tabsListsRef } = this.$refs
      const { offsetLeft, offsetWidth, offsetHeight } = e.target || e // li元素的offset
      const { offsetWidth: iconOffsetWidth, offsetHeight: iconOffsetHeight } = iconBarRef // i元素的offset
      const x = offsetLeft + offsetWidth / 2 - iconOffsetWidth / 2 // 计算x滚动的距离
      // console.log(iconBarRef)
      Object.assign(iconBarRef.style, {
        transform: `translate3d(${x}px,0,0)`,
        webkitTransform: `translate3d(${x}px,0,0)`,
        // top: `calc(${offsetHeight}px - ${iconOffsetHeight}px)`
        top: offsetHeight === tabsListsRef.offsetHeight
          ? `calc(${offsetHeight}px - ${iconOffsetHeight}px)`
          : `calc(50% - ${offsetHeight / 2}px + ${offsetHeight}px)`
      })
    }
    // throttle () {
    //   return throttleFn(this.listenScroll, 500)
    // }
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.throttle)
    console.log(`\u001b[3${~~(Math.random() * 8)}m${'-----tabComponent beforeDestroy------'}\u001b[0m`)
  },
  mounted () {
    this.$nextTick(() => {
      try {
        const { tabsListsRef } = this.$refs
        this.calculateTransform(tabsListsRef.firstChild) // 刚开始进来默认把iconbar移动到第一个tab的下面
        this.throttle = throttleFn(this.listenScroll, 500)
        this.isFixed && window.addEventListener('scroll', this.throttle)
      } catch (e) {
        console.log(e)
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  .lina-tabs-lists {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    font-size: 25px;
    /*overflow: hidden;*/

    .nav-item {
      padding: 0 0 10px;
      width: fit-content; // 如果👇面的flex有声明flex-basis属性（不管是不是0）此处的宽度都会失效
      /*flex: 1;*/
      text-align: center;
      transition: color, transform 1s linear;
      cursor: pointer;
    }

    .icon-bar {
      position: absolute;
      bottom: 0;
      left: 0;
      border-radius: 10px;
      display: inline-block;
      height: 10px;
      background: #fa5661;
      width: 20px;
      transition: transform .5s cubic-bezier(0.35, 1.23, 0.58, 1.04);
    }

    .e-active {
      color: #fa5661;
      $this: &; //缓存当前选择器
    }
  }
  .e-fixed{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #fff;
    z-index: 20;
  }
</style>
