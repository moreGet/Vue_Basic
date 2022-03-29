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
    component: () => import(/* webpackChunkName: "BasicView" */ '../views/BasicView.vue')
  },
  {
    path: '/databinding',
    name: 'DataBindingView',
    component: () => import(/* webpackChunkName: "DataBindingView" */ '../views/DataBindingView.vue')
  },
  {
    path: '/databindinghtml',
    name: 'DataBindingHtml',
    component: () => import(/* webpackChunkName: "DataBindingHtml" */ '../views/DataBindingHtml.vue')
  },
  {
    path: '/databindinginputtext',
    name: 'DataBindingHtmlInputText',
    component: () => import(/* webpackChunkName: "DataBindingInputTypeTextView" */ '../views/DataBindingInputTypeTextView.vue')
  },
  {
    path: '/Number_TextArea',
    name: 'Number_TextArea',
    component: () => import(/* webpackChunkName: "Number_TextArea" */ '../views/Number_TextArea.vue')
  },
  {
    path: '/Select_Checkbox_Radio',
    name: 'Select_Checkbox_Radio',
    component: () => import(/* webpackChunkName: "Select_Checkbox_Radio" */ '../views/Select_Checkbox_Radio.vue')
  },
  {
    path: '/StyleClassAttributeBindingView',
    name: 'StyleClassAttributeBindingView',
    component: () => import(/* webpackChunkName: "ClassAttributeView" */ '../views/StyleClassAttributeBindingView.vue')
  },
  {
    path: '/InputTypeAttributeView',
    name: 'InputTypeAttributeView',
    component: () => import(/* webpackChunkName: "InputTypeAttributeView" */ '../views/InputTypeAttributeView.vue')
  },
  {
    path: '/ListRenderingView',
    name: 'ListRenderingView',
    component: () => import(/* webpackChunkName: "ListRenderingView" */ '../views/ListRenderingView.vue')
  },
  {
    path: '/RenderingView',
    name: 'RenderingView',
    component: () => import(/* webpackChunkName: "RenderingView" */ '../views/RenderingView.vue')
  },
  {
    path: '/EventView',
    name: 'EventView',
    component: () => import(/* webpackChunkName: "EventView" */ '../views/EventView.vue')
  },
  {
    path: '/ComputeView',
    name: 'ComputeView',
    component: () => import(/* webpackChunkName: "ComputeView" */ '../views/ComputeView.vue')
  },
  {
    path: '/WatchView',
    name: 'WatchView',
    component: () => import(/* webpackChunkName: "WatchView" */ '../views/WatchView.vue')
  },
  {
    path: '/LookupView',
    name: 'LookupView',
    component: () => import(/* webpackChunkName: "LookupView" */ '../views/LookupView.vue')
  },
  {
    path: '/SaveView',
    name: 'SaveView',
    component: () => import(/* webpackChunkName: "SaveView" */ '../views/SaveView.vue')
  },
  {
    path: '/ServerDataView',
    name: 'ServerDataView',
    component: () => import(/* webpackChunkName: "ServerDataView" */ '../views/ServerDataView.vue')
  },
  {
    path: '/ComponentImportView',
    name: 'ComponentImportView',
    component: () => import(/* webpackChunkName: "ComponentImportView" */ '../views/ComponentImportView.vue')
  },
  {
    path: '/SlotUseModalLayoutView',
    name: 'SlotUseModalLayoutView',
    component: () => import(/* webpackChunkName: "SlotUseModalLayoutView" */ '../views/SlotUseModalLayoutView.vue')
  },
  {
    path: '/ProvideInjectView',
    name: 'ProvideInjectView',
    component: () => import(/* webpackChunkName: "ProvideInjectView" */ '../views/ProvideInjectView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
