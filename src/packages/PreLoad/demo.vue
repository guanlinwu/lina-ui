<template>
  <div class="page-demo-actionsheet">
    <div class="demo-list-box e-unfold">
      <h4 class="type">基本用法</h4>
      <ul class="demo-list">
        <li class="demo-list-item">
          <a @click="handle1" class="router-link">预加载图片</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo-actionsheet',
  data () {
    return {
    }
  },
  methods: {
    async handle1 () {
      let self = this
      self.$loading.show()
      await this.$preload.loadImgs({
        urls: [
          'http://img.daimg.com/uploads/allimg/190716/1-1ZG6160132.jpg',
          'http://img.daimg.com/uploads/allimg/190712/1-1ZG2164231.jpg',
          'http://img.daimg.com/uploads/allimg/190628/1-1Z62R30555.jpg',
          'http://img.daimg.com/uploads/allimg/190711/1-1ZG1002105.jpg',
          'http://img.daimg.com/uploads/allimg/190711/1-1ZG11IZ6.jpg',
          'http://img.daimg.com/uploads/allimg/190711/1-1ZG11H912.jpg',
          'http://img.daimg.com/uploads/allimg/190711/1-1ZG11FH5.jpg',
          'http://img.daimg.com/uploads/allimg/190711/1-1ZG1143T7.jpg',
          'https://cdn.dribbble.com/assets/art-banners/twisted-511f83427b2e298f5859b4a101073a4e05f7cd89f974cd103278640390a3599a.gif',
          'https://cdn.dribbble.com/users/2894633/screenshots/6785772/pottery_4x.jpg',
          'https://cdn.dribbble.com/users/1227650/screenshots/6784592/accord_4x.jpg'
        ],
        eachLoadFunc (percent) {
          console.log(percent)
          self.$loading.setMessage(percent)
        },
        callback () {
          self.$toast('加载完毕')
        }
      })
      self.$loading.hide()
    }
  }
}
</script>

<style lang="scss" scoped>
.page-demo-actionsheet {
}
</style>
