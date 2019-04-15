import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
// Socket.IO
import VueSocketIO from 'vue-socket.io'
// CSS
import '../node_modules/spectre.scss/spectre.scss'

Vue.use(new VueSocketIO({
    debug: true,
    connection: 'http://192.168.7.122:4000',
    vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
    }
}));

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    el: '#app',
    render: h => h(App)
});
