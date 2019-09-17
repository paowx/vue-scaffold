<template>
  <!--上拉加载更多功能-->
<div class="load-more-warp">
  <p>body.clientHeight: {{clientHeight1}}, documentElement.clientHeight: {{clientHeight2}}</p>
  <p>body.scrollHeight: {{scrollHeight1}}, documentElement.scrollHeight: {{scrollHeight2}}</p>
  <p>body.scrollTop: {{scrollTop1}}, documentElement.scrollTop: {{scrollTop2}}</p>
  <div class="list">
    <div class="item" v-for="item in list" :key="item">{{item}}</div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      clientHeight1: 0,
      clientHeight2: 0,
      scrollHeight1: 0,
      scrollHeight2: 0,
      scrollTop1: 0,
      scrollTop2: 0,
      list: [],
      index: 0
    }
  },
  computed: {},
  mounted() {
    console.log(this.getClientHeight(), this.getScrollHeight(), this.getScrollTop())
    this.fetchData()
    setTimeout(() => {
      let offsetHeight = document.getElementsByClassName('load-more-warp')[0].offsetHeight
      console.log(offsetHeight, this.getClientHeight())
      if (offsetHeight < this.getClientHeight()) {
        this.fetchData()
      }
    }, 1500)
    window.onscroll = () => {
      console.log(this.getScrollTop(), this.getClientHeight(), this.getScrollHeight())
      if (this.getScrollTop() + this.getClientHeight() === this.getScrollHeight()) {
        this.fetchData()
      }
    }
  },
  components: {},
  methods: {
    /**
     * 获取当前可视范围的高度
     */
    getClientHeight() {
      let clientHeight = 0
      // console.log('clientHeight::', document.body.clientHeight, document.documentElement.clientHeight)
      if (document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight)
      } else {
        clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight)
      }
      this.clientHeight1 = document.body.clientHeight
      this.clientHeight2 = document.documentElement.clientHeight
      return clientHeight
    },
    /**
     * 获取当前文档的完整高度
     * @returns {number}
     */
    getScrollHeight() {
      let scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
      // console.log('scrollHeight::', document.body.scrollHeight, document.documentElement.scrollHeight)
      this.scrollHeight1 = document.body.scrollHeight
      this.scrollHeight2 = document.documentElement.scrollHeight
      return scrollHeight
    },
    getScrollTop() {
      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
      // console.log('scrollTop::', document.body.scrollTop, document.documentElement.scrollTop)
      this.scrollTop1 = document.body.scrollTop
      this.scrollTop2 = document.documentElement.scrollTop
      return scrollTop
    },
    fetchData() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.index = this.index + 1
          this.list = this.list.concat('item' + this.index)
        }
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
.load-more-warp{
  .list{
    .item{
      padding: 0rem 1rem;
      background: #4caf50;
      color: #ffffff;
      margin-top: .5rem;
    }
  }
}
</style>
