<template>
  <div class="mescroll-warp">
    <h2>下面是滚动区域</h2>
    <button @click="refresh">refresh</button>
    <mescroll-vue ref="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit">
      <div class="list">
        <div class="item" v-for="item in list" :key="item">{{item}}</div>
      </div>
    </mescroll-vue>
  </div>
</template>

<script>
import MescrollVue from 'mescroll.js/mescroll.vue'
export default {
  data() {
    return {
      mescroll: null, // mescroll实例对象
      mescrollDown: {}, //下拉刷新的配置. (如果下拉刷新和上拉加载处理的逻辑是一样的,则mescrollDown可不用写了)
      mescrollUp: {
        callback: this.upCallback
      },
      index: 0,
      list: []
    }
  },
  computed: {},
  mounted() {
  },
  components: {
    MescrollVue
  },
  methods: {
    mescrollInit (mescroll) {
      this.mescroll = mescroll // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
    },
    upCallback (page, mescroll) {
      console.log('page::', page)
      if (page.num === 1) this.list = []
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.index = this.index + 1
          this.list = this.list.concat('item' + this.index)
          this.$nextTick(() => {
            mescroll.endSuccess(10)
          })
        }
      }, 500)
    },
    refresh() {
      this.index = 0
      /*this.mescroll.setPageNum(1)
      this.list = []*/
      this.mescroll.resetUpScroll()
    }
  }
}
</script>

<style lang="scss">
  .mescroll-warp{
    .list{
      .item{
        padding: 1rem 1rem;
        background: #4caf50;
        color: #ffffff;
        margin-top: .5rem;
      }
    }
    /*通过fixed固定mescroll的高度*/
    .mescroll {
      position: fixed;
      top: 100px;
      bottom: 0;
      height: auto;
    }
  }
</style>
