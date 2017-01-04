import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Users from './Users.vue'
import Home from './Home.vue'
import Graph from './Graphs.vue'

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
    fetchData(){
        this.$http.get('./users.json', {
            params: {
                ID: 12345
            }
        })
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
    },
    router,
    render: h => h(App)
});
