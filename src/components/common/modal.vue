<template>
  <!--图片预览-->
  <div class="preview-panel2" id="preview-panel" v-if="isShow">
    <div class="img-panel">
      天真的声音，笑笑，哈哈哈，卡卡，流水丈人
      fdgergergerfdge，

      吧被盗割让给服个软

      个人特文化部和那个人高科技俄日国家

      寡妇年我日工可破顾客欧派管控而苹果恐怕而顾客噢骗人

      发热管理看破让顾客破仍，南北OK了国家而破顾客肉片


      那部分麦当劳工行卡热哦苹果可肉片给客人

      你付款日了狗了肉片给客人提供颇尔，积分兑换南大街附件二是欧冠热会公共热屁股，符合我会感觉日欧冠王培荣if不会你发的感觉轲


      那段时光，办的文件费荣丰今日，那麻烦巨热加个精会热开了几个，能否为绒感觉热会哦冠军

      南非国家而价格高，不能惹今天过热会哦钢结构,

      妇女身份而发给我额风格历史才能的金额的海盗船，记得记得哦，你发的甲方弟弟，年度计划多大


      女乘客对俄和，安徽富尔IoT供热赶快退金额日哦股价格

      那个人看来她感觉而欧特克日破天
    </div>
    <div class="preview-btn">
      <div class="del-btn" @click="delImg" v-if="canDel"><span>删除</span></div>
      <div class="cancel-btn" @click="cancelPreview"><span>取消</span></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hasShow: this.isShow || false,
      scrollTop: 0
    }
  },
  props: {
    previewImg: {
      type: String,
      default: ''
    },
    canDel: {
      type: Boolean,
      default: true
    },
    isShow: {
      type: Boolean,
      default: false
    }
  },
  components: {
  },
  mounted() {
    // this.openMask()
  },
  methods: {
    delImg() {
      this.$emit('delImg')
    },
    /**
     * 取消预览
     */
    cancelPreview() {
      this.beforeClose()
      this.$emit('cancelPreview')
      // this.closeMask()
    },
    handler(event) {
      event.preventDefault()
      event.stopPropagation()
    },
    openMask() {
      document.getElementById('preview-panel').addEventListener('touchmove', this.handler, false)
      document.getElementById('preview-panel').addEventListener('wheel', this.handler, false)
    },
    closeMask() {
      document.getElementById('preview-panel').removeEventListener('touchmove', this.handler, false)
      document.getElementById('preview-panel').removeEventListener('wheel', this.handler, false)
    },
    beforeOpen() {
      this.scrollTop = document.body.scrollTop || document.documentElement.scrollTop
      document.body.style.top = -1 * (this.scrollTop) + 'px'
      document.body.classList.add('dialog-open')
    },
    beforeClose() {
      document.body.classList.remove('dialog-open')
      document.body.scrollTop = document.documentElement.scrollTop = this.scrollTop
      document.body.style.top = ''
    }
  },
  watch: {
    'isShow': function(val) {
      console.log('isShow::', val)
      if (val) {
        this.beforeOpen()
      }
    }
  }
}
</script>

<style lang="scss">
  @import "../../assets/css/css-var";
  .preview-panel2{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 100;
    background: rgba(0,0,0,0.6);
    .img-panel{
      width: 100%;
      height: 92%;
      margin: auto;
      text-align: center;
      position: absolute;
      white-space: pre-wrap;
      /*background: #03a406;*/
      overflow: scroll;
      color: #ffffff;
      img{
        max-width: 100%;
        max-height: 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .preview-btn{
      height: 8%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      z-index: 101;
      background: #ffffff;
      bottom: 0;
      left: 0;
      right: 0;
      .del-btn{
        flex: 1;
        color: $hoverColor;
        font-size: .75rem;
        border-right: 1px solid $borderColor;
        text-align: center;
        height: 100%;
        position: relative;
        span{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .cancel-btn{
        flex: 1;
        color: $otherColor;
        font-size: .75rem;
        text-align: center;
        height: 100%;
        position: relative;
        span{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }

  body.dialog-open {
    position: fixed;
    width: 100%;
  }
</style>
