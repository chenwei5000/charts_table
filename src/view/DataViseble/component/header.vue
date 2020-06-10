<template>
  <!-- 1.0 头部标题  | 信息展示 -->
  <div class="title">
    <div class="title-left">
      <h2>{{ webSite.title }}</h2>
      <p>{{ webSite.subTitle }}</p>
    </div>
    <div class="title-right">
      <ul>
        <li>
          <div class="date-up">
            {{ dateInfo.hour }}:{{ dateInfo.minutes }}:{{ dateInfo.seconds }}
          </div>
          <div class="date-bottom">
            {{ dateInfo.year }}-{{ dateInfo.month }}-{{ dateInfo.day }}
          </div>
        </li>
        <li>
          <div class="local">{{ temperature.local }}</div>
        </li>
        <li>
          <!-- 天气图标 | 温度 | 天气 -->
          <i class="iconfont" :class="temperature.icon"></i>
          <span class="weather-num">{{ temperature.num }}℃</span>
          <span class="weather-text">{{ temperature.text }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// 格式化日期
function formatDate(d) {
  this.dateInfo.year = d.getFullYear()
  this.dateInfo.month = (d.getMonth() + 1).toString().padStart(2, '0')
  this.dateInfo.day = d
    .getDate()
    .toString()
    .padStart(2, '0')

  this.dateInfo.hour = d
    .getHours()
    .toString()
    .padStart(2, '0')
  this.dateInfo.minutes = d
    .getMinutes()
    .toString()
    .padStart(2, '0')
  this.dateInfo.seconds = d
    .getSeconds()
    .toString()
    .padStart(2, '0')
}

export default {
  data() {
    return {
      webSite: {
        title: '品海商务可视化数据',
        subTitle: 'Pin Hai commerce data visible panel'
      },
      temperature: {
        local: '武汉',
        icon: '',
        num: '34',
        text: '多云'
      },
      dateInfo: {
        year: '',
        month: '',
        day: '',
        hour: '',
        minutes: '',
        seconds: ''
      }
    }
  },
  created() {
    this.getDate(new Date())
  },
  methods: {
    async getDate(d) {
      formatDate.call(this, new Date())
      setInterval(() => {
        formatDate.call(this, new Date())
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
      letter-spacing: 2.5px;
      color: #fff;
      text-shadow: 1px 1px 1px #d23333, -1px -1px 1px #110df9;
    }

    p {
      color: #666;
      font-size: 12px;
      letter-spacing: 1.2px;
      font-style: italic;
      margin-top: -4px;
    }
  }

  .title-right {
    float: right;

    li {
      float: left;
      padding: 0 20px;
      border-right: 1px solid rgba(255, 255, 255, 0.25);
      color: #fff;
      text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.6);

      &:nth-last-of-type(1) {
        border-right: none;
      }

      .date-up {
        font-size: 16px;
        font-weight: 400;
        font-family: consolas;
      }
      .date-bottom {
        font-size: 12px;
        margin-top: -4px;
      }
      .local {
        font-size: 26px;
      }
      .weather-num {
        font-size: 26px;
      }
      .weather-text {
        font-size: 16px;
        margin-left: 8px;
      }
    }
  }
}
</style>
