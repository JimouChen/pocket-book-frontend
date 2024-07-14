<template>
  <el-row :gutter="16">
    <el-col :span="8">
      <div class="statistic-card">
        <el-statistic :value="formattedOverall" :value-style="{ color: '#5876ec', fontWeight: 'bold' }">
          <template #title>
            <div style="display: inline-flex; align-items: center;
            font-weight: bold; font-size: 15px;">
              至今总交易额
              <el-tooltip
                  effect="dark"
                  content="至今总收入 - 至今总支出"
                  placement="top"
              >
                <el-icon style="margin-left: 4px" :size="12">
                  <Warning/>
                </el-icon>
              </el-tooltip>
            </div>
          </template>
        </el-statistic>
        <!--        <div class="statistic-footer">-->
        <!--          <div class="footer-item">-->
        <!--            <span>对比上个月</span>-->
        <!--            <span :class="{'green': cmpLastMonthRate >= 0, 'red': cmpLastMonthRate < 0}">-->
        <!--             {{ cmpLastMonthRate }}%-->
        <!--              <el-icon>-->
        <!--                <template v-if="cmpLastMonthRate >= 0">-->
        <!--                  <CaretTop/>-->
        <!--                </template>-->
        <!--                <template v-else>-->
        <!--                  <CaretBottom/>-->
        <!--                </template>-->
        <!--            </el-icon>-->
        <!--            </span>-->
        <!--          </div>-->
        <!--        </div>-->
      </div>
    </el-col>
    <el-col :span="8">
      <div class="statistic-card">
        <el-statistic :value-style="{ color: '#ec586e', fontWeight: 'bold' }" :value="formattedTotalPay">
          <template #title>
            <div style="display: inline-flex; align-items: center;
                font-weight: bold; font-size: 15px;">
              总支出
              <el-tooltip
                  effect="dark"
                  content="截止至今的总支出"
                  placement="top"
              >
                <el-icon style="margin-left: 4px" :size="12">
                  <Warning/>
                </el-icon>
              </el-tooltip>
            </div>
          </template>
        </el-statistic>
        <!--        <div class="statistic-footer">-->
        <!--          <div class="footer-item">-->
        <!--            <span>对比上一年</span>-->
        <!--            <span :class="{'green': cmpLastYearPayRate >= 0, 'red': cmpLastYearPayRate < 0}">-->
        <!--             {{ cmpLastYearPayRate }}%-->
        <!--              <el-icon>-->
        <!--                <template v-if="cmpLastYearPayRate >= 0">-->
        <!--                  <CaretTop/>-->
        <!--                </template>-->
        <!--                <template v-else>-->
        <!--                  <CaretBottom/>-->
        <!--                </template>-->
        <!--            </el-icon>-->
        <!--            </span>-->
        <!--          </div>-->
        <!--        </div>-->
      </div>
    </el-col>
    <el-col :span="8">
      <div class="statistic-card">
        <el-statistic :value="formattedTotalIncome" :value-style="{ color: '#5be55b', fontWeight: 'bold' }"
                      title="New transactions today">
          <template #title>
            <div style="display: inline-flex; align-items: center;
          font-weight: bold; font-size: 15px;">
              总收入
              <el-tooltip
                  effect="dark"
                  content="截止至今的总收入"
                  placement="top"
              >
                <el-icon style="margin-left: 4px" :size="12">
                  <Warning/>
                </el-icon>
              </el-tooltip>
            </div>
          </template>
        </el-statistic>
        <!--        <div class="statistic-footer">-->
        <!--          <div class="footer-item">-->
        <!--            <span>对比上一年</span>-->
        <!--            <span :class="{'green': cmpLastYearIncomeRate >= 0, 'red': cmpLastYearIncomeRate < 0}">-->
        <!--             {{ cmpLastYearIncomeRate }}%-->
        <!--              <el-icon>-->
        <!--                <template v-if="cmpLastYearIncomeRate >= 0">-->
        <!--                  <CaretTop/>-->
        <!--                </template>-->
        <!--                <template v-else>-->
        <!--                  <CaretBottom/>-->
        <!--                </template>-->
        <!--            </el-icon>-->
        <!--            </span>-->
        <!--          </div>-->
        <!--        </div>-->
      </div>
    </el-col>
  </el-row>
</template>

<script>
import {
  // CaretBottom,
  // CaretTop,
  Warning,
} from '@element-plus/icons-vue'
import api from "@/api";

export default {
  components: {
    // CaretBottom,
    // CaretTop,
    Warning,
  },
  name: "CntPreview",
  props: ['StartDate', 'EndDate'],
  data() {
    return {
      Overall: 11100,
      totalPay: 23113,
      totalIncome: 888,
      // cmpLastMonthRate: 29,
      // cmpLastYearPayRate: -13,
      // cmpLastYearIncomeRate: 8.1,
    }
  },
  computed: {
    formattedTotalIncome() {
      return this.totalIncome.toFixed(2);
    },
    formattedTotalPay() {
      return this.totalPay.toFixed(2);
    },
    formattedOverall() {
      return this.Overall.toFixed(2);
    }
  },
  created() {
    // 计算初始值和百分比并更新
    api.searchExpensesOverall(this.StartDate, this.EndDate).then(response => {
      const resp = response.data.data;
      this.Overall = resp.overall;
      this.totalPay = resp.total_pay;
      this.totalIncome = resp.total_income;
    });
  },
  methods: {
    CntByDate(StartDate, EndDate) {
      // 计算初始值和百分比并更新
      api.searchExpensesOverall(StartDate, EndDate).then(response => {
        const resp = response.data.data;
        this.Overall = resp.overall;
        this.totalPay = resp.total_pay;
        this.totalIncome = resp.total_income;
      });
    },
  },
}
</script>

<style scoped>
:global(h2#card-usage ~ .example .example-showcase) {
  background-color: var(--el-fill-color) !important;
}

.el-statistic {
  --el-statistic-content-font-size: 28px;
}

.statistic-card {
  height: 100%;
  padding: 20px;
  border-radius: 15px;
  background-color: var(--el-bg-color-overlay);
}

.statistic-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 13px;
  color: var(--el-text-color-regular);
  margin-top: 16px;
}

.statistic-footer .footer-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.statistic-footer .footer-item span:last-child {
  display: inline-flex;
  align-items: center;
  margin-left: 4px;
}

.green {
  color: var(--el-color-success);
}

.red {
  color: var(--el-color-error);
}
</style>
