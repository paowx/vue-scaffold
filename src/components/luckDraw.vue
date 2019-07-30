<template>
<!--抽奖活动-->
<div class="luck-draw-warp">
  <div class="choujiang-panel">
    <div class="choujiang-img">
      <img src="../assets/img/cj-bg1.png" v-show="prize.value == 1 ||  prize.value == 3 || !prize.value">
      <img src="../assets/img/cj-bg2.png" v-show="prize.value == 2 ||  prize.value == 4">
      <div class="mark"></div>
      <div class="cj-btn" @click="luckDraw"></div>
      <div class="img-active" :class="('pos' + prize.id)">
        <img src="../assets/img/prize1-active.png" alt="" v-show="prize.value == 1">
        <img src="../assets/img/prize2-active.png" alt="" v-show="prize.value == 2">
        <img src="../assets/img/prize3-active.png" alt="" v-show="prize.value == 3">
        <img src="../assets/img/prize4-active.png" alt="" v-show="prize.value == 4">
      </div>
    </div>
  </div>
  <div class="choujiang2-panel">
    <div class="choujiang-img">
      <img src="../assets/img/cjhj2-c.png">
      <!--<img src="../assets/img/icon4.png" class="cj-btn" id="cj-btn" >-->
      <div class="cj-btn">
        <img src="../assets/img/icon2.png" class="zd-img" id="zd-img">
        <img src="../assets/img/icon4.png" class="cj-img" @click="ratating">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      timer: '',
      prize: {
        id: '',
        value: ''
      }
    }
  },
  computed: {},
  mounted() {
  },
  components: {},
  methods: {
    /**
     * 幸运抽奖
     */
    luckDraw() {
      if (this.timer) {
        return false
      }
      let pr = [3, 4, 2, 4, 3, 4, 1, 4]
      let time = 0
      let index = 0
      let end = 200 * 8 * 3 + 200 * 7
      this.timer = setInterval(() => {
        this.prize.id = index + 1
        this.prize.value = pr[index]
        index++
        if (index > 7) {
          index = 0
        }
        time += 200
        if (time >= end) {
          clearInterval(this.timer)
          this.timer = null
        }
      }, 200)
    },
    /**
     * 旋转
     */
    ratating() {
      if (this.timer) {
        return false
      }
      let rotateImg = document.getElementById('zd-img')
      let arr = [0, 150, 160, 170, 340, 350] // 转盘可以停留的区域
      let endRound = arr[parseInt(Math.random() * (5 - 0 + 1) + 0)] // 最后停留的度数
      let rdm = 0
      let round = parseInt(Math.random() * (8 - 5 + 1) + 5) // 旋转的圈数，5~10的随机数
      this.timer = setInterval(() => {
        rdm = rdm + 10
        if (rdm > (360 * round)) {
          clearInterval(this.timer)
          this.timer = null
          this.$refs.xianchangPrizeDialog.open(this.drawObj)
        } else {
          rotateImg.style.transform = 'rotate(' + rdm + 'deg)'
        }
      }, 15)
    }
  }
}
</script>

<style lang="scss">
.luck-draw-warp{
  padding: 1rem 0;
  background: #ffffff;
  .choujiang-panel{
    padding: 0rem .75rem 1rem .75rem;
    background: #ffffff;
    position: relative;
    .choujiang-img{
      position: relative;
      img{
        display: block;
      }
      .img-active{
        position: absolute;
        width: 28.5%;
        height: 25%;
        z-index: 100;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .pos1{
        left: 7.3%;
        top: 9.7%;
      }
      .pos2{
        left: 35.7%;
        top: 9.7%;
      }
      .pos3{
        left: 64%;
        top: 9.7%;
      }
      .pos4{
        left: 64%;
        top: 35.2%;
      }
      .pos5{
        left: 64%;
        top: 60.7%;
      }
      .pos6{
        left: 35.7%;
        top: 60.7%;
      }
      .pos7{
        left: 7.3%;
        top: 60.7%;
      }
      .pos8{
        left: 7.3%;
        top: 35.2%;
      }
    }
    img {
      width: 100%;
    }
  }

  .choujiang2-panel{
    padding: 0rem 1.4rem 0 .75rem;
    background: #ffffff;
    position: relative;
    img {
      width: 100%;
    }
    .cj-btn{
      position: absolute;
      z-index: 11;
      left: 51%;
      top: 47%;
      transform: translate(-50%, -53%);
      width: 38%;
      .cj-img{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .zd-img{
      position: relative;
      width: 100%;
    }
  }
}
</style>
