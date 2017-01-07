<template>
    <div>
        <h2>Sparkline: <svg id="chart1" class="sparkline"></svg></h2>
        <h1>This is graph</h1>
    </div>
</template>

<style>
    text {
            font: 12px sans-serif;
        }
        svg {
            display: block;
        }
        html, body {
            margin: 0px;
            padding: 0px;
        }
        #chart1 {
            height: 30px;
        }
</style>
<script>
    import * as d3 from 'd3';
    import * as nvd3 from 'nvd3';

     nv.addGraph({
        generate: function() {
            var chart = nv.models.sparkline()
                    .width(400)
                    .height(30)
            d3.select("#chart1")
                    .datum(sine())
                    .call(chart);
            return chart;
        }
    });

    function sine() {
                var sin = [];
                for (var i = 0; i < 100; i++) {
                    sin.push({x: i, y: Math.sin(i/10)});
                }
                return sin;
            }
    export default {
        data(){
            return{


           }
        },

        created(){
            this.ispisD();
            this.ispisNvd();
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
                console.log(nvd3);

            }

        }


    }
</script>