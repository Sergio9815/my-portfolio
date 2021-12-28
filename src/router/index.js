import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/TheHome.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: Home,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Home,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
