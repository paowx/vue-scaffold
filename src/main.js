// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import store from './vuex/store'
import API from './common/api.js'
import http from './common/http.js'
import directive from './common/directive'
import utils from './common/utils'
import MescrollVue from 'mescroll.js/mescroll.vue'
import 'mescroll.js/mescroll.min.css'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import vueAlloyTouch from 'alloytouch/vue/alloy_touch.vue'

import './assets/css/common.scss'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(vueAlloyTouch)
Vue.use(MintUI)
Vue.use(MescrollVue)
// 设置api为全局变量
Vue.use(API)
Vue.use(http)
// 自定义directive
Vue.use(directive)
// 把工具函数定义为全局
Vue.prototype.utils = utils


/**
 * 微信分享
 * @param title
 * @param desc
 * @param link
 * @param imgUrl
 * @private
 */
const __setShare = function (title, desc, link, imgUrl) {
  /* eslint-disable no-undef */
  wx.ready(function () {
    wx.onMenuShareAppMessage({
      title: title, // 分享标题
      desc: desc, // 分享描述
      link: link, // 分享链接
      imgUrl: imgUrl, // 分享图标
      type: '', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: function () {
        // 用户确认分享后执行的回调函数
        Toast('分享成功')
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
        // Toast('分享取消')
      }
    })
    wx.onMenuShareTimeline({
      title: title, // 分享标题
      link: link, // 分享链接
      imgUrl: imgUrl, // 分享图标
      success: function () {
        // 用户确认分享后执行的回调函数
        Toast('分享成功')
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    })
    wx.onMenuShareQQ({
      title: title, // 分享标题
      desc: desc, // 分享描述
      link: link, // 分享链接
      imgUrl: imgUrl, // 分享图标
      success: function () {
        // 用户确认分享后执行的回调函数
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    })
    wx.onMenuShareWeibo({
      title: title, // 分享标题
      desc: desc, // 分享描述
      link: link, // 分享链接
      imgUrl: imgUrl, // 分享图标
      success: function () {
        // 用户确认分享后执行的回调函数
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    })
    wx.onMenuShareQZone({
      title: title, // 分享标题
      desc: desc, // 分享描述
      link: link, // 分享链接
      imgUrl: imgUrl, // 分享图标
      success: function () {
        // 用户确认分享后执行的回调函数
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    })
  })
  /* eslint-enable no-undef */
}

window.setShare = __setShare

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    // this.getSign()
  },
  methods: {
    getSign () {
      let url = location.href.split('#')[0]
      this.httpGet(this.API.getSignPackage, { url: url }).then((res) => {
        if (res) {
          let data = res.data
          /* eslint-disable no-undef */
          wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: data.appId,
            timestamp: data.timestamp,
            nonceStr: data.nonceStr,
            signature: data.signature,
            jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone', 'hideMenuItems', 'chooseWXPay'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
          })
          wx.error(function (error) {
            // Toast('jssdk error:' + res.errMsg)
            console.log(error)
          })
        }
      })
    },
    setShare (title, desc, link, imgUrl) {
      __setShare(title, desc, link, imgUrl)
    }
  }
})
