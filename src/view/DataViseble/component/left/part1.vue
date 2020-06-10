<template>
  <div class="sex-map">
    <topTips :title="'下单效率'"></topTips>
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
  width: 100%;
  height: 200px;

  #part_sex {
    height: 200px;
    transform: translate(-10px, 15px);
  }
}
</style>
