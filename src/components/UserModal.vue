<template>
  <div class="user-modal-container" v-if="showModal">
    <div class="user-modal">
      <div class="user-modal_content">
        <div class="user-image-container">
          <img :src="user.image"/>
        </div>
        <div class="user-modal_text">
          <div class="user-text_info">
            <div class="icon">
              <img class="image-icon" src="../assets/user-svgrepo-com.svg">
            </div>
            <div class="text">
              {{user.name}}
            </div>
          </div>
          <div class="user-text_info">
            <div class="icon">
              <img class="image-icon" src="../assets/user-svgrepo-com.svg">
            </div>
            <div class="text">
              {{user.email}}
            </div>
          </div>
          <div class="user-text_info">
            <div class="icon">
              <img class="image-icon" src="../assets/user-svgrepo-com.svg">
            </div>
            <div class="text">
              {{user.phone}}
            </div>
          </div>
          <div class="user-text_info">
            <div class="icon">
              <img class="image-icon" src="../assets/user-svgrepo-com.svg">
            </div>
            <div class="text">
              {{user.address.city}}, {{user.address.street}}
            </div>
          </div>
          <div class="user-text_info">
            <div class="icon">
              <img class="image-icon" src="../assets/user-svgrepo-com.svg">
            </div>
            <div class="text">
              {{user.website}}
            </div>
          </div>

        </div>

      </div>
      <div class="close-btn" @click="$emit('closeModal')">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserModal",
  data() {
    return {
    }
  },
  props: {
    user: Object,
    showModal: Boolean
  }
}
</script>

<style scoped>
.user-modal-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(51, 51, 51, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-modal {
  width: 50%;
  height: 300px;
  background-color: #ffffff;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
}

.user-modal img {
  max-height: 300px;
}



.user-modal_content {
  display: flex;
  flex-direction: row;
}
.user-text_info {
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  margin-top: 20px;
}
.user-modal_text {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-left: 30px;
  font-weight: bolder;
}

.close-btn {
  position: absolute;
  top: 0;
  right: 20px;
  font-size: 40px;
  cursor: pointer;
}
.close-btn:after{
  display: inline-block;
  content: "\00d7"; /* This will render the 'X' */
}

.text {
  margin-left: 10px;
}
.image-icon {
  width: 20px;
  height: 20px;
}
</style>
