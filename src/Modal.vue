<template>
    <div>
        <div class="modal-mask" v-if="config.show" transition="modal">
            <div class="modal-container">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<style>

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .7);
  transition: opacity .3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-container {
  min-width: 50vw;
  max-width: 80vw;
  max-height: 80vh;
  padding: 20px 30px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  overflow: auto;
}

.modal-body {
  margin: 20px 0;
}

.modal-enter,
.modal-leave {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave .modal-container {
  transform: scale(1.1);
}

label{
  display: block;
  margin-bottom: 20px;
}

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
