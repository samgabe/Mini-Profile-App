import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Settings from '../views/Settings.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/Profile', component: Profile },
  { path: '/Settings', component: Settings },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router