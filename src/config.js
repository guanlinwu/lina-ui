/**
 * packagesTypes => { 组件分类列表
    typeName: '操作反馈', // 名称 【*必须】
    typeEnName: 'operate feedback' // 英文 【*必须】
 * }
 *
 *  packages => { 组件列表
      'version': '1.0.0', // 版本
      'name': 'Toast', // 组件名称 【*必须】
      'chnName': '吐司', // 组件中文名 【*必须】
      'desc': '轻提示。', // 组件描述 【*必须】
      'type': 'method', // 组件类型，method | component 【*必须】
      'belong': 'operate feedback', // 组件所属大类，operate feedback（操作反馈） 【*必须】
      'author': ['lin'] // 作者
    },
 */
export default {
  packagesTypes: [ // 组件分类列表
    {
      typeName: '操作反馈', // 名称
      typeEnName: 'operate feedback' // 英文
    },
    {
      typeName: '视图组件', // 名称
      typeEnName: 'view component' // 英文
    },
    {
      typeName: '通用函数', // 名称
      typeEnName: 'general function' // 英文
    }
  ],
  packages: [ // 组件列表
    {
      'version': '1.0.0',
      'name': 'Toast',
      'chnName': '轻提示',
      'desc': '轻提示。',
      'type': 'method',
      'belong': 'operate feedback',
      'author': ['lin']
    },
    {
      'version': '1.0.0',
      'name': 'Loading',
      'chnName': '加载圈',
      'desc': 'loading',
      'type': 'method',
      'belong': 'operate feedback',
      'author': ['lin']
    },
    {
      'version': '1.0.1',
      'name': 'Dialog',
      'chnName': '对话框',
      'desc': 'Dialog',
      'type': 'method|component',
      'belong': 'operate feedback',
      'author': ['lin']
    },
    {
      'version': '1.0.0',
      'name': 'ActionSheet',
      'chnName': '动作面板',
      'desc': 'ActionSheet',
      'type': 'component',
      'belong': 'operate feedback',
      'author': ['lin']
    },
    {
      'version': '1.0.0',
      'name': 'Popup',
      'chnName': '弹出蒙层',
      'desc': 'Popup',
      'type': 'component',
      'belong': 'operate feedback',
      'author': ['lin']
    },
    {
      'version': '1.0.0',
      'name': 'PopCurtain',
      'chnName': '广告图弹窗',
      'desc': 'PopCurtain',
      'type': 'component',
      'belong': 'view component',
      'author': ['lin']
    },
    {
      'version': '1.0.0',
      'name': 'PreLoad',
      'chnName': '预加载',
      'desc': 'PreLoad',
      'type': 'method',
      'belong': 'general function',
      'author': ['lin']
    },
    {
      'version': '1.0.0',
      'name': 'CarouselNotice',
      'chnName': '滚动公告',
      'desc': '滚动公告',
      'type': 'component',
      'belong': 'view component',
      'author': ['lin']
    }
  ]
}
