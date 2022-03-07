import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: '前台',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView,
      },
      {
        path: 'products',
        name: '產品列表',
        component: () => import('../views/ProductsView.vue'),
      },
      {
        path: 'cart',
        name: '購物車',
        component: () => import('../views/CartView.vue'),
      },
    ],
  },
  {
    path: '/admin',
    name: '後台',
    component: () => import('../views/adminView.vue'),
    children: [
      {
        path: 'products',
        name: '後台產品列表',
        component: () => import('../views/adminProductsView.vue'),
      },
      {
        path: 'coupon',
        name: '後台優惠卷',
        component: () => import('../views/adminCouponView.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
});

export default router;
