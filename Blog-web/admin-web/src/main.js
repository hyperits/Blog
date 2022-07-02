import { createApp } from 'vue';
import App from './App.vue';
import plugin from './plugin/antui';

import './assets/css/style.css';
import router from './router';

createApp(App).use(router).use(plugin).mount('#app');
