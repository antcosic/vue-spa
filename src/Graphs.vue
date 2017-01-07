<template>
    <div>


        <h1>This is graph</h1>
    </div>
</template>

<style scoped>
     text {
            font: 12px sans-serif;
        }
        svg {
            display: block;
        }
        html, body, svg {
            margin: 0px;
            padding: 0px;
            height: 1000%;
            width: 100%;
        }
</style>
<script>
    import * as d3 from 'd3';
    import * as nvd3 from 'nvd3';

 nv.addGraph({
        generate: function() {
            var width = nv.utils.windowSize().width - 80,
                height = nv.utils.windowSize().height - 80;
            var chart = nv.models.line()
                .width(width)
                .height(height)
                .margin({top: 0, right: 0, bottom: 0, left: 0});
            chart.dispatch.on('renderEnd', function(){
                console.log('render complete');
            });
            d3.select('#test1')
                .attr('width', width)
                .attr('height', height)
                .datum(sinAndCos())
                .call(chart);
            return chart;
        },
        callback: function(graph) {
            window.onresize = function() {
                var width = nv.utils.windowSize().width - 80,
                    height = nv.utils.windowSize().height - 80,
                    margin = graph.margin();
                if (width < margin.left + margin.right + 5)
                    width = margin.left + margin.right + 5;
                if (height < margin.top + margin.bottom + 5)
                    height = margin.top + margin.bottom + 5;
                graph.width(width).height(height);
                d3.select('#test1')
                    .attr('width', width)
                    .attr('height', height)
                    .call(graph);
            };
        }
    });
    function sinAndCos() {
        var sin = [],
            cos = [];
        for (var i = 0; i < 100; i++) {
            sin.push({x: i, y: Math.sin(i/10)});
            cos.push({x: i, y: .5 * Math.cos(i/10)});
        }
        return [
            {
                values: sin,
                key: "Sine Wave",
                color: "#ff7f0e"
            },
            {
                values: cos,
                key: "Cosine Wave",
                color: "#2ca02c",
                //strokeWidth: 3
            }
        ];
    }

    export default {
        data(){
            return{


           }
        },

        created(){
            this.ispisD();
            this.ispisNvd();
             nv.addGraph({
        generate: function() {
            var width = nv.utils.windowSize().width - 40,
                height = nv.utils.windowSize().height - 40;
            var chart = nv.models.line()
                .width(width)
                .height(height)
                .margin({top: 20, right: 20, bottom: 20, left: 20});
            chart.dispatch.on('renderEnd', function(){
                console.log('render complete');
            });
            d3.select('#test1')
                .attr('width', width)
                .attr('height', height)
                .datum(sinAndCos())
                .call(chart);
            return chart;
        },
        callback: function(graph) {
            window.onresize = function() {
                var width = nv.utils.windowSize().width - 40,
                    height = nv.utils.windowSize().height - 40,
                    margin = graph.margin();
                if (width < margin.left + margin.right + 20)
                    width = margin.left + margin.right + 20;
                if (height < margin.top + margin.bottom + 20)
                    height = margin.top + margin.bottom + 20;
                graph.width(width).height(height);
                d3.select('#test1')
                    .attr('width', width)
                    .attr('height', height)
                    .call(graph);
            };
        }
    });
    function sinAndCos() {
        var sin = [],
            cos = [];
        for (var i = 0; i < 100; i++) {
            sin.push({x: i, y: Math.sin(i/10)});
            cos.push({x: i, y: .5 * Math.cos(i/10)});
        }
        return [
            {
                values: sin,
                key: "Sine Wave",
                color: "#ff7f0e"
            },
            {
                values: cos,
                key: "Cosine Wave",
                color: "#2ca02c",
                strokeWidth: 3
            }
        ];
    }
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