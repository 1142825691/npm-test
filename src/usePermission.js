let btnControl = {};
btnControl.install = function (Vue) {
  // 混入式控制
  Vue.mixin({
    mounted: function () {
      let nodeList = document.querySelectorAll('[data-visible-permission]');
      if (nodeList && nodeList.length > 0) {
        nodeList.forEach(item => {
          if (!Vue.prototype.$_has(item.dataset['visiblePermission'])) {
            item.parentNode.removeChild(item);
          } else {
            item.removeAttribute('data-visible-permission')
          }
        })
      }
    }
  })

  // 全局指令 v-visible-permission
  Vue.directive('visible-permission', {
    inserted: function(el, inserted) {
      if (!Vue.prototype.$_has(inserted.value)) {
        el.parentNode.removeChild(el);
      }
    }
  });
  // 全局方法$_has判断是否有权限
  Vue.prototype.$_has = function(value) {
    let isExist=false;
    let buttonpermsStr=sessionStorage.getItem("canvas-button-premissions");
    if(buttonpermsStr==undefined || buttonpermsStr==null){
      console.log('button permissions are not registed yet')
      return false;
    }
    let buttonperms=JSON.parse(buttonpermsStr);
    for(let i=0;i<buttonperms.length;i++){
      if(buttonperms[i].name == value){
        isExist=true;
        break;
      }
    }
    return isExist
  }
}

export default btnControl