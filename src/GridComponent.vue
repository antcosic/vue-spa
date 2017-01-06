<template>
    <div>
        <table>
            <thead>
            <tr>
                <th v-for="key in columns"
                    @click="sortBy(key)"
                    :class="{ active: sortKey == key }">
                    {{ key | capitalize }}
                    <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
                    </span>
                </th>
                <th> Actions </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(entry, index) in filteredData" v-if="index >= from && index < to" >
                <td v-for="key in columns">
                    {{entry[key]}}
                </td>
                <td>
                    <button @click="removeRow(index)">Remove</button>
                    <button>Edit</button>
                </td>

            </tr>
            </tbody>
        </table>
        <div class="pagMenu">

            <ul class="pagination">
                <button class="button" @click="handlePrev()"> << </button>
                <li v-for="page in numberOfPages">
                    <button class="button" @click="handlePage(page)"> {{page}} </button>
                </li>
                <button class="button" @click="handleNext()"> >> </button>
            </ul>

        </div>
    </div>
</template>
<style scoped>
    @import './items.less';
</style>
<script>
    import Vue from 'vue'
    import Vuex from 'vuex'

    Vue.use(Vuex)

    export default{
        props: {
            data: Array,
            columns: Array,
            filterKey: String

        },
        data() {
            var sortOrders = {}
            this.columns.forEach(function (key) {
                sortOrders[key] = 1
            })
            return {
                page: null,
                from: null,
                to: null,
                rowsPerPage: 10,
                numberOfPages: 10,
                record: {},
                sortKey: '',
                sortOrders: sortOrders
            }
        },

        created(){
             this.page = 1;
             this.from = this.rowsPerPage * (this.page - 1);
             this.to = this.rowsPerPage * this.page;
        },
        computed: {
            filteredData: function () {
                var sortKey = this.sortKey
                var filterKey = this.filterKey && this.filterKey.toLowerCase()
                var order = this.sortOrders[sortKey] || 1
                var data = this.data
                if (filterKey) {
                    data = data.filter(function (row) {
                        return Object.keys(row).some(function (key) {
                            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
                        })
                    })
                }

                if (sortKey) {
                    data = data.slice().sort(function (a, b) {
                        a = a[sortKey]
                        b = b[sortKey]
                        return (a === b ? 0 : a > b ? 1 : -1) * order
                    })
                }
                return data
            }
        },
        filters: {
              capitalize: function (str) {
                  return str.charAt(0).toUpperCase() + str.slice(1)
              }
        },
        methods: {
              ispis(row){
                  console.log(row);
              },
              removeRow: function (index) {
                  this.data.splice(index, 1);
                  console.log(index);
              },
              sortBy: function (key) {
                  this.sortKey = key
                  this.sortOrders[key] = this.sortOrders[key] * -1
              },

              handlePage(index){
                  this.page = index;
                  this.from = this.rowsPerPage * (this.page - 1);
                  this.to = this.rowsPerPage * this.page;

              },
              handlePrev(){

                  if(this.page - 1 > 0){
                      this.page = this.page-1;
                      this.from = this.rowsPerPage * (this.page - 1);
                      this.to = this.rowsPerPage * this.page;
                  }
              },
              handleNext(){

                  if(this.page + 1 < 11){
                      this.page = this.page + 1;
                      this.from = this.rowsPerPage * (this.page - 1);
                      this.to = this.rowsPerPage * this.page;
                  }
              }
        }
    }

</script>
