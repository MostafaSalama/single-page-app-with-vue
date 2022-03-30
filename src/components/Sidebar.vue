<template>
  <aside class="sidebar">
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-list_item">Test</li>
        <li class="nav-list_item">Test</li>
        <li class="nav-list_item">Test</li>
        <li class="nav-list_item">Test</li>
        <li class="nav-list_item">Test</li>
        <li class="nav-list_item">Test</li>
        <li class="nav-list_item">Test</li>
      </ul>
    </nav>

    <Button class="btn-logout" @click="logout">Log Out</Button>
  </aside>
</template>

<script>
import Button from '@/components/Button';
export default {
  name: "Sidebar",
  components: {Button},
  methods: {
    logout() {
      localStorage.removeItem('user');
      this.$router.replace('/login');
    }
  }
}
</script>

<style scoped>
.sidebar {
  width: 20%;
}

.nav-list_item {
  margin-top: 20px;
  border-bottom: 4px solid #aaaaaa;
  font-size: 30px;
}

.btn-logout {
  position: absolute;
  bottom: 40px;
  left: 30px;
}
</style>
