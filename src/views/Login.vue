<template>
  <div class="login-container">
    <h1 class="cls-title">登陆页</h1>
    <form @submit.prevent="login">

      <p><input v-model="username" placeholder="请输入用户名💡"/></p>
      <p>
        <input v-model="password" type="password" placeholder="密码长度大于1且不超过20位🔒" @blur="validatePassword"/>
      </p>

      <div class="button-container">
        <button type="submit">登陆</button>
      </div>

    </form>
    <div
        style="margin-top: 40px; display: flex; justify-content: center;
         align-items: center; max-width: 600px;
         margin-left: auto; margin-right: auto;">
      <el-alert v-if="showAlert" title="提示 ⚠️" type="error"
                :description="assertMsg"
                style="width: 400px; border-radius: 20px; font-weight: bold;"
                show-icon/>
    </div>

  </div>
</template>

<script>
import api from "../api/index";
import UserService from "../utils/userUtil";

export default {
  name: 'LoginPage',
  data() {
    return {
      username: null,
      password: null,
      showAlert: false,
      assertMsg: '',
    };
  },
  methods: {
    showAlertAfterLogin(response) {
      this.assertMsg = response.data.msg;
      this.showAlert = true;

      // 设置一个定时器，在两秒后执行
      setTimeout(() => {
        // 两秒后自动关闭提示框
        this.showAlert = false;
      }, 2000);
    },
    login() {
      api.userLogin(this.username, this.password).then(response => {
        console.log(this.username, this.password)
        console.log(response.data);
        if (response.data.code === 1000) {
          // localStorage.setItem('username', this.username);
          localStorage.setItem('password', this.password);
          // localStorage.setItem('UserId', response.data.data);
          UserService.setUserId(response.data.data)
          UserService.setUsername(this.username)

          this.$router.push('/preview');
        } else {
          this.showAlertAfterLogin(response);
          console.log(response.data.msg);
        }
      }).catch(error => {
        console.error('登录失败:', error);
        // 处理登录错误，例如显示错误消息
      });
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

.cls-title {
  text-align: center;
  margin-top: 150px; /* 往下移动50像素，你可以根据需要调整这个值 */
}

.login-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; /* 让容器宽度自适应屏幕 */
  height: 100%; /* 让容器高度自适应屏幕 */
  margin: 0 auto;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
  background-image: linear-gradient(to top, #c1dfc4 0%, #deecdd 100%);
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
  font-weight: bold; /* 让按钮文字变粗 */
}

.button-container {
  display: flex;
  justify-content: center; /* 在水平方向上居中 */
}

.button-container button {
  margin-right: 30px; /* 调整按钮之间的间距，根据需要调整 */
}

.login-button {
  background-color: #0066cc; /* 深蓝色 */
  color: #fff; /* 文字颜色 */
  /* 其他样式 */
}


</style>

