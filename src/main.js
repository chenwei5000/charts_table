import Vue from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'
import echarts from 'echarts'
// css 初始化样式
import './assets/css/base.css'
import './assets/css/data_visible.css'

Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
