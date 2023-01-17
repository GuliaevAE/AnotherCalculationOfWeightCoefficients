import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0712242c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _5b0c839f = () => interopDefault(import('..\\pages\\index\\catalog.vue' /* webpackChunkName: "pages/index/catalog" */))
const _1d79decb = () => interopDefault(import('..\\pages\\index\\Help.vue' /* webpackChunkName: "pages/index/Help" */))
const _bca735a2 = () => interopDefault(import('..\\pages\\index\\profile.vue' /* webpackChunkName: "pages/index/profile" */))
const _1fb1d1ec = () => interopDefault(import('..\\pages\\index\\profile\\catalogForUser.vue' /* webpackChunkName: "pages/index/profile/catalogForUser" */))
const _81da63c2 = () => interopDefault(import('..\\pages\\index\\profile\\weightcoefficientsForUser.vue' /* webpackChunkName: "pages/index/profile/weightcoefficientsForUser" */))
const _500a33a2 = () => interopDefault(import('..\\pages\\index\\weightcoefficients2.vue' /* webpackChunkName: "pages/index/weightcoefficients2" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _0712242c,
    name: "index",
    children: [{
      path: "catalog",
      component: _5b0c839f,
      name: "index-catalog"
    }, {
      path: "Help",
      component: _1d79decb,
      name: "index-Help"
    }, {
      path: "profile",
      component: _bca735a2,
      name: "index-profile",
      children: [{
        path: "catalogForUser",
        component: _1fb1d1ec,
        name: "index-profile-catalogForUser"
      }, {
        path: "weightcoefficientsForUser",
        component: _81da63c2,
        name: "index-profile-weightcoefficientsForUser"
      }]
    }, {
      path: "weightcoefficients2",
      component: _500a33a2,
      name: "index-weightcoefficients2"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
