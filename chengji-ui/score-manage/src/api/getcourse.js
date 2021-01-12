import request from '@/utils/request'
var qs = require('qs');

export function getCourseStu() {
  return request({
    url: '/api/get_course',
    method: 'get',
  },
  )
}

export function getCourseTea() {
  return request({
    url: '/api/get_course_tea',
    method: 'get',
  },
  )
}
