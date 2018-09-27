export default{
  install(Vue, options) {
    Vue.prototype.API = {
      getSignPackage: 'weixin/Weixin/getSignPackage'

    }
  }
}
