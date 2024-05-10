import {createRouter, createWebHashHistory} from "vue-router";
import Register from "@/views/Register.vue";
import Login from "@/views/Login.vue";

const routes = [
    {
        path: '/',
        name: 'register',
        component: Register,
    },
    {
        path: '/login',
        name: Login,
        component: Login,
    }
]

const route = createRouter({
    history: createWebHashHistory(),
    routes
})

export default route;