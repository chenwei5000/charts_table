<template>
  <div class="sex-map">
    <topTips :title="'仓库占比'"></topTips>
    <div id="part_sex"></div>
  </div>
</template>

<script>
import topTips from '../topTips.vue'
import option from './part1.js'

export default {
  components: {
    topTips
  },
  mounted() {
    const myChart1 = this.$echarts.init(document.getElementById('part_sex'))
    myChart1.setOption(option)
  }
}
</script>

<style lang="scss" scoped>
.sex-map {
  position: relative;
  z-index: 666;
  width: 100%;

  #part_sex {
    height: 240px;
    transform: translateY(10px);
  }
}
</style>
