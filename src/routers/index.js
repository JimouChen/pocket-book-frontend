import {createRouter, createWebHashHistory} from "vue-router";
import HomePage from "@/views/HomePage.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
    },
    {
        path: '/signup',
        name: 'register',
        component: () => import('../views/Register.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue'),
    }
]

const route = createRouter({
    history: createWebHashHistory(),
    routes
})

export default route;