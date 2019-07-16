import config from '@/config'

let demoChildrenRoutes = [] // demo路由

config.packages.map(item => {
  const name = item.name

  demoChildrenRoutes.push(
    {
      path: name,
      component: function (resolve) {
        require([`@/packages/${name}/demo`], resolve)
      }
    }
  )
})

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
      ...demoChildrenRoutes
    ],
    meta: {
      keepAlive: false
    }
  }
]
