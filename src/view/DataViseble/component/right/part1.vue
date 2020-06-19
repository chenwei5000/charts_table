<template>
  <div class="circle-map clearfix">
    <topTips :title="'品海总览'"></topTips>
    <div class="circle-inner" id="circle_inner"></div>
  </div>
</template>

<script>
import topTips from '../topTips.vue'

export default {
  components: {
    topTips
  },
  data() {
    return {
      searchUrl:
        'http://192.168.0.188:9527/erp-service/countcerReports/statistics?accessToken=MUQ5RjMwRjcwMUE0NkUwRkUxNkUyMkNDNkZFNDNBOTEsMg==&startDate=2020-06-15&endDate=2020-06-21',
      dataList: [],
      dataStyle: {
        normal: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          shadowBlur: 5,
          shadowColor: '#203665'
        }
      },
      options: {
        series: []
      },
      colors: {
        rich: ['#3a7ad5', '#d03e93', '#ff9800'],
        itemStyle: ['#2c6cc4', '#ef45ac', '#ff5722'],
        itemStyleNor: ['#24375c', '#412a4e', '#60210d'],
        itemStyleEmp: ['#24375c', '#412a4e', '#60210d']
      }
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    async initData() {
      let num = 0
      const dataInfo = [
        ['18%', '50%'],
        ['50%', '50%'],
        ['82%', '50%']
      ]
      const { data } = await this.$axios.get(this.searchUrl)
      // console.log(data)
      for (var k in data) {
        const str = k
        const item = data[k]
        this.dataList.push({
          name: `第${num}个圆环`,
          type: 'pie',
          clockWise: false,
          radius: [40, 50],
          itemStyle: this.dataStyle,
          hoverAnimation: true,
          center: dataInfo[num],
          data: [
            {
              value: item.proportion,
              label: {
                normal: {
                  rich: {
                    a: {
                      color: this.colors.rich[num],
                      align: 'center',
                      fontSize: 14,
                      fontWeight: 'bold'
                    },
                    b: {
                      color: '#fff',
                      align: 'center',
                      fontSize: 12
                    }
                  },
                  formatter: function(params) {
                    return (
                      `{b|${str}}\n\n` +
                      `{a|${item.value}${item.unit}}` +
                      `\n\n{b|${item.text}${item.proportion}%}`
                    )
                  },
                  position: 'center',
                  show: true,
                  textStyle: {
                    fontSize: '5',
                    fontWeight: 'normal',
                    color: '#fff'
                  }
                }
              },
              itemStyle: {
                normal: {
                  color: this.colors.itemStyle[num],
                  shadowColor: this.colors.itemStyle[num],
                  shadowBlur: 0
                }
              }
            },
            {
              value: 100 - item.proportion,
              name: 'invisible',
              itemStyle: {
                normal: {
                  color: this.colors.itemStyleNor[num]
                },
                emphasis: {
                  color: this.colors.itemStyleEmp[num]
                }
              }
            }
          ]
        })
        num++
      }

      this.options.series = this.dataList
      const myChart1 = this.$echarts.init(
        document.getElementById('circle_inner')
      )
      myChart1.setOption(this.options)
    }
  }
}
</script>

<style lang="scss" scoped>
.circle-map {
  width: 100%;
  position: relative;

  .circle-inner {
    width: 100%;
    height: 145px;
    padding-top: 10px;
    overflow: hidden;
    transform: translateY(10px);
  }
}
</style>
