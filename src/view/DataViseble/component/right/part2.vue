<template>
  <div class="sex-map">
    <topTips :title="'消费人群统计'"></topTips>
    <div id="part_02"></div>
  </div>
</template>

<script>
import topTips from '../topTips.vue'
import part02 from './part2.js'

export default {
  components: {
    topTips
  },
  mounted() {
    const myChart1 = this.$echarts.init(document.getElementById('part_02'))
    myChart1.setOption(part02)
  }
}
</script>

<style lang="scss" scoped>
.sex-map {
  position: relative;
  width: 100%;
  padding-top: 40px;

  #part_02 {
    height: 220px;
    transform: translate(-5px, 0px);
  }
}
</style>
