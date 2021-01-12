import request from '@/utils/request'
var qs = require('qs');

//申诉成绩
export function appealGet() {
  return request({
    url: '/api/get_tea_app',
    method: 'get',
  },
  )
}

export function appealPass(cno,sno,year,term,grade) {
  const data = {
    cno,
    sno,
    year,
    term,
    grade,
  }
  return request({
    url: '/api/tea_pass_app',
    method: 'post',
    data: qs.stringify(data)
  },
  )
}

export function appealRefuse(cno,sno,year,term) {
  const data = {
    cno,
    sno,
    year,
    term,
  }
  return request({
    url: '/api/tea_confu_app',
    method: 'post',
    data: qs.stringify(data)
  },
  )
}

