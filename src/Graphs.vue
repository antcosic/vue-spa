<template>
    <div>

        <div id="chart_div" style="width: 100%; height: 500px;"></div>

        <h1>This is graph</h1>
    </div>
</template>

<style scoped>

</style>
<script>
    import * as d3 from 'd3';
    import * as nvd3 from 'nvd3';


    google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2013',  1000,      400],
          ['2014',  1170,      460],
          ['2015',  660,       1120],
          ['2016',  1030,      540]
        ]);

        var options = {
          title: 'Company Performance',
          hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
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