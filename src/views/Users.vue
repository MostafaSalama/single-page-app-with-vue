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
      console.log('yes no');
      return next('/login')
    }
  }),
}
</script>

<style scoped>

</style>
