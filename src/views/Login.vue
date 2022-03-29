<template>
  <div class="d-flex align-center full-view">
    <div class="d-flex align-center">
      <h1>SIGN INTO YOUR ACCOUNT</h1>
      <Input type="email" @change="onUserNameChange" />
      <Input type="password" @change="onUserPasswordChange" />
      <div class="submit-button">
        <Button @click="onSignIn">Simple Test</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Input from '@/components/Input';
import Button from '@/components/Button';
export default {
  name: "Login",
  components: {Button, Input},
  data() {
    return {
      user: '',
      password: '',
    }
  },

  methods: {
    onUserNameChange(value) {
      this.user = value;
    },

    onUserPasswordChange(value) {
      this.password = value;
    },

    onSignIn() {
      console.log(this.user);
      console.log(this.password);
    }
  }
}
</script>

<style scoped>

</style>
