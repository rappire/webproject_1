import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter); 

export default new VueRouter({
    routes : [
        {
            path: '/',
            redirect : '/main'
        },
        {
            path: '/main',
            component: ()=>import('@/views/MainPage.vue'),
        },
        {
            path: '/demovid',
            component: ()=> import('@/views/DemovidPage.vue'),
        },
        {
            path: '/gallery',
            component: ()=> import('@/views/GalleryPage.vue'),
        },
        {
            path: '/portfolio',
            component: ()=> import('@/views/PortfolioPage.vue'),
        },
        {
            path: '/contact',
            component: ()=> import('@/views/ContactPage.vue'),
        },
        {
            path: '*',
            component: ()=>import('@/views/MainPage.vue'),
        },
    ]
});