var dataStyle = {
  normal: {
    label: {
      show: false
    },
    labelLine: {
      show: false
    },
    shadowBlur: 0,
    shadowColor: '#203665'
  }
}
const option = {
  series: [
    {
      name: '第一个圆环',
      type: 'pie',
      clockWise: false,
      radius: [35, 45],
      itemStyle: dataStyle,
      hoverAnimation: false,
      center: ['17%', '50%'],
      data: [
        {
          value: 25,
          label: {
            normal: {
              rich: {
                a: {
                  color: '#3a7ad5',
                  align: 'center',
                  fontSize: 14,
                  fontWeight: 'bold'
                },
                b: {
                  color: '#fff',
                  align: 'center',
                  fontSize: 10
                }
              },
              formatter: function(params) {
                return (
                  '{b|在线统计}\n\n' +
                  '{a|' +
                  params.value +
                  '个}' +
                  '\n\n{b|增长2%}'
                )
              },
              position: 'center',
              show: true,
              textStyle: {
                fontSize: '3',
                fontWeight: 'normal',
                color: '#fff'
              }
            }
          },
          itemStyle: {
            normal: {
              color: '#2c6cc4',
              shadowColor: '#2c6cc4',
              shadowBlur: 0
            }
          }
        },
        {
          value: 75,
          name: 'invisible',
          itemStyle: {
            normal: {
              color: '#24375c'
            },
            emphasis: {
              color: '#24375c'
            }
          }
        }
      ]
    },
    {
      name: '第二个圆环',
      type: 'pie',
      clockWise: false,
      radius: [35, 45],
      itemStyle: dataStyle,
      hoverAnimation: false,
      center: ['50%', '50%'],
      data: [
        {
          value: 50,
          label: {
            normal: {
              rich: {
                a: {
                  color: '#d03e93',
                  align: 'center',
                  fontSize: 14,
                  fontWeight: 'bold'
                },
                b: {
                  color: '#fff',
                  align: 'center',
                  fontSize: 10
                }
              },
              formatter: function(params) {
                return (
                  '{b|离线统计}\n\n' +
                  '{a|' +
                  params.value +
                  '个}' +
                  '\n\n{b|增长2%}'
                )
              },
              position: 'center',
              show: true,
              textStyle: {
                fontSize: '3',
                color: '#fff'
              }
            }
          },
          itemStyle: {
            normal: {
              color: '#ef45ac',
              shadowColor: '#ef45ac',
              shadowBlur: 0
            }
          }
        },
        {
          value: 50,
          name: 'invisible',
          itemStyle: {
            normal: {
              color: '#412a4e'
            },
            emphasis: {
              color: '#412a4e'
            }
          }
        }
      ]
    },
    {
      name: '第三个圆环',
      type: 'pie',
      clockWise: false,
      radius: [35, 45],
      itemStyle: dataStyle,
      hoverAnimation: false,
      center: ['83%', '50%'],
      data: [
        {
          value: 75,
          label: {
            normal: {
              rich: {
                a: {
                  color: '#603dd0',
                  align: 'center',
                  fontSize: 14
                },
                b: {
                  color: '#fff',
                  align: 'center',
                  fontSize: 10
                }
              },
              formatter: function(params) {
                return (
                  '{b|缺报统计}\n\n' +
                  '{a|' +
                  params.value +
                  '个}' +
                  '\n\n{b|增长2%}'
                )
              },
              position: 'center',
              show: true,
              textStyle: {
                fontSize: '3',
                color: '#fff'
              }
            }
          },
          itemStyle: {
            normal: {
              color: '#613fd1',
              shadowColor: '#613fd1',
              shadowBlur: 0
            }
          }
        },
        {
          value: 25,
          name: 'invisible',
          itemStyle: {
            normal: {
              color: '#453284'
            },
            emphasis: {
              color: '#453284'
            }
          }
        }
      ]
    }
  ]
}

export default option
