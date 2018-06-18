import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import {HelloWorld} from '../../dist/vue-component-lib-yeb.min.js'
//import {HelloWorld} from '../components/index.js'
import '../../dist/vue-component-lib-yeb.min.css'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
