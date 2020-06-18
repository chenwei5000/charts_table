import moment from 'moment'

// 获取当前的时间
function getCurrentTime() {
  return moment().format('HH:mm:ss M/DD')
}

// 获取当前周的开始结束时间
function getCurrWeekDays() {
  const date = []
  const weekOfday = parseInt(moment().format('d')) // 计算今天是这周第几天 周日为一周中的第一天
  const start = moment()
    .subtract(weekOfday - 1, 'days')
    .format('M/DD') // 周一日期
  const end = moment()
    .add(7 - weekOfday, 'days')
    .format('M/DD') // 周日日期
  date.push(start)
  date.push(end)
  return date
}
// 获取当前月的开始结束时间
function getCurrMonthDays() {
  const date = []
  const start =
    moment()
      .add('month', 0)
      .format('YYYY-MM') + '-01'
  const end = moment(start)
    .add('month', 1)
    .add('days', -1)
    .format('YYYY-MM-DD')
  date.push(start)
  date.push(end)
  return date
}

export default {
  getCurrentTime,
  getCurrWeekDays,
  getCurrMonthDays
}
