<template>
  <div class="left-box">
    <!-- 1.0 数据 tab -->
    <div class="top-tab">
      <topTips :title="'品海出口总览'"></topTips>
      <ul class="data-list">
        <li>
          <div class="ls-card clearfix">
            <span>总 入 库</span>
            <div>
              <div>
                <p>
                  {{ allData.inTotalCartonQty | currency }}
                  <span>箱</span>
                </p>
                <p>
                  {{ allData.inTotalQty | currency }}
                  <span>件</span>
                </p>
                <p>
                  <i>￥</i>
                  {{ allData.inTotalCNYAmount | currency }}
                </p>
                <p>
                  <i>$</i>
                  {{ allData.inTotalUSDAmount | currency }}
                </p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="ls-card clearfix">
            <span style="background-color: #639400">总 出 口</span>
            <div>
              <div>
                <p>
                  {{ allData.outTotalCartonQty | currency }}
                  <span>箱</span>
                </p>
                <p>
                  {{ allData.outTotalQty | currency }}
                  <span>件</span>
                </p>
                <p>
                  <i>￥</i>
                  {{ allData.outTotalCNYAmount | currency }}
                </p>
                <p>
                  <i>$</i>
                  {{ allData.outTotalUSDAmount | currency }}
                </p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="ls-card clearfix">
            <span style="background-color: #a55800;">总 库 存</span>
            <div>
              <div>
                <p>
                  {{ allData.stockCartonQty | currency }}
                  <span>箱</span>
                </p>
                <p>
                  {{ allData.stockQty | currency }}
                  <span>件</span>
                </p>
                <p>
                  <i>¥</i>
                  {{ allData.stockCNYAmount | currency }}
                </p>
                <p>
                  <i>$</i>
                  {{ allData.stockUSAAmount | currency }}
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <!-- 2.0 展示折线图 -->
    <Part1></Part1>
    <part2></part2>
  </div>
</template>

<script>
import { toThousandFilter } from '../../../../api/currency.js'
import topTips from '../topTips.vue'
import Part1 from './part1.vue'
import part2 from './part2.vue'

export default {
  filters: {
    currency: toThousandFilter
  },
  components: {
    topTips,
    Part1,
    part2
  },
  data() {
    return {
      searchUrl:
        'http://192.168.10.120:9001/erp-service/countcerReports/overview?accessToken=MUQ5RjMwRjcwMUE0NkUwRkUxNkUyMkNDNkZFNDNBOTEsMg==&startDate=2020-06-15&endDate=2020-06-21',
      allData: {}
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    async initData() {
      // 请求当前周的数据
      const { data } = await this.$axios.get(this.searchUrl)
      this.allData = data
    }
  }
}
</script>

<style lang="scss" scoped>
.top-tab {
  height: 20%;
}

.left-box {
  position: relative;
  z-index: 999;
  height: 100%;
}

.data-list {
  display: flex;
  padding-top: 35px;
  // padding-right: 10px;
  box-sizing: border-box;

  li {
    flex: 1;
    height: 70px;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    color: #fff;

    .ls-card {
      position: relative;
      width: 96%;
      margin: 0 auto;
      box-sizing: border-box;
      border: 1px solid rgba($color: #04475c, $alpha: 0.4);
      background-color: rgba($color: #092138, $alpha: 1);
      border-radius: 4px;
      overflow: hidden;

      > span {
        position: absolute;
        top: 0;
        left: 0;
        width: 12px;
        height: 100%;
        font-size: 12px;
        line-height: 24px;
        font-weight: 700;
        padding: 4px 3px;
        background-color: rgba($color: #054558, $alpha: 1);
      }
      > div {
        width: 100%;
        padding-top: 4px;
        padding-right: 4px;
        box-sizing: border-box;

        p {
          line-height: 20px;
          font-size: 15px;
          font-family: Arial, Helvetica, sans-serif;
          font-weight: 700;
          text-align: right;
          i {
            display: inline-block;
            vertical-align: top;
            font-family: consolas;
            font-style: normal;
            color: rgba($color: #ffd900, $alpha: 1);
            margin-right: -3px;
            font-size: 13px;
          }
          span {
            font-weight: 600;
          }
        }
      }
    }
  }
}
</style>
