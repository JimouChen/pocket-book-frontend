import {createRouter, createWebHashHistory} from "vue-router";
import Register from "@/views/Register.vue";
import Login from "@/views/Login.vue";
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
        component: Register,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    }
]

const route = createRouter({
    history: createWebHashHistory(),
    routes
})

export default route;