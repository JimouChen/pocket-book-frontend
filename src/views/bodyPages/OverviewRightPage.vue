<template>
  <el-checkbox
      v-model="checkAll"
      :indeterminate="isIndeterminate"
      @change="handleCheckAllChange"
  >
    选择所有分类
  </el-checkbox>
  <el-checkbox-group
      v-model="checkedCate"
      @change="handleCheckedCateChange"
  >
    <el-checkbox v-for="cate in categories" :key="cate" :label="cate" :value="cate">
      {{ cate }}
    </el-checkbox>
  </el-checkbox-group>
</template>

<script>

import api from "@/api";

export default {
  name: 'OverviewRight',
  data() {
    return {
      checkAll: false,
      isIndeterminate: true,
      checkedCate: [],
      username: '',
      categories: []
    };
  },
  mounted() {
    this.username = localStorage.getItem("username")
    api.getCateByUser(this.username).then(response => {
      this.categories = response.data.data.map(item => item.name)
    })

  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCate = val ? this.categories : [];
      this.isIndeterminate = false;
    },
    handleCheckedCateChange(value) {
      const checkedCount = value.length;
      this.checkAll = checkedCount === this.categories.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.categories.length;
    }
  }
};
</script>


<style scoped>

</style>