import request from '@/utils/request'
var qs = require('qs');

//申诉成绩
export function complain(cno,year,term) {
  const data = {
    cno,
    year,
    term,
  }
  return request({
    url: '/api/stu_appeal',
    method: 'post',
    data: qs.stringify(data)
  },
  )
}
