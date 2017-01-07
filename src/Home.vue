<template>
        <div>
                <div class="pagMenu">
                        <form id="search1">
                                Search by UserId: <input name="query1" v-model="searchQuery">
                        </form>

                        <form id="search2">
                                Search by Id: <input name="query2" v-model="searchQuery2">
                        </form>

                        <form id="search3">
                                Search by Title: <input name="query3" v-model="searchQuery3">
                        </form>

                        <form id="search4">
                                Search by Body: <input name="query4" v-model="searchQuery4">
                        </form>
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
        @import './items.less';
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