// import * as Vue from 'vue'

import Home from './views/Home.vue'
import Klimt from './views/klimt.vue'
import Painting from './views/paintingPage.vue'
import PaintingView from './views/paintingView.vue'
import VanGogh from './views/vanGogh.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
    props: true
  },
  {
    path: '/vanGogh',
    name: 'van Gogh',
    component: VanGogh,
    props: true
  },
  {
    path: '/klimt',
    name: 'Klimt',
    component: Klimt,
    props: true
  },
  {
    path: '/:author',
    name: 'paintingPage',
    component: Painting,
    props: true,
    children: [{
      path: ':id',
      name: 'PaintingView',
      component: PaintingView,
      props: true
    }]
  }
]
