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
            <tr v-for="(entry, index) in filteredData">
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
    </div>
</template>
<style>
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
          data: function () {
            var sortOrders = {}
            this.columns.forEach(function (key) {
              sortOrders[key] = 1
            })
            return {
              record: {},
              sortKey: '',
              sortOrders: sortOrders
            }
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
            }

            }
          }

</script>
