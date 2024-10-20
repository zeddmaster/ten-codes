import {createRouter, createWebHistory} from 'vue-router'

import HomeView from '../../pages/Main/Index.vue'
import Dictionary from "../../pages/Dictionary.vue"
import EventBus from "../EventBus.js";

const routes = [
    { path: '/', component: HomeView },
    { path: '/search', component: Dictionary },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    EventBus.$emit('hideMenu')
    next()
})