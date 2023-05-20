import Vue from 'vue'
import Router from 'vue-router'
import OfflineMap from '@/components/OfflineMap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'OfflineMap',
      component: OfflineMap
    }
  ]
})
