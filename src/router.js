import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/getting-started',
      name: 'getting-started',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "getting-started" */ './views/Getting-Started.vue'
        ),
    },
    {
      path: '/tutorial',
      name: 'tutorial',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "tutorial" */ './views/Tutorial.vue'),
    },
    {
      path: '/examples',
      name: 'examples',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "examples" */ './views/Examples.vue'),
    },
    {
      path: '*',
      redirect: '/',
    },
  ],

  scrollBehavior(a, b) {
    if (a.path !== b.path) {
      return { x: 0, y: 0 }
    }
  },
})
