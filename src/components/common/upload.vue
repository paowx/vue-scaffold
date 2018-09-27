<template>
  <div class="upload-warp">
    <div class="plus-div">+</div>
    <p class="notice-p">添加图片</p>
    <input type="file" name="file" class="upload-file" @change="uploadFile" multiple accept=".jpg"/>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        uploadUrl: window.HOST + this.API.upload // 服務器地址
      }
    },
    computed: {},
    props: {
      limit: {
        type: Number,
        default: null
      },
      size: {
        type: Number,
        default: null
      },
      accept: {
        type: String,
        default: null
      }
    },
    mounted() {
    },
    components: {},
    methods: {
      /**
       * 图片上传功能
       */
      uploadFile (evt) {
        let fileList = evt.currentTarget.files
        console.log(fileList)
        // 非空验证，files为空不上传
        if (!this.isEmpty(fileList)) {
          return false
        }
        // 文件大小限制
        if (this.size) {
          return this.verifyFileSize(fileList)
        }

        let formData = new FormData() // FormData方法上传二进制文件
        for (let i = 0; i < fileList.length; i++) {
          formData.append('file', fileList[i])
        }
        console.log(formData)
        /*this.httpPost(this.uploadUrl, formData).then((res) => {
          console.log(res)
        })*/
      },
      /**
       * 非空判断
       */
      isEmpty (fileList) {
        if (fileList.length <= 0) {
          return false
        } else {
          return true
        }
      },
      /**
       * 文件大小限制
       * @param fileList
       */
      verifyFileSize (fileList) {
        let fileSize = 0
        for (let i = 0; i < fileList.length; i++) {
          fileSize += fileList[i].size
        }
        console.log(fileSize)
        if (this.size > fileSize) {
          alert('上传文件不能大于' + this.size)
          return false
        }
        return true
      },
      /**
       * 文件格式限制
       */
      fileAccept () {
      }
    }
  }
</script>

<style lang="scss">
  .upload-warp{
    display: block;
    height: 5rem;
    width: 5rem;
    margin-right: .2rem;
    margin-bottom: .2rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-align: center;
    border: 4px dashed #767676;
    position: relative;
    .plus-div{
      text-align: center;
      font-size: 3.5rem;
      line-height: 3.2rem;
      color: #a3a3a3;
    }
    .notice-p{
      font-size: .6rem;
      color: #a3a3a3;
    }
    .upload-file{
      position: absolute;
      z-index: 100;
      height: 4.5rem;
      width: 4.5rem;
      margin: 0;
      padding: 0;
      top: 0;
      left: 0;
      opacity: 0;
    }
  }
</style>
