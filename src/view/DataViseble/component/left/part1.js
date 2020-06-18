const option = {
  color: [
    '#37a2da',
    '#32c5e9',
    '#9fe6b8',
    '#ffdb5c',
    '#ff9f7f',
    '#fb7293',
    '#e7bcf3',
    '#8378ea'
  ],
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    right: '15%',
    top: '25%',
    itemWidth: 10,
    itemGap: 10,
    itemHeight: 10,
    align: 'left',

    data: [
      '使用感受',
      '产品',
      '使用场景',
      '产品页面描述',
      '用户信息',
      '总体感受',
      '卖家账号相关'
    ],
    textStyle: {
      color: '#fff',
      fontSize: 12
    }
  },
  series: [
    {
      name: '评论分析维度',
      type: 'pie',
      radius: [20, 110],
      top: '10%',
      left: '-30%',
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
      data: [
        {
          value: 10,
          name: '使用感受'
        },
        {
          value: 1,
          name: '产品'
        },
        {
          value: 15,
          name: '使用场景'
        },
        {
          value: 25,
          name: '产品页面描述'
        },
        {
          value: 20,
          name: '用户信息'
        },
        {
          value: 35,
          name: '总体感受'
        },
        {
          value: 30,
          name: '卖家账号相关'
        }
      ]
    }
  ]
}

export default option
