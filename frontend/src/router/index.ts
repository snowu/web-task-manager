import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
//import TaskList from '../views/TaskList.vue'
//import TaskDetail from '../views/TaskDetail.vue'
//import Login from '../views/Login.vue'
//import Register from '../views/Register.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    //{
  //  path: '/tasks',
  //  name: 'TaskList',
  //  component: TaskList
  //},
  //{
  //  path: '/tasks/:id',
  //  name: 'TaskDetail',
  //  component: TaskDetail,
  //  props: true
  //},
  //{
  //  path: '/login',
  //  name: 'Login',
  //  component: Login
  //},
  //{
  //  path: '/register',
  //  name: 'Register',
  //  component: Register
  //}
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
