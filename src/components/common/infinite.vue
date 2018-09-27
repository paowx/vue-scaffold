<template>
  <div id="wrapper" class="page-infinite" v-alloytouch="{options: options, methods:{change: onChange1, touchStart: onTouchStart, initAlloyTouch: initAlloyTouch}, min: min, max: max}">
    <div id="scroller" :style="{paddingTop: paddingTop + 'px'}" class="page-infinite-wrapper" ref="wrapper" style="transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -165.938, 0, 1); transition-duration: 0ms; transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);">
      <slot></slot>
      <p v-show="loading && !allLoaded" class="page-infinite-loading">
        <mt-spinner type="fading-circle"></mt-spinner>
        拼命加载中...
      </p>
      <p v-show="(allLoaded && hasData)" class="page-infinite-loading allLoad">
        已经到底啦!
      </p>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters, mapState} from 'vuex'
export default {
  data() {
    return {
      alloyTouch: null,
      options: {
        touch: '#wrapper',
        vertical: true,
        target: '#scroller',
        property: 'translateY',
        maxSpeed: 2,
        outFactor: 0.1,
        lockDirection: false
      },
      // 动态设置属性
      min: 160 * -20 + window.innerHeight - 50,
      max: 0,
      handleAlloyTouch: null
    }
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    allLoaded: {
      type: Boolean,
      default: false
    },
    hasData: {
      type: Boolean,
      default: false
    },
    // 是否要将页面定位到某个位置
    transY: {
      type: String,
      default: null
    },
    keepTransY: {
      type: Boolean,
      default: true
    },
    paddingTop: {
      type: Number,
      default: 0
    }
  },
  computed: {
    ...mapState({
      stateTransY(state) {
        if (this.transY) {
          return state[this.transY]
        } else {
          return null
        }
      }
    })
  },
  mounted() {
  },
  activated() {
    console.log(this.stateTransY)
    if (this.stateTransY) {
      this.handleAlloyTouch.to(this.stateTransY)
    } else {
      // 防止返回键出现空白
      this.handleAlloyTouch.to(0, 0)
    }
  },
  deactivated() {
    /*if (this.stateTransY) {
      this.handleAlloyTouch.to(this.stateTransY)
    }*/
  },
  components: {},
  methods: {
    ...mapMutations([
      'setTransY'
    ]),
    ...mapGetters([
      'getTransY'
    ]),
    initAlloyTouch (handle) {
      this.handleAlloyTouch = handle
      this.$emit('handleAlloyTouch', handle)
    },

    onChange1 (v) {
      if (v > 0) {
        this.handleAlloyTouch.to(0, 0)
      }
      if (v) {
        if (this.transY) {
          let data = {
            key: this.transY,
            value: v
          }
          this.setTransY(data)
        }
      }
      if (v <= this.min + 5 && !this.loading && !this.allLoaded) {
        this.loadMore()
      }
      this.$emit('handleChange', v)
    },
    onTouchStart () {
      this.reastMin()
    },

    loadMore() {
      this.$emit('loadMore')
    },

    reastMin() {
      let scroller = document.getElementById('scroller')
      this.min = -1 * parseInt(getComputedStyle(scroller).height) + window.innerHeight - this.paddingTop
      console.log(window.innerHeight, parseInt(getComputedStyle(scroller).height), this.min)
    }
  },
  watch: {
  }
}
</script>

<style lang="scss">
  #wrapper{
    position: absolute;
    width: 100%;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    #scroller{
      background: #f2f2f2;
    }
  }

  .page-infinite-loading{
    text-align: center;
    box-sizing:border-box;
    margin: auto;
    font-size: .8rem;
    span{
      margin: auto;
      display: inline-block;
      vertical-align: middle;
    }
    .mint-spinner-fading-circle{
      margin: auto;
    }
  }

  p.page-infinite-loading.allLoad {
    padding: .8rem 3rem;
    color: #acacac;
    font-size: .6rem;
    text-align: center;

  }
  p.page-infinite-loading.allLoad span {
    display: block;
    margin: -.5rem auto;
    width: 5rem;
  }

  .page-infinite-loading div{
    display: inline-block;
    vertical-align: middle;
    margin-right: 5px;
  }
</style>
