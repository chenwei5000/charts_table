const option = {
  tooltip: {
    trigger: 'item',
    formatter(param) {
      return `
        ${param.marker}${param.name} <br/>
        ${param.marker}${param.data.xNum} 箱<br/>
        ${param.marker}${param.data.boxNum} 件 <br/>
        ${param.marker}¥ ${param.data.CNYNum}<br/>
        ${param.marker}$ ${param.data.USDNum}<br/>
      `
    }
  },
  legend: {
    orient: 'vertical',
    right: '10%',
    y: 'middle',
    itemWidth: 10,
    itemGap: 3,
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
      name: '',
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
          show: true,
          formatter(param) {
            if (param.percent > 5) {
              return param.percent + '%'
            }
            return ''
          },
          fontSize: 12,
          position: 'inside'
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
