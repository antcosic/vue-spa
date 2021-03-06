import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Users from './components/Users.vue'
import Home from './components/Home.vue'
import Graph from './components/Graphs.vue'

Vue.use(VueRouter);

const routes = [
    {path: '/users', component: Users},
    {path: '/graphs', component: Graph},
    {path: '/', component: Home}

];

const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({
    el: '#app',
    router,

    render: h => h(App)
});
