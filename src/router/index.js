import { createRouter, createWebHistory } from 'vue-router'
import Welcome from "../views/Welcome"
import Chatroom from "../views/Chatroom"
import {auth} from './../firebase/config'
import getUser from '@/composables/getUser'

// route guard 
const reqAuth = (to,from,next) => {
  let {user} = getUser()
  console.log("user in index.js " , user);
  if (!user) {
    next({name: 'Welcome'})
  }
  next()
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
