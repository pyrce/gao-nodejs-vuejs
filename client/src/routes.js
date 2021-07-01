import Vue from 'vue';
import VueRouter from 'vue-router';
//import Dashboard from './views/Dashboard.vue';
import home from './components/home.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: home,
        },
        {
            path: '/postes',
            name: 'postes',
            component: home,
        }
        
    ]
})

export default router;