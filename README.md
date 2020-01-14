# linaUi
+ 一个轻量的UI框架
+ 配合[@linahome/cli（lina指令）](https://www.npmjs.com/package/@linahome/cli)，可以把指定的ui组件拉取下来，进行二次开发。

# demo page
[在线demo page预览][1]

# 安装
```bash
npm i lina-ui -S
yarn add lina-ui
```

# 更新日志
[CHANGELOG](https://github.com/guanlinwu/lina-ui/blob/master/CHANGELOG.md)

# issues
[issues](https://github.com/guanlinwu/lina-ui/issues)

# 引入
```javascript
/** 引入 */
import linaUi from 'lina-ui'
import 'lina-ui/dist/lina-ui.min.css'

Vue.use(linaUi)
```
# 组件
## 类型：操作反馈
## <font color=#cf3e8e>Toast</font>
> 基本用法
```javascript
export default {
  mounted() {
    this.$toast('提示信息')
    this.$toast({
        message: '提示信息',
        duration: 3000 // 时长
    })
  }
}
```
> 在非vue的js文件引入
```javascript
import linaUi from 'lina-ui'

linaUi.Toast({
    message: '开启loading',
    duration: 1500
})
```

> API

| 名称        | 说明   |  类型  | 默认值 |
| --------   | -----:  | :----:  | :----:  |
| option        |    如果为Object，则分option.duration和option.message，如果是String，则为option.message	    |  String | Object  | 无 |
| option.duration	     | 展示时长（毫秒） |   Number	  | 2000 |
| option.message        |   文案	   |   String   | 无 |


## <font color=#cf3e8e>Loading</font>
> 基本用法
```javascript
export default {
  mounted() {
    this.$loading.show() // 显示
    this.$loading.show('信息上传中') // 自定义文案
    this.$loading.show({
        message: '信息上传中'
    }) // 自定义文案
    this.$loading.show({
        isHideMessage: false
    }) // 隐藏文本提示
    this.$loading.setMessage('自定义文本') // 该方法可以设置显示中的loading的文案
    this.$loading.hide() // 隐藏
  }
}
```

> API

| 名称        | 说明   |  类型  | 默认值 |
| --------   | -----:  | :----:  | :----:  |
| option        |    如果为Object，则分option.duration和option.message，如果是String，则为option.message	    |  String | Object  | 无 |
| option.isHideMessage	     | 是否隐藏文案 |   boolean	  | false |
| option.message        |   文案	   |   String   | 无 |

## <font color=#cf3e8e>Dialog</font>
> 基本用法
```javascript
this.$dialog({
    title: '标题',
    message: '内容',
    footer: { // 按钮的位置可以交换的，把confirm和cancel换下位置就好
        confirm: {
            text: '确认'
        },
        cancel: {
            text: '取消'
        }
    }
})
```
> ID

同一个页面中，id相同的Dialog的DOM只会同时存在一个，不指定id时，id的默认值为dialog-default-id。

```javascript
this.$dialog({
    id: 'my-dialog',
    title: '标题',
    message: '内容',
    footer: {
        confirm: {
            text: '确认'
        },
        cancel: {
            text: '取消'
        }
    }
})
```
> 隐藏底部按钮

有时候需要一些不能关闭的弹窗
```javascript
this.$dialog({
    id: 'my-dialog'
    title: '标题',
    message: '内容',
    isHideFooter: true
})
```
> 一个按钮
```javascript
this.$dialog({
    title: '标题',
    message: '内容',
    footer: {
        confirm: {
            text: '确认'
        }
    }
})
```
> 禁止点击蒙层关闭窗口
```javascript
this.$dialog({
    title: '提示',
    message: '你点蒙层是没反应的',
    preventMaskClose: true
})
```
> 事件
```javascript
this.$dialog({
    title: '标题',
    message: '内容',
    footer: {
        confirm: {
        text: '确认',
        callBack: function() {
                console.log('确认')
            } // 点击按钮的回调事件，自动关闭
        },
        cancel: {
        text: '取消',
        callBack: function () {
                console.log('取消')
            } // 点击按钮的回调事件，自动关闭
        }
    }
})
```

> 拓展的$confirm，返回promise（2019-05-08 新增）
```javascript
// 默认配置，按钮为双按钮，一个文本是确认，一个文本是取消
this.$dialog.$confirm({
  title: '提示',
  message: '此操作将永久删除该文件, 是否继续?'
}).then(() => {
  console.log('confirm')
}).catch((error) => {
  console.log(error) // error 为‘cancel-close’的时候，说明点击了取消按钮，为‘mask-close’的时候，说明点击了蒙层关闭
})
// 定制按钮
this.$dialog.$confirm({
  title: '提示',
  message: '此操作将永久删除该文件, 是否继续?',
  // preventMaskClose: true, // 禁用点击蒙层
  footer: {
    confirm: {
      text: '确定'
    },
    cancel: { // 隐藏其中一个就是单按钮了
      text: '取消'
    }
  }
}).then(() => {
  console.log('confirm')
}).catch((error) => {
  console.log(error)
})
// 什么，你要单按钮？你要禁用点击蒙层？那就结合上面的demo，可以配置
```
> 隐藏关闭按钮(isHideClose)
```javascript
  this.$dialog({
    title: '确定删除App？',
    message: '真的不考虑一下留着我吗，<br> 点击蒙层也是可以关闭弹窗',
    isHideClose: true,
    footer: {
      cancel: {
        text: '删除'
      },
      confirm: {
        text: '考虑'
      }
    }
  })
```

> 标签式写法

+ 标签式demo1

```html
<lina-dialog :dialog="dialog">
    <div slot="header">
        自定义头部
    </div>
    <div>
        自定义内容
    </div>
    <div>
        自定义内容
    </div>
    <div slot="footer">
        自定义按钮的dom以及事件
    </div>
</lina-dialog>
```
```javascript
export default {
  data() {
    return {
      dialog: {
        title: '标题',
        isShow: false,
        footer: {
            confirm: {
            text: '确认',
            callBack: function() {} //点击按钮的回调事件
            },
            cancel: {
            text: '取消',
            callBack: function () { }
            }
        }
      }
    }
  }
}
```
+ 标签式demo2

```html
<!-- 活动规则 -->
<lina-dialog :dialog="ruleDialog">
    <!-- 自定义内容 -->
    <div class="rules">
    <p>1 活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则</p>
    <p>2 活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则</p>
    <p>3 活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则</p>
    <p>4 活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则</p>
    <p>4 活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则</p>
    <p>4 活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则</p>
    </div>
</lina-dialog>
```
```javascript
export default {
  data() {
    return {
      ruleDialog: {
        id: 'rule-dialog',
        title: '活动规则',
        isShow: true,
        footer: {
          confirm: {
            text: '确定'
          }
        }
      }
    }
  }
}
```
```scss
.rules {
    text-align: left;
    font-size: 28px;
    font-weight: 400;
    color: #929292;
    line-height: 44px;
}
```

> API

| 名称        | 说明   |  类型  | 默认值 |
| --------   | -----:  | :----:  | :----:  |
| option.id	     | 标识符，相同者共享一个实例 |   String|Number		  | 无 |
| option.title	        |   标题	   |   String   | 无 |
| option.isShow	        |   是否显示弹窗	   |   Boolean   | false |
| option.isUnlimitedHeight	        |   内容高度超出，是否限制高度，设置滚动	   |   Boolean   | false |
| option.isHideFooter	        |   是否隐藏底部	   |   Boolean   | false |
| option.isHideClose	        |   是否右上角关闭按钮	   |   Boolean   | false |
| option.preventAutoClose	        |   是否禁止点击底部按钮后关闭窗口	   |   Boolean   | false |
| option.preventMaskClose	        |   是否禁止点击蒙层关闭窗口	   |   Boolean   | false |
| option.theme	        |   主题	   |   String   | 默认为空，可选'gold'金色主题 |
| option.footer	        |   底部按钮的配置	   |   Boolean   | false |
| option.footer.$name	        |   底部按钮, $name是一个对象，名称可以自定义,   |   Object   | 无 |
| option.footer.$name.text	        |   底部按钮的文本   |   String   | 无 |
| option.footer.$name.callBack        |   底部按钮的回调事件   |   Function   | 无 |

## <font color=#cf3e8e>Popup</font>
> 基本用法

```html
<!-- 自定义 -->
<lina-popup :isShow.sync="isShow1" :isHideClose="isHideClose1" :preventMaskClose="preventMaskClose1" :closeCallBack="() => {this.isShow1 = !this.isShow1}">
  <p style="color: #fff;">这是一个Popup，空空如也</p>
</lina-popup>
<!-- :closeCallBack 传递回调 -->
<lina-popup :isShow.sync="isShow2" :closeCallBack="handle2CloseCallBack">
    <p style="color: #fff;">这是一个Popup，关闭之前有事件</p>
</lina-popup>
<!-- @closeCallBack 触发回调 -->
<lina-popup :isShow.sync="isShow2" @closeCallBack="handle2CloseCallBack">
  <p style="color: #fff;">这是一个Popup，关闭之前有事件</p>
</lina-popup>
<!-- preventMaskClose 禁止点击蒙层关闭popup -->
<lina-popup :isShow.sync="isShow1" :preventMaskClose="preventMaskClose1" :closeCallBack="() => {this.isShow1 = !this.isShow1}">
  <p style="color: #fff;">这是一个Popup，空空如也</p>
</lina-popup>
```

```javascript
export default {
  data () {
    return {
      isShow1: false,
      isShow2: false,
      preventMaskClose1: false, // 是否禁止点击蒙层关闭popup
      isHideClose1: false // 是否显示close按钮
    }
  },
  methods: {
    handle1 () {
      this.isShow1 = !this.isShow1
    },
    handle2 () {
      this.isShow2 = !this.isShow2
    },
    handle2CloseCallBack () {
      alert('关闭Popup')
    }
  }
}
```

> Prop

| 名称        | 说明   |  类型  | 默认值 |
| --------   | -----:  | :----:  | :----:  |
| isShow     | 是否可见 |   Boolean  | false |
| isHideClose        |   关闭按钮可见	   |   Boolean   | true |
| preventMaskClose        |    是否点击mask蒙层关闭	    |  Boolean  | false |
| closeCallBack        |    关闭蒙层的回调事件	    |  Function  | 无 |


## <font color=#cf3e8e>ActionSheet</font>

> 基本用法

```html
<!-- demo1 普通用法 -->
<lina-action-sheet :menu-items="demo1.menuItems" :cancelText="demo1.cancelText" :isShow.sync="demo1.isShow" @choose="chooseItem"/>
<!-- demo2 加上取消文本，并添加关闭回调事件 -->
<lina-action-sheet :menu-items="demo2.menuItems" :cancelText="demo2.cancelText" :isShow.sync="demo2.isShow" @choose="chooseItem" @close="closeDemo2"/>
<!-- demo3 禁止点击蒙层关闭 -->
<lina-action-sheet :menu-items="demo3.menuItems" :cancelText="demo3.cancelText" :isShow.sync="demo3.isShow" @choose="chooseItem" :preventMaskClose="demo3.preventMaskClose"/>
<!-- demo4 高亮已选项 -->
<lina-action-sheet :menu-items="demo4.menuItems" :cancelText="demo4.cancelText" :isShow.sync="demo4.isShow" @choose="chooseItemDemo4" :chooseTagValue="demo4.choose"/>
```

```javascript
export default {
  data () {
    return {
      demo1: {
        isShow: false,
        menuItems: [
          {
            'name': '高德地图',
            'value': 0
          },
          {
            'name': '百度地图',
            'value': 1
          }
        ]
      },
      demo2: {
        isShow: false,
        cancelText: '取消',
        menuItems: [
          {
            'name': '高德地图',
            'value': 0
          },
          {
            'name': '百度地图',
            'value': 1
          }
        ]
      },
      demo3: {
        isShow: false,
        preventMaskClose: true,
        cancelText: '取消',
        menuItems: [
          {
            'name': '高德地图',
            'value': 0
          },
          {
            'name': '百度地图',
            'value': 1
          }
        ]
      },
      demo4: {
        choose: '请选择',
        cancelText: '取消',
        isShow: false,
        menuItems: [
          {
            'name': '高德地图',
            'value': 0
          },
          {
            'name': '百度地图',
            'value': 1
          }
        ]
      }
    }
  },
  methods: {
    handle1 () {
      this.demo1.isShow = true
    },
    chooseItem (item) {
      console.log(item)
    },
    handle2 () {
      this.demo2.isShow = true
    },
    closeDemo2 () {
      alert('您选择了关闭')
    },
    handle3 () {
      this.demo3.isShow = true
    },
    handle4 () {
      this.demo4.isShow = true
    },
    chooseItemDemo4 (item) {
      this.demo4.choose = item.name
    }
  }
}
```

> Prop

| 名称        | 说明   |  类型  | 默认值 |
| --------   | -----:  | :----:  | :----:  |
| isShow     | 是否可见 |   Boolean  | false |
| menuItems        |   列表选项	   |   Array   | [] |
| cancelTxt        |    取消文案,若传值，则显示取消文案    |  String  |无|
| preventMaskClose        |    是否点击mask蒙层关闭	    |  Boolean  | false |
| chooseTagValue        |    已选值，如果填写，高亮显示	    |  String  | 无 |

> Event

| 名称        | 说明   |  回调参数  |
| --------   | -----:  | :----:  |
| choose     | 选择之后触发	 |   选中列表项   |
| close	        |  关闭时触发	   |   无   |

## <font color=#cf3e8e>PullRefresh</font>

> 基本用法

```html
<lina-pull-refresh
  @refresh="refresh"
  v-bind="pullRefreshSetting"
>
  <div class="pull-content">
    <div class="demo-list-box e-unfold">
      <h4 class="type">基本用法</h4>
      <ul class="demo-list">
        <li class="demo-list-item">
          <a @click="handle1" class="router-link">设置下拉过程文案（pullingText）</a>
        </li>
        <li class="demo-list-item">
          <a @click="handle2" class="router-link">设置释放过程文案（loosingText）</a>
        </li>
        <li class="demo-list-item">
          <a @click="handle3" class="router-link">设置加载过程文案（loadingText）</a>
        </li>
      </ul>
    </div>
    <img src="https://dummyimage.com/600x1000/000/fff" alt="">
  </div>
</lina-pull-refresh>
```

```javascript
export default {
  name: 'demo-pull-refresh',
  data () {
    return {
      count: 0,
      pullRefreshSetting: {
      }
    }
  },
  methods: {
    refresh ({ done }) {
      this.count++
      this.$toast('刷新成功')
      setTimeout(() => {
        done() // 下拉刷新时触发，在refresh事件一定要执行done()，才能去除loading状态，用于下拉后等待请求
      }, 1000)
    },
    handle1 () {
      this.pullRefreshSetting.pullingText = '下拉下拉下拉快下拉'
      this.$toast('设置成功')
    },
    handle2 () {
      this.pullRefreshSetting.loosingText = '释放我，即可刷新刷新'
      this.$toast('设置成功')
    },
    handle3 () {
      this.pullRefreshSetting.loadingText = '加载中，请等待'
      this.$toast('设置成功')
    }
  }
}
```

> Prop

| 名称        | 说明   |  类型  | 默认值 |
| --------   | -----:  | :----:  | :----:  |
| headHeight     | 顶部内容高度 |   Number  | 50	 |
| pullingText        |    下拉过程文案	    |  String  | 下拉即可刷新... |
| loosingText        |    释放过程文案	    |  String  | 释放即可刷新... |
| loadingText        |    加载过程文案	    |  String  | 加载中... |
| disabled        |    是否禁用下拉刷新		    |  Boolean  | false |

> Event

| 名称        | 说明   |  回调参数  |
| --------   | -----:  | :----:  |
| refresh     | 下拉刷新时触发，在refresh事件一定要执行done()，才能去除loading状态，用于下拉后等待请求		 |   { done: done }    |

## 类型：视图组件

## <font color=#cf3e8e>PopCurtain</font>

> 基本用法

```html
<!-- 普通用法 -->
<lina-pop-curtain :dialog.sync="dialog1"/>
<!-- 内嵌slot -->
<lina-pop-curtain :dialog.sync="dialog2">
  <img style="width: 300px;" src="https://dummyimage.com/600x400/ff45ff/ffffff" alt="">
</lina-pop-curtain>
<!-- 设置关闭按钮 -->
<lina-pop-curtain :dialog.sync="dialog3" />
<!-- 监听点击幕帘内容事件 -->
<lina-pop-curtain :dialog.sync="dialog4" @clickCurtain="handleClickDialog" />
```

```javascript
export default {
  name: 'demo-popCurtain',
  data () {
    return {
      dialog1: {
        image: 'https://dummyimage.com/600x400/ff45ff/ffffff',
        isShow: false
      },
      dialog3: {
        image: 'https://dummyimage.com/600x400/ff45ff/ffffff',
        isShow: false
      },
      dialog2: {
        isShow: false
      },
      dialog4: {
        image: 'https://dummyimage.com/600x400/ff45ff/ffffff',
        link: 'http://www.baidu.com',
        isShow: false
      }
    }
  },
  methods: {
    handle1 () {
      this.dialog1.isShow = true
    },
    handle2 () {
      this.dialog2.isShow = true
    },
    handle3 () {
      this.dialog3.isShow = true
      this.dialog3.closeBtnPosition = 'top'
    },
    handle4 () {
      this.dialog4.isShow = true
    },
    handleClickDialog (dialog) {
      this.$toast('即将跳转链接')
      setTimeout(() => {
        window.location.href = dialog.link
      }, 2000)
    }
  }
}
```

> Prop

| 名称        | 说明   |  类型  | 默认值 |
| --------   | -----:  | :----:  | :----:  |
| dialog.isShow     | 是否可见 |   Boolean  | false |
| dialog.closeBtnPosition        |    关闭按钮位置，'top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right'	    |  Function  | ‘bottom’ |


## <font color=#cf3e8e>CarouselNotice</font>

> 基本用法

```html
<!-- 上下跑马灯 -->
<lina-carousel-notice :dataList="dataList" :isNeedHorizontal="false" :isShow="true"/>
<!-- 先左右再上下跑马灯（默认） -->
<lina-carousel-notice :dataList="dataList" :isShow="true"/>
<!-- 显示关闭按钮 -->
<lina-carousel-notice :dataList="dataList" :isShowClose="true" :isShow="true" @close="close3"/>
<!-- 设置横行滚动速度 -->
<lina-carousel-notice :dataList="dataList" :slideSpeed="100" :isShow="true"/>
<!-- 设置内容文本样式 -->
<lina-carousel-notice :dataList="dataList" :textStyle="textStyle" :isShow="true"/>
<!-- 设置外框样式 -->
<lina-carousel-notice :dataList="dataList" :boxStyle="boxStyle" :isShow="true"/>
```

```javascript
export default {
  name: 'demo-carouselNotice',
  data () {
    return {
      textStyle: { // 设置内容文本样式
        color: '#20aadf',
        fontWeight: 300
      },
      boxStyle: { // 设置外框样式
        height: '36px',
        borderRadius: '30px',
        opacity: 0.8,
        backgroundColor: '#0c0c0c'
      },
      dataList: [
        {
          id: 0,
          title: '这是轮播公告栏',
          tag: {
            title: '基础'
          }
        },
        {
          id: 1,
          title: '请注意，请注意，如果字数溢出，则先左右轮播，然后再上下轮播'
        },
        {
          id: 2,
          title: '被设置了tag的内容和颜色',
          tag: {
            title: '重点',
            borderColor: '#20aadf',
            color: '#20aadf'
          }
        }
      ],
      data1: {
      }
    }
  },
  methods: {
    close3 () {
      this.$toast('close, you can do something')
    }
  }
}
```

> Prop

| 名称        | 说明   |  类型  | 默认值 |
| --------   | -----:  | :----:  | :----:  |
| intervals     | 上下滚动的间隔时间，不包括左右滚动，ms为单位 |   Number  | 3000 |
| duration        |    上下动画过渡时间，ms为单位	    |  Number  | 500 |
| textStyle        |    文本内容样式	    |  Object  | - |
| boxStyle        |    外框内容样式	    |  Object  | - |
| dataList        |    数据	    |  Array  | - |
| dataList[index].tag     |    tag配置，demo: {title: 'tag文本',borderColor: '#20aadf',color: '#20aadf'}	    |  Object  | - |
| isShowClose        |    是否显示关闭按钮	    |  Boolean  | false |
| isNeedHorizontal        |    是否需要先横向滚动文字，滚动完毕纵向滚动	    |  Boolean  | true |
| slideSpeed        |    横向移动的速度 像素/s	    |  Number  | 50 |

> Event

| 名称        | 说明   |  回调参数  |
| --------   | -----:  | :----:  |
| click     | 点击每一条公告触发	 |   选中列表项   |
| close	        |  关闭时触发	   |   无   |


## <font color=#cf3e8e>Picker</font>

> 基本用法
```html
<!-- @change通讯 -->
<lina-picker :slots="slots1" @change="handleChange1"></lina-picker>
<!-- sync通讯 -->
<lina-picker :slots="slots2" :value.sync="value2"></lina-picker>
<!-- v-model通讯 -->
<lina-picker :slots="slots3" v-model="value3"></lina-picker>
<!-- 带按钮 -->
<lina-picker :slots="slots3" :head="true" @confirm="handleConfirm" @cance="handleCance"></lina-picker>
```

```javascript
export default {
  name: 'demo-pull-refresh',
  data () {
    return {
      slots1: [
        []
      ],
      value1: [],
      slots2: [
        {
          defaultIndex: 2, // 默认选中
          values: [
            {
              name: '猪妹',
              value: 1
            },
            {
              name: '火影忍者',
              value: 2
            },
            {
              name: '小明',
              value: 3
            },
            {
              name: '大厦',
              value: 4
            },
            {
              name: '大哥大',
              value: 5
            },
            {
              name: '我是谁',
              value: 6
            },
            {
              name: '阿打算',
              value: 7
            },
            {
              name: '阿达',
              value: 8
            }
          ]
        },
        [
          '阿萨德',
          '阿萨德12',
          '阿斯蒂芬',
          'v',
          '啊实打实的',
          '阿达',
          '阿斯顿发斯蒂芬',
          '12我去安慰',
          '阿三哥发',
          'SADFSF'
        ]
      ],
      value2: [],
      slots3: [],
      value3: [],
      value4: []
    }
  },
  created () {
    this.addSlots1()
    this.addSlots3()
  },
  methods: {
    addSlots1 () {
      for (let i = 0; i < 1000; i++) {
        this.slots1[0].push(i)
      }
    },
    handleChange1 (value) {
      this.value1 = value
    },
    // 异步添加
    addSlots3 () {
      this.$set(this.slots3, 0, [])
      for (let i = 0; i < 1000; i++) {
        this.slots3[0].push(i)
      }
      setTimeout(() => {
        this.$set(this.slots3, 1, [])
        for (let i = 0; i > -100; i--) {
          this.slots3[1].push(i)
        }
      }, 500)
      setTimeout(() => {
        this.$set(this.slots3, 2, [])
        for (let i = 100; i > 0; i--) {
          this.slots3[2].push(i)
        }
      }, 1000)
    },
    handleConfirm (value) {
      this.value4 = value
    },
    handleCance () {
      alert('取消')
    }
  }
}
```

> Prop

| 名称        | 说明   |  类型  | 默认值 |
| --------   | -----:  | :----:  | :----:  |
| slots     | slot 对象数组或数组数组 |   Array  | - |
| value        |    用来绑定sync或v-model	    |  any  | - |
| lineHeight        |    line-height	    |  String  | 34px |
| fontSize        |    font-size	    |  String  | 16px |
| head      |  是否出现头部按钮  | Boolean | false |
| cancelText | 取消按钮的文本 | String | 取消 |
| confirmText | 确认按钮的文本 | String | 确认 |
| cancelColor | 取消按钮的文本颜色 | String | - |
| confirmColor | 确认按钮的文本颜色 | String | - |

> Prop -> slots

slots数组对象得情况下

| 名称        | 说明   |  类型  | 默认值 |
| --------   | -----:  | :----:  | :----:  |
| values     | slot 的值对象数组或数组数组 |   Array  | - |
| defaultIndex        |    默认选中	    |  Number  | 0 |
| content        |    values是对象数组时，作为内容展示的key	    |  String  | name |

> slot
| 名称        | 说明   |
| --------   | -----:  |
| title     |  标题插槽 |

> Event

| 名称        | 说明   |  回调函数  |
| --------   | -----:  | :----:  |
| change     |  滚动停止的时候，并且值发生变化 | values(数组) |
| confirm     |  确认 | values(数组) |
| change     |  取消 | - |

## <font color=#cf3e8e>DatatimePicker</font>
> 一些事件、prop、slot请参考Picker

> 基本用法
```html
<!-- type：datetime（默认） -->
<lina-datetime-picker @confirm="handleConfirm1"></lina-datetime-picker>
<!-- type: date -->
<lina-datetime-picker type="date" @confirm="handleConfirm2"></lina-datetime-picker>
<!-- type: time -->
<lina-datetime-picker type="time" v-model="value3"></lina-datetime-picker>
```

```javascript
export default {
  name: 'dom-date-time',
  data () {
    return {
      value1: '',
      value2: '',
      value3: ''
    }
  },
  methods: {
    handleConfirm1 (values) {
      this.value1 = values
    },
    handleConfirm2 (values) {
      this.value2 = values
    },
    handleCance1 () {
      alert('取消')
    }
  }
}
```

> Prop

| 名称        | 说明   |  类型  | 默认值 |
| --------   | -----:  | :----:  | :----:  |
| type     | datetime、date、time | String | datetime |
| defaultDate | 默认选中得时间 |  Date  | - |
| minDate |  	 |  日期的最小可选值  | Date | 十年前的 1 月 1 日 |
| maxDate    |    日期的最大可选值	    |  Date  | 十年后的 12 月 31 日 |
| minHour      |  小时的最小可选值  | Number | 0 |
| maxHour | 小时的最打可选值 | Number | 23 |
| minMinute | 分钟的最小可选值 | Number | 0 |
| maxMinute | 分钟的最大可选值 | Number | 59 |
| filterData | 返回一个Array类型的原始数据，和一个时间戳，如果是time的话，则返回格式化的时间样式 | Function | - |
| yearFormat | 年份模板 | String | '{value}' |
| monthFormat | 	月份模板	 | String | '{value}' |
| dateFormat | 	日期模板 | String | '{value}' |
| hourFormat | 	小时模板 | String | '{value}' |
| minuteFormat | 分钟模板 | String | '{value}' |

## <font color=#cf3e8e>NavBar</font>

> 基本用法

```html
<!-- 普通用法 -->
<lina-nav-bar
  title="标题"
  leftText="返回"
  rightText="按钮"
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>

<lina-nav-bar
  title="标题"
  @click-left="onClickLeft"
/>
<!-- 内嵌slot -->
<lina-nav-bar
  @click-left="onClickLeft"
  @click-right="onClickRight"
  >
  <template v-slot:title>
    <h1 style="font-size: 20px;">自定义标题</h1>
  </template>
  <template v-slot:left>
    <h1 style="font-size: 14px;">自定义左边</h1>
  </template>
  <template v-slot:right>
    <h1 style="font-size: 14px;">自定义右边</h1>
  </template>
</lina-nav-bar>
```

```javascript
export default {
  name: 'demo-navbar',
  data () {
    return {

    }
  },
  methods: {
    handle1 () {
    },
    onClickLeft () {
      this.$toast('left')
    },
    onClickRight () {
      this.$toast('right')
    }
  }
}
```

> Prop

| 名称        | 说明   |  类型  | 默认值 |
| --------   | -----:  | :----:  | :----:  |
| title    | 标题	 |   String  |  |
| left-text	    | 左侧文案		 |   String  |  |
| right-text		    | 右侧文案		 |   String  |  |
| isHideLeftArrow		    | 是否隐藏左侧箭头			 |   Boolean  | false |
| zIndex			    | 元素 z-index				 |   Number  | 1 |

> Slots

| 名称        | 说明   |
| --------   | -----:  |
| title    | 自定义标题	 |
| left	    | 自定义左侧区域内容	 |
| right		    | 自定义右侧区域内容		 |

> Event

| 名称        | 说明   |  回调函数  |
| --------   | -----:  | :----:  |
| click-left	     |  点击左侧按钮时触发	 | - |
| click-right	     |  点击右侧按钮时触发	 | - |

## 类型：通用函数

## <font color=#cf3e8e>Preload</font>
> 图片预加载 this.$preload.loadImgs

```javascript
// 图片预加载 this.$preload.loadImgs
async handle1 () {
  let self = this
  self.$loading.show()
  /**
   * 预加载图片
   * @param {array | object} opts         如果opts是数组，则直接作为opts.urls处理
   * @param {array} opts.urls             图片链接
   * @param {function} opts.eachLoadFunc  每张图片加载完毕的回调，回调参数是percent（加载的百分数，1-100）
   * @param {function} opts.callback      所有图片加载完毕的回调
   * @param {function} opts.maxPercent    加载完毕后最大百分数,默认是100，需要设置的情形是，假如设置80，则先加载完成图片，百分数是80%，然后剩下20%，额外处理，例如加载视频或者其他东西
   * @returns Promise
   */
  await this.$preload.loadImgs({
    urls: [
      'http://img.daimg.com/uploads/allimg/190716/1-1ZG6160132.jpg',
      'http://img.daimg.com/uploads/allimg/190712/1-1ZG2164231.jpg',
      'http://img.daimg.com/uploads/allimg/190628/1-1Z62R30555.jpg',
      'http://qumi.inrice.top/carowner/images/zwlcr.jpg',
      'http://qumi.inrice.top/carowner/images/zhuzhuche.jpg',
      'http://img.daimg.com/uploads/allimg/190711/1-1ZG1002105.jpg',
      'http://img.daimg.com/uploads/allimg/190711/1-1ZG11IZ6.jpg',
      'http://img.daimg.com/uploads/allimg/190711/1-1ZG11H912.jpg',
      'http://img.daimg.com/uploads/allimg/190711/1-1ZG11FH5.jpg',
      'http://img.daimg.com/uploads/allimg/190711/1-1ZG1143T7.jpg',
      'https://cdn.dribbble.com/assets/art-banners/twisted-511f83427b2e298f5859b4a101073a4e05f7cd89f974cd103278640390a3599a.gif',
      'https://cdn.dribbble.com/users/2894633/screenshots/6785772/pottery_4x.jpg',
      'https://cdn.dribbble.com/users/1227650/screenshots/6784592/accord_4x.jpg'
    ],
    eachLoadFunc (percent) { // 每张图片加载完毕的回调，回调参数是percent（加载的百分数，1-100）
      console.log(percent)
      self.$loading.setMessage(percent)
    },
    callback () { // 所有图片加载完毕的回调
      self.$toast('加载完毕')
    }
  })
  self.$loading.hide()
}
```


[1]: https://guanlinwu.github.io/lina-ui/dist/index.html#/index