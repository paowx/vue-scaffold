<template>
  <div class="item-panel">
    <div class="left-panel">
      <img src="../../../assets/img/user_bg.png">
    </div>
    <div class="content-panel">
      <div class="part-one">
        <div class="tit-panel">
          <p class="tit-p">不是闷</p>
          <p class="label-p">南沙板块专家</p>
        </div>
        <div class="btn-panel">
          <button type="button">向TA提问</button>
        </div>
      </div>
      <div class="part-two">
        <p>10年从业，南沙板块专家，带看68次，熟悉南沙个盘信息，了解一手资讯</p>
      </div>
      <div class="part-three">
        <span class="label-span">南沙地盘</span>
      </div>
    </div>
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
  methods: {}
}
</script>

<style lang="scss" scoped>
  @import "../../../assets/css/css-var";
  .item-panel{
    color: $textColor;
    position: relative;
    background: #ffffff;
    padding: 1rem 0;
    display: flex;
    align-items: flex-start;
    border-top: 1px solid $otherColor;
    border-bottom: 1px solid $otherColor;
    margin-bottom: .1rem;
    .left-panel{
      width: 5rem;
      text-align: center;
      img{
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        overflow: hidden;
      }
    }
    .content-panel{
      flex: 1;
      .part-one{
        display: flex;
        .tit-panel{
          flex: 1;
          .tit-p{
            font-size: .85rem;
            font-weight: 700;
            line-height: 1;
          }
          .label-p{
            font-size: .6rem;
            line-height: 2;
          }
        }
        .btn-panel{
          padding: 0 1rem;
          button{
            color: #ffffff;
            background: $btnBgColor;
            border-radius: .1rem;
            padding: .2rem .5rem;
            font-size: .6rem;
          }
        }
      }
      .part-two{
        display: flex;
        padding-top: .3rem;
        padding-right: 1rem;
        p{
          font-size: .5rem;
        }
      }
      .part-three{
        padding-top: .3rem;
        .label-span{
          background: $labelBgColor;
          display: inline-block;
          padding: .1rem .2rem;
          font-size: .6rem;
          line-height: 1.5;
          border-radius: .1rem;
        }
      }
    }
  }
</style>
