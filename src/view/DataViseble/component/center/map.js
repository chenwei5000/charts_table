// var geoCoordMap = {
//   上海: [121.4648, 31.2891],
//   东莞: [113.8953, 22.901],
//   东营: [118.7073, 37.5513],
//   中山: [113.4229, 22.478],
//   临汾: [111.4783, 36.1615],
//   临沂: [118.3118, 35.2936],
//   丹东: [124.541, 40.4242],
//   丽水: [119.5642, 28.1854],
//   乌鲁木齐: [87.9236, 43.5883],
//   佛山: [112.8955, 23.1097],
//   保定: [115.0488, 39.0948],
//   兰州: [103.5901, 36.3043],
//   包头: [110.3467, 41.4899],
//   北京: [116.4551, 40.2539],
//   北海: [109.314, 21.6211],
//   南京: [118.8062, 31.9208],
//   南宁: [108.479, 23.1152],
//   南昌: [116.0046, 28.6633],
//   南通: [121.1023, 32.1625],
//   厦门: [118.1689, 24.6478],
//   台州: [121.1353, 28.6688],
//   合肥: [117.29, 32.0581],
//   呼和浩特: [111.4124, 40.4901],
//   咸阳: [108.4131, 34.8706],
//   哈尔滨: [127.9688, 45.368],
//   唐山: [118.4766, 39.6826],
//   嘉兴: [120.9155, 30.6354],
//   大同: [113.7854, 39.8035],
//   大连: [122.2229, 39.4409],
//   天津: [117.4219, 39.4189],
//   太原: [112.3352, 37.9413],
//   威海: [121.9482, 37.1393],
//   宁波: [121.5967, 29.6466],
//   宝鸡: [107.1826, 34.3433],
//   宿迁: [118.5535, 33.7775],
//   常州: [119.4543, 31.5582],
//   广州: [113.5107, 23.2196],
//   廊坊: [116.521, 39.0509],
//   延安: [109.1052, 36.4252],
//   张家口: [115.1477, 40.8527],
//   徐州: [117.5208, 34.3268],
//   德州: [116.6858, 37.2107],
//   惠州: [114.6204, 23.1647],
//   成都: [103.9526, 30.7617],
//   扬州: [119.4653, 32.8162],
//   承德: [117.5757, 41.4075],
//   拉萨: [91.1865, 30.1465],
//   无锡: [120.3442, 31.5527],
//   日照: [119.2786, 35.5023],
//   昆明: [102.9199, 25.4663],
//   杭州: [119.5313, 29.8773],
//   枣庄: [117.323, 34.8926],
//   柳州: [109.3799, 24.9774],
//   株洲: [113.5327, 27.0319],
//   武汉: [114.3896, 30.6628],
//   汕头: [117.1692, 23.3405],
//   江门: [112.6318, 22.1484],
//   沈阳: [123.1238, 42.1216],
//   沧州: [116.8286, 38.2104],
//   河源: [114.917, 23.9722],
//   泉州: [118.3228, 25.1147],
//   泰安: [117.0264, 36.0516],
//   泰州: [120.0586, 32.5525],
//   济南: [117.1582, 36.8701],
//   济宁: [116.8286, 35.3375],
//   海口: [110.3893, 19.8516],
//   淄博: [118.0371, 36.6064],
//   淮安: [118.927, 33.4039],
//   深圳: [114.5435, 22.5439],
//   清远: [112.9175, 24.3292],
//   温州: [120.498, 27.8119],
//   渭南: [109.7864, 35.0299],
//   湖州: [119.8608, 30.7782],
//   湘潭: [112.5439, 27.7075],
//   滨州: [117.8174, 37.4963],
//   潍坊: [119.0918, 36.524],
//   烟台: [120.7397, 37.5128],
//   玉溪: [101.9312, 23.8898],
//   珠海: [113.7305, 22.1155],
//   盐城: [120.2234, 33.5577],
//   盘锦: [121.9482, 41.0449],
//   石家庄: [114.4995, 38.1006],
//   福州: [119.4543, 25.9222],
//   秦皇岛: [119.2126, 40.0232],
//   绍兴: [120.564, 29.7565],
//   聊城: [115.9167, 36.4032],
//   肇庆: [112.1265, 23.5822],
//   舟山: [122.2559, 30.2234],
//   苏州: [120.6519, 31.3989],
//   莱芜: [117.6526, 36.2714],
//   菏泽: [115.6201, 35.2057],
//   营口: [122.4316, 40.4297],
//   葫芦岛: [120.1575, 40.578],
//   衡水: [115.8838, 37.7161],
//   衢州: [118.6853, 28.8666],
//   西宁: [101.4038, 36.8207],
//   西安: [109.1162, 34.2004],
//   贵阳: [106.6992, 26.7682],
//   连云港: [119.1248, 34.552],
//   邢台: [114.8071, 37.2821],
//   邯郸: [114.4775, 36.535],
//   郑州: [113.4668, 34.6234],
//   鄂尔多斯: [108.9734, 39.2487],
//   重庆: [107.7539, 30.1904],
//   金华: [120.0037, 29.1028],
//   铜川: [109.0393, 35.1947],
//   银川: [106.3586, 38.1775],
//   镇江: [119.4763, 31.9702],
//   长春: [125.8154, 44.2584],
//   长沙: [113.0823, 28.2568],
//   长治: [112.8625, 36.4746],
//   阳泉: [113.4778, 38.0951],
//   青岛: [120.4651, 36.3373],
//   韶关: [113.7964, 24.7028],
//   芬兰: [24.909912, 60.169095],
//   美国: [-100.696295, 33.679979],
//   日本: [139.710164, 35.706962],
//   韩国: [126.979208, 37.53875],
//   瑞士: [7.445147, 46.956241],
//   东南亚: [117.53244, 5.300343],
//   澳大利亚: [135.193845, -25.304039],
//   德国: [13.402393, 52.518569],
//   英国: [-0.126608, 51.208425],
//   加拿大: [-102.646409, 59.994255],
//   美西: [-118.15, 34.03],
//   美东: [-74.0, 40.43]
// }

// var BJData = [
//   [
//     {
//       name: '北京'
//     },
//     {
//       name: '美东',
//       value: 100
//     }
//   ],
//   [
//     {
//       name: '北京'
//     },
//     {
//       name: '德国',
//       value: 10
//     }
//   ],
//   [
//     {
//       name: '北京'
//     },
//     {
//       name: '美西',
//       value: 50
//     }
//   ]
// ]

// var WXData = [
//   [
//     {
//       name: '无锡'
//     },
//     {
//       name: '德国',
//       value: 100
//     }
//   ],
//   [
//     {
//       name: '无锡'
//     },
//     {
//       name: '美东',
//       value: 10
//     }
//   ]
// ]

// var YWData = [
//   [
//     {
//       name: '义乌'
//     },
//     {
//       name: '美西',
//       value: 100
//     }
//   ],
//   [
//     {
//       name: '义乌'
//     },
//     {
//       name: '美东',
//       value: 10
//     }
//   ]
// ]

var geoCoordMap = {
  Peking: [116, 40],
  Paris: [2, 49],
  Moscow: [38, 56],
  London: [0, 52],
  'Washington DC': [-77, 39],
  Belgrade: [20, 45],
  'Buenos Aires': [-58, -35],
  Minsk: [28, 54],
  Brasília: [-48, -16],
  Santiago: [-71, -33],
  Havana: [-82, 23],
  Prague: [14, 50],
  Copenhagen: [13, 56],
  'Santo Domingo': [-70, 18],
  Cairo: [31, 30],
  'San Salvador': [-89, 14],
  'Port-au-Prince': [-72, 19],
  Tehran: [51, 36],
  Beirut: [35, 34],
  Luxembourg: [6, 50],
  Wellington: [175, -41],
  Managua: [-86, 12],
  Asunción: [-58, -25],
  Manila: [121, 15],
  Warsaw: [21, 52],
  Riyadh: [47, 25],
  Damascus: [36, 33],
  Ankara: [33, 40],
  Kiev: [31, 50],
  Athens: [24, 38],
  Delhi: [77, 29],
  Lima: [-77, -12],
  Canberra: [149, -35],
  'San Jos': [-84, 10],
  Monrovia: [-11, 6],
  Bogot: [-74, 5],
  'Mexico City': [-99, 19],
  Pretoria: [28, -26],
  Ottawa: [-76, 45],
  'Addis Ababa': [39, 9],
  Panam: [-80, 9],
  'La Paz': [-68, -16],
  Caracas: [-67, 10],
  Guatemala: [-91, 15],
  Oslo: [11, 60],
  Amsterdam: [5, 52],
  Tegucigalpa: [-87, 14],
  Montevideo: [-56, -35],
  Quito: [-79, 0],
  Baghdad: [44, 33],
  Brussels: [4, 51],
  Kabul: [69, 35],
  Reykjavik: [-22, 64],
  Stockholm: [18, 59],
  Bangkok: [101, 14],
  Islamabad: [73, 34],
  "Sana'a": [44, 15],
  Rangoon: [96, 17],
  Jerusalem: [35, 32],
  Jakarta: [107, -6],
  Tirana: [20, 41],
  Vienna: [16, 48],
  Sofia: [23, 43],
  'Phnum Penh': [105, 12],
  Helsinki: [25, 60],
  Budapest: [19, 47],
  Dublin: [-6, 53],
  Rome: [12, 42],
  Rabbah: [36, 32],
  Vientiane: [103, 18],
  Tripoli: [13, 33],
  Kathmandu: [85, 28],
  Lisbon: [-9, 39],
  Bucharest: [26, 44],
  Madrid: [-4, 40],
  Colombo: [80, 7],
  Rabat: [-7, 34],
  Khartoum: [33, 16],
  Tunis: [10, 37],
  Tokyo: [140, 36],
  Accra: [0, 6],
  'Kuala Lumpur': [102, 3],
  Conakry: [-14, 10],
  'Porto-Novo': [3, 6],
  Ouagadougou: [-2, 12],
  Yaound: [12, 4],
  Bangui: [19, 4],
  "N'Djamena": [15, 12],
  Brazzaville: [15, -4],
  Yamoussoukro: [-5, 7],
  Nicosia: [33, 35],
  Kinshasa: [15, -4],
  Libreville: [9, 0],
  Antananarivo: [48, -19],
  Niamey: [2, 14],
  Mogadishu: [45, 2],
  Lom: [1, 6],
  Bamako: [-8, 13],
  Dakar: [-17, 15],
  Lagos: [3, 6],
  Freetown: [-13, 8],
  Nouakchott: [-16, 18],
  'Ulan Batar': [107, 48],
  'Dar es Salaam': [39, -7],
  Bujumbura: [29, -3],
  Kingston: [-77, 18],
  Kigali: [30, -2],
  'Port-of-Spain': [-61, 11],
  Algiers: [3, 37],
  Kampala: [33, 0],
  Kuwait: [48, 29],
  Nairobi: [37, -1],
  'Zanzibar City': [39, 0],
  Dodoma: [36, -6],
  Lilongwe: [34, -14],
  Valletta: [15, 36],
  Lusaka: [28, -15],
  Banjul: [-17, 13],
  Mal: [74, 4],
  Singapore: [104, 1],
  Georgetown: [-58, 7],
  Gaborone: [26, -25],
  Maseru: [27, -29],
  Bridgetown: [-60, 13],
  Aden: [45, 13],
  'Port Louis': [57, -20],
  Mbabne: [31, -26],
  Malabo: [9, 4],
  Suva: [178, -18],
  Manama: [51, 26],
  Thimbu: [90, 27],
  Doha: [52, 25],
  Muscat: [59, 24],
  'Abu Dhabi': [54, 24],
  Nassau: [-77, 25],
  Bonn: [7, 51],
  Berlin: [13, 52],
  Dhaka: [90, 24],
  "Saint George's": [-62, 12],
  Bissau: [-16, 12],
  Praia: [-24, 15],
  Maputo: [33, -26],
  'São Tomé': [7, 0],
  'Port Moresby': [147, -9],
  Moroni: [43, -12],
  Paramaribo: [-55, 6],
  Victoria: [55, -5],
  Luanda: [13, -9],
  Apia: [-172, -14],
  Djibouti: [43, 12],
  Hanoi: [106, 21],
  Honiara: [160, -9],
  Roseau: [-61, 15],
  Castries: [-61, 14],
  Harare: [31, -18],
  Kingstown: [-61, 13],
  Vila: [168, -18],
  Belmopan: [-89, 17],
  'Saint Johns': [-62, 17],
  Basseterre: [-63, 17],
  'Bandar Seri Begawan': [115, 5],
  Windhoek: [17, -23],
  Vaduz: [10, 47],
  Pyongyang: [126, 39],
  Tallin: [25, 59],
  Riga: [24, 57],
  Vilnius: [25, 55],
  Majuro: [171, 7],
  Palikir: [158, 7],
  Seoul: [127, 38],
  Yerevan: [45, 40],
  Baku: [50, 40],
  Tselinograd: [71, 51],
  Frunze: [75, 43],
  Chisinau: [29, 47],
  'San Marino': [12, 44],
  Dushanfe: [69, 39],
  Ashkhabad: [58, 38],
  Tashkent: [69, 41],
  Sarajevo: [18, 44],
  Zagreb: [16, 46],
  Ljubljana: [15, 46],
  "T'bilisi": [45, 42],
  Bratislava: [17, 48],
  Skopje: [21, 42],
  Asmara: [39, 15],
  Monaco: [7, 44],
  'Andorra la Vella': [2, 43],
  Koror: [134, 7],
  'South Tarawa': [173, 1],
  Yaren: [167, 1],
  "Nuku'alofa": [-175, -21],
  Funafuti: [179, 8],
  Berne: [7, 47],
  Dili: [126, -9],
  Podgorica: [19, 42],
  Juba: [32, 5]
}

var ChinaData = [
  [
    {
      name: 'Peking'
    },
    {
      name: 'Paris',
      value: 100
    }
  ],
  [
    {
      name: 'Peking'
    },
    {
      name: 'Moscow',
      value: 10
    }
  ]
]

var UkData = [
  [
    {
      name: 'Washington DC'
    },
    {
      name: 'Paris',
      value: 100
    }
  ],
  [
    {
      name: 'Washington DC'
    },
    {
      name: 'Moscow',
      value: 10
    }
  ]
]

var AsunciónData = [
  [
    {
      name: 'Asunción'
    },
    {
      name: 'Peking',
      value: 100
    }
  ],
  [
    {
      name: 'Asunción'
    },
    {
      name: 'Washington DC',
      value: 10
    }
  ]
]

const planePath =
  'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z'

var convertData = function(data) {
  var res = []
  for (var i = 0; i < data.length; i++) {
    var dataItem = data[i]
    var fromCoord = geoCoordMap[dataItem[0].name]
    var toCoord = geoCoordMap[dataItem[1].name]
    if (fromCoord && toCoord) {
      res.push([
        {
          coord: fromCoord
        },
        {
          coord: toCoord
        }
      ])
    }
  }
  return res
}

const color = ['#a6c84c', '#ffa022', '#46bee9']
const series = []

;[
  ['China', ChinaData],
  ['UK', UkData],
  ['Asunción', AsunciónData]
].forEach(function(item, i) {
  series.push(
    {
      name: item[0] + ' 飞行线',
      type: 'lines',
      zlevel: 1,
      effect: {
        show: true, // 启用飞行效果
        period: 6, // 飞行速度
        trailLength: 0.7, // 飞行线的拖尾
        color: '#fff', // 飞行线的颜色
        symbolSize: 3 // 飞行线的宽度
      },
      lineStyle: {
        normal: {
          color: color[i],
          width: 0,
          curveness: 0.2 // 飞行线的弯曲程度
        }
      },
      data: convertData(item[1])
    },
    {
      name: item[0] + ' 飞行线路',
      type: 'lines',
      zlevel: 2,
      effect: {
        show: true,
        period: 6,
        trailLength: 0,
        symbol: planePath,
        symbolSize: 15
      },
      // 飞行线底线的样式
      lineStyle: {
        normal: {
          color: color[i],
          width: 1,
          opacity: 0.8,
          curveness: 0.2 // 飞行线底线的弯曲程度
        }
      },
      data: convertData(item[1])
    },
    {
      name: item[0] + ' 系列',
      type: 'effectScatter',
      coordinateSystem: 'geo',
      zlevel: 2,
      rippleEffect: {
        brushType: 'stroke'
      },
      label: {
        normal: {
          show: true,
          position: 'right',
          formatter: '{b}'
        }
      },
      symbolSize: function(val) {
        return val[2] / 8
      },
      itemStyle: {
        // 为不同系列节点设置颜色
        normal: {
          color: color[i]
        }
      },
      data: item[1].map(function(dataItem) {
        return {
          name: dataItem[1].name,
          value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
        }
      })
    }
  )
})

const option = {
  tooltip: {
    trigger: 'item'
  },
  geo: {
    map: 'world',
    label: {
      emphasis: {
        show: true,
        color: '#fff'
      }
    },
    roam: false,
    itemStyle: {
      normal: {
        areaColor: '#323c48',
        borderColor: '#404a59'
      },
      emphasis: {
        areaColor: '#2a333d'
      }
    }
  },
  series: series
}

export default option
