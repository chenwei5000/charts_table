<template>
  <div class="map-content">
    <!-- 1.0 世界地图 -->
    <div class="world-map" id="map_show"></div>

    <!-- 2.0 一个折线图 -->
    <div class="zhe clearfix">
      <cBottom></cBottom>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import '../world.js'
import cBottom from './cBottom.vue'
import mapData from './geoCoordMap.js'
import option1 from './map.js'

export default {
  components: {
    cBottom
  },
  data() {
    return {
      dataList: [],
      searchUrl:
        'http://192.168.0.188:9527/erp-service/countcerReports/containers?accessToken=MUQ5RjMwRjcwMUE0NkUwRkUxNkUyMkNDNkZFNDNBOTEsMg==&startDate=2020-06-15&endDate=2020-06-21',

      //  飞机图标
      planePath:
        'image://http://www.csetrip.com:3000/uploads/ship123703958.png',
      color: ['#fb09d2', '#09b8fb', '#fb7909'],
      series: []
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      const { data } = await this.$axios.get(this.searchUrl)

      // 1.0 提取精确的数据  发货地   发往地   时间  分类
      let arr = []
      for (let k in data) {
        const subArr = []
        data[k].forEach(item => {
          subArr.push([
            {
              name: item.fromPortOfLoading
            },
            {
              name: item.toPortOfLoading,
              value: item.containerQty,
              num:
                Math.floor((item.shippedCartonQty / item.planCartonQty) * 100) /
                100,
              doneP: item.shippedProportion
            }
          ])
        })
        arr.push([k, subArr])
      }

      // 3.0 整理数据 渲染
      this.dataList = arr
      this.getSerice()

      // 4.0 鼠标经过航线和目标地显示文字
      const _that = this
      option1.tooltip = {
        trigger: 'item',
        formatter: function(param) {
          // 4.1 根据不同的航线，展示不同的货品分类
          let arr = []

          let city = ''
          if (param.componentSubType === 'lines') {
            for (let v in mapData) {
              if (mapData[v].join(',') === param.data.coords[1].join(',')) {
                city = v
              }
            }
          }

          // 根据城市名称，获取当前航线的数据
          let getItem = data[param.seriesName].find(
            item => item.toPortOfLoading === city
          )
          if (param.componentSubType === 'effectScatter') {
            return param.marker + param.seriesName
          } else if (param.componentSubType === 'lines') {
            return `
              ${param.marker}发货港口: ${param.seriesName}<br />
              ${param.marker}收货港口: ${city}<br />
              ${param.marker}货柜数量: ${getItem.containerQty}柜<br />
              ${param.marker}商品数量: ${getItem.shippedCartonQty}箱 / ${getItem.planCartonQty}箱<br />
              ${param.marker}完成度: ${getItem.shippedProportion}%<br />
              `
          }
        }
      }
      option1.series = this.series
      var myChart = this.$echarts.init(document.getElementById('map_show'))
      myChart.setOption(option1)
    },
    convertData(data) {
      // 筛选数据 在对应的地图上获取经纬坐标
      var res = []
      for (var i = 0; i < data.length; i++) {
        var dataItem = data[i]
        var fromCoord = mapData[dataItem[0].name]
        var toCoord = mapData[dataItem[1].name]
        if (fromCoord && toCoord) {
          res.push([
            {
              coord: fromCoord
            },
            {
              coord: toCoord
            }
          ])
        }
      }
      return res
    },
    getSerice() {
      const _that = this
      this.dataList.forEach(function(item, i) {
        _that.series.push(
          {
            name: item[0] + ' 飞行线',
            type: 'lines',
            zlevel: 1,
            effect: {
              show: false, // 启用飞行效果
              trailLength: 0.2, // 飞行线的拖尾
              color: '#fff', // 飞行线的颜色
              symbolSize: 4 // 飞行线的宽度
            },
            lineStyle: {
              normal: {
                color: _that.color[i],
                width: 0,
                curveness: 0.2 // 飞行线的弯曲程度
              }
            },
            data: _that.convertData(item[1])
          },
          {
            name: item[0],
            type: 'lines',
            zlevel: 2,
            symbolSize: 15,
            effect: {
              show: true,
              period: 20,
              trailLength: 0,
              symbol: _that.planePath,
              symbolSize: 22,
              constantSpeed: 16,
              color: '#fff',
              delay: 0
            },
            // 图标底线的样式
            lineStyle: {
              normal: {
                color: _that.color[i],
                width: 1,
                opacity: 0.8,
                curveness: 0.5 // 飞行线底线的弯曲程度
              }
            },
            data: _that.convertData(item[1])
          },
          {
            name: '出发仓库: ' + item[0],
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
              brushType: 'stroke'
            },
            label: {
              normal: {
                show: true,
                position: 'right',
                formatter: '{b}'
              }
            },
            symbolSize: 6,
            itemStyle: {
              // 为不同系列节点设置颜色
              normal: {
                color: _that.color[i]
              }
            },
            // 要显示的文字
            data: item[1].map(function(dataItem) {
              return {
                name: dataItem[1].name,
                value: mapData[dataItem[1].name].concat([dataItem[1].value])
              }
            })
          }
        )
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.map-content {
  position: relative;
  width: 100%;
  height: 100%;
}

.world-map {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-54%, -20%);
  width: 130%;
  height: 500px;
}

.zhe {
  height: 550px;

  div {
    position: relative;
    left: -20px;
    width: 105%;
    height: 66%;
    margin-top: 280px;
    overflow: hidden;
  }
}
</style>
