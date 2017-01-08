<template>
    <div style="text-align: center;">
        <h2> Graphs </h2>
        <div class="menuRow">
            <div class="menuItems">
                <area-chart></area-chart>
            </div>
            <div class="menuItems">
                <line-chart></line-chart>
            </div>

        </div>

    </div>
</template>

<style scoped>
    .menuItems {
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
    }
    .menuRow {
        padding-left: 50px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        position: relative;
    }
</style>
<script>
    import Graph2 from './Graph2.vue';
    import Graph1 from './Graph1.vue';


    export default {
        data(){
            return{

            }

        },

        created(){

        },
        components: {
            'area-chart': Graph2,
            'line-chart': Graph1
        }


    }
</script>
