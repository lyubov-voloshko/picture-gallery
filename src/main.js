import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import { createApp } from 'vue'
import { createStore } from 'vuex'
import routes from './router'
import storeObject from './store'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
  routes
})
const store = createStore(storeObject)
app.config.productionTip = false

app.use(router)
app.use(store)

// router.isReady().then(() => {})
app.mount('#app')
