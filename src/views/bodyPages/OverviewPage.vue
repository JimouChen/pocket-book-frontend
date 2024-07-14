<template>
  <div class="container">
    <div class="block">
      <p>
        <span class="demonstration">请选择查询时间段</span>
      </p>

      <el-date-picker @change="SureOk"
                      @clear="handleClear"
                      v-model="value1"
                      type="datetimerange"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                      :default-time="defaultTime1"
      />
      <el-button style="border-radius: 20px" type="primary"
                 @click="callCntPayIncomeByDate" :icon="SearchIcon"
                 >Search
      </el-button>
      <p> 查询结果</p>
      <CntPreview ref="childComponentRef" :startDate="StartDate" :endDate="EndDate"></CntPreview>

    </div>
    <!--    右侧是添加分类和展示分类的模块-->
    <div class="add-cls-container">
      <h3>右侧是添加分类和展示分类的模块 </h3>
      <!-- Your search box content goes here -->
      <OverviewRight/>
    </div>
  </div>
</template>

<script>
import {Search} from '@element-plus/icons-vue'
import OverviewRight from "@/views/bodyPages/OverviewRightPage.vue";
import TimeUtil from "@/utils/timeUtil";
import CntPreview from "@/views/bodyPages/CntPreview.vue";

export default {
  name: 'OverviewPage',
  components: {CntPreview, OverviewRight},
  data() {
    return {
      value1: [],
      SearchIcon: Search,
      defaultTime1: new Date(2000, 1, 1, 12, 0, 0),
      StartDate: '',
      EndDate: '',
    };
  },


  methods: {
    SureOk() {
      if (this.value1 === null) {
        // 时间选择器清空，Do nothing
      } else {
        const startDate = this.value1[0];
        const endDate = this.value1[1];
        const formattedStartDate = TimeUtil.parseTime(startDate);
        const formattedEndDate = TimeUtil.parseTime(endDate);
        // 这两个时间要传给后端
        console.log("开始日期:", formattedStartDate);
        console.log("结束日期:", formattedEndDate);
        this.StartDate = formattedStartDate;
        this.EndDate = formattedEndDate;
      }
    },
    handleClear(){
      this.StartDate = '';
      this.EndDate = '';
    },
    callCntPayIncomeByDate() {
      this.$refs.childComponentRef.CntByDate(this.StartDate, this.EndDate);
    }
  },

};
</script>

<style scoped>

.container {
  display: flex;
}

.block {
  flex: 1; /* Make the block take up the available space */
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
}

.add-cls-container {
  flex: 1; /* Make the search box take up the available space */
  padding: 30px 0;
}

</style>
