<template>
  <div class="lei-map" @mouseenter="clearInter" @mouseleave="openInter">
    <topTips :title="'供货商占比'"></topTips>
    <div class="check-data">
      <ul ref="clickRef">
        <li class="cur" @click="checkItem(0)">
          <a href="javascript:;">入库</a>/
        </li>
        <li @click="checkItem(1)"><a href="javascript:;">出口</a>/</li>
        <li @click="checkItem(2)">
          <a href="javascript:;">库存</a>
        </li>
      </ul>
    </div>
    <div id="part_03"></div>
  </div>
</template>

<script>
import topTips from '../topTips.vue'
import part03 from './part3.js'
import _ from 'lodash'

export default {
  components: {
    topTips
  },
  data() {
    return {
      searchUrl:
        'http://192.168.0.188:9527/erp-service/countcerReports/supplierProportion?accessToken=MUQ5RjMwRjcwMUE0NkUwRkUxNkUyMkNDNkZFNDNBOTEsMg==&startDate=2020-06-15&endDate=2020-06-21',
      num: 0,
      totalData: [],
      sortStr: ['inTotalAmount', 'outTotalAmount', 'stockAmount'],
      dataList: [],
      legendName: [],
      dataInfo: [[], [], []]
    }
  },
  mounted() {
    this.initData()

    // const myChart1 = this.$echarts.init(document.getElementById('part_03'))
    // myChart1.setOption(part03)
  },
  methods: {
    async initData() {
      const { data } = await this.$axios.get(this.searchUrl)
      this.checkData(data)

      this.setOptions()
      // 自动切换 tab 栏
      this.timer = setInterval(() => {
        this.checkItem(this.num)
        // 重新渲染数据
        this.setOptions()
        if (this.num === 2) return (this.num = 0)
        this.num++
      }, 3000)
    },
    checkData(d) {
      this.dataInfo = [[], [], []]
      this.legendName = []
      // 1.0 根据入库人民币金额排序， 取出前10名
      this.totalData = _.reverse(_.sortBy(d, [this.sortStr[this.num]]))
      let arr = _.cloneDeep(this.totalData)
      arr = arr.splice(0, 10)
      // 2.0 遍历数据，存储需要的信息
      arr.forEach(item => {
        this.legendName.push(item.name)
        this.dataInfo[0].push({
          name: item.name,
          value: item.inTotalQty
        })
        this.dataInfo[1].push({
          name: item.name,
          value: item.outTotalQty
        })
        this.dataInfo[2].push({
          name: item.name,
          value: item.stockQty
        })
      })
    },
    setOptions() {
      part03.legend.data = this.legendName
      part03.series[0].data = this.dataInfo[this.num]
      const myChart1 = this.$echarts.init(document.getElementById('part_03'))
      myChart1.setOption(part03)
    },
    checkItem(i) {
      this.checkData(this.totalData)
      this.$refs.clickRef.children.forEach(item => {
        item.removeAttribute('class')
      })
      this.$refs.clickRef.children[i].classList.add('cur')
      // 改变索引
      this.num = i
      this.setOptions()
    },
    clearInter() {
      clearInterval(this.timer)
    },
    openInter() {
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        this.checkItem(this.num)
        // 重新渲染数据
        this.setOptions()
        if (this.num === 2) return (this.num = 0)
        this.num++
      }, 3000)
    }
  }
}
</script>

<style lang="scss" scoped>
.lei-map {
  position: relative;
  width: 100%;
  padding-top: 15px;

  .check-data {
    position: absolute;
    top: 2px;
    right: 20px;
    z-index: 10086;

    li {
      float: left;
      color: #fff;
      border-bottom: 2px solid transparent;
      cursor: pointer;

      a {
        font-weight: 700;
        display: inline-block;
        padding: 5px;
        color: #fff;
      }
    }

    .cur a {
      color: #f80;
      border-bottom: 2px solid #f80;
    }
  }

  #part_03 {
    height: 200px;
    margin-left: -18px;
  }
}
</style>
