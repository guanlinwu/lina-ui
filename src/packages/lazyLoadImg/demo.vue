<template>
  <div class="page-demo">
    <div class="imgwrap">
      <img v-for="(src, index) of imgArr" v-lazyLoadImg="{src, isNeedCache: true}" class="test" :key="src+index">
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-demo',
  data () {
    return {
      imgArr: [
        // 'http://img.daimg.com/uploads/allimg/190716/1-1ZG6160132.jpg',
        // 'http://img.daimg.com/uploads/allimg/190712/1-1ZG2164231.jpg',
        // 'http://img.daimg.com/uploads/allimg/190628/1-1Z62R30555.jpg',
        // 'http://img.daimg.com/uploads/allimg/190711/1-1ZG1002105.jpg',
        // 'http://img.daimg.com/uploads/allimg/190711/1-1ZG11IZ6.jpg',
        // 'http://img.daimg.com/uploads/allimg/190711/1-1ZG11H912.jpg',
        // 'http://img.daimg.com/uploads/allimg/190711/1-1ZG11FH5.jpg',
        // 'http://img.daimg.com/uploads/allimg/190711/1-1ZG1143T7.jpg',
        // 'https://cdn.dribbble.com/assets/art-banners/twisted-511f83427b2e298f5859b4a101073a4e05f7cd89f974cd103278640390a3599a.gif',
        // 'https://cdn.dribbble.com/users/2894633/screenshots/6785772/pottery_4x.jpg',
        // 'https://cdn.dribbble.com/users/1227650/screenshots/6784592/accord_4x.jpg',
        'http://5b0988e595225.cdn.sohucs.com/images/20181018/97462eff99e54516aaba48461edfe8f5.jpeg?20191',
        'http://5b0988e595225.cdn.sohucs.com/images/20181018/97462eff99e54516aaba48461edfe8f5.jpeg?20192',
        'http://5b0988e595225.cdn.sohucs.com/images/20181018/97462eff99e54516aaba48461edfe8f5.jpeg?20193',
        'http://5b0988e595225.cdn.sohucs.com/images/20181018/97462eff99e54516aaba48461edfe8f5.jpeg?20194',
        'http://5b0988e595225.cdn.sohucs.com/images/20181018/97462eff99e54516aaba48461edfe8f5.jpeg?20195',
        'http://5b0988e595225.cdn.sohucs.com/images/20181018/97462eff99e54516aaba48461edfe8f5.jpeg?20196',
        'http://5b0988e595225.cdn.sohucs.com/images/20181018/97462eff99e54516aaba48461edfe8f5.jpeg?20197',
        'http://5b0988e595225.cdn.sohucs.com/images/20181018/97462eff99e54516aaba48461edfe8f5.jpeg?20198',
        'http://5b0988e595225.cdn.sohucs.com/images/20181018/97462eff99e54516aaba48461edfe8f5.jpeg?20199',
        'http://5b0988e595225.cdn.sohucs.com/images/20181018/97462eff99e54516aaba48461edfe8f5.jpeg?201910',
        'http://5b0988e595225.cdn.sohucs.com/images/20181018/97462eff99e54516aaba48461edfe8f5.jpeg?201911',
        'http://5b0988e595225.cdn.sohucs.com/images/20181018/97462eff99e54516aaba48461edfe8f5.jpeg?201912',
        'http://5b0988e595225.cdn.sohucs.com/images/20181018/97462eff99e54516aaba48461edfe8f5.jpeg?201913',
        'http://5b0988e595225.cdn.sohucs.com/images/20181018/97462eff99e54516aaba48461edfe8f5.jpeg?201914',
        'http://5b0988e595225.cdn.sohucs.com/images/20181018/97462eff99e54516aaba48461edfe8f5.jpeg?201915',
        'http://5b0988e595225.cdn.sohucs.com/images/20181018/97462eff99e54516aaba48461edfe8f5.jpeg?201916',
        'http://5b0988e595225.cdn.sohucs.com/images/20181018/97462eff99e54516aaba48461edfe8f5.jpeg?201917',
        'http://5b0988e595225.cdn.sohucs.com/images/20181018/97462eff99e54516aaba48461edfe8f5.jpeg?201918',
        'http://5b0988e595225.cdn.sohucs.com/images/20181018/97462eff99e54516aaba48461edfe8f5.jpeg?201919',
        'http://5b0988e595225.cdn.sohucs.com/images/20181018/97462eff99e54516aaba48461edfe8f5.jpeg?201920',
        'http://5b0988e595225.cdn.sohucs.com/images/20181018/97462eff99e54516aaba48461edfe8f5.jpeg?201921'
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
