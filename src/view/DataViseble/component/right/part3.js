const option = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    right: '10%',
    y: 'middle',
    itemWidth: 10,
    itemGap: 2,
    itemHeight: 10,
    align: 'right',

    data: [],
    textStyle: {
      color: '#fff',
      fontSize: 12
    }
  },
  series: [
    {
      left: '-30%',
      name: '访问来源',
      type: 'pie',
      radius: ['30%', '75%'],
      color: [
        '#2CEDED',
        '#7049F0',
        '#B347FF',
        '#E70E65',
        '#FF714A',
        '#F6B768',
        '#B0DF5D',
        '#FC7DBC',
        '#0A9FFD',
        'yellowgreen'
      ],
      label: {
        normal: {
          show: false,
          formatter: '{b}\n{d}%',
          fontSize: 12
        }
      },
      labelLine: {
        normal: {
          show: false,
          length: 10,
          length2: 74
        }
      },
      data: []
    }
  ]
}

export default option
