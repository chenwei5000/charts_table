const option = {
  tooltip: {},
  geo: {
    map: 'world',
    label: {
      // 鼠标移入显示国家名称
      emphasis: {
        show: true,
        color: '#fff'
      }
    },
    // 缩放属性
    roam: false,
    itemStyle: {
      normal: {
        // 地图颜色
        areaColor: '#323c48',
        borderColor: '#404a59'
      },
      emphasis: {
        // 鼠标经过的颜色
        areaColor: '#2a333d'
      }
    }
  },
  series: []
}

export default option
