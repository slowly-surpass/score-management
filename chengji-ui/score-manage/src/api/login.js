// 登录方法
export function login(username, password,identify) {
  const data = {
    username,
    password,
    identify,
  }
  return request({
    url: '/login',
    method: 'post',
    data: data
  })
}




