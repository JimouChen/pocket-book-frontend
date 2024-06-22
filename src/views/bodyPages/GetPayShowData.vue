<template>
  <el-table :data="filterTableData" style="width: 100%">
    <el-table-column label="日期" prop="date"/>
    <el-table-column label="标题" prop="title"/>
    <el-table-column label="金额" prop="amount"/>
    <el-table-column label="分类" prop="cate"/>
    <el-table-column label="备注" prop="description"/>
    <el-table-column align="right">
      <template #header>
        <el-input v-model="search" size="small" placeholder="输入标题过滤查找" @keyup.enter="fetchData"/>
      </template>
      <template #default="scope">
        <el-button size="small" round @click="handleEdit(scope.$index, scope.row)">
          编辑
        </el-button>
        <el-button
            size="small"
            type="danger"
            round @click="handleDelete(scope.$index, scope.row)"
        >
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <p></p>
  <el-pagination background layout="prev, pager, next"
                 :total="total"
                 :page-size="limit"
                 @current-change="handlePageChange"/>
  <el-dialog style="border-radius: 15px; font-weight: bold"
             v-model="dialogFormVisible"
             title="请填写你要新增的支出信息" width="450">
    <el-form :model="form">

      <el-form-item label="记账分类🧾" :label-width="formLabelWidth">
        <el-select v-model="form.selectCateId" placeholder="请选择支出的分类">
          <el-option
              v-for="category in form.categories"
              :key="category.id"
              :label="category.name"
              :value="category.id"
          />
        </el-select>
      </el-form-item>

      <el-form-item class="center-form" label="请输入标题📓" :label-width="formLabelWidth">
        <el-input v-model="form.title" autocomplete="off" :maxlength="20" placeholder="请输入标题"/>
      </el-form-item>

      <el-form-item class="center-form" label="请输入支出金额💰" :label-width="formLabelWidth">
        <el-input v-model="form.amount" autocomplete="off" :maxlength="20" placeholder="请输入金额数字"/>
      </el-form-item>

      <el-form-item class="center-form" label="请输入交易日期📅" :label-width="formLabelWidth">
        <div class="block">
          <span class="demonstration"></span>
          <el-date-picker
              v-model="form.transactionDate"
              type="datetime"
              placeholder="Select date and time"
          />
        </div>
      </el-form-item>

      <el-form-item class="center-form" label="备注📝" :label-width="formLabelWidth">
        <el-input class="custom-input" v-model="form.description" autocomplete="off" :maxlength="200"
                  placeholder="备注️(选填)" type="textarea"/>
      </el-form-item>

    </el-form>
    <template #footer>
      <div style="border-radius: 15px; font-weight: bold" class="dialog-footer">
        <el-button style="border-radius: 15px" @click="dialogFormVisible = false">取消</el-button>
        <el-button style="border-radius: 15px" type="primary" @click="confirmAdd">
          确定提交
        </el-button>
      </div>
    </template>
  </el-dialog>

</template>

<script>

import api from "@/api";

export default {
  name: "GetPayShowData",
  props: ['beginDate', 'endDate'], // 拿到父组件的起始日期
  data() {
    return {
      filterTableData: [], // 表格数据
      search: '', // 搜索框绑定的数据
      offset: 0, // 当前页码
      limit: 5, // 每页显示的条目数
      total: 0, // 后端返回的总条目数
      dialogFormVisible: false,
      formLabelWidth: '150px',
      form: {
        description: '',
        amount: '',
        transactionDate: new Date(),
        title: '',
        selectCateId: '',
        categories: [],
        delivery: false,
      },
    };
  },
  created() {
    this.fetchData(); // 仍然尝试从服务器获取数据
  },
  methods: {
    fetchData() {
      api.searchExpenses(
          this.beginDate, this.endDate, this.search,
          this.limit, this.offset
      ).then(response => {
        this.filterTableData = response.data.data.resList;
        this.total = response.data.data.total;
      })
    },
    handleEdit(index, row) {
      // 编辑操作的逻辑
      console.log('Editing row:', index, row);
      console.log('Editing row:', index, row.bill_id);
      // row是这一行的数据，拿到对应的id更新即可，后端要返回bill id
      // 回显数据
      this.form = row;// 对应起来
      this.dialogFormVisible = true;

    },
    handleDelete(index, row) {
      // 删除操作的逻辑
      console.log('Deleting row:', row);
      // 这里可以添加删除数据的请求逻辑
    },
    handlePageChange(currentPage) {
      // 由第几页得到offset
      this.offset = (currentPage - 1) * this.limit;
      this.fetchData();
    }
  },

};
</script>

<style scoped>

</style>