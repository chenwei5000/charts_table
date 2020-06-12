<template>
  <div class="map-content">
    <!-- 1.0 世界地图 -->
    <div class="world-map" id="map_show"></div>

    <!-- 2.0 一个折线图 -->
    <div class="zhe clearfix">
      <cBottom></cBottom>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import '../world.js'
import cBottom from './cBottom.vue'
import option1 from './map.js'

export default {
  components: {
    cBottom
  },
  data() {
    return {
      dataList: [],
      searchUrl:
        'https://erp.kuihuajia.com/erp-service/linerShippingPlans?accessToken=NDAzRDREQ0Y3OEMzRTZDMzczMjZFOTU4NEExM0FGQUIsMg==&relations=[%22fromWarehouse%22,%22toWarehouse%22,%22creator%22]&sort=etdTime&dir=desc&filters={%22groupOp%22:%22AND%22,%22rules%22:[{%22field%22:%22etdTime%22,%22op%22:%22timeRange%22,%22data%22:%222020-06-14,%202020-06-20%22}]}'
    }
  },
  mounted() {
    this.init()

    var myChart = this.$echarts.init(document.getElementById('map_show'))
    myChart.setOption(option1)
  },
  methods: {
    async init() {
      const { data } = await this.$axios.get(this.searchUrl)
      this.dataList = data
    }
  }
}
</script>

<style lang="scss" scoped>
.map-content {
  position: relative;
  width: 100%;
  height: 100%;
}

.world-map {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-54%, -20%);
  width: 130%;
  height: 500px;
}

.zhe {
  height: 550px;

  div {
    position: relative;
    left: -20px;
    width: 105%;
    height: 66%;
    margin-top: 280px;
    overflow: hidden;
  }
}
</style>
