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
        'https://erp.kuihuajia.com/erp-service/linerShippingPlans?accessToken=NDAzRDREQ0Y3OEMzRTZDMzczMjZFOTU4NEExM0FGQUIsMg==&relations=[%22fromWarehouse%22,%22toWarehouse%22,%22creator%22]&sort=etdTime&dir=desc&filters={%22groupOp%22:%22AND%22,%22rules%22:[{%22field%22:%22etdTime%22,%22op%22:%22timeRange%22,%22data%22:%222020-06-14,%202020-06-20%22}]}',

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
      data.forEach(item => {
        arr.push({
          from: item.portOfLoading,
          forword: item.toWarehouse.address,
          time: item.etdTime,
          cate: item.categoryName
        })
      })
      // 2.0 筛选相同的出发地，到单独的数组
      let o = {}
      arr.forEach(item => {
        if (o[item.from]) {
          o[item.from].push([
            { name: item.from },
            { name: item.forword, value: item.cate }
          ])
        } else {
          o[item.from] = []
        }
      })

      // 3.0 整理数据 渲染
      for (let k in o) {
        this.dataList.push([k, o[k]])
      }
      this.getSerice()
      const _that = this
      // 4.0 鼠标经过航线和目标地显示文字
      option1.tooltip = {
        trigger: 'item',
        formatter: function(param) {
          let arr = []

          // 4.1 根据不同的航线，展示不同的货品分类
          let cate = {}
          let o = {}
          _that.dataList.forEach(item => {
            if (item[0] === param.seriesName) {
              item[1].forEach((subItem, i) => {
                if (cate[subItem[1].name]) {
                  o[subItem[1].name] = cate[subItem[1].name].length
                  cate[subItem[1].name].push(...subItem[1].value.split(','))
                } else {
                  cate[subItem[1].name] = []
                  cate[subItem[1].name].push(...subItem[1].value.split(','))
                }
              })
              return false
            }
          })
          function group(array, subGroupLength) {
            let index = 0
            let newArray = []
            while (index < array.length) {
              newArray.push(array.slice(index, (index += subGroupLength)))
            }
            return newArray
          }
          for (let k in cate) {
            // 数组去重，分割为3个数组
            cate[k] = Array.from(new Set(cate[k]))
            cate[k] = group(cate[k], 3)
          }
          let city = ''
          let str = ''
          if (param.componentSubType === 'lines') {
            for (let v in mapData) {
              if (mapData[v].join(',') === param.data.coords[1].join(',')) {
                city = v
              }
            }

            // 4.3 拼接为显示的信息
            cate[city].forEach(item => {
              str += item.join(',') + '<br />'
            })
          }

          if (param.componentSubType === 'effectScatter') {
            return param.marker + param.seriesName
          } else if (param.componentSubType === 'lines') {
            return (
              param.marker +
              '出发仓库: ' +
              param.seriesName +
              '<br />' +
              param.marker +
              '货品分类: <br />' +
              str +
              param.marker +
              '订单数量: ' +
              o[city] +
              ' 柜'
            )
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
