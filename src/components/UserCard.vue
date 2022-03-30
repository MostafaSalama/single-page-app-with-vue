<template>
<div class="user-card" @click.h.stop="$emit('setCurrentUser', user)">
  <div class="user-card__image">
    <img class="user-image" :src="user.image" :alt="user.name" />
  </div>
  <div class="user-card__info">
    <h2 class="user-name">{{user.name}}</h2>
    <p class="user-city">{{user.address.city}}</p>
  </div>
</div>
</template>

<script>
export default {
  name: "UserCard",
  props:{
    user: {
      type: Object
    }
  }
}
</script>

<style scoped>
.user-card {
  margin-top: 50px;
  margin-left: 50px;
  position: relative;
  cursor: pointer;
  display: flex;
  max-width: 44%;
}

.user-card:hover .user-card__info {
  display: flex;
  background-color: rgba(51, 51, 51, 0.5);

}
.user-card__info {
  position: absolute;
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: auto;
  text-align: center;
  color: #ffffff;
  transition: all 200ms ease-in-out;

}
.user-card__image {
  width: 100%;
}

.user-image {
  width: 100%;
  height: 100%;
  border-radius: 4px;
  display: block;
}

.user-name {
  font-style: italic;
  font-weight: bolder;
}
</style>
