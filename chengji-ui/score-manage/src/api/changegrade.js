import request from '@/utils/request'
var qs = require('qs');

//修改成绩
export function changeGrade(cno,sno,year,term,grade,gpa) {
  const data = {
    cno,
    sno,
    year,
    term,
    grade,
    gpa,
  }
  return request({
    url: '/api/change_score',
    method: 'post',
    data: qs.stringify(data)
  })
}
