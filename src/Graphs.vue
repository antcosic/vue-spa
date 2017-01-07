<template>
    <div>



        <h1>This is graph component</h1>
        <div id='myChart'></div>

    </div>
</template>

<style scoped>

</style>
<script>
    import * as d3 from 'd3';

import zingchart from 'zingchart';

zingchart.render({
    id: 'myChart',
    data: {
      type: 'line',
      series: [{
        values: [54,23,34,23,43],
      }, {
        values: [10,15,16,20,40]
      }]
    }
  });
    export default {
        data(){
            return{


           }
        },

        created(){
            this.ispisD();
            this.ispisNvd();
             zingchart.render({
    id: 'myChart',
    data: {
      type: 'line',
      series: [{
        values: [54,23,34,23,43],
      }, {
        values: [10,15,16,20,40]
      }]
    }
  });

        },
        methods: {
            sine() {
                var sin = [];
                for (var i = 0; i < 100; i++) {
                    sin.push({x: i, y: Math.sin(i/10)});
                }
                return sin;
            },
            ispisD(){
                console.log(d3);

            },
            ispisNvd(){
                console.log();

            }

        }


    }
</script>