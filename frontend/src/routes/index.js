import { createRouter, createWebHistory } from "vue-router";
import Homepage from '../pages/Homepage'
import Users from '../pages/Users'
import ViewUser from '../pages/ViewUser'
import Login from '../pages/Login'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Homepage,
    },
    {
        path: '/users',
        name: 'Users',
        component: Users,
    },
    {
        path: '/users/:id',
        name: 'ViewUser',
        component: ViewUser,
    }, 
    {
        path: '/login',
        name: 'Login',
        component: Login,
    }
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})


export default router