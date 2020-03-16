import axios from 'axios'
import { Toast } from 'mint-ui'
import Router from 'vue-router'

/**
 *  状态码
 */
const CODE = {
  SUCCESS: 200,
  ERROR: 400
}

/**
 * 请求类型
 * @type {{form: string, json: string}}
 */
const CONTENT_TYPES = {
  form: 'application/x-www-form-urlencoded',
  json: 'application/json;charset=UTF-8'
}

function checkStatus(res) {
  if (res.data && res.data.code === CODE.SUCCESS) {
    return res.data
  } else if (res.data.errcode === 2) {
    if (is_weixn()) {
      window.location.href = res.data.data
    } else {
      // let str = window.location.href
      // let toUrl = str.split('#')[1]
      Router.push({ name: 'login' })
    }
  }
  if (res.data && res.data.code === CODE.ERROR) {
    Toast({
      message: res.data.error,
      duration: 1500
    })
    return Promise.reject(res.data.error)
  }
  return Promise.reject(res.data)
}

export default {
  install(Vue, options) {
    Vue.prototype.httpGet = (url, params = {}) => {
      return axios({
        method: 'GET',
        url: url,
        params: params
      }).then(checkStatus).catch((error) => {
        console.log(typeof error)
        return Promise.reject(error)
      })
    }

    Vue.prototype.httpPost = (url, params = {}, contentType = 'json') => {
      return axios({
        method: 'post',
        url: url,
        headers: {
          'Content-Type': CONTENT_TYPES[contentType]
        },
        data: params
      }).then(checkStatus).catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
    }

    Vue.prototype.httpDelete = (url, params = {}) => {
      return axios({
        method: 'DELETE',
        url: url
      }).then(checkStatus).catch(function (error) {
        console.log(error)
        return Promise.reject(error)
      })
    }

    Vue.prototype.httpPut = (url, params = {}) => {
      return axios({
        method: 'PUT',
        url: url,
        data: params
      }).then(checkStatus).catch(function (error) {
        console.log(error)
        return Promise.reject(error)
      })
    }
  }
}
