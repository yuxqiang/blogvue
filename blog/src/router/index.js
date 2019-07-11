import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/page/index'
import Index2 from '@/page/Index2'
import layout from '@/layouts/default'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/index2',
      name: 'Index2',
      component: Index2
    },
    {
      path: '/default',
      name: 'layout',
      component: layout
    }
  ]
})
