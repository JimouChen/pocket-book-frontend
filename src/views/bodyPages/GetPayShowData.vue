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
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
          Edit
        </el-button>
        <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
        >
          Delete
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <p></p>
  <el-pagination background layout="prev, pager, next"
                 :total="total"
                 :page-size="limit"
                 @current-change="handlePageChange"/>
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
      console.log('Editing row:', row);
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