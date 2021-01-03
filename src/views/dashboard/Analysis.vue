<template>
  <div>
    <a-row :gutter="24">
      <a-col v-for="card in arrCards" :sm="24" :md="12" :xl="6" :style="{ marginBottom: '24px' }" :key="card.index">
        <my-chart-card :loading="loading" :cardItem="card"></my-chart-card>
      </a-col>
    </a-row>

    <a-card :loading="loading" :bordered="false" :body-style="{padding: '0'}">
      <div class="costCard">
        <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}">
          <div class="extra-wrapper" slot="tabBarExtraContent">
            <div class="extra-item">
              <a @click="fetchCostData(1)" :class="{ 'active': activeYear == 1 }">本年</a>
              <a @click="fetchCostData(2)" :class="{ 'active': activeYear == 2 }">上年</a>
            </div>
            <!-- <a-range-picker :style="{width: '256px'}" /> -->
          </div>
          <a-tab-pane :loading="true" tab="费用趋势与排名" key="1">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                <bar :data="barData" :scale="barScale" title="费用趋势" />
              </a-col>
              <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <rank-list title="企业负责人费用排名" :list="rankList" />
              </a-col>
            </a-row>
          </a-tab-pane>
        </a-tabs>
      </div>
    </a-card>
  </div>
</template>

<script>
// import moment from 'moment'
import {
  RankList,
  Bar,
  Trend,
} from '@/components'
import MyChartCard from './components/MyChartCard'
import { baseMixin } from '@/store/app-mixin'
import { axiosHomeCard, axiosHomeCostBar, axiosHomeCostRank } from '@/api/analysis'

export default {
  name: 'Analysis',
  mixins: [baseMixin],
  components: {
    MyChartCard,
    RankList,
    Bar,
    Trend
  },
  data () {
    const arrCards = [
      {
        index: 1,
        title: '公车运行费',
        total: '',
        terms: [],  // [{ name, value }]
      }, {
        index: 2,
        title: '公车行驶里程',
        total: '',
        terms: [],
      }, {
        index: 3,
        title: '通讯费',
        total: '',
        terms: [],
      }, {
        index: 4,
        title: '培训费',
        total: '',
        terms: [],
      }, {
        index: 5,
        title: '差旅费',
        total: '',
        terms: [],
      }, {
        index: 6,
        title: '因公出国（境）费',
        total: '',
        terms: [],
      }, {
        index: 7,
        title: '招待费',
        total: '',
        terms: [],
      }, {
        index: 8,
        title: '交通补贴费用',
        total: '',
        terms: [],
      }
    ]
    return {
      loading: true,
      rankList: [],
      barData: [],
      barScale: [{
        dataKey: 'x',
        alias: '月份',
      }, {
        dataKey: 'y',
        alias: '费用（元）',
        title: '时间',
      }],
      arrCards,
      activeYear: 1,
    }
  },
  created () {
    // setTimeout(() => {
    //   this.loading = !this.loading
    // }, 1000)
    this.init()
  },
  methods: {
    init() {
      let promises = []
      this.arrCards.forEach(d => {
        promises.push(this.fetchCardData(d))
      })
      this.fetchCostData()
      Promise.all(promises).then(() => {
        this.loading = false
      })
    },
    getBaseParam(obj = {}) {
      return Object.assign({
        deptId: this.$store.getters.empInfo.deptId,
      }, obj)
    },
    fetchCardData(item) {
      let params = this.getBaseParam()
      return axiosHomeCard(params, item.index).then(res => {
        if (res.code > 0) {
          item.total = res.lastMonthTotal
          item.terms.push({
            name: '同比',
            value: res.tongbi
          }, {
            name: '环比',
            value: res.huanbi
          })
        } else {
          this.$message.error(res.msg || '请求数据失败')
        }
      })
    },
    fetchCostData(year = this.activeYear) {
      this.activeYear = year
      let params = this.getBaseParam({
        year: this.activeYear
      })
      let promise1 = axiosHomeCostBar(params).then(res => {
        if (this.activeYear != year) return;
        if (res.code > 0) {
          let data = res.data || []
          this.barData = res.xAxis.map((d, i) => {
            return {
              x: d,
              // y: data[i] || Math.round(Math.random() * 100000)
              y: data[i]
            }
          })
        } else {
          this.$message.error(res.msg || '请求数据失败')
        }
      })
      let promise2 = axiosHomeCostRank(params).then(res => {
        if (this.activeYear != year) return;
        if (res.code > 0) {
          this.rankList = res.ranking.map(d => {
            return {
              name: d.leaderName,
              total: d.total
            }
          })
        } else {
          this.$message.error(res.msg || '请求数据失败')
        }
      })
      return [promise1, promise2]
    },
  }
}
</script>

<style lang="less" scoped>
  .extra-wrapper {
    line-height: 55px;
    padding-right: 24px;

    .extra-item {
      display: inline-block;
      // margin-right: 24px;

      a {
        margin-left: 24px;
        padding: 10px 0;
        opacity: .5;
        &.active {
          opacity: 1;
        }
      }
    }
  }
</style>
