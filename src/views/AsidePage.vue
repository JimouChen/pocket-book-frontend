<template>

  <el-menu default-active="1" class="el-menu-vertical-pocket">
    <el-menu-item index="1" class="sub-menu">
      <el-icon>
        <HomeFilled/>
      </el-icon>
      <template #title>
        <span>概览</span>
      </template>
    </el-menu-item>

    <el-menu-item index="2" class="sub-menu">
      <el-icon>
        <Coin/>
      </el-icon>
      <template #title>支出</template>
    </el-menu-item>

    <el-menu-item index="3" class="sub-menu">
      <el-icon>
        <WalletFilled/>
      </el-icon>
      <template #title>
        <span>收入</span>
      </template>
    </el-menu-item>

    <el-menu-item index="4" class="sub-menu">
      <el-icon>
        <setting/>
      </el-icon>
      <template #title>设置</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup>

</script>

<style>
.el-menu-vertical-pocket {
  width: 180px;
  min-height: 400px;
  font-size: 20px;
  font-weight: bold;
}

.el-menu-vertical-pocket .sub-menu {
  font-size: 18px;
  font-weight: bold;
  border-radius: 20px;
}

.sub-menu {
  padding-top: 30px; /* 增加上内边距 */
  padding-bottom: 30px; /* 增加下内边距 */
}

.sub-menu .el-icon {
  font-size: 20px; /* 设置图标的大小为 24 像素 */
}


</style>
