import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from './components/LoginForm.vue';
import DashboardPage from './components/DashboardPage.vue';

const routes = [
  { path: '/', redirect: '/loginform' },
  { path: '/loginform', component: LoginForm },
  { path: '/dashboardpage', component: DashboardPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
