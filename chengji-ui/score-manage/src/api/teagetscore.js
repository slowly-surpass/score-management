import request from '@/utils/request'
var qs = require('qs');

//老师查看学生成绩
export function getScoreTea(cno,year,term) {
  const data = {
    cno,
    year,
    term,
  }
  return request({
    url: '/api/get_score_tea',
    method: 'post',
    data: qs.stringify(data)
  },
  )
}
