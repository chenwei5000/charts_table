<template>
  <div>
    <topTips :title="'物流统计'"></topTips>
    <div id="show_data"></div>
  </div>
</template>

<script>
import topTips from '../topTips.vue'
import cBottom from './cBottom.js'

export default {
  components: {
    topTips
  },
  data() {
    return {
      searchUrl:
        'http://192.168.0.188:9527/erp-service/countcerReports/containerItems?accessToken=MUQ5RjMwRjcwMUE0NkUwRkUxNkUyMkNDNkZFNDNBOTEsMg==&startDate=2020-06-15&endDate=2020-06-21',
      xName: []
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    async initData() {
      const { data } = await this.$axios.get(this.searchUrl)

      // console.log(data)
      data.forEach(item => {
        this.xName.push(item.name)
        cBottom.series[2].data.push(item.planCartonQty)
        cBottom.series[1].data.push(item.shippedCartonQty)
        cBottom.series[0].data.push(item.shippedProportion)
      })

      cBottom.xAxis.data = this.xName
      cBottom.tooltip = {
        trigger: 'axis',
        backgroundColor: 'rgba(63,81,181,0.6)',
        axisPointer: {
          type: 'shadow',
          label: {
            show: true,
            backgroundColor: '#7B7DDC'
          }
        },
        formatter(params) {
          const dataItem = data[params[0].dataIndex]
          return `
            ${params[0].marker}时间: ${dataItem.etdTime} <br/>
            ${params[0].marker}方式: ${dataItem.type} <br/>
            ${params[0].marker}发货港: ${dataItem.fromPortOfLoading} <br/>
            ${params[0].marker}收货港: ${dataItem.toPortOfLoading} <br/>
            ${params[0].marker}分类: ${dataItem.categoryName} <br/>
            ${params[0].marker}箱数: ${dataItem.shippedCartonQty}/${dataItem.planCartonQty} 箱<br/>
            ${params[0].marker}件数: ${dataItem.shippedQty}/${dataItem.planQty} 件<br/>
            ${params[0].marker}体积: ${dataItem.shippedVolume}/${dataItem.planVolume} m³<br/>
          `
        }
      }
      const myChart = this.$echarts.init(document.getElementById('show_data'))
      myChart.setOption(cBottom)
    }
  }
}
</script>

<style lang="scss" scoped>
#show_data {
  position: absolute;
  top: 20px;
  left: -15px;
  width: 100%;
  height: 100%;
}
</style>
