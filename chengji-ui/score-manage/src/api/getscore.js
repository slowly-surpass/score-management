import request from '@/utils/request'

var qs = require('qs');

//输入学期学年获得课程
export function getscore_term(year, term) {
  const data = {
    year,
    term,
  }
  return request({
    url: '/api/get_score_term',
    method: 'post',
    data: qs.stringify(data)
  },
  )
}

//输入学期学年获得课程
export function getscore(cname) {
  const data = {
    cname,
  }
  return request({
    url: '/api/get_score_class',
    method: 'post',
    data: qs.stringify(data)
  },
  )
}


