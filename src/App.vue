<template>

  <div id="app">
    <h1>SPA</h1>
    <hr>
    <div id="menuRow">
      <div id="menuItem1"> <router-link class="a" to="/"><p>Store</p></router-link> </div>
      <div id="menuItem2"> <router-link class="a" to="/users"><p>Users</p></router-link> </div>
      <div id="menuItem3"> <router-link class="a" to="/graphs"><p>Graphs</p></router-link> </div>
    </div>
    <hr>


    <router-view></router-view>
  </div>
</template>


<script>


export default {
  data () {
    return {


    }
  },


}
</script>

<style lang="less" scoped>
  @import './app';

</style>
