<template>
  <div class="linear-map">
    <topTips :title="'出库入库'"></topTips>
    <div id="mini_data"></div>
  </div>
</template>

<script>
import topTips from '../topTips.vue'
import part2 from './part2.js'

export default {
  components: {
    topTips
  },
  data() {
    return {}
  },
  mounted() {
    const myChart1 = this.$echarts.init(document.getElementById('mini_data'))
    myChart1.setOption(part2)
  }
}
</script>

<style lang="scss" scoped>
.linear-map {
  position: relative;
  height: 280px;
  padding-top: 30px;

  #mini_data {
    position: absolute;
    left: 0;
    bottom: -20px;
    width: 108%;
    height: 310px;
    transform: translate(-20px, 8px);
  }
}
</style>
