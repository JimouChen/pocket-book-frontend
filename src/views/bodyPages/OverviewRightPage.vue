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
  <h2>add cate</h2>
  <div class="mb-4">
    <el-button type="success" round @click="dialogFormVisible = true">
      添加分类
    </el-button>
    <el-button round>↔️</el-button>
    <el-button type="danger" round @click="deleteCate">删除分类</el-button>

    <el-dialog style="border-radius: 15px; font-weight: bold" v-model="dialogFormVisible"
               title="请填写你要新增的记账分类" width="450">
      <el-form :model="form">
        <el-form-item class="center-form" label="请输入你的记账分类" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" :maxlength="20" placeholder="分类名最长不超过20个字⚠️"/>
        </el-form-item>
      </el-form>
      <template #footer>
        <div style="border-radius: 15px; font-weight: bold" class="dialog-footer">
          <el-button style="border-radius: 15px" @click="dialogFormVisible = false">取消</el-button>
          <el-button style="border-radius: 15px" type="primary" @click="confirmAddCate">
            确定
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>

</template>

<script>

import api from "@/api";
import UserService from "@/utils/userUtil";

export default {
  name: 'OverviewRight',
  data() {
    return {
      checkAll: false,
      isIndeterminate: true,
      checkedCate: [], //拿到打勾的分类，用来展示
      // checkedCateIds: [], //拿到打勾的分类id，可以进行删除传参
      username: '',
      categories: [],
      dialogFormVisible: false,
      formLabelWidth: '140px',
      form: {
        name: '',
        delivery: false,
        type: [],
      }
    };
  },
  mounted() {
    this.username = UserService.getUsername();
    api.getCateByUser(this.username).then(response => {
      // this.checkedCateIds = response.data.data.map(item => item.id)
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
    },
    confirmAddCate() {
      this.dialogFormVisible = false;
      console.log(this.form.name, 'ppp')
      // this.form.name 传给后端
      api.addCategoryUrl(this.form.name).then(response => {
        console.log(response.data);
      })
      window.location.reload();
    },
    deleteCate(){
      console.log(this.checkedCate)
      // console.log(this.checkedCateIds)
    }
  }
};
</script>


<style scoped>
.center-form {
  display: flex;
  justify-content: center;
}
</style>