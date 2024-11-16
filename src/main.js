import './assets/main.css'
import './assets/Iconmoon/style.css'
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueApexCharts from 'vue3-apexcharts';


const app = createApp(App);
app.use(router);
app.mount('#app');
app.use(VueApexCharts);
app.component('apexchart', VueApexCharts);


