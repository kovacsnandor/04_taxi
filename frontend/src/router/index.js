import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: false,
        title: "Home / Taxi",
      },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        requiresAuth: false,
        title: null,
      },
    },
    {
      path: '/taxiFuvarjai',
      name: 'taxiFuvarjai',
      component: () => import('../views/TaxiFuvarjaiView.vue'),
      meta: {
        requiresAuth: false,
        title: "Taxi fuvarjai / Taxi",
      },
    },
    {
      path: '/taxiKezeles',
      name: 'taxiKezeles',
      component: () => import('../views/TaxiKezelesView.vue'),
      meta: {
        requiresAuth: true,
        title: "Taxi kezelés / Taxi",
      },
    },
    {
      path: '/fuvarBevitel',
      name: 'fuvarBevitel',
      component: () => import('../views/FuvarBevitelView.vue'),
      meta: {
        requiresAuth: true,
        title: "Fuvar bevitel / Taxi",
      },
    },
    {
      path: '/count1',
      name: 'count1',
      component: () => import('../views/Count1View.vue'),
      meta: {
        requiresAuth: false,
        title: "Count1 / Taxi",
      },
    },
    {
      path: '/count2',
      name: 'count2',
      component: () => import('../views/Count2View.vue'),
      meta: {
        requiresAuth: false,
        title: "Count2 / Taxi",
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: {
        requiresAuth: false,
        title: "Login / Taxi",
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'PageNotFound',
      component: () => import('../views/404View.vue')
    }
  ]
})

export default router
