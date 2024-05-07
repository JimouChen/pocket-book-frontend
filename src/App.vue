<template>
  <RegisterPage></RegisterPage>
</template>

<script>
import RegisterPage from "@/views/Register.vue";

export default {
  name: 'App',
  components: {
    RegisterPage,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
