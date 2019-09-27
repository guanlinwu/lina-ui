# Changelog

### Features
+ 添加新组件 Picker，选择器
+ 添加新组件 DatetimePicker，时间选择器

## 0.0.32 (2019-09-02)

### Features
+ 命名空间添加
  + 样式前缀植入lina-
  + 挂载在dom上的vue组件前缀植入lina-，被修改名称的组件有：
    - Dialog => lina-dialog
    - Popup => lina-popup
    - ActionSheet => lina-action-sheet
    - PullRefresh => lina-pull-refresh
    - PopCurtain => lina-pop-curtain
    - CarouselNotice => lina-carousel-notice
    - demo如下:
    ```javascript
    <Dialog /> // 摒弃
    <lina-dialog /> // 新写法
    ```


## 0.0.31 (2019-09-02)

### Bug Fixes
+ 修复Toast的引用问题
```javascript
// 修复以下方式引用失败的bug
import linaUi from 'lina-ui'
const Toast = linaUi.Toast
```

## 0.0.30 (2019-08-27)

### Bug Fixes
+ none

### Features
+ 添加新组件 PullRefresh，下拉刷新

## 0.0.29 (2019-08-16)

### Bug Fixes
+ 修复CarouselNotice(轮播公告组件)的tag边框在某些设备下无法显示的bug

## 0.0.28 (2019-08-16)

### Bug Fixes
+ none

### Features
+ 弹窗组件Dialog 添加主题theme属性，可选'gold'
+ 添加新组件 CarouselNotice，轮播公告组件

## 0.0.27 (2019-07-29)

### Bug Fixes
+ none

### Features
+ 添加新组件 PopCurtain
