// import option from '../center/cBottom';

var dataName = [
  '学校管理',
  '旅馆管理',
  '危爆管理',
  '物流寄递业',
  '精神病人管理',
  '娱乐场所',
  '保安监管',
  '油气管理',
  '重点人员管理'
]

var dataName2 = [
  '学校管e理',
  '旅馆管e理',
  '危爆e管理',
  '物流寄e递业',
  '精神病e人管理',
  '娱乐场e所',
  '保安监e管',
  '油e气管理',
  '重点人员e管理'
]
var value = [12, 10, 5, 7, 8, 8, 12, 20, 18]
var dataarr = []
var max = value[0]
var dataarr2 = []
value.forEach(function(ele, index) {
  if (ele > max) {
    max = ele
  }
  dataarr.push({
    value: ele,
    name: dataName[index]
  })
  dataarr2.push({
    value: ele,
    name: dataName2[index]
  })
})

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
    itemGap: 5,
    itemHeight: 10,
    align: 'right',

    data: dataName,
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
      radius: ['40%', '75%'],
      color: [
        '#2CEDED',
        '#7049F0',
        '#B347FF',
        '#E70E65',
        '#FF714A',
        '#F6B768',
        '#B0DF5D',
        '#FC7DBC',
        '#0A9FFD'
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
      data: dataarr
    }
  ]
}

export default option
