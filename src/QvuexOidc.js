/* 
  功能：根据当前运行环境指定的oidc
        子应用：qiankun环境返回父级oidc，独立运行直接返回jssdk的oidc
        主应用：直接返回jssdk的oidc,并将oidc放到window变量中
*/
import * as vuexOidc from 'vuex-oidc'
let QvuexOidc;
if (window.__POWERED_BY_QIANKUN__) {
    QvuexOidc = window.proxy.QvuexOidc;
} else {
    QvuexOidc = vuexOidc;
    window.QvuexOidc = vuexOidc;
}

export default QvuexOidc;

/* 
*  功能：兼容应用使用自身版本oidc，
*  用法：主应用在main.js调用此方法
*  参数：
        oidcModel：主应用自身的oidc依赖
*/

export const transmitVuexOidc = (oidcModel) => {
    window.QvuexOidc = oidcModel;
}

recursion(items, parentNameList) {
    items.map((it, index) => {
        parentNameList.map((item) => {
            if (it.path === item) {
                let children = it.children;
                items.splice(index, 1);
                items.push(...children);
            }
        });
        if (it.children && it.children.length) {
            this.recursion2(it.children, parentNameList)
        }
    });
}
/*
 *  @fun qiankun模式下剥离router选择的父级,非qiankun模式下不做处理
 *  @param router:array 原始router
 *  @param nameList:array  要剥离的父级路由名称数组
 *  return  处理完成后的router
 */
handleSunRouter(router, parentNameList) {
    if (window.__POWERED_BY_QIANKUN__) {
        this.recursion2(router, parentNameList);
    }
    return router;
}