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
    },
    {
        path: '/preview',
        name: 'preview',
        component: () => import('../views/PreviewPage.vue'),
    },
    {
        path: '/preview/overview',
        name: 'overview',
        component: () => import('../views/bodyPages/OverviewPage.vue'),
    },
    {
        path: '/preview/get_pay',
        name: 'get_pay',
        component: () => import('../views/bodyPages/GetPay.vue'),
    },
    {
        path: '/preview/income',
        name: 'income',
        component: () => import('../views/bodyPages/IncomePage.vue'),
    },
    {
        path: '/preview/setting',
        name: 'setting',
        component: () => import('../views/bodyPages/SettingPage.vue'),
    },
]

const route = createRouter({
    history: createWebHashHistory(),
    routes
})

export default route;