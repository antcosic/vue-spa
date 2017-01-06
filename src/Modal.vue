<template>
    <div>
        <div class="modal-mask" v-if="config.show" transition="modal">
            <div class="modal-container">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import './modal.less';
</style>

<script>
    export default{
        props: {
            config: {
                validator: function (value) {
                    return value.hasOwnProperty('show') && typeof value.show === 'boolean'
                },
            },
        },
        methods: {
            close: function() {
                this.config.show = false
            },
        },
         ready: function() {
            // Close the modal when the escape key is pressed.
            var self = this
            document.addEventListener('keydown', function() {
                if (self.config.show && event.keyCode === 27) {
                    self.close()
                }
            })
        }

    }
</script>
