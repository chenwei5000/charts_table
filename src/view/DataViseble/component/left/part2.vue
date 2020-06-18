<template>
  <div class="linear-map">
    <topTips :title="'库存量（周）'"></topTips>
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
