<template>
  <!-- 1.0 头部标题  | 信息展示 -->
  <div class="title">
    <div class="title-left">
      <h2>{{ webSite.title }}</h2>
      <p>{{ webSite.subTitle }}</p>
    </div>

    <div class="time-right">
      <div class="cur-time">
        <!-- <em>当前时间</em> -->
        <span>{{ strDay }}</span>
      </div>
      <div class="weeks">
        <em>统计时间</em>
        <span>{{ days[0] }} - {{ days[1] }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getTime from '../../../api/getTime'

export default {
  data() {
    return {
      webSite: {
        title: '品海采购出口库存总览',
        subTitle: 'Pin Hai commerce data visible panel'
      },
      days: [],
      strDay: ''
    }
  },
  created() {
    this.getTime()
  },
  methods: {
    getTime() {
      // 获取本周时间
      this.days = getTime.getCurrWeekDays()
      this.strDay = getTime.getCurrentTime()
      setInterval(() => {
        this.strDay = getTime.getCurrentTime()
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 20px 0;
  box-sizing: border-box;

  .title-left {
    float: left;
    width: 270px;

    h2 {
      font-size: 24px;
      letter-spacing: 2px;
      color: #fff;
      text-shadow: 1px 1px 1px #d23333, -1px -1px 1px #110df9;
    }

    p {
      color: #666;
      font-size: 12px;
      letter-spacing: 2px;
      font-style: italic;
      margin-top: -4px;
    }
  }

  .time-right {
    float: right;
    margin-right: 20px;
    font-size: 20px;
    color: #fff;
    text-shadow: 1px 1px 1px #d23333, -1px -1px 1px #110df9;

    .weeks {
      float: left;
    }

    .cur-time {
      float: left;
      margin-right: 20px;
    }

    em {
      font-family: consolas;
      font-size: 16px;
      margin-right: 5px;
    }
  }
}
</style>
