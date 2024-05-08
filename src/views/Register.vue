<template>
  <div class="register-container">
    <h1>Register</h1>
    <form @submit.prevent="register">
      <input v-model="username" placeholder="请输入用户名💡"/>
      <input v-model="password" type="password" placeholder="密码长度大于1且不超过20位🔒" @blur="validatePassword"/>
      <input v-model="confirmPassword" type="password" placeholder="再次输入密码！"/>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    register() {
      // Handle registration logic here
      console.log('Registering...');
    },
    validatePassword() {
      if (this.password.length < 1 || this.password.length > 20) {
        alert('密码长度必须大于1且不超过20位');
        this.password = ''; // 清空不符合要求的密码
      }
    }
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
