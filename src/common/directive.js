export default {
  install(Vue) {
    /***
     * 修复
     * ios12软键盘弹出顶起页面后，隐藏键盘页面不回弹，导致区域位置错位
     */
    Vue.directive('repairIos', {
      inserted: function (el) {
        if (!(window.sys == 'iPhone')) {
          return
        }
        el._reset_scroll = () => {
          let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
          window.scrollTo(0, Math.max(scrollTop - 1, 0))
        }
        el.addEventListener('blur', el._reset_scroll)
      },
      unbind: function(el) {
        el.removeEventListener('blur', el._reset_scroll)
        delete el._reset_scroll
      }
    })
  }
}
