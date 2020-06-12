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
    return {}
  },
  mounted() {
    const myChart = this.$echarts.init(document.getElementById('show_data'))
    myChart.setOption(cBottom)
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
