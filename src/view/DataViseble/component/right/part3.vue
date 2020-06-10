<template>
  <div class="lei-map">
    <topTips :title="'销售排名'"></topTips>
    <div id="part_03"></div>
  </div>
</template>

<script>
import topTips from '../topTips.vue'
import part03 from './part3.js'

export default {
  components: {
    topTips
  },
  mounted() {
    const myChart1 = this.$echarts.init(document.getElementById('part_03'))
    myChart1.setOption(part03)
  }
}
</script>

<style lang="scss" scoped>
.lei-map {
  position: relative;
  width: 100%;
  padding-top: 20px;

  #part_03 {
    height: 200px;
    margin-left: -8px;
  }
}
</style>
