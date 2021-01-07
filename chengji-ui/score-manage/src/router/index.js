import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import admgui from '@/components/admgui'
import stugui from '@/components/stugui'
import teagui from '@/components/teagui'



Vue.use(Router)

export default new Router({

  mode: 'history', // 去掉url中的#

  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },

    {
      path: '/admgui',
      name: 'admgui',
      component: admgui
    },
    {
      path: '/stugui',
      name: 'stugui',
      component: stugui,
      children: [

        {
          path: '1-1',
          name: 'p11',
          component:  () => import('@/components/p11.vue')
        },
        {
          path: '1-2',
          name: 'p12',
          component:  () => import('@/components/p12.vue')
        },
        {
          path: '1-3',
          name: 'p13',
          component:  () => import('@/components/p13.vue')
        },
        {
          path: '2-1',
          name: 'p21',
          component:  () => import('@/components/p21.vue')
        },
        {
          path: '2-2',
          name: 'p22',
          component:  () => import('@/components/p22.vue')
        },

        {
          path: '3',
          name: 'p3',
          component:  () => import('@/components/p3.vue')
        },
        {
          path: '4',
          name: 'p4',
          component:  () => import('@/components/p4.vue')
        },
    ]
    },

    {
      path: '/teagui',
      name: 'teagui',
      component: teagui,
      children: [
        {
          path: '1-1',
          name: 't11',
          component:  () => import('@/components/t11.vue')
        },
        {
          path: '1-2',
          name: 't12',
          component:  () => import('@/components/t12.vue')
        },
        {
          path: '1-3',
          name: 't13',
          component:  () => import('@/components/t13.vue')
        },
        {
          path: '2-1',
          name: 't21',
          component:  () => import('@/components/t21.vue')
        },
        {
          path: '2-2',
          name: 't22',
          component:  () => import('@/components/t22.vue')
        },
        {
          path: '2-3',
          name: 't23',
          component:  () => import('@/components/t23.vue')
        },
        {
          path: '3',
          name: 't3',
          component: () => import('@/components/t3.vue')
        },
        {
          path: '4',
          name: 't4',
          component: () => import('@/components/t4.vue')
        },
    ]

    }

  ]
})
