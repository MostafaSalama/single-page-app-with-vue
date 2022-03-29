<template>
  <div>
    Hello Simple Users Page
  </div>
</template>

<script>
export default {
  name: "Users",

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

</style>
