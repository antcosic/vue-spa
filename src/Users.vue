<template>
    <div>
        <h2>Users</h2>
        <p> boja </p>
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
                <tr id="myBtn" v-for="user in users">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.username }}</td>
                    <td>{{ user.email}}</td>
                    <td>{{ user.address.street}}</td>
                </tr>

            </table>


        </div>


    </div>

</template>


<script>
    import Vue from 'vue';

    import axios from 'axios';
    export default{
        data(){
            return{
                users: []
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
    }
</script>


<style lang="less" scoped>
    @import './users';
</style>