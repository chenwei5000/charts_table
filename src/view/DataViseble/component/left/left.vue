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
                  34,223
                  <i>箱</i>
                </p>
                <p>
                  46,411
                  <i>件</i>
                </p>
                <p>
                  23,118,123
                  <i>元</i>
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
                  34,223
                  <i>箱</i>
                </p>
                <p>
                  46,411
                  <i>件</i>
                </p>
                <p>
                  4,724,123
                  <i>元</i>
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
                  34,223
                  <i>箱</i>
                </p>
                <p>
                  46,411
                  <i>件</i>
                </p>
                <p>
                  1,738,123
                  <i>元</i>
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
import topTips from '../topTips.vue'
import Part1 from './part1.vue'
import part2 from './part2.vue'

export default {
  components: {
    topTips,
    Part1,
    part2
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.top-tab {
  height: 130px;
}

.left-box {
  position: relative;
  z-index: 999;
  height: 100%;
  margin-left: 10px;
}

.data-list {
  display: flex;
  padding-top: 40px;
  box-sizing: border-box;

  li {
    flex: 1;
    height: 70px;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    color: #fff;

    .ls-card {
      width: 96%;
      margin: 0 auto;
      box-sizing: border-box;
      border: 1px solid rgba($color: #04475c, $alpha: 0.4);
      background-color: rgba($color: #092138, $alpha: 1);
      border-radius: 4px;
      overflow: hidden;

      span {
        float: left;
        width: 16px;
        height: 70px;
        font-size: 14px;
        line-height: 24px;
        font-weight: 700;
        padding: 4px 3px;
        background-color: rgba($color: #054558, $alpha: 1);
      }
      > div {
        width: 100%;
        height: 70px;
        padding-left: 20px;
        padding-top: 4px;
        padding-right: 4px;
        box-sizing: border-box;

        p {
          line-height: 24px;
          font-family: Arial, Helvetica, sans-serif;
          font-weight: 700;
          text-align: right;

          i {
            font-weight: 400;
            font-style: normal;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
