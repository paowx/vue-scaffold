<template>
  <div class="fonter-warp">
    <!-- 底部菜单 -->
    <div class="bottom-bar">
      <router-link to="/qa" id="index" :class="{'active': (barSelected==='qa')}">
        <div class="mint-tab-item-icon">
          <i class="icon iconfont icon-wenda"></i>
        </div>
        <div class="mint-tab-item-label">问答</div>
      </router-link>
      <router-link to="/user" id="tab2" :class="{'active': (barSelected==='user')}">
        <div class="mint-tab-item-icon">
          <i class="icon iconfont icon-geren"></i>
        </div>
        <div class="mint-tab-item-label">我的</div>
      </router-link>
    </div>


  </div>

</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'
export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      barSelected(state) {
        return state.barSelected
      }
    })
  },
  mounted() {

  },
  activated () {
  },
  components: {},
  methods: {
    ...mapMutations([
      'setBarSelected'
    ])
  },
  watch: {
  }
}
</script>

<style lang="scss" scoped>
  .fonter-warp{
    .bottom-bar{
      position:fixed;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
      background-image: -webkit-linear-gradient(top, #d9d9d9, #d9d9d9 50%, transparent 50%);
      background-image: linear-gradient(180deg, #d9d9d9, #d9d9d9 50%, transparent 50%);
      background-size: 100% 1px;
      background-repeat: no-repeat;
      background-position: top left;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      text-align: center;
      background: #ffffff;
      border-top:1px solid #d9d9d9;
    }
    .bottom-bar a{
      display: block;
      padding: 7px 0;
      flex: 1;
      -webkit-box-flex: 1;
      -moz-box-flex: 1;
      -webkit-flex: 1;
      -ms-flex: 1;
      text-decoration: none;
      color: #000;
    }
    .bottom-bar i{
      background-size: contain;
      background-repeat: no-repeat;
      background-position: 50% 50%;
    }
    .mint-tab-item-label{
      /*font-size: .75rem !important;*/
    }
    .mint-tab-item-icon {
      -webkit-box-flex:1;
      margin-bottom: .3rem;
    }
    .mint-tab-item-icon i {
      font-size: 1rem;
    }
    .active .mint-tab-item-label {
      color: #f39800;
    }
    .active i {
      color: #f39800;
    }
  }
</style>
