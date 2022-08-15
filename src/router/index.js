import { createRouter, createWebHistory } from 'vue-router'
import Welcome from "../views/Welcome"
import Chatroom from "../views/Chatroom"
import getUser from '@/composables/getUser'

// route guard 
const reqAuth = (to,from,next) => {
  let {user} = getUser()
  if (!user) {
    next({name: 'Welcome'})
  }else
    next()
}

const requireNoAuth = (to, from, next) => {
  let {user} = getUser() 
  if (user) {
    next({ name: 'Chatroom' })
  } else {
    next()
  }
}
const routes = [
  {
    path: '/',
    name: 'Welcome',
    component : Welcome,
    
  },{
    path: '/chatroom',
    name: 'ChatRoom',
    component: Chatroom,
    beforeEnter: reqAuth
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
