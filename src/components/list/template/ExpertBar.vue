<template>
  <!--首页，房频专家-->
  <div class="expert-bar-warp">
    <mt-cell title="社会大学" value="查看全部" is-link to="/expertList">
    </mt-cell>
    <div class="expert-panel">
      <div class="expert-list">
        <div class="expert-item">
          <router-link class="item-a" to="/expertDetail">
            <div class="img-panel">
            </div>
            <p class="expert-name">爱新觉罗</p>
            <p><span class="label-span">路飞</span></p>
          </router-link>
        </div>
        <div class="expert-item">
          <router-link class="item-a" to="/expertDetail">
            <div class="img-panel">
            </div>
            <p class="expert-name">爱新觉罗</p>
            <p><span class="label-span">路飞</span></p>
          </router-link>
        </div>
        <div class="expert-item">
          <router-link class="item-a" to="/expertDetail">
            <div class="img-panel">
            </div>
            <p class="expert-name">爱新觉罗</p>
            <p><span class="label-span">路飞</span></p>
          </router-link>
        </div>
        <div class="expert-item">
          <router-link class="item-a" to="/expertDetail">
            <div class="img-panel">
            </div>
            <p class="expert-name">爱新觉罗</p>
            <p><span class="label-span">路飞</span></p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
  },
  components: {
  }
}
</script>

<style lang="scss">
  @import "../../../assets/css/css-var";
  .expert-bar-warp{
    background: #ffffff;
    .mint-cell-value{
      font-size: .6rem !important;
    }
    .mint-cell{
      min-height: 40px !important;
      border-bottom: 1px solid $otherColor;
      .mint-cell-wrapper{
        .mint-cell-value{
          font-size: .6rem !important;
          color: $otherColor;
        }
      }
    }
    .expert-panel{
      padding: .8rem 1rem;
      text-align: center;
      margin: auto;
    }
    .expert-list{
      position: relative;
      display: flex;
      text-align: center;
      margin-top: 2px;
    }
    .expert-item{
      flex: 1;
      .item-a{
        display: inline-block;
        text-align: center;
        margin: auto;
        .img-panel{
          width: 3.2rem;
          height: 3.2rem;
          border-radius: 2rem;
          background: #8957a1;
          margin: auto;
          text-align: center;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .expert-name{
          font-size: .75rem;
        }
        .label-span{
          background: #ff6600;
          color: #ffffff;
          font-size: .6rem;
          padding: .1rem .5rem;
          border-radius: 3px;
        }
      }
    }
  }
</style>
