import request from '@/utils/request'
var qs = require('qs');

//申诉成绩
export function getgpa() {

  return request({
    url: '/api/gpa_count',
    method: 'get',

  },
  )
}
