<template>
  <div v-if="showMessage" class="message text-xs rounded-br-lg">
    {{ message }}
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      showMessage: false,
      message: "",
    };
  },
  methods: {
    showMessageAlert(message) {
      this.message = message;
      this.showMessage = true;

      // Hide the message after a few seconds
      setTimeout(() => {
        this.showMessage = false;
        this.message = "";
      }, 3000); // Adjust the timeout duration as needed
    },
  },
};
</script>
  
<style scoped>
.message {
  width: 9%;
  background-color: #70f07d;
  /* Green */
  color: black;
  text-align: center;
  padding: 7px;
  position: fixed;
  bottom: 50px;
  left: 5%;
  transform: translateX(-50%);
  z-index: 9999;

}
</style>
  