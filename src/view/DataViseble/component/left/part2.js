import echarts from 'echarts'

var fontColor = '#fff'
const option = {
  grid: {
    left: '1%',
    right: '5%',
    top: '10%',
    bottom: '3%',
    containLabel: true
  },
  tooltip: {},
  legend: {
    show: true,
    top: '-1%',
    right: '3%',
    icon: 'stack',
    itemWidth: 10,
    itemHeight: 10,
    textStyle: {
      color: '#1bb4f6'
    },
    data: ['入库', '出库', '库存']
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      axisLabel: {
        color: fontColor
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#fff'
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255, 255, 255, .1)'
        }
      },
      data: []
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '',
      min: 0,
      max: 15000,
      axisLabel: {
        formatter: '{value}',
        textStyle: {
          color: '#fff'
        }
      },
      axisLine: {
        interval: 2,
        lineStyle: {
          color: '#fff'
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255, 255, 255, .1)'
        }
      }
    }
  ],
  series: [
    {
      name: '入库',
      type: 'line',
      symbol: 'circle',
      symbolSize: 6,
      itemStyle: {
        normal: {
          color: '#f02fc3',
          lineStyle: {
            color: '#f02fc3',
            width: 1
          },
          areaStyle: {
            // color: '#94C9EC'
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
              {
                offset: 0,
                color: 'rgba(7,44,90,0.3)'
              },
              {
                offset: 1,
                color: 'rgba(0,146,246,0.9)'
              }
            ])
          }
        }
      },
      markPoint: {
        itemStyle: {
          normal: {
            color: 'red'
          }
        }
      },
      data: []
    },
    {
      name: '出库',
      type: 'line',
      symbol: 'circle',
      symbolSize: 6,

      itemStyle: {
        normal: {
          color: '#49a4e3',
          lineStyle: {
            color: '#48a4e3',
            width: 1
          },
          areaStyle: {
            // color: '#94C9EC'
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
              {
                offset: 0,
                color: 'rgba(7,44,90,0.3)'
              },
              {
                offset: 1,
                color: 'rgba(0,212,199,0.9)'
              }
            ])
          }
        }
      },
      data: []
    },
    {
      name: '库存',
      type: 'line',
      symbol: 'circle',
      symbolSize: 6,
      itemStyle: {
        normal: {
          color: '#aecb56',
          lineStyle: {
            color: '#afe348',
            width: 1
          },
          areaStyle: {
            // color: '#94C9EC'
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
              {
                offset: 0,
                color: 'rgba(7,44,90,0.3)'
              },
              {
                offset: 1,
                color: 'rgba(114,144,89,0.9)'
              }
            ])
          }
        }
      },
      data: []
    }
  ]
}

export default option
