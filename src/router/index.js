import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../pages/HomePage.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
		component: HomePage,
		meta: {
			title: 'Главная'
		}
  },
  {
    path: '/form',
    name: 'FormPage',
		component: () => import(/* webpackChunkName: "form" */ '../pages/FormPage.vue'),
		meta: {
			title: 'Форма'
		}
	},
	{
    path: '/list',
    name: 'ListPage',
		component: () => import(/* webpackChunkName: "list" */ '../pages/ListPage.vue'),
		meta: {
			title: 'Выпадающий список'
		}
	},
	{
    path: '/dropdown',
    name: 'DropdownPage',
		component: () => import(/* webpackChunkName: "dropdown" */ '../pages/DropdownPage.vue'),
		meta: {
			title: 'Список лет'
		}
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
