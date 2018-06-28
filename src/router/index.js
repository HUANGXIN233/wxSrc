import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Longing from '@/views/Longing'
import Recipes from '@/views/Recipes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/longing',
      name: 'Longing',
      component: Longing
    }, {
      path: '/recipes',
      name: 'Recipes',
      component: Recipes
    }
  ]
})
