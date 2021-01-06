// 登录方法
export function login(username, password, code, uuid, identify) {
  const data = {
    username,
    password,
    code,
    uuid,
    identify,
  }
  return request({
    url: '/login',
    method: 'post',
    data: data
  })
}




