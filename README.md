# 使用说明 #
本插件适用于vue项目

## 第一步 ##
在main.js中引入插件
```
import { qtglBtnControl } from 'canvas-jssdk'
Vue.use(qtglBtnControl)
```

## 第二步 ##
在合适的时机注入权限表
```
import { qtglPermissionRegist } from 'canvas-jssdk'
qtglPermissionRegist(PERMISSION-TABLE)

// PERMISSION-TABLE 格式应为：[{name: 'BUTTON-ID'},...]
```

## 第三步 ##
使用自定义属性'data-visible-permission',在需要的标签上进行控制
```
<div class="card weather" data-visible-permission="BUTTON-ID"></div>
// 根据 "BUTTON-ID" 在权限表中进行比对，有则显示，无则隐藏
```