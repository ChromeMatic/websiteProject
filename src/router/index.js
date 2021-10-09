import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ContactUS from "../views/ContactUS"
import Product from "../views/Product";
import Job from "../views/Jobs"
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import CSS from 'uikit/dist/css/uikit.css'
import Jobs from "../views/Jobs";

Vue.use(VueRouter)

//loads the Icon plugin.
UIkit.use(Icons);
//loads the CSS plugin

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/contact',
    name: 'contactus',
    component: ContactUS
  },
  {
    path: '/product',
    name: 'product',
    component: Product
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
