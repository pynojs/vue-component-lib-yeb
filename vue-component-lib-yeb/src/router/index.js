import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
//import {Home} from '../../dist/vue-component-lib-yeb.min.js'
import {Home,Refreshing,Loading} from '../components/index.js'
//import '../../dist/vue-component-lib-yeb.min.css'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/refreshing',
      name: 'refreshing',
      component: Refreshing
    },
    {
      path: '/loading',
      name: 'loading',
      component: Loading
    }
  ]
})
