import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from './components/LoginForm.vue';
import DashboardPage from './components/DashboardPage.vue';
import Students from './components/students.vue';
import Sponsors from './components/Sponsors.vue';


const routes = [
  { path: '/', redirect: '/loginform' },
  { path: '/loginform', component: LoginForm },
  { path: '/dashboardpage', component: DashboardPage },
  { path: '/sponsors', component: Sponsors },
  { path: '/students', component: Students},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
