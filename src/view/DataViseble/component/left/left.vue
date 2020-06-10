<template>
  <div class="left-box">
    <!-- 1.0 数据 tab -->
    <div class="top-tab">
      <topTips :title="'出库情况'"></topTips>
      <ul class="data-list">
        <li>
          <h4>订 单 量</h4>
          <p>45,232 件</p>
        </li>
        <li>
          <h4>出 库 量</h4>
          <p>28,374 箱</p>
        </li>
        <li>
          <h4>销 售 额</h4>
          <p>$ 235,451,311</p>
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
  height: 100px;
}

.left-box {
  position: relative;
  height: 100%;
  margin-left: 10px;
}

.data-list {
  display: flex;
  padding-top: 35px;
  padding-right: 45px;
  box-sizing: border-box;

  li {
    flex: 1;
    height: 65px;
    font-size: 16px;
    text-align: center;
    color: #fff;

    h4 {
      font-size: 14px;
      color: #fff;
    }

    p {
      font-size: 16px;
      font-weight: 700;
      font-family: consolas;
      letter-spacing: 1.5px;
    }
  }
}
</style>
