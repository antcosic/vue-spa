<template>
        <!-- Modal Component -->
        <modal :config="config">
            <!-- Modal Header -->
            <div class="modal-header">
                <h3>Name: {{ config.name }}</h3>
            </div>
            <!-- Modal Body -->
            <div class="modal-body">
                <form>
                    <p>
                        <label>Order Details</label>
                        <textarea rows="5">
                            {{ config.name }}
                            {{ config.username }}
                        </textarea>
                    </p>
                </form>
            </div>
            <!-- Modal Footer -->
            <div class="modal-footer">
                <button @click="save()">Close</button>
            </div>
        </modal>
</template>
<style>

</style>
<script>
    import Modal from './Modal.vue'
    export default{
        props: ['config', 'name', 'username'],
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
