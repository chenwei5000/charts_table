import echarts from 'echarts'

const option = {
  tooltip: {},
  grid: {
    top: '3%',
    left: '17%',
    right: '5%',
    bottom: '5%'
    // containLabel: true
  },
  yAxis: [
    {
      type: 'category',
      data: [],
      axisLabel: {
        color: '#fff'
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: '#fff'
        }
      },
      axisTick: {
        show: false
      }
    }
  ],
  xAxis: [
    {
      type: 'value',
      axisLabel: {
        show: false,
        color: '#fff'
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: '#fff'
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      }
    }
  ],
  series: [
    {
      name: 'Top 10',
      type: 'bar',
      data: [],
      label: {},
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            1,
            0,
            [
              {
                offset: 0,
                color: 'lightBlue' // 0% 处的颜色
              },
              {
                offset: 1,
                color: '#3398DB' // 100% 处的颜色
              }
            ],
            false
          )
        }
      }
    }
  ]
}

export default option
