<template>
        <div class="homeContainer">
                <h2 class="h2"> STORE WITH ITEMS</h2>
                <div class="menuRow">
                        <div class="menuItems">
                                <p class="p1">Search by UserId: </p>
                                <textarea class="filter" name="query1" v-model="searchQuery">
                        </div>
                        <div class="menuItems">
                                <p class="p1">  Search by Id: </p>
                                <textarea class="filter" name="query2" v-model="searchQuery2">
                        </div>
                        <div class="menuItems">
                                <p class="p1">Search by Title:</p>
                                <textarea class="filter" name="query3" v-model="searchQuery3">
                        </div>
                        <div class="menuItems">
                                <p class="p1"> Search by Body: </p>
                                <textarea class="filter" name="query4" v-model="searchQuery4">
                        </div>
                </div>
                <demo-grid
                        :data="gridData"
                        :columns="gridColumns"
                        :filter-key="searchQuery"
                        :filter-key2="searchQuery2"
                        :filter-key3="searchQuery3"
                        :filter-key4="searchQuery4"
                        >
                </demo-grid>
        </div>
</template>

<style scoped>
        @import '../styles/items.less';
</style>
<script>

        import GridComponent from './GridComponent.vue';
        import axios from 'axios';
        import Vue from 'vue';
        export default{
                data() {
                        return {
                                searchQuery: '',
                                searchQuery2: '',
                                searchQuery3: '',
                                searchQuery4: '',
                                gridColumns: ['userId','id', 'title', 'body'],
                                gridData: []

                        }
                },
                created(){
                        this.fetchData();
                },
                methods:{

                        fetchData(){
                                var self = this;
                                axios.get('https://jsonplaceholder.typicode.com/posts')
                                        .then(function(response) {
                                                Vue.set(self.$data, 'gridData',response.data)
                                                console.log(JSON.stringify(response.data));
                                        })
                                        .catch(function(error) {
                                                console.log(error);
                                        });
                         },

                },

                components:{
                        'demo-grid': GridComponent
                }
        }
</script>