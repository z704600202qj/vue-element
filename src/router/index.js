import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import DashBoard from '@/components/pages/first'
import form from '@/components/form/form'
import text from '@/components/form/text'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {
          path: '/',
          component: DashBoard
        },
        {
          path: '/1',
          component: DashBoard
        },
        {
          path: '/2-2',
          component: form
        },
        {
          path: '/2-1',
          component: text
        }
      ]
    }
  ]
})
