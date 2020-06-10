<template>
  <div class="top-tips clearfix">
    <span></span>
    <h3>{{title}}</h3>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: [String],
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.top-tips {
  width: 100%;
  position: absolute;
  top: 4px;
  left: 4px;

  span {
    float: left;
    width: 4px;
    height: 23px;
    background-color: #fff;
    box-shadow: 1px 1px 1px #d23333, -1px -1px 1px #110df9;
  }

  h3 {
    float: left;
    width: 60%;
    margin-left: 10px;
    font-size: 14px;
    line-height: 20px;
    border-bottom: 1px dashed #666;
    box-sizing: border-box;
    padding-bottom: 2px;

    color: #fff;
    background: -webkit-linear-gradient(0deg, #f80, #fff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
