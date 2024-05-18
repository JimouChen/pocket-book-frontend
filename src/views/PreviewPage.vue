<template>
  <link href="https://fonts.googleapis.com/css2?family=Baloo&display=swap" rel="stylesheet">
  <div class="main-layout">
    <el-container>
      <el-aside width="160px" class="sidebar">
        <AsidePage class="cls-aside"></AsidePage>
      </el-aside>

      <el-container>
        <el-header class="cls-header"><h3 class="cls-h3">Welcome欢迎使用记账本App</h3>
          <el-dropdown @command="handleCommand">
            <span class="dropdown-link">
              <el-avatar
                  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              /> UserName
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="personalInfo">个人信息</el-dropdown-item>
                <el-dropdown-item command="logout" divided>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-header>

        <el-main class="cls-main">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.sidebar {
  background: linear-gradient(to bottom right, #fcfcfc, #ffffff);
}

.cls-header {
  background: linear-gradient(to bottom right, #fbfcfb, #c2d3ec);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px; /* Adjust padding as needed */
}

.cls-main {
  background: linear-gradient(to bottom right, #fbfcfb, #dadbe8);
}

.main-layout {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 1px;
  border: 2px solid #ccc;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.cls-h3 {
  font-family: 'Baloo', cursive; /* 使用 Pacifico 字体，需要从 Google 字体库导入 */
  font-size: 24px; /* 增大字号 */
  line-height: 1.6; /* 调整行高 */
  color: #5691cc; /* 更改字体颜色 */
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.7); /* 添加文字阴影 */
  margin: 20px 0; /* 添加外边距 */
}

</style>

<script setup>
import AsidePage from "@/views/AsidePage.vue";

const handleCommand = (command) => {
  if (command === 'personalInfo') {
    // 处理查看个人信息的逻辑
    console.log('查看个人信息');
  } else if (command === 'logout') {
    // 处理退出登录的逻辑
    console.log('退出登录');
  }
};

</script>