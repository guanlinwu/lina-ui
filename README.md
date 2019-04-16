# linaUi
一个UI框架

# 组件
## 类型：操作反馈
### Toast
- 基本用法
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
- 在非vue的js文件引入
```javascript
import linaUi from './index'

linaUi.Toast({
      message: '开启loading',
      duration: 1500
    })
```

### Loading
- 基本用法
```javascript
export default {
  mounted() {
    this.$loading.show() // 显示
    this.$loading.hide() // 隐藏
  }
}
```

### Dialog
- 基本用法
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
- ID

同一个页面中，id相同的Dialog的DOM只会同时存在一个，不指定id时，id的默认值为dialog-default-id。

```javascript
this.$dialog({
    id: 'my-dialog'
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
- 隐藏底部按钮

有时候需要一些不能关闭的弹窗
```javascript
this.$dialog({
    id: 'my-dialog'
    title: '标题',
    message: '内容',
    isShowFooter: false
})
```
- 一个按钮
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
- 事件
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
- 标签式写法
```html
<Dialog :dialog="dialog">
    <h3>我是弹窗里面的内容</h3>
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