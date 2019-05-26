# linaUi
一个轻量的UI框架

# demo page
[在线demo page预览][1]

# 安装
```bash
npm i lina-ui -S
yarn add lina-ui
```

# 引入
```javascript
/** 引入 */
import linaUi from 'lina-ui'
import 'lina-ui/dist/lina-ui.min.css'

Vue.use(linaUi)
```

# 组件
## 类型：操作反馈
### Toast
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

### Loading
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

    this.$loading.hide() // 隐藏
  }
}
```

### Dialog
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

> 标签式写法

+ 标签式demo1

```html
<Dialog :dialog="dialog">
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
</Dialog>
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
<Dialog :dialog="ruleDialog">
    <!-- 自定义内容 -->
    <div class="rules">
    <p>1 活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则</p>
    <p>2 活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则</p>
    <p>3 活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则</p>
    <p>4 活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则</p>
    <p>4 活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则</p>
    <p>4 活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则</p>
    </div>
</Dialog>
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
### Popup （BETA，尽量别用，还在尝试如何变得精炼实用）
> 基本用法

```html
<!-- 自定义 -->
<Popup :isShow.sync="isShow1" :isHideClose="isHideClose1" :preventMaskClose="preventMaskClose1" :closeCallBack="() => {this.isShow1 = !this.isShow1}">
  <p style="color: #fff;">这是一个Popup，空空如也</p>
</Popup>
<!-- :closeCallBack 传递回调 -->
<Popup :isShow.sync="isShow2" :closeCallBack="handle2CloseCallBack">
    <p style="color: #fff;">这是一个Popup，关闭之前有事件</p>
</Popup>
<!-- @closeCallBack 触发回调 -->
<Popup :isShow.sync="isShow2" @closeCallBack="handle2CloseCallBack">
  <p style="color: #fff;">这是一个Popup，关闭之前有事件</p>
</Popup>
<!-- preventMaskClose 禁止点击蒙层关闭popup -->
<Popup :isShow.sync="isShow1" :preventMaskClose="preventMaskClose1" :closeCallBack="() => {this.isShow1 = !this.isShow1}">
  <p style="color: #fff;">这是一个Popup，空空如也</p>
</Popup>
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

### ActionSheet
> 基本用法

```html
<!-- demo1 普通用法 -->
<ActionSheet :menu-items="demo1.menuItems" :cancelText="demo1.cancelText" :isShow.sync="demo1.isShow" @choose="chooseItem"/>
<!-- demo2 加上取消文本，并添加关闭回调事件 -->
<ActionSheet :menu-items="demo2.menuItems" :cancelText="demo2.cancelText" :isShow.sync="demo2.isShow" @choose="chooseItem" @close="closeDemo2"/>
<!-- demo3 禁止点击蒙层关闭 -->
<ActionSheet :menu-items="demo3.menuItems" :cancelText="demo3.cancelText" :isShow.sync="demo3.isShow" @choose="chooseItem" :preventMaskClose="demo3.preventMaskClose"/>
<!-- demo4 高亮已选项 -->
<ActionSheet :menu-items="demo4.menuItems" :cancelText="demo4.cancelText" :isShow.sync="demo4.isShow" @choose="chooseItemDemo4" :chooseTagValue="demo4.choose"/>
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

[1]: https://guanlinwu.github.io/lina-ui/dist/index.html#/index