import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Guestbook from '@/components/Guestbook'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/guessbook', name: 'Guestbook', component: Guestbook }
  ]
})
