<template>
  <div class="linear-map">
    <topTips :title="'无锡仓库使用统计'"></topTips>
    <div id="mini_data"></div>
  </div>
</template>

<script>
import topTips from '../topTips.vue'
import part2 from './part2.js'
// import option from './part2.js'

export default {
  components: {
    topTips
  },
  data() {
    return {
      searchUrl:
        'http://192.168.0.188:9527/erp-service/countcerReports/stocks?accessToken=MUQ5RjMwRjcwMUE0NkUwRkUxNkUyMkNDNkZFNDNBOTEsMg==&endDate=2020-06-21'
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    async initData() {
      const { data } = await this.$axios.get(this.searchUrl)
      // console.log(data)
      const xAxisArr = []
      data.forEach(item => {
        xAxisArr.push(item.week)
        part2.series[0].data.push(item.inTotalCartonQty)
        part2.series[1].data.push(item.outTotalCartonQty)
        part2.series[2].data.push(item.stockCartonQty)
      })
      part2.xAxis[0].data = xAxisArr

      // 鼠标移上折线图显示的信息
      part2.tooltip = {
        show: true,
        trigger: 'item',
        formatter(param) {
          console.log(data[param.dataIndex])
          let str = ''
          if (param.seriesIndex === 0) {
            str = `
            ${param.marker}开始: ${data[param.dataIndex].startDate}<br />
            ${param.marker}结束: ${data[param.dataIndex].endDate}<br />
            ${param.marker}箱数: ${
              data[param.dataIndex].inTotalCartonQty
            } 箱<br />
            ${param.marker}件数: ${data[param.dataIndex].inTotalQty} 件<br />
            ${param.marker}金额: ¥ ${
              data[param.dataIndex].inTotalCNYAmount
            }<br />
            ${param.marker}金额: $ ${
              data[param.dataIndex].inTotalUSDAmount
            }<br />`
          } else if (param.seriesIndex === 1) {
            str = `
            ${param.marker}开始: ${data[param.dataIndex].startDate}<br />
            ${param.marker}结束: ${data[param.dataIndex].endDate}<br />
            ${param.marker}箱数: ${
              data[param.dataIndex].outTotalCartonQty
            } 箱<br />
            ${param.marker}件数: ${data[param.dataIndex].outTotalQty} 件<br />
            ${param.marker}金额: ¥ ${
              data[param.dataIndex].outTotalCNYAmount
            }<br />
            ${param.marker}金额: $ ${
              data[param.dataIndex].outTotalUSDAmount
            }<br />`
          } else if (param.seriesIndex === 2) {
            str = `
            ${param.marker}开始: ${data[param.dataIndex].startDate}<br />
            ${param.marker}结束: ${data[param.dataIndex].endDate}<br />
            ${param.marker}箱数: ${
              data[param.dataIndex].stockCartonQty
            } 箱<br />
            ${param.marker}件数: ${data[param.dataIndex].stockQty} 件<br />
            ${param.marker}金额: ¥ ${data[param.dataIndex].stockCNYAmount}<br />
            ${param.marker}$ ${data[param.dataIndex].stockUSAAmount}<br />`
          }

          return str
        }
      }
      const myChart1 = this.$echarts.init(document.getElementById('mini_data'))
      myChart1.setOption(part2)
    }
  }
}
</script>

<style lang="scss" scoped>
.linear-map {
  position: relative;
  height: 38%;

  #mini_data {
    position: absolute;
    left: 0;
    bottom: -25px;
    width: 100%;
    height: 240px;
    transform: translate(-18px, -7px);
  }
}
</style>
