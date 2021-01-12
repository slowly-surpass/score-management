import request from '@/utils/request'

var qs = require('qs');

//学生信息获取
export function userinfo() {
  return request({
    url: '/api/get_userinfo',
    method: 'get',
  },
  )
}
