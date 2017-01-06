<template>
    <div>

        <h1>This is graph</h1>
    </div>
</template>

<script>
    import * as d3 from 'd3';
    import * as nvd3 from 'nvd3';
    export default {
        data(){
            return{}
        },

        created(){
            this.ispisD();
            this.ispisNvd();
        },

        methods: {
            ispisD(){
                console.log(d3);

            },
            ispisNvd(){
                console.log(nvd3);

            }

        }


    }
</script>