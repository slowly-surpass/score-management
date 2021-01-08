import request from '@/utils/request'

//学生登陆
export function login_stu(userid, password) {
  const data = {
    userid,
    password,
  }

  return request({
    url: '/api/login_stu',
    method: 'post',
    data: data
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
    data: data
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
    data: data
  })
}





