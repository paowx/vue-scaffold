<template>
  <div class="login-warp">
    <div class="title">手机号登录</div>
    <div class="notice">欢迎来到房知了平台</div>
    <div class="form-list">
      <div class="form-item">
        <input type="tel" v-model="params.mobile" placeholder="请输入手机号"/>
      </div>
      <div class="form-item">
        <div class="code-input">
          <input type="text" v-model="params.verifyCode" placeholder="请输入验证码"/>
        </div>
        <div class="code-btn" @click="getCode">
          {{codeBtnName}}
        </div>
      </div>

      <div class="login-btn" @click="submit">登录</div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  data() {
    return {
      params: {
        mobile: '',
        verifyCode: ''
      },
      codeBtnName: '获取验证码',
      codeBtnDisable: false,
      codeMinutes: 60,
      fromUrl: null,
      fromOtherUrl: ''
    }
  },
  computed: {},
  mounted() {
  },
  activated () {
    console.log(this.$route)
  },
  components: {},
  methods: {
    getVerified() {
      this.httpPost(this.API.getVerified, { mobile: this.params.mobile.trim() }).then((res) => {
        if (res.code == 200) {
        }
      })
    },
    submit() {
      this.params.mobile = this.params.mobile.trim()
      this.params.verifyCode = this.params.verifyCode.trim()
      // this.isLogin()
      if (this.$route.query.redirect) {
        this.$router.push(this.$route.query.redirect)
      }
    },
    login() {
      this.httpPost(this.API.login, this.params).then((res) => {
        if (res.code == 200) {
          Toast({
            message: res.data,
            duration: 1500
          })
          setTimeout(() => {
            if (this.fromOtherUrl) {
              window.location.href = decodeURI(this.fromOtherUrl)
            } else if (this.fromUrl) {
              this.$router.push(this.fromUrl)
            } else {
              this.$router.push({ name: 'qa' })
            }
          }, 1500)
        }
      })
    },
    isLogin () {
      this.httpGet(this.API.islogin).then((res) => {
        if (res.code === 200) {
          this.loginInfo = res.data
          if (res.data.uid) {
            this.updateMobile()
          } else {
            this.login()
          }
        }
      })
    },
    /**
     *  更新手机
     */
    updateMobile() {
      this.httpPost(this.API.userUpdateMobile, this.params).then((res) => {
        if (res.code == 200) {
          Toast({
            message: res.data,
            duration: 1500
          })
          setTimeout(() => {
            if (this.fromOtherUrl) {
              window.location.href = decodeURI(this.fromOtherUrl)
            } else if (this.fromUrl) {
              this.$router.push(this.fromUrl)
            } else {
              this.$router.push({ name: 'qa' })
            }
          }, 1500)
        }
      })
    },

    /**
     * 获取验证码
     */
    getCode() {
      //阻止事件冒泡
      event.preventDefault()
      if (this.codeBtnDisable) {
        return false
      }
      if (!this.params.mobile.trim()) {
        Toast({
          message: '您还没有填写手机号码',
          duration: 1500
        })
        return
      }
      if (/^^(1)\d{10}$$/.test(this.params.mobile.trim()) === false) {
        Toast({
          message: '手机号码格式错误',
          duration: 1500
        })
        return
      }
      this.codeBtnDisable = true
      // this.codeBtnName = '正在发送中'
      let changeCodeTime = () => {
        setTimeout(() => {
          this.codeBtnDisable = true
          this.codeMinutes--
          this.codeBtnName = '已发送(' + this.codeMinutes + 's)'
          if (this.codeMinutes >= 1) {
            changeCodeTime()
          } else {
            this.codeBtnDisable = false
            this.codeMinutes = 60
            this.codeBtnName = '重新发送'
          }
        }, 1000)
      }
      this.httpPost(this.API.getVerified, { mobile: this.params.mobile.trim() }).then((res) => {
        if (res.code == 200) {
          /*Toast({
            message: '验证码发送成功',
            duration: 1500
          })*/
          changeCodeTime()
        }
      })
    }
  }
}
</script>

<style lang="scss">
  .login-warp {
    margin-top: .5rem;
    padding-bottom: 2rem;
    background: #ffffff;
    .title{
      color: #2C2C2C;
      font-size: 1.1rem;
      padding: 2.725rem 1rem 0 1rem;
      line-height: 1.1;
    }
    .notice{
      color: #888888;
      font-size: .7rem;
      padding: .75rem 1rem 0 1rem;
      line-height: 1.1;
    }
    .login-btn{
      margin: auto;
      width: 100%;
      text-align: center;
      color: #ffffff;
      line-height: 2.4rem;
      border-radius: 6px;
      background: #f39800;
      margin-top: 2rem;
      font-size: .8rem;
      font-weight: 500;
    }
    .form-list{
      padding: 1.175rem 1rem 0 1rem;
    }
    .form-item{
      border-radius: 4px;
      background: #F7F7F7;
      height: 2.7rem;
      box-sizing: border-box;
      padding: .5rem;
      margin-top: .75rem;
      display: flex;
      input{
        line-height: 1.7rem;
        outline: none;
        border: none;
        font-size: .7rem;
        width: 100%;
        display: inline-block;
        padding: 0;
        background: #F7F7F7;
      }
      .code-input{
        flex: 1;
        font-size: .7rem;
      }
      .code-btn{
        color: #576B95;
        font-size: .7rem;
        line-height: 1.7rem;
      }
    }
  }
</style>
