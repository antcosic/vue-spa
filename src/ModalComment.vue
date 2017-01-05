<template>
        <!-- Modal Component -->
        <modal :config="config">
            <!-- Modal Header -->
            <div class="modal-header">
                <h3> {{ config.name }}</h3>
            </div>
            <!-- Modal Body -->
            <div class="modal-body">
                <hr>
                <label>Other details:</label>
                <p>Username: {{ config.username }} </p>
                <p>Email: {{ config.email }} </p>
                <dl>
                    <dt>Adress:</dt>
                    <dd>Street: {{ config.street}}</dd>
                    <dd>Suite: {{ config.suite}}</dd>
                    <dd>City: {{ config.city}}</dd>
                    <dd>Zipcode: {{ config.zipcode}}</dd>
                    <dt>Location:</dt>
                    <dd>Lat: {{ config.lat}}</dd>
                    <dd>Lng: {{ config.lng}}</dd>
                </dl>
                <hr>

            </div>
            <!-- Modal Footer -->
            <div class="modal-footer">
                <button class="myButton" @click="save()">Close</button>
            </div>
        </modal>
</template>
<style>
@import './modalBody.less';
</style>
<script>
    import Modal from './Modal.vue'
    export default{
        props: ['config',
                'name',
                'username',
                'email',
                'street',
                'suite',
                'city',
                'zipcode',
                'lat',
                'lng'],
        components: {
            'modal': Modal,
        },

        methods: {
            close() {
              this.config.show = false
            },

            save() {
              this.close()
            },
        }
    }
</script>
