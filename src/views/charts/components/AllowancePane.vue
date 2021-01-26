<template>
  <div class="allowance-panel">
    <div class="table-page-search-wrapper">
      <search-form ref="search" :settingMap="settingMap" :autoQuery="true" @query="setQueryParam" />
    </div>
    <div class="chart-total">
      <span><em>{{ curYearMon }}</em>交通补贴总数</span>
      <span class="my-total-num">¥ {{ totalCost }}</span>
    </div>
    <div class="chart-operater">
      <a-button-group style="display: block">
        <a-button :type="isShowTable ? '' : 'primary'" icon="bar-chart" @click="isShowTable = false" />
        <a-button :type="!isShowTable ? '' : 'primary'" icon="table" @click="isShowTable = true" />
        <a-button type="primary" @click="doExport" style="float: right">导出</a-button>
      </a-button-group>
      <br />
      <chart-table v-if="isShowTable" :tableConf="tableConf" />
      <a-row v-else>
        <a-col :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
          <ve-ring
            ref="chart"
            theme-name="light"
            :data="chartData"
            :settings="chartSettings"
            :extend="chartExtend"
            :after-config="fnAfterConfig"
            @ready="onChartReady"
          ></ve-ring>
        </a-col>
        <a-col :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
          <div class="my-items">
            <div
              v-for="(item, index) in cardItems"
              class="my-item"
              :key="index"
              :style="{ borderTopColor: colors[index] }"
            >
              <p class="my-item-value">{{ item.value }}</p>
              <hr class="my-item-split" />
              <p class="my-item-percent">{{ item.percent }}%</p>
              <p class="my-item-name">{{ item.name }}</p>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
    <!-- <iframe :src="urlOfExport"></iframe> -->
  </div>
</template>

<script>
import SearchForm from '@/views/list/modules/SearchForm'
import MixGetSettings from '@/mixins/MixGetSettings'
import ChartTable from './ChartTable'

import { axiosOperateTab } from '@/api/manage'
import { exportAndDownExcel } from '@/utils/exportExcel'
import settings from '@/settings'
const { tabSettings, formSettings } = settings

const seriesCols = [
  { title: '油料费', dataIndex: 'FUEL' },
  { title: '修理费', dataIndex: 'REPAIR' },
  { title: '保险费', dataIndex: 'INSURANCE' },
  { title: '停车费', dataIndex: 'PARKING' },
  { title: '出租车和租车费', dataIndex: 'TAXI_OR_RENT' },
]

const extraCols = [
  { title: '年份', dataIndex: 'YEAR' },
  { title: '月份', dataIndex: 'MONTH' },
  { title: '企业负责人', dataIndex: 'LEADERNAME' },
  // { title: '总费用', dataIndex: 'TOTAL' },
]

const findCol = (v) => [...extraCols, ...seriesCols].find((d) => d.title === v)

const paneConfMap = {
  1: {
    typeForExport: 2,
    urlSuffixOfChart: 'pieByMonth',
    urlSuffixOfTable: 'listByMonth',
    columnsOfTable: [findCol('月份'), ...seriesCols]
  },
  2: {
    typeForExport: 3,
    urlSuffixOfChart: 'pieByLeader',
    urlSuffixOfTable: 'listByLeader',
    columnsOfTable: [findCol('企业负责人'), ...seriesCols]
  },
}

export default {
  name: 'AllowancePane',
  components: {
    ChartTable,
    SearchForm,
  },
  mixins: [MixGetSettings],
  props: {
    pane: {
      required: true,
    },
  },
  data() {
    const paneKey = this.pane.index
    const paneConf = paneConfMap[paneKey]
    return {
      paneKey,
      isShowTable: false,
      totalCost: 0,
      // 查询参数
      queryParam: {},
      chartSettings: {
        radius: ['50%', '70%'],
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
      },
      chartExtend: {
        legend: {
          show: false,
        },
      },
      chartData: {
        columns: ['name', 'value'],
        rows: [],
      },
      tableConf: {
        columns: paneConf.columnsOfTable,
        rows: [],
      },
      settingMap: {
        tab: null, // {}
        form: null, // []
        search: null, // []
      },
      paneConf,
      colors: [],
      fnAfterConfig: (options) => {
        // 新增一个系列用于显示中间标题
        options.series.push({
          name: '标题',
          type: 'pie',
          radius: ['0', '50%'],
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: 'center',
            fontSize: '20',
            fontWeight: 'bold',
            color: '#666',
            formatter: '交通补贴确认',
          },
          emphasis: {
            label: {
              show: true,
            },
          },
          labelLine: {
            show: false,
          },
          itemStyle: {
            color: 'rgba(0, 0, 0, 0)',
          },
          tooltip: {
            show: false,
          },
          data: [{ name: '占位', value: 1 }],
        })
        return options
      },
      urlOfExport: '',
    }
  },
  computed: {
    cardItems() {
      let { rows } = this.chartData
      let sum = rows.reduce((a, b) => a + b.VALUE, 0)
      return rows.map((d) => ({
        ...d,
        percent: !sum ? 0 : Math.round((100 * d.VALUE) / sum) / 100,
      }))
    },
    curYearMon() {
      let { year, month } = this.queryParam
      return year + '/' + month
    }
  },
  watch: {},
  created() {
    this.init()
  },
  methods: {
    async init() {
      this.initSettingsOfChart({ paneKey: this.paneKey })
      this.fetchDynamicOpts()
    },
    fetchData() {
      const requestParameters = this.getBaseParam(this.queryParam)
      console.log('loadData request parameters:', requestParameters)
      this.fetchChartData(requestParameters)
      this.fetchTableData(requestParameters)
    },
    fetchChartData(requestParameters) {
      axiosOperateTab(requestParameters, {
        url: this.getFullURL(this.paneConf.urlSuffixOfChart),
      }).then((res) => {
        console.log(res)
        let rows = []
        if (res.code > 0) {
          this.totalCost = res.total
          rows = (res.data || []).map((d) => ({
            name: d.NAME,
            value: d.VALUE,
          }))
          // rows.forEach((d) => {
          //   d.value = d.value || Math.round(Math.random() * 100)
          // })
        } else {
          this.$message.error(res.msg || '获取数据失败')
        }
        this.chartData.rows = rows
      })
    },
    fetchTableData(requestParameters) {
      axiosOperateTab(requestParameters, {
        url: this.getFullURL(this.paneConf.urlSuffixOfTable),
      }).then((res) => {
        console.log(res)
        let rows = []
        if (res.code > 0) {
          rows = res.result.list || []
          let totalRow = {}
          seriesCols.forEach(d => {
            let k = 't_' + d.dataIndex
            let v = res[k]
            if (v != undefined) totalRow[k] = v
          })
          let categ = this.paneConf.columnsOfTable[0]
          if (categ) totalRow[categ.dataIndex] = '总计'
          rows.push(totalRow)
        } else {
          this.$message.error(res.msg || '获取数据失败')
        }
        this.tableConf.rows = rows
      })
    },
    doExport() {
      const requestParameters = this.getBaseParam({
        ...this.queryParam,
        pageType: this.paneConf.typeForExport,
      })
      let { title } = this.settingMap.tab
      let fileName = `${title}-${this.pane.title}`
      exportAndDownExcel(requestParameters, fileName)
    },
    onChartReady(chartIns) {
      this.colors = [...chartIns.getOption().color]
    },
    setQueryParam(param) {
      this.queryParam = param
      this.fetchData()
    },
  },
}
</script>
<style lang="less" scoped>
.allowance-panel {
  padding: 24px;
}

.my-items {
  max-width: 580px;
  margin: 0 auto;
}

.my-item {
  float: left;
  width: 150px;
  height: 165px;
  margin: 15px;
  padding: 10px 5px 0;
  text-align: center;
  border: 1px solid #e8e8e8;
  border-color: rgba(0, 0, 0, 0.09);
  border-top-width: 3px;
  background: rgb(251, 251, 251);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
  overflow: hidden;
  &:hover {
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.29);
  }
}

.my-item-value {
  margin-bottom: 0;
  font-size: 32px;
}

.my-item-split {
  width: 20px;
  margin: 5px auto;
  border: none;
  border-top: solid 3px;
  border-top-color: inherit;
}

.my-item-percent {
  font-size: 14px;
}

.my-item-name {
  margin-top: 10px;
  font-size: 20px;
  line-height: 1.2;
}

.chart-total {
  margin-bottom: 20px;
  em {
    font-style: normal;
    font-size: 1.5em;
  }
}

.my-total-num {
  margin-left: 20px;
  font-size: 32px;
  vertical-align: middle;
}
</style>