import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Chat from './views/Chat.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/sala/:room',
            name: 'chat',
            component: Chat,
            beforeEnter: (to, from, next) => {
                if (to.params.name || sessionStorage.poc_name) {
                    if (sessionStorage.poc_name && !to.params.name) {
                        to.params.name = sessionStorage.poc_name;
                    }
                    next();
                } else {
                    next({name: 'home', params: {room: to.params.room}});
                }
            },
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: "*",
            redirect: '/'
        }
    ]
})
