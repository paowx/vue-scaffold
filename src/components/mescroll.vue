<template>
  <div class="mescroll-warp">
    <h2>下面是滚动区域</h2>
    <mescroll-vue ref="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit">
    </mescroll-vue>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {},
  mounted() {
  },
  components: {},
  methods: {
    mescrollDown() {},
    mescrollUp() {},
    mescrollInit() {}
  }
}
</script>

<style lang="scss" scoped>

</style>
