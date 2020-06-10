<template>
  <div>
    <topTips :title="'出货统计'" class="tips"></topTips>
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
.tips {
  transform: translate(-10px, -15px);
}

#show_data {
  position: absolute;
  top: -8px;
  left: -40px;
  width: 100%;
  height: 90%;
}
</style>
