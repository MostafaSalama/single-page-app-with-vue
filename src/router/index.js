import Vue from 'vue'
import VueRouter from 'vue-router'
import Users from '../views/Users.vue';
import Login from '../views/Login.vue';


Vue.use(VueRouter)
const LOGIN_ROUTER_NAME = 'Login';
const USERS_ROUTER_NAME = 'Users';

const routes = [
  {
    path: '/',
    redirect: '/users'
  },
  {
    path: '/users',
    name: USERS_ROUTER_NAME,
    component: Users
  },
  {
    path: '/login',
    name: LOGIN_ROUTER_NAME,
    component: Login
  },

  // any path redirect to users page
  { path: '/:pathMatch(.*)*', redirect: '/users' },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});


export default router
