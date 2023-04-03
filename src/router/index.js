import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DogDetailsView from "../views/DogDetailsView"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/id/:id',
    name: 'DogDetails',
    component: DogDetailsView,
  }
]

const router = new VueRouter({
  routes
})

export default router
