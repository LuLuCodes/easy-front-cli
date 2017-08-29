import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index-page',
      component: require('@/pages/index'),
      meta: {title: ''}
    },
    {
      path: '/create-base',
      name: 'create-base',
      component: require('@/pages/create-base'),
      meta: {title: 'Easy Front - 新建工程/基础配置'}
    },
    {
      path: '/create-admin-step-1',
      name: 'create-admin-step-1',
      component: require('@/pages/create-admin-step-1'),
      meta: {title: 'Easy Front - 新建工程/后台模块配置'}
    },
    {
      path: '/create-process',
      name: 'create-process',
      component: require('@/pages/create-process'),
      meta: {title: 'Easy Front - 工程创建中'}
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
