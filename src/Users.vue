<template>
    <div>
        <h2>Users</h2>
        <p> boja </p>
        <button id="show-modal" @click="showModal = true">Show Modal</button>
        <!-- use the modal component, pass in the prop -->
        <modal v-if="showModal" @close="showModal = false">
            <!--
              you can use custom content here to overwrite
              default content
            -->
            <h3 slot="header">Antonio Ćosić</h3>
        </modal>
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
                        <button id="show-modal" @click="showModal = true">Show Modal</button>
                        <!-- use the modal component, pass in the prop -->
                        <modal v-if="showModal" @close="showModal = false">
                            <!--
                              you can use custom content here to overwrite
                              default content
                            -->
                            <h3 slot="header">{{user.name}}</h3>
                        </modal>
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
    export default{
        data(){
            return{
                users: [],
                showModal: false
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
            }
        },
        components: {
            'modal': Modal
        }
    }
</script>


<style lang="less" scoped>
    @import './users';
</style>