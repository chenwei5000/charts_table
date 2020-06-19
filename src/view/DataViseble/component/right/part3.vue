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
import _ from 'lodash'
import { toThousandFilter } from '@/api/currency.js'
import topTips from '../topTips.vue'
import part03 from './part3.js'

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
      sortStr: ['inTotalAmount', 'outTotalAmount', 'stockTotalAmount'],
      dataList: [],
      legendName: [],
      dataInfo: [[], [], []]
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    async initData() {
      const { data } = await this.$axios.get(this.searchUrl)
      this.totalData = data
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
      let arr = _.cloneDeep(d)
      arr = _.sortBy(d, item => -item[this.sortStr[this.num]])
      arr = arr.splice(0, 10)
      // 2.0 遍历数据，存储需要的信息
      arr.forEach(item => {
        this.dataInfo[0].push({
          name: item.name,
          value: item[this.sortStr[0]],
          xNum: toThousandFilter(item.inTotalCartonQty),
          boxNum: toThousandFilter(item.inTotalQty),
          CNYNum: toThousandFilter(item.inTotalCNYAmount),
          USDNum: toThousandFilter(item.inTotalUSDAmount)
        })
        this.dataInfo[1].push({
          name: item.name,
          value: item[this.sortStr[1]],
          xNum: toThousandFilter(item.outTotalCartonQty),
          boxNum: toThousandFilter(item.outTotalQty),
          CNYNum: toThousandFilter(item.outTotalCNYAmount),
          USDNum: toThousandFilter(item.outTotalUSDAmount)
        })
        this.dataInfo[2].push({
          name: item.name,
          value: item[this.sortStr[2]],
          xNum: toThousandFilter(item.stockCartonQty),
          boxNum: toThousandFilter(item.stockQty),
          CNYNum: toThousandFilter(item.stockCNYAmount),
          USDNum: toThousandFilter(item.stockUSAAmount)
        })
      })
    },
    setOptions() {
      this.dataInfo[this.num] = _.sortBy(
        this.dataInfo[this.num],
        item => -item.value
      )
      const legendName = []
      this.dataInfo[this.num].forEach(item => {
        legendName.push(item.name)
      })
      part03.legend.data = legendName
      part03.series[0].data = this.dataInfo[this.num]
      const myChart1 = this.$echarts.init(document.getElementById('part_03'))
      myChart1.setOption(part03)
    },
    checkItem(i) {
      // 改变索引
      this.num = i
      this.checkData(this.totalData)
      this.$refs.clickRef.children.forEach(item => {
        item.removeAttribute('class')
      })
      this.$refs.clickRef.children[i].classList.add('cur')
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
