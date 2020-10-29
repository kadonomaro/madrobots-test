import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../pages/HomePage.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/form',
    name: 'FormPage',
    component: () => import(/* webpackChunkName: "form" */ '../pages/FormPage.vue')
	},
	{
    path: '/list',
    name: 'ListPage',
    component: () => import(/* webpackChunkName: "list" */ '../pages/ListPage.vue')
	},
	{
    path: '/dropdown',
    name: 'DropdownPage',
    component: () => import(/* webpackChunkName: "dropdown" */ '../pages/DropdownPage.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
