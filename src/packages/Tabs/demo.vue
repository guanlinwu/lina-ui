<template>
  <div class="page-demo-tabs">
    <br>
    <h1 class="title">标签选择栏</h1>
    <br>
    <pre style="font-size:16px;color: greenyellow;background:black;border-radius:10px;padding: 10px;overflow-x: scroll">config: {// 标签标题
   // navData: new [].constructor(4).fill('root', 0, 5),
    <code>navData:</code>'root,trunk,stem,leaves'.split(','),

    // 自定义样式比如颜色，字体大小等等，
    // 因为自定义太多，加上内敛样式的局限性，
    // 不建议➕太多样式
    <code>customStyle:</code> {
    color: 'deepskyblue',
    fontSize: '.5rem'
    },

    // 是否固定到顶部
    <code>isFixed:</code> !0,

    // 选中的tab,可以在监听滚动的时候改变该值，
    // 从而高亮选中该tab
    <code>highlightTab:</code> -1
    },
    methods: {
    <code>onTabClick (tab, index, event)</code> {
      console.log('🐴标签标题:', tab, '\n🐮索引:', index, '\n🐅事件对象:', event)
    }
    </pre>

    <lina-tabs :config="config" @tabClick="onTabClick">
       <p>内容{{currentIndex}}</p>
    </lina-tabs>

    <p style="text-align: center">-----</p>
    <p style="text-align: center">-----</p>
    <p style="text-align: center">----------</p>
    <p style="text-align: center">----------</p>
    <p style="text-align: center">----------</p>
    <br>
    <p>What the cynics fail to understand is that the ground has shifted beneath them - that the stale political arguments that have consumed us for so long no longer apply.</p>
    <p>The question we ask today is not whether our government is too big or too small,</p>
    <p>but whether it works - whether it helps families find jobs at a decent wage,</p>
    <p>care they can afford, a retirement that is dignified. Where the answer is yes,</p>
    <p>we intend to move forward. Where the answer is no,</p>
    <p>programs will end. And those of us who manage the public's dollars will be held to account - to spend wisely,</p>
    <p>reform bad habits and do our business in the light of day - because only then can we restore the vital trust between a people and their government.
    </p>

    <p>repeat above paragraph</p>

    <p>What the cynics fail to understand is that the ground has shifted beneath them - that the stale political arguments that have consumed us for so long no longer apply.</p>
    <p>The question we ask today is not whether our government is too big or too small,</p>
    <p>but whether it works - whether it helps families find jobs at a decent wage,</p>
    <p>care they can afford, a retirement that is dignified. Where the answer is yes,</p>
    <p>we intend to move forward. Where the answer is no,</p>
    <p>programs will end. And those of us who manage the public's dollars will be held to account - to spend wisely,</p>
    <p>reform bad habits and do our business in the light of day - because only then can we restore the vital trust between a people and their government.
    </p>
    <blockquote>----from Obama speech</blockquote>
  </div>
</template>

<script>
export default {
  name: 'page-demo',
  data () {
    return {
      currentIndex: 1,
      config: {

        // 标签标题
        // navData: new [].constructor(4).fill('root', 0, 5),
        navData: 'root,trunk,stem,leaves'.split(','),

        // 自定义样式比如颜色，字体大小等等，因为自定义太多，加上内敛样式的局限性，不建议➕太多样式
        customStyle: { color: 'deepskyblue', fontSize: '.5rem' },

        // 是否固定到顶部
        isFixed: !0,

        // 选中的tab,可以在监听滚动的时候改变该值，从而高亮选中该tab
        highlightTab: -1
      }
    }
  },
  methods: {
    onTabClick (tab, index, event) {
      this.currentIndex = index + 1
      console.log('🐴标签标题:', tab, '\n🐮索引:', index, '\n🐅事件对象:', event)
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
  .page-demo-tabs{
    code{
      color: deeppink;
    }
    .title{
      padding-bottom: 20px;
      line-height: 1.5;
      color: #04bbfa;
      text-align: center;
      font-size: 35px;
    }
    >p{
      padding:0 1em;
      font-size: 30px;
      color: #ff9923;
      text-align: left;
      text-indent: 2em;
      &:nth-of-type(odd){
        color: #64a5ff;
      }
    }
  }
</style>
