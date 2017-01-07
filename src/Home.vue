<template>
        <div>
                <div class="pagMenu">
                        <form id="search">
                                Title: <input name="query" v-model="searchQuery">
                        </form>

                        <form id="search">
                                Body: <input name="query" v-model="searchQuery2">
                        </form>

                </div>


                <demo-grid
                        :data="gridData"
                        :columns="gridColumns"
                        :filter-key="searchQuery"
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