import Vue from 'vue'
import Router from 'vue-router'
import layout from '../views/layout'

Vue.use(Router)

const index = resolve => require(['../views/index/'], resolve)
import test from './test'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [{
    path: '/',
    component: layout,
    children: [{
        path: '',
        component: index
      },
      {
        path: 'index',
        component: index
      },
      {
        path: 'driective',
        component: resolve => require(['../views/directives/index'], resolve)
      },
      test
    ]
  }]
})
