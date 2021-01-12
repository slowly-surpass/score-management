import request from '@/utils/request'

//获取申诉数据
export function appealData() {
  return request({
    url: '/api/app_analy',
    method: 'get',
  })
}
