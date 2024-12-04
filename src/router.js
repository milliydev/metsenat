import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from './components/LoginForm.vue';
import DashboardPage from './components/pages/DashboardPage.vue';
import Sponsors from './components/pages/Sponsors.vue';
import Students from './components/pages/students.vue';



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
