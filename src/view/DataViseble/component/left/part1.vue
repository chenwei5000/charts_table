<template>
  <div class="sex-map" @mouseenter="clearInter" @mouseleave="openInter">
    <topTips :title="'仓库占比'"></topTips>
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
    <div id="part_sex"></div>
  </div>
</template>

<script>
import _ from 'lodash'
import { toThousandFilter } from '@/api/currency.js'
import topTips from '../topTips.vue'
import option from './part1.js'

export default {
  components: {
    topTips
  },
  data() {
    return {
      searchUrl:
        'http://192.168.0.188:9527/erp-service/countcerReports/warehouseProportion?accessToken=MUQ5RjMwRjcwMUE0NkUwRkUxNkUyMkNDNkZFNDNBOTEsMg==&startDate=2020-06-15&endDate=2020-06-21',
      num: 0,
      colorArr: [
        '#37a2da',
        '#32c5e9',
        '#9fe6b8',
        '#ffdb5c',
        '#ff9f7f',
        '#fb7293',
        '#e7bcf3',
        '#8378ea'
      ],
      legendArr: [],
      dataList: [[], [], []],
      sortStr: ['inTotalAmount', 'outTotalAmount', 'stockTotalAmount']
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    async initData() {
      const { data } = await this.$axios.get(this.searchUrl)
      this.totalData = data

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
    setOptions() {
      this.checkData(this.totalData)
      // 设置 legend 导航信息，设置实质的数据
      option.legend.data = this.legendArr
      option.series[0].data = this.dataList[this.num]
      const myChart1 = this.$echarts.init(document.getElementById('part_sex'))
      myChart1.setOption(option)
    },
    checkData(d) {
      this.legendArr = []
      this.dataList = [[], [], []]
      let arr = _.cloneDeep(d)
      arr = _.sortBy(arr, item => -item[this.sortStr[this.num]])

      // 获取legend数据标题
      arr.forEach(item => {
        this.legendArr.push(item.name)
        this.dataList[0].push({
          name: item.name,
          value: item[this.sortStr[0]],
          xNum: toThousandFilter(item.inTotalCartonQty),
          boxNum: toThousandFilter(item.inTotalQty),
          CNYNum: toThousandFilter(item.inTotalCNYAmount),
          USDNum: toThousandFilter(item.inTotalUSDAmount)
        })
        this.dataList[1].push({
          name: item.name,
          value: item[this.sortStr[1]],
          xNum: toThousandFilter(item.outTotalCartonQty),
          boxNum: toThousandFilter(item.outTotalQty),
          CNYNum: toThousandFilter(item.outTotalCNYAmount),
          USDNum: toThousandFilter(item.outTotalUSDAmount)
        })
        this.dataList[2].push({
          name: item.name,
          value: item[this.sortStr[2]],
          xNum: toThousandFilter(item.stockCartonQty),
          boxNum: toThousandFilter(item.stockQty),
          CNYNum: toThousandFilter(item.stockCNYAmount),
          USDNum: toThousandFilter(item.stockUSAAmount)
        })
      })
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
.sex-map {
  position: relative;
  z-index: 666;
  width: 100%;

  .check-data {
    position: absolute;
    top: 10px;
    right: 42px;
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

  #part_sex {
    height: 240px;
    transform: translateY(10px);
  }
}
</style>
