<template>
  <div>
    <h1>支出页面</h1>
  </div>
  <div class="container">
    <div class="block">
      <p>
        <span class="demonstration">请选择查询时间段</span>
      </p>

      <el-date-picker @change="SureOk"
                      v-model="value1"
                      type="datetimerange"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                      :default-time="defaultTime1"
      />
      <el-button style="border-radius: 20px" type="primary"
                 :icon="SearchIcon" @click="searchDataForm">搜索</el-button>
      <el-button type="success" round @click="dialogFormVisible = true">
        记录支出
      </el-button>
      <p> 这里展示查询结果</p>
    </div>

    <!--    展示查询结果-->
    <GetPayShowData ref="child" :begin-date="beginDate" :end-date="endDate">
    </GetPayShowData>

    <!--    这里是添加支出的信息-->

    <el-dialog style="border-radius: 15px; font-weight: bold" v-model="dialogFormVisible"
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


  </div>
</template>

<script>

import {Search} from "@element-plus/icons-vue";
import UserService from "@/utils/userUtil";
import api from "@/api";
import billingType from "@/utils/constDataUtil";
import GetPayShowData from "@/views/bodyPages/GetPayShowData.vue";
import TimeUtil from "@/utils/timeUtil";


export default {
  name: 'GetPay',
  components: {GetPayShowData},
  data() {
    return {
      value1: [],
      SearchIcon: Search,
      defaultTime1: new Date(2000, 1, 1, 12, 0, 0),
      beginDate: '',
      endDate: '',
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
  mounted() {
    this.username = UserService.getUsername();
    api.getCateByUser(this.username).then(response => {
      this.form.categories = response.data.data
    })
  },
  methods: {
    SureOk() {
      if (this.value1 === null) {
        // 时间选择器清空
        this.beginDate = '';
        this.endDate = '';
      } else {
        const startDate = this.value1[0];
        const endDate = this.value1[1];
        const formattedStartDate = TimeUtil.parseTime(startDate);
        const formattedEndDate = TimeUtil.parseTime(endDate);
        // 这两个时间要传给后端
        console.log("开始日期:", formattedStartDate);
        console.log("结束日期:", formattedEndDate);
        this.beginDate = formattedStartDate;
        this.endDate = formattedEndDate;
      }
    },
    confirmAdd() {
      this.dialogFormVisible = false;
      const formData = {
        title: this.form.title,
        description: this.form.description,
        amount: parseFloat(this.form.amount), // 确保金额是数字
        category_id: this.form.selectCateId,
        transaction_date: TimeUtil.parseTime(this.form.transactionDate),
        type: billingType.Pay,
      };
      api.addExpenses(formData).then(response => {
        console.log(response.data);
        // 这里之后可优化为校验弹框
        if (response.data.code !== 1000) {
          alert("请检查是否有必填项未填写⚠️")
        } else {
          // 刷新表格数据
          this.$refs.child.fetchData();
        }
      }).catch(error => {
        console.error('错误:', error);
      });
    },
    searchDataForm(){
      this.$refs.child.fetchData();
    },
  }
}
</script>


<style scoped>
.center-form {
  display: flex;
  justify-content: center;
}

.custom-input >>> .el-input__inner {
  height: 100px !important; /* 你可以根据需要调整高度 */
}

.custom-input >>> .el-textarea__inner {
  height: 100px !important; /* 你可以根据需要调整高度 */
  padding-top: 5px; /* 清除内边距的顶部空间 */
  padding-left: 10px; /* 清除内边距的左侧空间 */
  line-height: 1.5; /* 设置行高 */
  vertical-align: top; /* 确保文本从顶部开始对齐 */
}
</style>