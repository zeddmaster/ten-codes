import {createRouter, createWebHistory} from 'vue-router'

import HomeView from '../pages/Main/Index.vue'
import Dictionary from "../pages/Dictionary.vue"

const routes = [
    { path: '/', component: HomeView },
    { path: '/learn', component: Dictionary },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})