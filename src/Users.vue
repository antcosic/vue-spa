<template>
    <div>
        <h2>Users</h2>
        <table>
            <tr>
                <td> Antonio Ćosić </td>
                <td> Nova ulica 8 </td>
                <td> antcosic@foi.hr </td>
            </tr>
        </table>
        <button @click="fetchData">Fetch users</button>
        <button @click="ispisUsers">Ispis</button>
        <div class="user" v-for="user in users" >
            <p> Name: {{ user.name }} </p>

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

<style>
    .user{
        border: 1px solid #ccc;
        background-color: white;
        padding: 10px;
    }
</style>