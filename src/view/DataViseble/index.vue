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
  min-width: 1400px;
  height: 100%;
  position: relative;
  background-image: url('../../assets/images/bg2.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  // object-fit: fill;
  padding: 20px 20px 0;
  box-sizing: border-box;
  overflow-y: hidden;

  .container {
    display: flex;
    padding-top: 54px;
    box-sizing: border-box;

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
