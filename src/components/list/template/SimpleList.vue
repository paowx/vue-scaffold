<template>
  <div class="question-list">
    <router-link class="question-item" to="/">
      <div class="question-info">
        <div class="question-content">
          想问大神，黄埔或者天河二手房，交通好一点，环境别差的，新一点，3.5万以内，性价比高的，哪个楼盘合适？我是自己住的，现在买。。
        </div>
        <div class="question-label">
          <div class="class-panel">
            <span>已回答</span>
          </div>
          <div class="question-time">2018-09-12</div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    queList: {
      type: Array,
      default: function () {
        return []
      }
    },
    showExpertInfo: {
      type: Boolean,
      default: true
    }
  },
  components: {
  }
}
</script>

<style scoped lang="scss">
  @import "../../../assets/css/css-var";
  .question-list{
    .question-item{
      display: block;
      border-bottom: 1px solid $otherColor;
      padding: .5rem 1rem 0 1rem;
      background: #ffffff;
      display: flex;
      color: inherit;
      margin-bottom: .3rem;
      .question-info{
        flex: 1;
      }
      .question-time{
        color: $otherColor;
        font-size: .6rem;
        text-align: right;
        display: inline-block;
        float: right;
      }
      .question-tit{
        font-size: .85rem;
        font-weight: 700;
        line-height: 1.5;
      }
      .question-content{
        color: $textColor;
        font-size: .75rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        line-height: 1.5;
      }
      .question-label{
        margin-top:.5rem;
        padding-bottom: .5rem;
        display: flex;
        .class-panel{
          flex: 1;
          color: $hoverColor;
          font-size: .6rem;
          display: inline-block;
          .icon-tag{
            color: $hoverColor;
            font-size: .7rem;
          }
          .class-span{
            border-right: 1px solid $hoverColor;
            padding-right: .3rem;
          }
          .small-class-span{
            padding-left: .2rem;
          }
        }
        .question-time{
          flex: 1;
          text-align: right;
          font-size: .6rem;
        }
      }
      .expert-info{
        padding-top: .5rem;
        padding-bottom: .5rem;
        font-size: .6rem;
        border-top: 1px solid #e5e5e5;
        img{
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 1rem;
          overflow: hidden;
          vertical-align: middle;
        }
        .expert-name{
          padding-left: .3rem;
          padding-right: .3rem;
        }
        .label-span{
          display: inline-block;
          background: $labelBgColor;
          color: $labelColor;
          padding: .1rem .2rem;
          font-size: .6rem;
          line-height: 1.3;
          border-radius: .1rem;
        }
      }
      .question-cancel{
        display: none;
        width: 2.5rem;
        background: #ff750b;
        position: relative;
        margin-left: .5rem;
        p{
          font-size: .75rem;
          color: #ffffff;
          position: absolute;
          width: 80%;
          text-align: center;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
        }
      }
    }
    .question-item:hover{
      .question-cancel{
        display: inline-block;
      }
    }
  }
</style>
