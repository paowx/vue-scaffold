<template>
  <!--专家列表-->
  <div class="expert-list-warp">
    <h1>modal滚动穿透问题的解决方案</h1>
    <div style="white-space: pre-wrap">
      房产频道，mask
      固然好沟通如火如荼
      人生若只如初见，何事秋风被划伤，
      千里迢迢
      奥卡福换个仍
      你热狗IER级隔日更


      钢铁股认购


      应该风儿哥哥，天发给你热感觉而归太开放我就放开我日价格惹纠纷

      退还给与他如果
      好吗，好的

      天天被激发个人


      去屎吧反而个人根据个人感觉好贵如果

      如果不能分开过几个人经过会让给了规划日


      被告人顾及他人还
      改变土豪进入韩国那边





      土豪分别仍然挺好
      被告人提交个人
      楼盘特别会股热乎
    </div>
    <button @click="isShow= true">show mack</button>
    <preview :previewImg="previewImg" :isShow="isShow" @cancelPreview="cancelPreview"></preview>
  </div>
</template>
<script>
import vHeader from './common/header'
import preview from './common/modal.vue'
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      previewImg: '../static/images/shareImg.jpg',
      isShow: false
    }
  },
  computed: {
  },
  mounted() {
  },
  components: {
    vHeader,
    preview
  },
  methods: {
    cancelPreview() {
      this.isShow = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/css-var";
.expert-list-warp{
  margin: 0;
  padding: 0;
  position: relative;
}
</style>
