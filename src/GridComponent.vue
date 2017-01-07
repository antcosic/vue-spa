<template>
    <div>

        <form v-if="editForm"  class="form-horizontal">
            <hr>
            <div>
                <div>
                    <label>UserId</label>
                    <input type="text" class="form-control" v-model="userId">
                </div>
                <div>
                    <label>Id</label>
                    <input type="text" class="form-control" v-model="id">
                </div>
                <div>
                    <label>Title</label>
                    <input type="text" class="form-control" v-model="title">
                </div>
                <div>
                    <label>Body</label>
                    <input type="text" class="form-control" v-model="body">
                </div>
                <div style="margin-top:15px">

                </div>
            </div>
        </form>
        <button v-if="editForm" @click="saveNewData()">Save</button>

        <hr>
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
            <tr v-for="(entry, index) in filteredData" v-if="index >= from && index < to">
                <td v-for="key in columns">
                    {{entry[key]}}
                </td>
                <td>
                    <button @click="removeRow(index)">Remove</button>
                    <button @click="ispisUsers(index)">Edit</button>
                </td>

            </tr>
            </tbody>
        </table>
        <div class="pagMenu">

            <ul class="pagination">
                <button class="myButton" @click="handlePrev()"> << </button>
                <li v-for="page in numberOfPages">
                    <button class="myButton" @click="handlePage(page)"> {{page}} </button>
                </li>
                <button class="myButton" @click="handleNext()"> >> </button>
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
            filterKey: String,
            filterKey2: String,
            filterKey3: String,
            filterKey4: String

        },
        data() {
            var sortOrders = {}
            this.columns.forEach(function (key) {
                sortOrders[key] = 1
            })
            return {
                pomIndex: 1,
                userId: null,
                id: null,
                title: null,
                body: null,
                editForm: false,
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
                var filterKey2 = this.filterKey2 && this.filterKey2.toLowerCase()
                var filterKey3 = this.filterKey2 && this.filterKey3.toLowerCase()
                var filterKey4 = this.filterKey2 && this.filterKey4.toLowerCase()
                var order = this.sortOrders[sortKey] || 1
                var data = this.data
                if (filterKey) {
                    data = data.filter((row) => {
                        return Object.keys(row).some(function (key) {
                            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
                        })
                    })
                }

                if (filterKey2) {
                    data = data.filter(function (row) {
                        return Object.keys(row).some(function (key) {
                            return String(row[key]).toLowerCase().indexOf(filterKey2) > -1
                        })
                    })
                }

                if (filterKey3) {
                    data = data.filter(function (row) {
                        return Object.keys(row).some(function (key) {
                            return String(row[key]).toLowerCase().indexOf(filterKey3) > -1
                        })
                    })
                }

                if (filterKey4) {
                    data = data.filter(function (row) {
                        return Object.keys(row).some(function (key) {
                            return String(row[key]).toLowerCase().indexOf(filterKey4) > -1
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
              },
              addRow: function (index) {
              this.editForm=true;
                    try {
                        this.data.splice(index + 1, 0, {});
                        console.log(index);
                    } catch(e){
                        console.log(e);
                     }

                },

                ispisUsers(index){
                    this.editForm=true;

                    this.pomIndex = index;

                        var obj = this.data[index];
                        this.userId = obj.userId;
                        this.id = obj.id;
                        this.title = obj.title;
                        this.body = obj.body;
                        console.log(obj.title);
                        console.log(this.userId);
                        console.log(this.id);
                        console.log(this.title);
                        console.log(this.body);


                 },

                 saveNewData(){
                    console.log(this.pomIndex);
                    var objTwo = this.data[this.pomIndex];
                       console.log(objTwo);
                    objTwo.userId= this.userId;
                    objTwo.id= this.id;
                    objTwo.title= this.title;
                    objTwo.body= this.body;

                    console.log( objTwo.userId);

                    this.editForm=false;
                 }

        }
    }

</script>
