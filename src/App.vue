<template>
  <div id="app">
    <router-view
      :key="$route.fullPath"
      class="app-view">
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      navActionSheet: {
        isShow: false,
        cancelTxt: '取消',
        menuItems: [
          {
            'name': '百度地图',
            'value': 'baidu'
          },
          {
            'name': '高德地图',
            'value': 'gaode'
          },
          {
            'name': '腾讯地图',
            'value': 'tengxun'
          }
        ]
      }
    }
  },
  async created () {
  }
}
</script>

<style lang="scss">
  html {
    max-width: 750px;
    margin: 0 auto;
    background: #f6f6f6;
  }
  // 公共
  .demo-list-box {
    margin: 30px auto;
    width: 95%;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;

    &.e-unfold {
      .type .icon-arrow {
        transform: rotate(180deg);
      }
      .demo-list {
        display: block;
      }
    }

    .type {
      position: relative;
      margin: 0;
      padding: 0 30px;
      height: 100px;
      font-size: 28px;
      color: #000;
      font-weight: 600;
      line-height: 100px;

      .icon-arrow {
        position: absolute;
        right: 30px;
        top: 50%;
        margin-top: -10px;
        height: 20px;
        width: 20px;
        transform: rotate(0deg);
        background: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23848484' viewBox='0 0 30 11'%3E%3Cpath d='M15 7.757L27.737.21a1.5 1.5 0 0 1 1.53 2.58c-4.5 2.668-9 5.334-13.5 8a1.503 1.503 0 0 1-1.53 0c-4.5-2.666-9-5.332-13.5-8A1.5 1.5 0 1 1 2.266.21C6.51 2.726 10.756 5.24 15 7.757' fill-rule='evenodd'/%3E%3C/svg%3E") no-repeat 50%;
        background-size: contain;
        transition: transform .5s;
      }
    }

    .demo-list {
      display: none;
      padding: 0 10px;
      .demo-list-item {
        margin: 0 20px;
        height: 90px;
        font-size: 0;
        border-top: 1Px solid #edeef1;
        border-radius: 4px;
        background: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11 30'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M-11 0h30v30h-30z'/%3E%3Cpath d='M7.757 15C5.241 10.755 2.727 6.51.21 2.266A1.5 1.5 0 0 1 2.79.736l8 13.499c.28.472.28 1.058 0 1.53l-8 13.5a1.499 1.499 0 1 1-2.58-1.53L7.757 15z' fill='%23848484'/%3E%3C/g%3E%3C/svg%3E") no-repeat right 10px center;
        background-size: 20px 20px;
        overflow: hidden;

        .router-link {
          display: block;
          font-size: 24px;
          font-weight: 400;
          line-height: 90px;
          color: #282828;

          &:active {
            color: #000;
            font-weight: 600;
          }
        }
      }
    }
  }
</style>
