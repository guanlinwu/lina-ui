
<script>
export default {
  name: 'lina-nav-bar',
  props: {
    title: { // 标题内容
      type: String
    },
    zIndex: { // 层级
      type: Number,
      default: 1
    },
    leftText: { // 左边导航文本
      type: String
    },
    rightText: { // 右边导航文本
      type: String
    },
    isHideLeftArrow: { // 是否隐藏左边导航箭头
      type: Boolean,
      default: false
    }
  },
  methods: {
    clickLeft () {
      console.log('clickLeft')
      let fn = this.$listeners['click-left']
      fn && typeof fn === 'function' && fn()
    },
    clickRight () {
      console.log('clickRight')
      let fn = this.$listeners['click-right']
      fn && typeof fn === 'function' && fn()
    }
  },
  mounted () {
    // console.log(this)
    // console.log(this.$slots)
    // console.log(this.$listeners)
  },
  render (h) {
    return (
      <transition name='f-fade'>
        <div class="lina-nav-bar" style={{ zIndex: this.zIndex }}>
          <div class="left" onClick={this.clickLeft}>
            {
              this.$slots.left
                ? this.$slots.left
                : [
                  !this.isHideLeftArrow && (<i class="icon-left-arrow"></i>),
                  this.leftText && (<span class="nav-text">{this.leftText}</span>)
                ]
            }
          </div>
          <div class="moddle">
            {this.$slots.title ? this.$slots.title : <h3 class="title">{this.title}</h3>}
          </div>
          <div class="right" onClick={this.clickRight}>
            {
              this.$slots.right
                ? this.$slots.right
                : [
                  this.rightText && (<span class="nav-text">{this.rightText}</span>)
                ]
            }
          </div>
        </div>
      </transition>
    )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scope>
.lina-nav-bar {
  position: relative;
  width: 100%;
  height: 88px;
  line-height: 88px;
  text-align: center;
  background-color: #fff;
  user-select: none;

  // left
  .left {
    position: absolute;
    top: 50%;
    left: 40px;
    transform: translateY(-50%);
    min-width: 80px;
    text-align: left;
    display: flex;
    align-items: center;

    .icon-left-arrow {
      display: inline-block;
      vertical-align: middle;
      margin-left: 10px;
      height: 25px;
      width: 25px;
      border-width: 1px;
      border-style: solid;
      border-color: transparent transparent #000 #000;
      transform-origin: 50% 50%;
      transform: rotate(45deg);
    }
  }

  // right
  .right {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 40px;
    display: flex;
    align-items: center;
  }

  .nav-text {
    margin: 0 -40px;
    padding: 0 40px;
    font-size: 30px;
  }

  // middle
  .moddle {
    max-width: 60%;
    margin: 0 auto;
    .title {
      font-size: 36px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(0, 0, 0, 1);
    }
  }
}
</style>
