<template>
  <div class="container" @click.stop.prevent="closeModal">
    <sidebar/>
    <div class="user-cards-container">
      <UserCard v-for="user in users" :user="user" :key="user.id" @setCurrentUser="setCurrentUser"/>
      <UserModal :user="currentUser" :show-modal="showModal" @closeModal="closeModal"/>
    </div>
  </div>
</template>

<script>
import UserCard from '@/components/UserCard';
import {mapState} from 'vuex';
import Sidebar from '@/components/Sidebar';
import UserModal from '@/components/UserModal';
export default {
  name: "Users",
  components: {UserModal, Sidebar, UserCard},
  data(){
    return {
      currentUser: null,
      showModal: false,
    }
  },
  created() {
    this.$store.dispatch('getUsers');
  },

  mounted() {
  },

  methods:{
    setCurrentUser(user) {
      this.currentUser = user;
      this.showModal = true;
    },

    closeModal() {
        this.showModal = false;
    }
  },

  computed:{
    ...mapState(['users'])
  },

  beforeRouteEnter: ((to, from, next) => {
    const isAuthenticated = localStorage.getItem('user');
    if (!isAuthenticated) {
      return next('/login');
    }
    return next();
  }),
}
</script>

<style scoped>
.user-cards-container {
  left: 0;
  right: 0;
  margin: auto;
  justify-content: center;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: repeat(4, 1fr);
}
</style>
