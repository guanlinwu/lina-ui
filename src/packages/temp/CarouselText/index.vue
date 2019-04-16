// 轮播头条
<template>
  <div class="u-app-carousel-text">
    <!-- 组件内容 -->
    <section class="u-widget-inner">
      <!-- {{dataTemp}} -->
      <div class="carousel-text-outter">
        <ul class="carousel-text-list" :style="scrollStyle">
          <li class="carousel-text-item" v-for="(item, index) in dataList" :key="`carousel-text-item-${index}`">
            <mars-link event="carousel-text" :title="item.title" class="link" :href="item.link_url">
              <div class="news-tag-box">
                <!-- <span :style="{borderColor: item.tag && item.tag.color, color: item.tag && item.tag.color}" class="news-tag">{{item.tag && item.tag.title || '标签'}}</span> -->
                <span class="news-tag">消息</span>
              </div>
              <h3 class="content">{{item.title}}</h3>
            </mars-link>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'u-app-carousel-text',
  components: {
  },
  data () {
    return {
      scrollContainerHeight: 80, // 在750px设计稿下的高度
      scrollStyle: ''
    }
  },
  props: {
    dataList: {
      type: Array
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.initScroll()
    })
  },
  methods: {
    /**
     * 初始化轮播
    */
    initScroll () {
      let self = this
      let length = self.dataList.length // 实际记录，多的那条是放在最后的
      let list = self.dataList
      if (length <= 1) {
        return
      }
      list.push(list[0])
      let windowWidth = window.innerWidth
      let ITEMHEIGHT = (self.scrollContainerHeight * windowWidth) / 750
      let loop = 1

      scrollUp()

      /**
       * 轮播
       */
      function scrollUp () {
        if (loop <= length) {
          self.scrollStyle = `transition: all .5s ease-in; -webkit-transition: all .5s ease-in;transform: translateY(-${loop * ITEMHEIGHT}px);-webkit-transform: translateY(-${loop * ITEMHEIGHT}px);`
          loop++
          setTimeout(scrollUp, 3000)
        } else {
          self.scrollStyle = `transition: none; -webkit-transition: none;transform: translateY(0px);-webkit-transform: translateY(0px);`
          loop = 1
          setTimeout(scrollUp, 100)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.u-app-carousel-text {
  position: relative;
  .u-widget-inner {

    .carousel-text-outter {
      height: 80px;
      padding: 0 30px;
      overflow: hidden;
      background-color: #fff;

      .carousel-text-list {
        width: 100%;
        transition: all 1s ease;
      }

      .carousel-text-item, .link {
        height: 80px;
        width: 100%;
        display: flex;
        align-items: center;
      }
      .content {
        margin-left: 18px;
        font-size:28px;
        color:rgba(56,56,56,1);
        @extend %ellipsis;
      }

      // 标签
      .news-tag-box {
        font-size: 0;

        .news-tag {
          display: inline-block;
          vertical-align: middle;
          white-space: nowrap;
          padding: 0 10px;
          height: 42px;
          line-height: 42px;
          font-size:28px;
          color:#C8152D;
          border: 1Px solid #C8152D;
          border-radius: 4px;
        }
      }
    }
  }
}
</style>
