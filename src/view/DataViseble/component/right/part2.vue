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
import topTips from '../topTips.vue'
import part02 from './part2.js'

export default {
  components: {
    topTips
  },
  data() {
    return {
      timer: null,
      yArr: [
        [
          '四川',
          '福健',
          '湖北',
          '河南',
          '浙江',
          '江苏',
          '山东',
          '上海',
          '广东',
          '北京'
        ],
        [
          '义乌',
          '青岛',
          '武汉',
          '北京',
          '深圳',
          '秦皇岛',
          '大连',
          '上海',
          '宁波',
          '海口'
        ],
        [
          '海口',
          '青岛',
          '宁波',
          '义乌',
          '深圳',
          '北京',
          '大连',
          '顺义',
          '秦皇岛',
          '哈尔滨'
        ]
      ],
      topData: [
        [7700, 8800, 9900, 11100, 14200, 16000, 18400, 20500, 22600, 24700],
        [12900, 27788, 12277, 17722, 29772, 32772, 22992, 22882, 48844, 22737],
        [33322, 22231, 18877, 22200, 18773, 19988, 22288, 24400, 37391, 28822]
      ],
      num: 0
    }
  },
  mounted() {
    this.setOptions()
    this.initData()
  },
  methods: {
    initData() {
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
      this.topData[this.num] = this.topData[this.num].sort((a, b) => a - b)
      part02.yAxis[0].data = this.yArr[this.num]
      part02.series[0].data = this.topData[this.num]
      const myChart1 = this.$echarts.init(document.getElementById('part_02'))
      myChart1.setOption(part02)
    },
    checkItem(i) {
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
      this.initData()
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
