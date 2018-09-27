import moment from 'moment'
import store from '../vuex/store'
export default {
  formatDate: (date, format) => {
    let oldDate = null
    let newDate = null

    if (date instanceof Date) {
      oldDate = date
    }

    // 如果是字符串 ，则转换为date对象
    if ((typeof date === 'string') || (typeof date === 'number')) {
      oldDate = new Date(date)
    } else {
    }

    let year = oldDate.getFullYear()
    let month = oldDate.getMonth() + 1
    let day = oldDate.getDate()

    switch (format) {
      case 'yyyy-MM-dd':
        newDate = year + '-' + month + '-' + day
        break
      case 'yyyy/MM/dd':
        newDate = year + '/' + month + '/' + day
        break
      default:
        newDate = year + '-' + month + '-' + day
    }
    return newDate
  },
  /**
   * 处理图片
   * @param url
   * @returns {*}
   */
  handleImg: (url) => {
    let newUrl = null
    let host = 'http://' + location.hostname + '/'
    if (url && url.indexOf(host) < 0) {
      newUrl = host + url
    }
    return newUrl
  },
  /**
   * 格式化金钱
   * @param url
   * @returns {*}
   */
  formatMoney: (money) => {
    if (money != '' && money != null && money != undefined) {
      return parseFloat(money).toFixed(2)
    }
  },
  /**
   * js 实现几分钟前，几小时前
   * @param dateTimeStamp
   * @returns {*}
   */
  formatDateDiff: (dateTimeStamp) => {
    let minute = 60 // 时间戳是10位，
    // let minute = 1000 * 60 // 时间戳是13位，
    let hour = minute * 60
    let day = hour * 24
    let month = day * 31
    let year = 12 * month
    let now = Math.round(new Date().getTime() / 1000) // 时间戳是十位
    // let now = (new Date().getTime() //时间戳是13位
    let diffValue = now - dateTimeStamp
    let dayy = moment.unix(dateTimeStamp)
    let result = null
    if (diffValue < 0) {
      return false
    }
    let yearC = diffValue / year
    let monthC = diffValue / month
    let weekC = diffValue / (7 * day)
    let dayC = diffValue / day
    let hourC = diffValue / hour
    let minC = diffValue / minute
    if (minC < 1) {
      result = '刚刚'
    } else if (minC >= 1 && minC < 60) {
      result = '' + parseInt(minC) + '分钟前'
    } else if (hourC >= 1 && hourC < 24) {
      result = '' + parseInt(hourC) + '小时前'
    } else if (dayC >= 1 && dayC < 31) {
      result = '' + parseInt(dayC) + '天前'
      // result = moment(dayy).format('YYYY-MM-DD')
    } else if (monthC >= 1 && monthC < 12) {
      result = '' + parseInt(monthC) + '个月前'
    } else if (yearC >= 1) {
      result = '' + parseInt(yearC) + '年前'
    }
    return result
  },
  /**
   * 处理某些 从不同页面进入或者返回该页面，对该页是否需要进行定位处理的操作
   * （eg: 从专家列表页或首页进入专家详情页，专家详情页不需要进行定位处理，但是在专家详情页点击了回答的问题，进入问题详情页再返回专家详情页时，是需要定位专家详情页的）
   * @param to
   * @param from
   */
  handleKeepTransY: (to, from) => {
    if (to.name === 'expertDetail' && from.name === 'detail') {
      /* console.log(store.state.expertDetailTransY) */
    } else {
      store.commit('setExpertDetailTransY', 0)
      // console.log(store.state.expertDetailTransY)
    }
  },
  setLocalStorage: (obj) => {
    window.localStorage[obj] = JSON.stringify(obj)
  },
  getLocalStorage: (obj) => {
    return JSON.parse(localStorage[obj])
  }
}
