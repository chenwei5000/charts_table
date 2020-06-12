const option = {
  grid: {
    left: '12%',
    top: '5%',
    bottom: '12%',
    right: '8%'
  },
  xAxis: {
    data: ['15-20', '20-25', '25-30', '30-35', '35-40', '40-50', '50以上'],
    axisTick: {
      show: false
    },
    axisLine: {
      lineStyle: {
        color: '#999',
        width: 1 // 这里是为了突出显示加上的
      }
    },
    axisLabel: {
      interval: 0,
      textStyle: {
        color: '#fff',
        fontSize: 12
      }
    }
  },
  yAxis: [
    {
      splitNumber: 4,
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#999',
          width: 1 // 这里是为了突出显示加上的
        }
      },
      axisLabel: {
        textStyle: {
          color: '#fff'
        }
      },
      splitArea: {
        areaStyle: {
          color: '#fff'
        }
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: '#fff',
          width: 0.5,
          type: 'dashed'
        }
      }
    }
  ],
  series: [
    {
      name: 'hill',
      type: 'pictorialBar',
      barCategoryGap: '0%',
      symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
      label: {
        show: true,
        position: 'top',
        distance: 15,
        color: '#fff',
        fontWeight: 'bolder',
        fontSize: 14
      },
      itemStyle: {
        normal: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(232, 94, 106, .8)' //  0%  处的颜色
              },
              {
                offset: 1,
                color: 'rgba(232, 94, 106, .1)' //  100%  处的颜色
              }
            ],
            global: false //  缺省为  false
          }
        },
        emphasis: {
          opacity: 1
        }
      },
      data: [123, 60, 25, 18, 12, 9, 2],
      z: 10
    }
  ]
}

export default option
