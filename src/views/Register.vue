<template>
  <div class="register-container">
    <h1>Register</h1>
    <form @submit.prevent="register">
      <input v-model="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
      <input v-model="confirmPassword" type="password" placeholder="Confirm Password" />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    register() {
      // Handle registration logic here
      console.log('Registering...');
    },
  },
};
</script>

<style scoped>
.register-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
}

input {
  width: 300px;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 1.5px solid #ccc;
}

button {
  background-color: #28a745;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
