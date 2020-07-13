<template>
  <div class="page-demo-container">
    <lina-more pack-height="4rem" more-height="10rem" class="demo-lina-more">
        <template v-slot:content>
          <div>
            <lina-more pack-height="2rem">
              <template v-slot:content>
                <p>{{new Array(30).fill('使用centent、pack、more插槽').join()}}</p>
              </template>
              <template v-slot:pack>
                <span class="more-span more-shou">收起</span>
              </template>
              <template v-slot:more>
                <span class="more-span more-kai">展开</span>
              </template>
            </lina-more>
            <lina-more pack-height="2rem" ref="more">
              <template v-slot:content>
                <p>{{new Array(30).fill('使用centent、pack、more插槽').join()}}</p>
              </template>
              <template v-slot:toggle="{ isMore }">
                <p @click="handleToggle" class="toggle">
                  <span class="more-span more-shou" :class="isMore ? 'more-shou' : 'more-kai'">{{isMore ? '收起' : '更多'}}</span>
                </p>
              </template>
            </lina-more>
            <lina-more pack-height="2rem">
              <template v-slot:content>
                <p>{{new Array(5).fill('高度比pack-height小，没有收起等ui').join()}}</p>
              </template>
            </lina-more>
          </div>
        </template>
    </lina-more>
  </div>
</template>

<script>
export default {
  name: 'demo-more',
  methods: {
    handleToggle () {
      this.$refs.more.toggle()
    }
  }
}
</script>

<style lang="scss" scoped>
.page-demo-container {
  height: 100vh;
  .toggle {
    z-index: 2;
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .demo-lina-more {
    @mixin arrowRight($arrowBorder: 2px, $arrowSize: 0.15rem, $color: #FF4121, $direction: right){
      position: relative;
      &::after {
        border: solid $arrowBorder $color;
        border-bottom-width: 0;
        border-left-width: 0;
        content: " ";
        position: absolute;
        width: $arrowSize;
        height: $arrowSize;
        $deg: -45deg;
        @if $direction == right {$deg: 45deg}
        @else if $direction == bottom {$deg: 135deg}
        @else if $direction == left {$deg: 215deg}
        transform: translateY(-50%) rotate($deg);
        top: 50%;
        margin-left: 15px;
      }
    }
    .more-span {
      font-size:26px;
      font-family:PingFang SC;
      font-weight:400;
      color:rgba(255,65,33,1) !important;
      line-height:43px;
      display: inline-block;
    }
    .more-shou {
      @include arrowRight($direction: top);
      &::after {
        top: 60%;
      }
    }
    .more-kai {
      @include arrowRight($direction: bottom);
    }
  }
}
</style>
