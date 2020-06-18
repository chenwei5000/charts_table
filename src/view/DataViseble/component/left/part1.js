const option = {
  color: [],
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    right: '8%',
    top: '25%',
    itemWidth: 10,
    itemGap: 10,
    itemHeight: 10,
    align: 'left',

    data: [],
    textStyle: {
      color: '#fff',
      fontSize: 12
    }
  },
  series: [
    {
      name: '评论分析维度',
      type: 'pie',
      radius: [20, 100],
      top: '10%',
      left: '-50%',
      roseType: 'area',
      labelLine: {
        normal: {
          show: false
        }
      },
      label: {
        normal: {
          show: false,
          position: 'center'
        }
      },
      data: []
    }
  ]
}

export default option
