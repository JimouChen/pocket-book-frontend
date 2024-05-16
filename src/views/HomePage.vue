<template>
  <div class="home-container">
    <div class="product-info">
      <h1 class="title">记账App</h1>
      <p class="description">简约易用的记账工具，帮助您轻松管理财务。</p>
    </div>
    <div class="action-buttons">
      <router-link to="/signup" class="btn">立即注册</router-link>
      <router-link to="/login" class="btn btn-secondary">登录</router-link>
    </div>
    <div class="copyright">
      <p class="copyright-text">
        <span>© 2024 PocketApp 版权所有@Neaya</span>
      </p>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style scoped>
.home-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
  background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


.title {
  font-size: 3em;
  margin-bottom: 10px;
}

.description {
  font-size: 1.5em;
  margin-bottom: 20px;
}

.action-buttons {
  display: flex;
  justify-content: center;
}

.btn {
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  background-color: #ffafbd;
  color: #fff;
  font-size: 1.1em;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #ffc3a0;
}

.btn-secondary {
  background-color: #ffafbd;
  border: 2px solid #fff;
}

.btn-secondary:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

/* 版权声明样式 */
.copyright {
  position: absolute;
  bottom: 20px;
  color: #000;
}
</style>
