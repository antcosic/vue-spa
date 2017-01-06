<template>
    <div class="container">
        <h2>USERS</h2>
        <modal-comment :config="modalConfig"></modal-comment>
        <div class="container">
            <table class="responstable">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Details</th>
                </tr>
                <tr v-for="user in users">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.username }}</td>
                    <td>{{ user.email}}</td>
                    <td>{{ user.address.street}}</td>
                    <td>
                        <button class="myButton" @click="showModal(user.name, user.username, user.email, user.address.street,
                                                  user.address.suite, user.address.city, user.address.zipcode,
                                                  user.address.geo.lat, user.address.geo.lng)">
                            More
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
                    name: null,
                    username: null,
                    email: null,
                    street: null,
                    suite: null,
                    city: null,
                    zipcode: null,
                    lat: null,
                    lng: null

                }
            }
        },

        created(){
            this.fetchData();
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

            showModal(name, username, email, street, suite, city, zipcode, lng, lat){
                this.modalConfig.name = name;
                this.modalConfig.username = username;
                this.modalConfig.email = email;
                this.modalConfig.street = street;
                this.modalConfig.suite = suite;
                this.modalConfig.city = city;
                this.modalConfig.zipcode = zipcode;
                this.modalConfig.lat = lat;
                this.modalConfig.lng = lng;
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