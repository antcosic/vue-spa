<template>
    <div style="text-align: center;">
        <h2> Graphs </h2>
        <hr>
        <div>
            <h3>Line graph</h3>
            <svg id="test"></svg>
            <div>
                <button @click="changeInterval()">
                    Change interval
                </button>
                <input v-model="changedInterval">
            </div>

        </div>
        <hr>
        <div>
            <area-chart></area-chart>
        </div>
        <hr>
        <div>
            <line-chart></line-chart>
        </div>
    </div>

</template>

<style scoped>

</style>
<script>
    import Graph2 from './Graph2.vue';
    import Graph1 from './Graph1.vue';

    export default {
        data(){
            return{
                interval: 1000,
                changedInterval: ''
            }

        },
        created(){

            var inter = setInterval(function() {
                            updateData();
                        }, this.interval);
            function updateData(){
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
                        d3.select('#test')
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
                        sin.push({x: i, y: (Math.random() * (1.000 - 0.000) + 0.000) * Math.sin(i/10)});
                        cos.push({x: i, y: (Math.random() * (1.000 - 0.000) + 0.000) * Math.cos(i/10)});
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
            }
        },
        methods:{
            changeInterval(){
                this.interval = this.changedInterval * 1000
                console.log(this.interval)
            }
        },
        components: {
            'area-chart': Graph2,
            'line-chart': Graph1,

        }


    }
</script>
