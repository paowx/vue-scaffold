<template>
<div class="text-all-warp">
  <h3>“查看全部” - “收起”</h3>
  <div class="list-panel">
    <div class="news-item" v-for="item in news" :key="item.id">
      <div class="date">{{item.addtime}}</div>
      <div class="title">{{item.title}}</div>
      <text-all-show :item="item"></text-all-show>
    </div>
  </div>
</div>
</template>

<script>
import textAllShow from './common/textAllShow.vue'
export default {
  data() {
    return {
      news: [{
        addtime: '2015-05-25',
        con: '奕翠园在售62、63座尾货103-169㎡三、四房,281-370㎡复式单位,售价6500-14000元/㎡,全盘均价9000元/㎡,现在购房可享受95*98折优惠;新推卡乐里组团75-373㎡的一房至五房,现正诚意登记中。',
        id: 226902,
        source_from: '香港新鸿基地产有限公司',
        status: 1,
        title: '【奕翠园】奕翠园卡乐里75-373㎡均价9000元/㎡'
      }, {
        addtime: '2018-05-25',
        con: '奕翠园第四期在售建面约371㎡复式六房单位，户型方正实用，起价20000元/㎡，详情以售楼部为准。该项目位于主干道中山五路上，与紫马岭公园紧一路之隔，周边配套有石岐中心小学，华润万佳商场，盛景尚峰，中山市政府，中山博览中心，远洋大信商场等。',
        id: 226928,
        source_from: '香港新鸿基地产有限公司',
        status: 1,
        title: '【奕翠园】四期在售建面约371㎡复式六房单位'
      }]
    }
  },
  computed: {},
  mounted() {
  },
  components: {
    textAllShow
  },
  methods: {}
}
</script>

<style lang="scss">
  .text-all-warp{
    padding : 1rem;
    background: #ffffff;
    /*.list-panel{
      padding: 0 1rem 0rem 1rem;
    }*/
    .news-item{
      padding: 1.25rem 0;
      border-bottom: 1px solid #e5e5e5;
      .date{
        font-size: .6rem;
        color: #9f9f9f;
        padding-bottom: .7rem;
      }
      .title{
        color: #353535;
        font-size: .8rem;
        padding-bottom: .5rem;
        font-weight: bolder;
      }
      /*.con-panel{
        font-size: .65rem;
        color: #656565;
        position: relative;
        .con{
          margin-bottom: .5rem;
        }
        .show-all{
          color: #8EAAE3;
          font-size: .6rem;
        }
      }*/
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
    }
    .news-item:last-child{
      border-bottom: none;
    }
  }
</style>
