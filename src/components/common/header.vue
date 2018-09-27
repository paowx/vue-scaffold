<template>
  <mt-header :title="newTitle">
    <a href="javascript:;" slot="left" @click="goBack">
      <mt-button icon="back"></mt-button>
    </a>
    <router-link to="/" slot="right">
      <i class="iconfont icon-home"></i>
    </router-link>
  </mt-header>
</template>

<script>
export default {
  data() {
    return {
      newTitle: this.title || this.$route.meta.title || ''
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  computed: {},
  mounted() {
  },
  components: {},
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  },
  watch: {
    title: function () {
      this.newTitle = this.title
    }
  }
}
</script>

<style lang="scss">
  @import "../../assets/css/css-var";
  .mint-header{
    background: #ffffff;
    /*border-bottom:1px solid #e5e5e5;*/
    height: 50px;
    /*box-shadow: 0px 1px 0 0 #b1b1b1, 0 0 16px 0 rgba(0, 0, 0, 0.36);*/
    border-bottom: 1px solid $otherColor;
    .mint-header-button{
      color: #666;
    }
    .mint-header-title{
      color: #000;
      font-size: 1rem;
    }
    .icon-home{
      color: #fe7700;
      font-size: 24px;
    }
    .mintui {
      font-size: 24px;
      -webkit-text-stroke-width: 0.5px;
    }
  }
</style>
