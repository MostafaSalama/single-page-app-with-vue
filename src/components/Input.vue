<template>
  <label>
    <input class="input" :type="type" @input="onInput" @change="onChange" />
  </label>
</template>

<script>
export default {
  name: "Input",
  props:{
    label: String,
    type: String,
  },
  methods: {
    onInput(event) {
      // Can add validation here
      this.$emit('input', event.target.value);
    },
    onChange(event) { // Supports .lazy
      // Can add validation here
      this.$emit('change', event.target.value);
    },
  },
}
</script>

<style scoped>
.input {
  padding: 10px;
  margin: 10px;
}
</style>
