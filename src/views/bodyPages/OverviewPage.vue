<template>
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
      <el-button style="border-radius: 20px" type="primary" :icon="SearchIcon">Search</el-button>
      <p> 这里展示查询结果</p>

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

export default {
  name: 'OverviewPage',
  components: {OverviewRight},
  data() {
    return {
      value1: [],
      SearchIcon: Search,
      defaultTime1: new Date(2000, 1, 1, 12, 0, 0),
    };
  },
  methods: {
    parseTime(date) {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 使用padStart函数补零
      const day = date.getDate().toString().padStart(2, '0');
      const hour = date.getHours().toString().padStart(2, '0');
      const minute = date.getMinutes().toString().padStart(2, '0');
      const second = date.getSeconds().toString().padStart(2, '0');
      return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    },
    SureOk() {
      if (this.value1 === null) {
        // 时间选择器清空，Do nothing
      } else {
        const startDate = this.value1[0];
        const endDate = this.value1[1];
        const formattedStartDate = this.parseTime(startDate);
        const formattedEndDate = this.parseTime(endDate);
        // 这两个时间要传给后端
        console.log("开始日期:", formattedStartDate);
        console.log("结束日期:", formattedEndDate);
      }
    }
  }
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
