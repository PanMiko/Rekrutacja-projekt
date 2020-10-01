import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Hall from '../views/Hall.vue'
import Contact from "@/views/Contact.vue";
import Summary from "@/views/Summary.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hall',
    name: 'Hall',
    component: Hall
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/summary',
    name: 'Summary',
    component: Summary
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
