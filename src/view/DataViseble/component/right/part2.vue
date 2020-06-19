<template>
  <div class="top-data" @mouseenter="clearInter" @mouseleave="openInter">
    <topTips :title="'Top10 排名'"></topTips>
    <div class="check-data">
      <ul ref="clickRef">
        <li class="cur" @click="checkItem(0)">
          <a href="javascript:;">入库</a>/
        </li>
        <li @click="checkItem(1)">
          <a href="javascript:;">出口</a>/
        </li>
        <li @click="checkItem(2)">
          <a href="javascript:;">库存</a>
        </li>
      </ul>
    </div>
    <div id="part_02"></div>
  </div>
</template>

<script>
import _ from 'lodash'
import { toThousandFilter } from '@/api/currency.js'
import topTips from '../topTips.vue'
import part02 from './part2.js'

export default {
  components: {
    topTips
  },
  data() {
    return {
      timer: null,
      searchUrl:
        'http://192.168.0.188:9527/erp-service/countcerReports/categoryProportion?accessToken=MUQ5RjMwRjcwMUE0NkUwRkUxNkUyMkNDNkZFNDNBOTEsMg==&startDate=2020-06-15&endDate=2020-06-21',
      num: 0,
      totalData: [],
      sortStr: ['inTotalAmount', 'outTotalAmount', 'stockTotalAmount'],
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
      const arr = _.sortBy(this.dataInfo[this.num], item => item.value)
      const legendName = []
      part02.series[0].data = []
      arr.forEach(item => {
        legendName.push(item.name)
        part02.series[0].data.push(item.value)
      })
      part02.yAxis[0].data = legendName
      part02.series[0].label = {
        normal: {
          show: true,
          position: [10, 4],
          textStyle: {
            color: '#f4f4f4' // color of value
          },
          formatter(param) {
            return '¥' + toThousandFilter(param.value)
          }
        }
      }
      part02.tooltip = {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter(param) {
          // console.log(_that.dataInfo[_that.num])
          param[0].marker =
            '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color: rgba(8, 147, 249, .8);"></span>'
          const dataItem = arr[param[0].dataIndex]
          return `
            ${param[0].marker}${dataItem.name} <br/>
            ${param[0].marker}${dataItem.xNum} 箱<br/>
            ${param[0].marker}${dataItem.boxNum} 件 <br/>
            ${param[0].marker}¥ ${dataItem.CNYNum}<br/>
            ${param[0].marker}$ ${dataItem.USDNum}<br/>
          `
        }
      }
      // 渲染 Top10 数据图
      const myChart1 = this.$echarts.init(document.getElementById('part_02'))
      myChart1.setOption(part02)
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
.top-data {
  position: relative;
  width: 100%;
  padding-top: 35px;

  .check-data {
    position: absolute;
    top: 2px;
    right: 20px;

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

  #part_02 {
    height: 240px;
    transform: translate(-5px, 0px);
  }
}
</style>
