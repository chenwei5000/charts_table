<template>
  <!-- 1.0 头部标题  | 信息展示 -->
  <div class="title">
    <div class="title-left">
      <h2>{{ webSite.title }}</h2>
      <p>{{ webSite.subTitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      webSite: {
        title: '品海商务可视化数据',
        subTitle: 'Pin Hai commerce data visible panel'
      }
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
}
</style>
