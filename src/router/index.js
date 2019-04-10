import Vue from 'vue'
import VueRouter from 'vue-router'
import shuttleBox from '@/components/shuttleBox.vue'
import App from '@/App'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/',
    name: 'App',
    component: App,
    children: [{
      path: '/shuttleBox',
      name: 'shuttleBox',
      component: shuttleBox,
    }]
  }]
})
export default router