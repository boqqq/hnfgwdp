import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/page/layout/Layout'
import index from '@/page/index'
import industryMap from '@/page/industryMap'
import investmentMap from '@/page/investmentMap'
import consumptionMap from '@/page/consumptionMap'
import development from '@/page/development'
import innovate from '@/page/innovate'
import personnelMap from '@/page/personnelMap'
import environment from '@/page/environment'
import livelihood from '@/page/livelihood'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/index'
    },

    {
      path:'/index',
      component: Layout,
      children:[
        {
          name:'index',
          path:'/index',
          component:index
        },
        {
          name:'industryMap',
          path:'/industryMap',
          component:industryMap
        },
        {
          name:'investmentMap',
          path:'/investmentMap',
          component:investmentMap
        },
        {
          name:'consumptionMap',
          path:'/consumptionMap',
          component:consumptionMap
        },
        {
          name:'development',
          path:'/development',
          component:development
        },
        {
          name:'innovate',
          path:'/innovate',
          component:innovate
        },
        {
          name:'personnelMap',
          path:'/personnelMap',
          component:personnelMap
        },
        {
          name:'environment',
          path:'/environment',
          component:environment
        },
        {
          name:'livelihood',
          path:'/livelihood',
          component:livelihood
        },
      ]
    },
  ]
})
