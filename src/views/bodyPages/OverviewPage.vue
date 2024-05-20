<template>
  <div>
    <h1>概览页面</h1>
  </div>
  <div class="block">
    <span class="demonstration">请选择查询时间段</span>
    <el-date-picker @change="SureOk"
                    v-model="value1"
                    type="datetimerange"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :default-time="defaultTime1"
    />
  </div>
</template>

<script>

export default {
  name: 'OverviewPage',
  data() {
    return {
      value1: [],
      defaultTime1: new Date(2000, 1, 1, 12, 0, 0),
    }
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
      // 点击选完起始和结束日期后，调接口传给后端查表
      const startDate = this.value1[0];
      const endDate = this.value1[1];

      const formattedStartDate = this.parseTime(startDate);
      const formattedEndDate = this.parseTime(endDate);

      console.log("开始日期:", formattedStartDate);
      console.log("结束日期:", formattedEndDate);
    }
  }
}
</script>

<style scoped>
.block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}

.block:last-child {
  border-right: none;
}

.block .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
