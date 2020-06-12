import echarts from 'echarts'

// const CubeLeft = echarts.graphic.extendShape({
//   shape: {
//     x: 0,
//     y: 0
//   },
//   buildPath: function(ctx, shape) {
//     const xAxisPoint = shape.xAxisPoint
//     const c0 = [shape.x, shape.y]
//     const c1 = [shape.x - 9, shape.y - 9]
//     const c2 = [xAxisPoint[0] - 9, xAxisPoint[1] - 9]
//     const c3 = [xAxisPoint[0], xAxisPoint[1]]
//     ctx
//       .moveTo(c0[0], c0[1])
//       .lineTo(c1[0], c1[1])
//       .lineTo(c2[0], c2[1])
//       .lineTo(c3[0], c3[1])
//       .closePath()
//   }
// })
// const CubeRight = echarts.graphic.extendShape({
//   shape: {
//     x: 0,
//     y: 0
//   },
//   buildPath: function(ctx, shape) {
//     const xAxisPoint = shape.xAxisPoint
//     const c1 = [shape.x, shape.y]
//     const c2 = [xAxisPoint[0], xAxisPoint[1]]
//     const c3 = [xAxisPoint[0] + 18, xAxisPoint[1] - 9]
//     const c4 = [shape.x + 18, shape.y - 9]
//     ctx
//       .moveTo(c1[0], c1[1])
//       .lineTo(c2[0], c2[1])
//       .lineTo(c3[0], c3[1])
//       .lineTo(c4[0], c4[1])
//       .closePath()
//   }
// })
// const CubeTop = echarts.graphic.extendShape({
//   shape: {
//     x: 0,
//     y: 0
//   },
//   buildPath: function(ctx, shape) {
//     const c1 = [shape.x, shape.y]
//     const c2 = [shape.x + 18, shape.y - 9]
//     const c3 = [shape.x + 9, shape.y - 18]
//     const c4 = [shape.x - 9, shape.y - 9]
//     ctx
//       .moveTo(c1[0], c1[1])
//       .lineTo(c2[0], c2[1])
//       .lineTo(c3[0], c3[1])
//       .lineTo(c4[0], c4[1])
//       .closePath()
//   }
// })
// echarts.graphic.registerShape('CubeLeft', CubeLeft)
// echarts.graphic.registerShape('CubeRight', CubeRight)
// echarts.graphic.registerShape('CubeTop', CubeTop)
// const MAX = [
//   6000,
//   6000,
//   6000,
//   6000,
//   6000,
//   5000,
//   4000,
//   3000,
//   2000,
//   4000,
//   3000,
//   2000
// ]
// const VALUE = [
//   2012,
//   1230,
//   3790,
//   2349,
//   1654,
//   1230,
//   3790,
//   2349,
//   1654,
//   3790,
//   2349,
//   1654
// ]
// const option = {
//   backgroundColor: 'transparent', // #012366
//   title: {
//     text: '',
//     top: 32,
//     left: 18,
//     textStyle: {
//       color: '#00F6FF',
//       fontSize: 24
//     }
//   },
//   grid: {
//     left: 18,
//     right: 40,
//     bottom: '19%',
//     top: 107,
//     containLabel: true
//   },
//   xAxis: {
//     type: 'category',
//     data: [
//       '德州',
//       '德城区',
//       '陵城区',
//       '禹城市',
//       '乐陵市',
//       '临邑县',
//       '平原县',
//       '夏津县',
//       '武城县',
//       '庆云县',
//       '宁津县',
//       '齐河县'
//     ],
//     axisLine: {
//       show: true,
//       lineStyle: {
//         color: '#fff'
//       }
//     },
//     offset: 1,
//     axisTick: {
//       show: false,
//       length: 2,
//       alignWithLabel: false,
//       lineStyle: {
//         color: '#fff'
//       }
//     },
//     axisLabel: {
//       fontSize: 12,
//       interval: 0
//     }
//   },
//   yAxis: {
//     type: 'value',
//     axisLine: {
//       show: true,
//       lineStyle: {
//         color: '#fff'
//       }
//     },
//     splitLine: {
//       show: false
//     },
//     axisTick: {
//       show: false
//     },
//     axisLabel: {
//       fontSize: 12
//     },
//     boundaryGap: ['20%', '20%']
//   },
//   series: [
//     {
//       type: 'custom',
//       renderItem: function(params, api) {
//         const location = api.coord([api.value(0), api.value(1)])
//         return {
//           type: 'group',
//           children: [
//             {
//               type: 'CubeLeft',
//               shape: {
//                 api,
//                 xValue: api.value(0),
//                 yValue: api.value(1),
//                 x: location[0],
//                 y: location[1],
//                 xAxisPoint: api.coord([api.value(0), 0])
//               },
//               style: {
//                 fill: 'rgba(47,102,192,.27)'
//               }
//             },
//             {
//               type: 'CubeRight',
//               shape: {
//                 api,
//                 xValue: api.value(0),
//                 yValue: api.value(1),
//                 x: location[0],
//                 y: location[1],
//                 xAxisPoint: api.coord([api.value(0), 0])
//               },
//               style: {
//                 fill: 'rgba(59,128,226,.27)'
//               }
//             },
//             {
//               type: 'CubeTop',
//               shape: {
//                 api,
//                 xValue: api.value(0),
//                 yValue: api.value(1),
//                 x: location[0],
//                 y: location[1],
//                 xAxisPoint: api.coord([api.value(0), 0])
//               },
//               style: {
//                 fill: 'rgba(72,156,221,.27)'
//               }
//             }
//           ]
//         }
//       },
//       data: MAX
//     },
//     {
//       type: 'custom',
//       renderItem: (params, api) => {
//         const location = api.coord([api.value(0), api.value(1)])
//         return {
//           type: 'group',
//           children: [
//             {
//               type: 'CubeLeft',
//               shape: {
//                 api,
//                 xValue: api.value(0),
//                 yValue: api.value(1),
//                 x: location[0],
//                 y: location[1],
//                 xAxisPoint: api.coord([api.value(0), 0])
//               },
//               style: {
//                 fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//                   {
//                     offset: 0,
//                     color: '#3B80E2'
//                   },
//                   {
//                     offset: 1,
//                     color: '#49BEE5'
//                   }
//                 ])
//               }
//             },
//             {
//               type: 'CubeRight',
//               shape: {
//                 api,
//                 xValue: api.value(0),
//                 yValue: api.value(1),
//                 x: location[0],
//                 y: location[1],
//                 xAxisPoint: api.coord([api.value(0), 0])
//               },
//               style: {
//                 fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//                   {
//                     offset: 0,
//                     color: '#3B80E2'
//                   },
//                   {
//                     offset: 1,
//                     color: '#49BEE5'
//                   }
//                 ])
//               }
//             },
//             {
//               type: 'CubeTop',
//               shape: {
//                 api,
//                 xValue: api.value(0),
//                 yValue: api.value(1),
//                 x: location[0],
//                 y: location[1],
//                 xAxisPoint: api.coord([api.value(0), 0])
//               },
//               style: {
//                 fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//                   {
//                     offset: 0,
//                     color: '#3B80E2'
//                   },
//                   {
//                     offset: 1,
//                     color: '#49BEE5'
//                   }
//                 ])
//               }
//             }
//           ]
//         }
//       },
//       data: VALUE
//     },
//     {
//       type: 'bar',
//       label: {
//         normal: {
//           show: true,
//           position: 'top',
//           formatter: e => {
//             switch (e.name) {
//               case '10kV线路':
//                 return VALUE[0]
//               case '公用配变':
//                 return VALUE[1]
//               case '35kV主变':
//                 return VALUE[2]
//               case '水':
//             }
//           },
//           fontSize: 12,
//           color: '#fff',
//           offset: [4, -25]
//         }
//       },
//       itemStyle: {
//         color: 'transparent'
//       },
//       data: MAX
//     }
//   ]
// }

// Generate data
var category = [
  '市区',
  '万州',
  '江北',
  '南岸',
  '北碚',
  '綦南',
  '长寿',
  '永川',
  '璧山',
  '江津',
  '城口',
  '大足',
  '垫江',
  '丰都',
  '奉节',
  '合川',
  '江津区',
  '开州',
  '南川',
  '彭水',
  '黔江',
  '石柱',
  '铜梁',
  '潼南',
  '巫山',
  '巫溪',
  '武隆',
  '秀山',
  '酉阳',
  '云阳',
  '忠县',
  '川东',
  '检修'
]
// var dottedBase = []
var lineData = [
  18092,
  20728,
  24045,
  28348,
  32808,
  36097,
  39867,
  44715,
  48444,
  50415,
  56061,
  62677,
  59521,
  67560,
  18092,
  20728,
  24045,
  28348,
  32808,
  36097,
  39867,
  44715,
  48444,
  50415,
  36097,
  39867,
  44715,
  48444,
  50415,
  50061,
  32677,
  49521,
  32808
]
var barData = [
  4600,
  5000,
  5500,
  6500,
  7500,
  8500,
  9900,
  12500,
  14000,
  21500,
  23200,
  24450,
  25250,
  33300,
  4600,
  5000,
  5500,
  6500,
  7500,
  8500,
  9900,
  22500,
  14000,
  21500,
  8500,
  9900,
  12500,
  14000,
  21500,
  23200,
  24450,
  25250,
  7500
]
var rateData = []
// 32808
for (var i = 0; i < 33; i++) {
  // var date = i+2001;
  // category.push(date)
  var rate = barData[i] / lineData[i]
  rateData[i] = rate.toFixed(2)
}

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
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(255,255,255,0.1)',
    axisPointer: {
      type: 'shadow',
      label: {
        show: true,
        backgroundColor: '#7B7DDC'
      }
    }
  },
  legend: {
    data: ['已发货', '计划发货', '发货率'],
    textStyle: {
      color: '#B4B4B4'
    },
    top: '-1%',
    right: '5%'
  },
  grid: {
    x: '10%',
    width: '84%',
    y: '10%'
  },
  xAxis: {
    data: category,
    axisLine: {
      lineStyle: {
        color: '#B4B4B4'
      }
    },
    axisTick: {
      show: false
    }
  },
  yAxis: [
    {
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
      data: rateData
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
      data: barData
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

      data: lineData
    }
  ]
}

export default option
