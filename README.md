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
import linaUi from './index'

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



[1]: https://guanlinwu.github.io/lina-ui/dist/index.html#/index