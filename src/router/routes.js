export default [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: '首页',
    component: function (resolve) {
      require(['@/views/index'], resolve)
    },
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/demo',
    name: '示例',
    component: function (resolve) {
      require(['@/views/demo-total'], resolve)
    },
    children: [
      {
        path: 'Toast',
        component: function (resolve) {
          require(['@/packages/Toast/demo'], resolve)
        }
      },
      {
        path: 'Loading',
        component: function (resolve) {
          require(['@/packages/Loading/demo'], resolve)
        }
      },
      {
        path: 'Dialog',
        component: function (resolve) {
          require(['@/packages/Dialog/demo'], resolve)
        }
      }
    ],
    meta: {
      keepAlive: false
    }
  }
]
