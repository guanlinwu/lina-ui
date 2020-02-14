<template>
  <ul
    :class="[tabsConfig.isFixed && fixedTabsFlag ? 'lina-tabs-lists e-fixed' : 'lina-tabs-lists']"
    :style="{ ...tabsConfig.customStyle, color: '#000' }"
    ref="tabsListsRef"
  >
    <li
      v-for="(el, idx) of tabsConfig.navData"
      :class="[currentSelectIndex === idx ? 'e-active nav-item' : 'nav-item']"
      :style="{color: (currentSelectIndex === idx && tabsConfig.customStyle && tabsConfig.customStyle.color) || 'currentColor'}"
      :key="`tabsNav${idx}`"
      ref="titles"
      @click="handleInnerSelectTabs(el,idx, $event)"
    >{{typeof el === 'string' ? el : el.title}}
    </li>
    <i class="icon-bar" ref="iconBarRef" :style="{ background: tabsConfig.customStyle && tabsConfig.customStyle.color || 'currentColor' }"/>
  </ul>
</template>
<script>
import throttleFn from '../../utils/throttle'

export default {
  name: 'TabNav',
  data() {
    return {
      throttle: Function, // 存储监听的函数
      fixedTabsFlag: !1, // 控制是否固定tab
      currentSelectIndex: 0 // 默认选中第一个
    }
  },
  watch: {
    highlightTab(n, o) {
      try {
        const ulNode = this.$refs.tabsListsRef
        const liNodeArr = Array.prototype.slice.call(ulNode.children).filter(node => node.tagName === 'LI')
        if (n >= liNodeArr.length) {
          console.error('索引超过数组数量！！')
          return undefined
        }
        !!~n && (this.currentSelectIndex = n)
        !!~n && this.calculateTransform(liNodeArr[n])
      } catch (e) {
        console.error(e.message)
      }
    }
  },
  inject: ['tabsConfig', 'tabsVm'],
  methods: {
    listenScroll: function () { // 监听滚动然后固定在顶部
      // console.count('listeningScrollTimes')
      // console.log(this.tabsVm.$refs.tabsRef)
      const { tabsRef } = this.tabsVm.$refs
      const tabsTop = tabsRef.getBoundingClientRect().top
      const ulNode = this.$refs.tabsListsRef
      if (!tabsRef || !ulNode) return undefined
      const liNodeArr = Array.prototype.slice.call(ulNode.children).filter(node => node.tagName === 'LI') // 获取tab节点
      this.fixedTabsFlag = tabsTop <= 0
      // console.time('calculateTranslateXaxis')
      this.calculateTransform(liNodeArr[this.currentSelectIndex]) // 固定之后重新计算
      // console.timeEnd('calculateTranslateXaxis')
    },
    handleInnerSelectTabs(item, index, e) {
      if (e.target.classList.contains('e-active')) return undefined
      this.currentSelectIndex = index
      this.$emit('onTabClick', item, index, e)
      try {
        this.calculateTransform(e)
      } catch (e) {
        console.error(e)
      }
      this.scrollIntoView(index)
    },
    scrollIntoView(index) {
      // 处理水平滚动
      const { titles, tabsListsRef } = this.$refs

      if (!titles || !titles[index]) {
        return
      }
      const title = titles[index]
      const to = title.offsetLeft - (tabsListsRef.offsetWidth - title.offsetWidth) / 2 // 计算需要滚动的距离
      const from = tabsListsRef.scrollLeft // x轴的ul的横向滚动距离
      tabsListsRef.scrollBy({
        left: to - from,
        top: 0,
        behavior: 'smooth'
      })
    },
    calculateTransform(e) {
      // e可能是事件对象，也可能是dom对象
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
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.throttle)
    console.log(`\u001b[3${~~(Math.random() * 8)}m${'-----tabComponent beforeDestroy------'}\u001b[0m`)
  },
  mounted() {
    this.$nextTick(() => {
      try {
        const { tabsListsRef } = this.$refs
        this.calculateTransform(tabsListsRef.firstChild) // 刚开始进来默认把iconbar移动到第一个tab的下面
        this.throttle = throttleFn(this.listenScroll)
        this.tabsConfig.isFixed && window.addEventListener('scroll', this.throttle)
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
    justify-content: flex-start;
    flex-wrap: nowrap;
    align-items: center;
    width: 100%;
    font-size: 25px;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
      background-color: transparent;
    }

    .nav-item {
      padding: 0 0 10px;
      width: 25%;
      /*flex: 1 0 auto;*/
      flex-shrink: 0;
      text-align: center;
      transition: color, transform 1s linear;
      cursor: pointer;
      white-space: nowrap;
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

  .e-fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #fff;
    z-index: 20;
  }
</style>
