<template>
  <div class="circle-map clearfix">
    <topTips :title="'仓库使用'"></topTips>
    <div class="circle-inner" id="circle_inner"></div>
  </div>
</template>

<script>
import topTips from '../topTips.vue'
import part01 from './part1.js'

export default {
  components: {
    topTips
  },
  mounted() {
    const myChart1 = this.$echarts.init(document.getElementById('circle_inner'))
    myChart1.setOption(part01)
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
