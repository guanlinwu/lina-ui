<template>
  <div class="page-demo-tabs">
    <br>
    <h2 class="title">标签选择栏</h2>
    <br>
    <article class="wrap">
      <br>
      <section class="example">
        <h1 style="font-size: 28px">固定在顶部</h1>

        <lina-tabs :config="config3" @tabClick="onTabClick3">
          <p>内容{{currentIndex3}}</p>
        </lina-tabs>
      </section>
      <pre>
        <code class="code">navData: '固定1,固定2,固定3,固定4'.split(','),
          // 是否固定到顶部
          isFixed: true,

        // 选中的tab,可以在监听滚动的时候改变该值，从而高亮选中该tab
        highlightTab: -1
        </code>
      </pre>
    </article>

    <article class="wrap">
      <h1 style="font-size: 28px">自定义样式</h1>
      <br>
      <section class="example">
        <lina-tabs :config="config2" @tabClick="onTabClick2">
          <p>内容{{currentIndex2}}</p>
        </lina-tabs>
      </section>
      <pre>
        <code class="code">navData: '标签1,标签2,标签3,标签4'.split(','),

        // 自定义样式比如颜色，字体大小等等，因为自定义太多，加上内敛样式的局限性，不建议➕太多样式
        customStyle: { color: 'pink', fontSize: '.7rem' }
        </code>
      </pre>
    </article>

    <article class="wrap">
      <h1 style="font-size: 28px">内容超过4个自动滚动</h1>

      <br>
      <section class="example">
        <lina-tabs :config="config1" @tabClick="onTabClick1">
          <p>内容{{currentIndex1}}</p>
        </lina-tabs>
      </section>
      <pre>
        <code class="code">navData: '标签1,标签2,标签3,标签4'.split(','),
             默认选项
        </code>
      </pre>
    </article>
    <br v-for="n in 50" :key="n">
  </div>
</template>

<script>
export default {
  name: 'page-demo',
  data() {
    return {
      currentIndex1: 1,
      currentIndex2: 1,
      currentIndex3: 1,
      config1: {

        // 标签标题
        // navData: new [].constructor(4).fill('root', 0, 5),
        navData: '标签1,标签2,标签3,标签4,超过4个,会自动滚'.split(',')
      },
      config2: {

        // 标签标题
        // navData: new [].constructor(4).fill('root', 0, 5),
        navData: '标签1,标签2,标签3,标签4'.split(','),

        // 自定义样式比如颜色，字体大小等等，因为自定义太多，加上内敛样式的局限性，不建议➕太多样式
        customStyle: { color: 'pink', fontSize: '.7rem' }
      },
      config3: {

        // 标签标题
        // navData: new [].constructor(4).fill('root', 0, 5),
        navData: '固定1,固定2,固定3,固定4'.split(','),

        // 是否固定到顶部
        isFixed: true,

        // 选中的tab,可以在监听滚动的时候改变该值，从而高亮选中该tab
        highlightTab: -1

      }
    }
  },
  methods: {
    onTabClick1(tab, index, event) {
      this.currentIndex1 = index + 1
      console.log('🐴标签标题:', tab, '\n🐮索引:', index, '\n🐅事件对象:', event)
    },
    onTabClick2(tab, index, event) {
      this.currentIndex2 = index + 1
      console.log('🐴标签标题:', tab, '\n🐮索引:', index, '\n🐅事件对象:', event)
    },
    onTabClick3(tab, index, event) {
      this.currentIndex3 = index + 1
      console.log('🐴标签标题:', tab, '\n🐮索引:', index, '\n🐅事件对象:', event)
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
  .page-demo-tabs {
    .title {
      padding-bottom: 10px;
      line-height: 1.5;
      color: #04bbfa;
      text-align: center;
      font-size: 35px;
    }

    .wrap {
      padding: 20px;
      min-height: 500px;
      width: 95%;
      margin: 30px auto 0;
      text-align: justify;
      border-radius: 20px;
      box-shadow: inset 0 0 30px #616465;
      background-color: #fff;

    }

    .example {
      background-color: #efefef;
      height: 200px;
    }

    pre {
      background: #000;
      padding: 10px;
    }

    .code {
      color: chartreuse;
      white-space: pre-wrap;
      font-size: 25px;
    }
  }
</style>
