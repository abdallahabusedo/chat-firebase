import { createRouter, createWebHistory } from 'vue-router'
import Welcome from "../views/Welcome"
import Chatroom from "../views/Chatroom"
import {aut} from './../../cons'
import { getAuth } from 'firebase/auth'
// route guard 
const reqAuth = (to,from,next) => {
  let user = getAuth().currentUser
  console.log("user gard",user);
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
