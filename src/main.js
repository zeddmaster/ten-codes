import { createApp } from 'vue'
import { router } from "./plugins/routes/index.js";

import './sass/main.scss'

import App from './App.vue'

createApp(App)
    .use(router)
    .mount('#app')
