import echarts from 'echarts'

// option
const option = {
  title: {
    show: false,
    text: '',
    x: 'center',
    y: 0,
    textStyle: {
      color: '#B4B4B4',
      fontSize: 16,
      fontWeight: 'normal'
    }
  },
  tooltip: {},
  legend: {
    data: ['已发货', '计划发货', '发货率'],
    textStyle: {
      color: '#B4B4B4'
    },
    top: '4%',
    left: '13%'
  },
  grid: {
    x: '10%',
    width: '84%',
    y: '10%'
  },
  xAxis: {
    data: [],
    axisLine: {
      lineStyle: {
        color: '#B4B4B4'
      }
    },
    axisTick: {
      show: false
    }
  },
  zoom: 0.9,
  yAxis: [
    {
      max: 1500,
      splitLine: { show: false },
      axisLine: {
        lineStyle: {
          color: '#B4B4B4'
        }
      },

      axisLabel: {
        formatter: '{value} '
      }
    },
    {
      max: 1.5,
      splitLine: { show: false },
      axisLine: {
        lineStyle: {
          color: '#B4B4B4'
        }
      },
      axisLabel: {
        formatter: '{value} '
      }
    }
  ],

  series: [
    {
      name: '发货率',
      type: 'line',
      smooth: true,
      showAllSymbol: true,
      symbol: 'emptyCircle',
      symbolSize: 8,
      yAxisIndex: 1,
      itemStyle: {
        normal: {
          color: '#F02FC2'
        }
      },
      data: []
    },

    {
      name: '已发货',
      type: 'bar',
      barWidth: 10,
      itemStyle: {
        normal: {
          barBorderRadius: 5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#956FD4' },
            { offset: 1, color: '#3EACE5' }
          ])
        }
      },
      data: []
    },

    {
      name: '计划发货',
      type: 'bar',
      barGap: '-100%',
      barWidth: 10,
      itemStyle: {
        normal: {
          barBorderRadius: 5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(156,107,211,0.5)' },
            { offset: 0.2, color: 'rgba(156,107,211,0.3)' },
            { offset: 1, color: 'rgba(156,107,211,0)' }
          ])
        }
      },
      z: -12,

      data: []
    }
  ]
}

export default option
