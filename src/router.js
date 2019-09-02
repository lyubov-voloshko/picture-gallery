import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import VanGogh from './views/vanGogh.vue'
import Klimt from './views/klimt.vue'
import Picture from './views/paintingPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/vanGogh',
      name: 'van Gogh',
      component: VanGogh
    },
    {
      path: '/klimt',
      name: 'Klimt',
      component: Klimt
    },
    {
      path: '/:author/:id',
      name: 'picture',
      component: Picture
    }
  ]
})
