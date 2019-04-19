<template>
  <div class="demo-warp">
    <p><router-link to="/list">list style(列表样式)</router-link></p>
    <p><router-link to="/modalTest">modal滚动穿透问题的解决方案</router-link></p>
    <p><router-link to="/luckDraw">抽奖互活动</router-link></p>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {},
  components: {
  },
  mounted() {
  },
  methods: {}
}
</script>

<style lang="scss">
.demo-warp{
  padding: 1rem;
  a{
    color: #f39800;
    text-decoration: underline;
    font-size: 1rem;
  }
}
</style>
