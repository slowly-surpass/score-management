import request from '@/utils/request'
var qs = require('qs');

//退出
export function logout() {
  return request({
    url: '/api/loginout',
    method: 'get',
  },
  )
}
