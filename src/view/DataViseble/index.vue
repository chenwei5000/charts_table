<template>
  <div class="content">
    <!-- 1.0 头部展示信息 -->
    <Header />

    <!-- 2.0 数据展示布局 -->
    <div class="container">
      <div class="c-left">
        <Left></Left>
      </div>
      <div class="c-center">
        <Center></Center>
      </div>
      <div class="c-right">
        <Right></Right>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './component/header'
import Left from './component/left/left'
import Center from './component/center/center'
import Right from './component/right/right'

export default {
  components: {
    Header,
    Left,
    Center,
    Right
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.content {
  position: relative;
  height: 100%;
  background-color: #ccc;
  background-image: url('../../assets/images/bg.jpg');
  background-repeat: no-repeat;
  object-fit: fill;
  padding: 20px;
  box-sizing: border-box;

  .container {
    display: flex;
    height: 100%;
    padding-top: 54px;
    box-sizing: border-box;
    overflow: hidden;

    .c-left {
      flex: 3;
    }
    .c-center {
      flex: 4.5;
    }
    .c-right {
      flex: 2.5;
    }
  }
}
</style>
