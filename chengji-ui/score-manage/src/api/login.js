import request from '@/utils/request'

var qs = require('qs');

//学生登陆
export function login_stu(userid, password) {
  const data = {
    userid,
    password,
  }

  return request({
    url: '/api/login_stu',
    method: 'post',
    data: qs.stringify(data)
  },
  console.log(data ,'test')
  )
}

export function login_tea(userid, password) {
  const data = {
    userid,
    password,
  }
  return request({
    url: '/api/login_tea',
    method: 'post',
    data: qs.stringify(data)
  },
  console.log(data,'test'))
}


export function login_adm(userid, password) {
  const data = {
    userid,
    password,
  }
  return request({
    url: '/api/login_admin',
    method: 'post',
    data: qs.stringify(data)
  })
}





