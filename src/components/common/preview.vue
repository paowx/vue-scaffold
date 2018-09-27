<template>
  <!--图片预览-->
  <div class="preview-panel" id="preview-panel">
    <div class="img-panel">
      <img :src="util.handleImg(previewImg)" v-if="previewImg && isHandleImg">
      <img :src="previewImg" v-if="previewImg && !isHandleImg">
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
      isHandleImg: {
        type: Boolean,
        default: true
      }
    },
    components: {
    },
    mounted() {
      this.openMask()
    },
    methods: {
      delImg() {
        this.$emit('delImg')
      },
      /**
       * 取消预览
       */
      cancelPreview() {
        this.$emit('cancelPreview')
        this.closeMask()
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
      }
    }
  }
</script>

<style lang="scss">
  @import "../../assets/css/css-var";
  .preview-panel{
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
      position: relative;
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
</style>
