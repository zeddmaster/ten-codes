import { createApp } from 'vue'
import { router } from "./routes/index.js";

import './sass/main.scss'
import 'bulma/bulma.scss'

import App from './App.vue'

createApp(App)
    .use(router)
    .mount('#app')
