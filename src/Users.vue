<template>
    <div>
        <h2>Users</h2>
        <p> boja </p>
        <h2>Orders</h2>
        <div v-for="i in [100,101,102,103]">
            <p>
                <button @click="showModal(i)">
                    Order #{{ i }} Modal
                </button>
            </p>
        </div>
        <modal-comment :config="modalConfig"></modal-comment>

        <table>
            <tr>
                <td> Antonio Ćosić </td>
                <td> Nova ulica 8 </td>
                <td> antcosic@foi.hr </td>
            </tr>
        </table>
        <button @click="fetchData">Fetch users</button>
        <button @click="ispisUsers">Ispis</button>
        <div class='container'>
            <table class="responstable">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Address</th>
                </tr>
                <tr v-for="user in users">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.username }}</td>
                    <td>{{ user.email}}</td>
                    <td>{{ user.address.street}}</td>
                    <td>
                        <button @click="showModal(user.name, user.username)">
                            Details about {{user.name}}
                        </button>
                    </td>
                </tr>

            </table>


        </div>


    </div>

</template>


<script>
    import Vue from 'vue';
    import axios from 'axios';

    import Modal from './Modal.vue';
    import ModalComment from './ModalComment.vue';
    export default{
        data(){
            return{
                users: [],
                 modalConfig: {
                    show: false,
                    ordernumber: null,
                    username: null
                }
            }
        },
        methods: {

            fetchData(){
                var self = this;
                axios.get('https://jsonplaceholder.typicode.com/users')
                        .then(function(response) {
                            Vue.set(self.$data, 'users',response.data)
                            console.log(JSON.stringify(response.data));
                        })
                        .catch(function(error) {
                            console.log(error);
                        });
            },
            ispisUsers(){
            var self = this;
                for(var i = 0; i < this.users.length; i++) {
                    var obj = this.users[i];
                    console.log(obj.name);
                }
            },
            showModal(name, username ){
                this.modalConfig.name = name;
                this.modalConfig.username = username;
                this.modalConfig.show = true;
            }
        },
        components: {
            'modal': Modal,
            'modal-comment': ModalComment
        }
    }
</script>


<style lang="less" scoped>
    @import './users';
</style>