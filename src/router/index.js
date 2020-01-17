import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
const Demo = () => import('@/components/Demo')
const List = () => import('@/components/list/list')
const modalTest = () => import('@/components/modalTest')
const luckDraw = () => import('@/components/luckDraw')
const loadMore = () => import('@/components/loadMore')
const mescroll = () => import('@/components/mescroll')
const textAllShow = () => import('@/components/textAllShow')
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/',
      name: 'Demo',
      component: Demo,
      meta: { title: 'vue scaffold', keepLive: true }
    },
    { path: '/list',
      name: 'List',
      component: List,
      meta: { title: 'vue scaffold', keepLive: true }
    },
    {
      path: '/modalTest',
      name: 'modalTest',
      component: modalTest,
      meta: { title: 'modal滚动穿透问题的解决方案', keepLive: false }
    },
    {
      path: '/luckDraw',
      name: 'luckDraw',
      component: luckDraw,
      meta: { title: '抽奖活动', keepLive: false }
    },
    {
      path: '/loadMore',
      name: 'loadMore',
      component: loadMore,
      meta: { title: '无限加载', keepLive: false }
    },
    {
      path: '/mescroll',
      name: 'mescroll',
      component: mescroll,
      meta: { title: '无限加载', keepLive: false }
    },
    {
      path: '/textAllShow',
      name: 'textAllShow',
      component: textAllShow,
      meta: { title: '查看全部-收起', keepLive: false }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'vue scaffold'
  let shareTit = '房知了-买房有疑问？来问就知了！'
  let shareDesc = '汇集地产界十几年经验专业大咖，不管买房卖房投资还是贷款，不懂就来问吧。'
  let shareLink = location.href.split('#')[0]
  let shareImgUrl = location.protocol + '//' + location.hostname + '/weixin_public/static/images/shareLogo.jpg'
  window.setShare(shareTit, shareDesc, shareLink, shareImgUrl)
  next()
})

router.afterEach(route => {
})

export default router
