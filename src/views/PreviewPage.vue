<template>
  <div class="main-layout">
    <el-container>
      <el-aside width="180px" class="sidebar">
        <AsidePage></AsidePage>
      </el-aside>

      <el-container>
        <el-header>Header</el-header>

        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.sidebar {
  background: linear-gradient(to bottom right, #fcfcfc, #ffffff);
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
  background-image: linear-gradient(to top, #d7d9d9 0%, #ece9ea 100%);
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

</style>
<script setup>
import AsidePage from "@/views/AsidePage.vue";
</script>