<template>
  <div class="page-demo">
    <div class="imgwrap">
      <img v-for="(src, index) of imgArr" v-lazyLoadImg="src" class="test" :key="src+index">
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-demo',
  data () {
    return {
      imgArr: [
        'http://5b0988e595225.cdn.sohucs.com/images/20181018/97462eff99e54516aaba48461edfe8f5.jpeg',
        'http://5b0988e595225.cdn.sohucs.com/images/20181018/97462eff99e54516aaba48461edfe8f5.jpeg',
        'http://5b0988e595225.cdn.sohucs.com/images/20181018/97462eff99e54516aaba48461edfe8f5.jpeg',
        'http://5b0988e595225.cdn.sohucs.com/images/20181018/97462eff99e54516aaba48461edfe8f5.jpeg',
        'http://5b0988e595225.cdn.sohucs.com/images/20181018/97462eff99e54516aaba48461edfe8f5.jpeg',
        'http://5b0988e595225.cdn.sohucs.com/images/20181018/97462eff99e54516aaba48461edfe8f5.jpeg',
        'http://5b0988e595225.cdn.sohucs.com/images/20181018/97462eff99e54516aaba48461edfe8f5.jpeg',
        'http://5b0988e595225.cdn.sohucs.com/images/20181018/97462eff99e54516aaba48461edfe8f5.jpeg',
        'http://5b0988e595225.cdn.sohucs.com/images/20181018/97462eff99e54516aaba48461edfe8f5.jpeg',
        'http://5b0988e595225.cdn.sohucs.com/images/20181018/97462eff99e54516aaba48461edfe8f5.jpeg',
        'http://5b0988e595225.cdn.sohucs.com/images/20181018/97462eff99e54516aaba48461edfe8f5.jpeg',
        'http://5b0988e595225.cdn.sohucs.com/images/20181018/97462eff99e54516aaba48461edfe8f5.jpeg',
        'http://5b0988e595225.cdn.sohucs.com/images/20181018/97462eff99e54516aaba48461edfe8f5.jpeg',
        'http://5b0988e595225.cdn.sohucs.com/images/20181018/97462eff99e54516aaba48461edfe8f5.jpeg',
        'http://5b0988e595225.cdn.sohucs.com/images/20181018/97462eff99e54516aaba48461edfe8f5.jpeg',
        'http://5b0988e595225.cdn.sohucs.com/images/20181018/97462eff99e54516aaba48461edfe8f5.jpeg',
        'http://5b0988e595225.cdn.sohucs.com/images/20181018/97462eff99e54516aaba48461edfe8f5.jpeg',
        'http://5b0988e595225.cdn.sohucs.com/images/20181018/97462eff99e54516aaba48461edfe8f5.jpeg',
        'http://5b0988e595225.cdn.sohucs.com/images/20181018/97462eff99e54516aaba48461edfe8f5.jpeg',
        'http://5b0988e595225.cdn.sohucs.com/images/20181018/97462eff99e54516aaba48461edfe8f5.jpeg',
        'http://5b0988e595225.cdn.sohucs.com/images/20181018/97462eff99e54516aaba48461edfe8f5.jpeg'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .page-demo{
    .imgwrap {
      padding: 0 100px;

      .test {
        border-radius: 15px;
        width: 550px;
        height: 350px;
      }
    }
  }
</style>
