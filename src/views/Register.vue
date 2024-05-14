<template>
  <div class="register-container">
    <h1 class="cls-title">注册页</h1>
    <form @submit.prevent="register">

      <p><input v-model="username" placeholder="请输入用户名💡"/></p>
      <p>
        <input v-model="password" type="password" placeholder="密码长度大于1且不超过20位🔒" @blur="validatePassword"/>
      </p>
      <p><input v-model="confirmPassword" type="password" placeholder="再次输入密码！"/></p>

      <div class="button-container">
        <button type="submit">注册</button>
        <router-link to="/login" class="login-button-link">已有账号🔥去登陆</router-link>
      </div>

    </form>
  </div>
</template>

<script>

import api from "../api/index";

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
      console.log('Registering...');
      api.userRegister(this.username, this.password, this.confirmPassword).then(response => {
        console.log(response.data);
      })
    },
    validatePassword() {
      if (this.password.length < 1 || this.password.length > 20) {
        alert('密码长度必须大于1且不超过20位');
        this.password = ''; // 清空不符合要求的密码
      }
    },
  },
};
</script>

<style scoped>

.cls-title {
  text-align: center;
  margin-top: 150px; /* 往下移动50像素，你可以根据需要调整这个值 */
}

.register-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; /* 让容器宽度自适应屏幕 */
  height: 100%; /* 让容器高度自适应屏幕 */
  margin: 0 auto;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
  background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
  background-size: cover; /* 控制背景图片的尺寸，cover 会自动缩放背景图以填充容器 */
  background-position: center; /* 控制背景图片的位置，这里让背景图片居中 */
}


input {
  width: 400px;
  padding: 15px;
  margin-bottom: 5px;
  border-radius: 10px;
  border: 1px solid #ccc;
}

button {
  background-color: #28a745;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
}

.button-container {
  display: flex;
  justify-content: center; /* 在水平方向上居中 */
}

.button-container button {
  margin-right: 30px; /* 调整按钮之间的间距，根据需要调整 */
}


.login-button-link {
  display: inline-block; /* 将 <router-link> 变成块级元素，以便设置宽度和高度 */
  background-color: #0066cc; /* 去除背景色 */
  color: #fff; /* 设置字体颜色为白色 */
  text-decoration: none; /* 去除超链接的下划线 */
  padding: 10px 20px; /* 设置按钮的内边距 */
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer; /* 设置光标为手型 */
}

</style>

