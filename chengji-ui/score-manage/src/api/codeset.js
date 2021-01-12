import request from '@/utils/request'

var qs = require('qs');

export function codeset(old_pass, new_pass, new_pass2) {
  const data = {
    old_pass,
    new_pass,
    new_pass2,
  }
  
  return request({
    url: '/api/change_pass',
    method: 'post',
    data: qs.stringify(data)
  })
}
