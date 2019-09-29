<template>
  <div class="con-panel">
    <div class="con" :id="'con' + item.id" :class="{'clamp': showAll}">{{item.con}}</div>
    <div class="show-all" v-if="showAll && !noBtn" @click="showAll = false">全文</div>
    <div class="hide-all" v-if="!showAll && !noBtn" @click="showAll = true">收起</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAll: false,
      noBtn: false
    }
  },
  props: ['item'],
  computed: {},
  mounted() {
    setTimeout(() => {
      this.countHeight()
    })
  },
  components: {},
  methods: {
    /**
     * 计算高度
     */
    countHeight() {
      let elem = document.getElementById(('con' + this.item.id))
      // console.log(elem.clientHeight)
      if (elem && elem.clientHeight <= 34) {
        this.noBtn = true
      }
      this.showAll = true
    }
  }
}
</script>

<style lang="scss">
  .con-panel{
    font-size: 0;
    color: #656565;
    position: relative;
    .con{
      margin-bottom: .5rem;
      font-size: 13px;
    }
    .show-all{
      color: #8EAAE3;
      font-size: .6rem;
    }
  }
  .clamp{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .hide-all{
    color: #8EAAE3;
    font-size: .6rem;
    padding-top: .2rem;
  }
</style>
