<template>
  <!--百度地图-->
  <div class="matching-warp">
      <div class="album-header">
        <div class="back"><i class="iconfont iconleft-arrow-copy"></i></div>
        <div class="num">{{lp_name}}</div>
      </div>
      <div class="map-container" id="mapContainer"></div>
      <div class="categroy-panel">
        <div class="categroy-list">
          <div class="categroy-item" :class="{'active': (oldIndex === 0)}" @click="setTypeMarker(0)">
            <div class="img-div"><i class="iconfont icongongjiao"></i></div>
            <div class="text-div">公交({{LocalResult[0] ? LocalResult[0].length : 0}})</div>
          </div>
          <div class="categroy-item" :class="{'active': (oldIndex === 1)}" @click="setTypeMarker(1)">
            <div class="img-div"><i class="iconfont iconditie"></i></div>
            <div class="text-div">地铁({{LocalResult[1] ? LocalResult[1].length : 0}})</div>
          </div>
          <div class="categroy-item" :class="{'active': (oldIndex === 2)}" @click="setTypeMarker(2)">
            <div class="img-div"><i class="iconfont iconxuexiao"></i></div>
            <div class="text-div">学校({{LocalResult[2] ? LocalResult[2].length : 0}})</div>
          </div>
          <div class="categroy-item" :class="{'active': (oldIndex === 3)}" @click="setTypeMarker(3)">
            <div class="img-div"><i class="iconfont iconcanyin"></i></div>
            <div class="text-div">餐饮({{LocalResult[3] ? LocalResult[3].length : 0}})</div>
          </div>
          <div class="categroy-item" :class="{'active': (oldIndex === 4)}" @click="setTypeMarker(4)">
            <div class="img-div"><i class="iconfont icongouwu"></i></div>
            <div class="text-div">购物({{LocalResult[4] ? LocalResult[4].length : 0}})</div>
          </div>
          <div class="categroy-item noMarginRight" :class="{'active': (oldIndex === 5)}" @click="setTypeMarker(5)">
            <div class="img-div"><i class="iconfont iconyiyuan"></i></div>
            <div class="text-div">医院({{LocalResult[5] ? LocalResult[5].length : 0}})</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      LocalResult: [[], [], [], [], []],
      map: null,
      oldIndex: -1,
      intNum: 0,
      imgs: [
        'https://fcpdlpk.oss-cn-shenzhen.aliyuncs.com/apps/applet-wechat/dw-gongjiaoce32-ssr.png',
        'https://fcpdlpk.oss-cn-shenzhen.aliyuncs.com/apps/applet-wechat/dw-ditie32-ssr.png',
        'https://fcpdlpk.oss-cn-shenzhen.aliyuncs.com/apps/applet-wechat/dw-xuexiao32-ssr.png',
        'https://fcpdlpk.oss-cn-shenzhen.aliyuncs.com/apps/applet-wechat/dw-canying32-ssr.png',
        'https://fcpdlpk.oss-cn-shenzhen.aliyuncs.com/apps/applet-wechat/dw-gouwu32-ssr.png',
        'https://fcpdlpk.oss-cn-shenzhen.aliyuncs.com/apps/applet-wechat/dw-yiyuan32-ssr.png'
      ]
    }
  },
  props: ['lp_id', 'lp_name', 'lp_city', 'lp_address'],
  computed: {},
  mounted() {
    let interval = setInterval(() => {
      this.intNum = this.intNum + 1
      if (BMap) {
        this.init()
        clearInterval(interval)
      } else if (this.intNum >= 5) {
        clearInterval(interval)
      }
    }, 1000)
  },
  components: {
  },
  methods: {
    init() {
      this.map = new BMap.Map('mapContainer', { minZoom: 8, maxZoom: 16 })
      // this.map.centerAndZoom('广州', 15)
      this.map.disableDragging() //禁止拖拽
      this.map.enableScrollWheelZoom(false) //禁止鼠标滚轮缩放
      // map.addControl(new BMap.NavigationControl()) // 添加平移缩放控件

      // 创建地址解析器实例
      let myGeo = new BMap.Geocoder()
      // 将地址解析结果显示在地图上，并调整地图视野
      myGeo.getPoint('黄埔 长岭居东部禾丰小学旁', (point) => {
        if (point) {
          this.map.centerAndZoom(point, 16)

          this.customMarker(this.map, point)
          this.getMatching(point)
        }
      }, this.lp_city)
    },
    /**
     * 自定义定位图标
     */
    customMarker(map, point) {
      let pt = new BMap.Point(point.lng, point.lat)
      let myIcon = new BMap.Icon('https://fcpdlpk.oss-cn-shenzhen.aliyuncs.com/apps/applet-wechat/diwei-ssr.png', new BMap.Size(52, 52), { anchor: new BMap.Size(26, 36) })
      let marker2 = new BMap.Marker(pt, { icon: myIcon })// 创建标注
      map.addOverlay(marker2)

      let opts = {
        position: point, // 指定文本标注所在的地理位置
        offset: new BMap.Size(-50, -75) //设置文本偏移量
      }
      let label = new BMap.Label('实地常春藤', opts) //创建文本标注对象
      label.setStyle({
        color: '#353535',
        fontSize: '14px',
        fontWeight: '500',
        height: '45px',
        lineHeight: '45px',
        paddingLeft: '20px',
        paddingRight: '20px',
        border: 'none',
        backgroundColor: 'transparent',
        backgroundImage: 'url(https://fcpdlpk.oss-cn-shenzhen.aliyuncs.com/apps/applet-wechat/toast-bg.png)',
        backgroundSize: '100% 100%',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
        fontFamily: 'PingFang TC'
      })
      map.addOverlay(label)
    },
    /**
     * 获取周边配套， '公交','地铁','学校','餐饮','购物'
     */
    getMatching(point) {
      let myPoint = new BMap.Point(point.lng, point.lat)
      let matchingList = ['公交', '地铁', '学校', '餐饮', '购物']
      for (let i = 0; i < matchingList.length; i++) {
        this.setLocalSearch(myPoint, matchingList[i], i)
      }
    },
    /**
     * 获取周边配套的数据,目前获取10条数据
     */
    setLocalSearch(myPoint, matching, i) {
      let that = this
      let localSearch = new BMap.LocalSearch(this.map, {
        onSearchComplete: function(result) {
          let totalPages = result.getNumPages()
          // totalPages > 3 ? totalPages = 3 : ''
          let currPage = result.getPageIndex()
          if (currPage < totalPages) {
            let num = result.getCurrentNumPois()
            for (let j = 0; j < num; j++) {
              if (!that.LocalResult[i]) {
                that.LocalResult[i] = []
                that.LocalResult[i].push(result.getPoi(j))
              } else {
                that.LocalResult[i].push(result.getPoi(j))
              }
            }
            // 如果想获取多页的数据，开启这一行
            // (currPage + 1) < totalPages ? localSearch.gotoPage(currPage + 1) : ''
          }
        }
      })
      localSearch.searchNearby(matching, myPoint, 2000)
    },
    /**
     * 点击显示周边
     * @param index
     */
    setTypeMarker(index) {
      if (this.oldIndex === index) {
        return false
      }
      this.deleteMarker(this.oldIndex)
      setTimeout(() => {
        if (this.LocalResult[index].length > 0) {
          this.LocalResult[index].forEach((item) => {
            let pt = new BMap.Point(item.point.lng, item.point.lat)
            let myIcon = new BMap.Icon(this.imgs[index], new BMap.Size(32, 32))
            let marker2 = new BMap.Marker(pt, { icon: myIcon }) //创建标注
            this.map.addOverlay(marker2)
          })
        }
        this.oldIndex = index
      })
    },
    /**
     * 删除点
     * @returns {boolean}
     */
    deleteMarker(oldIndex) {
      if (oldIndex >= 0) {
        let allOverlay = this.map.getOverlays()
        for (let i = 0; i < allOverlay.length; i++) {
          this.LocalResult[oldIndex].forEach((item) => {
            if (allOverlay[i].point && this.isEqual(item.point.lng, allOverlay[i].point.lng) && this.isEqual(item.point.lat, allOverlay[i].point.lat)) {
              this.map.removeOverlay(allOverlay[i])
            }
          })
        }
      }
    },
    /**
     * 对浮点数是否相等的判断
     * @param number1
     * @param number2
     * @param digits
     * @returns {boolean}
     */
    isEqual(number1, number2, digits) {
      digits = digits == undefined ? 10 : digits // 默认精度为10
      return number1.toFixed(digits) === number2.toFixed(digits)
    }
  }
}
</script>

<style lang="scss">
  .matching-warp{
    position: relative;
    height: 30rem;
    .album-header{
      display: flex;
      line-height: 2.2rem;
      padding: 0 1rem;
      border-bottom: 1px solid #E5E5E5;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      background: #fff;
      z-index: 100;
      .back{
        text-align: left;
        i{
          font-size: .8rem;
          color: #888888;
        }
      }
      .num{
        flex: 1;
        font-size: .7rem;
        text-align: center;
        color: #353535;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        min-width: 0;
      }
      .list{
        font-size: .6rem;
        text-align: right;
        a{
          color: #fff;
        }
      }
    }
    .map-container{
      height: 100%;
    }
    .categroy-panel{
      box-sizing: border-box;
      overflow: hidden;
      position: absolute;
      z-index: 100;
      background: #fff;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .categroy-list{
      display: block;
      padding: .6rem 1rem;
      white-space: nowrap;
      overflow-x: scroll;
      overflow-y: hidden;
      .categroy-item{
        flex: 1;
        margin: auto;
        text-align: center;
        display: inline-block;
        margin-right: 1.75rem;
        img{
          height: 1.15rem;
          width: auto;
          display: block;
          margin: auto;
        }
        .img-div{
          font-size: 0;
          i{
            color: #9F9F9F;
            font-size: 1.15rem;
          }
        }
        .text-div{
          font-size: .6rem;
          color: #353535;
          padding-top: .4rem;
          line-height: 1;
        }
      }
      categroy-item:last-child{
        margin-right: 0;
      }
      .noMarginRight{
        margin-right: 0;
      }
      .active{
        .img-div{
          i{
            color: #0077DE;
          }
        }
        .text-div{
          color: #0077DE;
        }
      }
    }
  }


  /*地图标题*/
  .BMap_bubble_title {
    color:white;
    font-size:13px;
    font-weight:bold;
    text-align:left;
    padding-left:5px;
    padding-top:5px;
    border-bottom:1px solid gray;
    background-color:#0066b3;
  }
  /* 消息内容 */
  .BMap_bubble_content {
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    line-height: 45px;
    height: 50px;
    padding-left: 20px;
    padding-right: 20px;
    background-size: 100% 100%;
    background-color: transparent;
    background-position: bottom;
    background-repeat: no-repeat;
    background-image: url("https://fcpdlpk.oss-cn-shenzhen.aliyuncs.com/apps/applet-wechat/toast-bg.png");
    fontFamily:'PingFang TC';
    display: inline-block;
  }
  /* 内容 */
  .BMap_pop div:nth-child(9) {
    margin: auto;
    text-align: center;
    top: 45px !important;
    left: 60px !important;
    width: auto !important;
    white-space: nowrap !important;
  }
  /* 左上角删除按键 */
  .BMap_pop img {
    width: 0 !important;
    height: 0 !important;
  }
  .BMap_top {
    display:none;
  }
  .BMap_bottom {
    display:none;
  }
  .BMap_center {
    display:none;
  }
  /* 阴影图标 */
  .BMap_shadow img{
    width: 0 !important;
    height: 0 !important;
  }
  /* 隐藏边角 */
  .BMap_pop div:nth-child(1) div {
    display:none;
  }

  .BMap_pop div:nth-child(3) {
    display:none;
  }
  .BMap_pop div:nth-child(5) {
    display: none;
  }
  .BMap_pop div:nth-child(7) {
    display: none;
  }
</style>
