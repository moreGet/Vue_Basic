import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/about',
    name: 'AboutView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about", webpackPrefetch: true */ '../views/AboutView.vue')
  },
  {
    path: '/basic',
    name: 'BasicView',
    component: () => import(/* webpackChunkName: "about" */ '../views/BasicView.vue')
  },
  {
    path: '/databinding',
    name: 'DataBindingView',
    component: () => import(/* webpackChunkName: "about" */ '../views/DataBindingView.vue')
  },
  {
    path: '/databindinghtml',
    name: 'DataBindingHtml',
    component: () => import(/* webpackChunkName: "about" */ '../views/DataBindingHtml.vue')
  },
  {
    path: '/databindinginputtext',
    name: 'DataBindingHtmlInputText',
    component: () => import(/* webpackChunkName: "about" */ '../views/DataBindingInputTypeTextView.vue')
  },
  {
    path: '/Number_TextArea',
    name: 'Number_TextArea',
    component: () => import(/* webpackChunkName: "about" */ '../views/Number_TextArea.vue')
  },
  {
    path: '/Select_Checkbox_Radio',
    name: 'Select_Checkbox_Radio',
    component: () => import(/* webpackChunkName: "about" */ '../views/Select_Checkbox_Radio.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
