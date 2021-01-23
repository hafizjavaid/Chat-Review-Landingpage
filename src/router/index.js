import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Features from '../views/Features.vue'
import Login from '../views/Form.vue';
import Signup from '../views/Form.vue';
import Verification from '@/components/Form/Verification';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/feature',
    name: 'Features',
    component: Features
  },
  {
    path: '/login',
    name: 'Login',
    
    component: Login
  },
  {
    path: '/signup',
    name: 'Signin',
    component: Signup
  },
  {
    path: '/signup/verific',
    name: 'Verification',
    component: Verification
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
