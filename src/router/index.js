import Vue from 'vue'
import VueRouter from "vue-router";
import NProgress from "nprogress"
import 'nprogress/nprogress.css'

import MainRoutes from './main';

Vue.use(VueRouter)

const routes = [
  ...MainRoutes,
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'link-active',
})

NProgress.configure({showSpinner: false})

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
})

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  NProgress.done();
})

export default router
