<template>
  <page-header-wrapper class="gb-tablewrap-nowrap">
    <template v-slot:title>
      <span></span>
    </template>
    <a-card :bordered="false">
      <div class="table-page-search-wrapper">
        <search-form ref="search" :settingMap="settingMap" :autoQuery="true" @query="setQueryParam" />
      </div>
      <div class="chart-operater">
        <a-button-group style="display: block">
          <a-button :type="isShowTable ? '' : 'primary'" icon="bar-chart" @click="isShowTable = false" />
          <a-button :type="!isShowTable ? '' : 'primary'" icon="table" @click="isShowTable = true" />
          <a-button type="primary" @click="doExport" style="float: right">导出</a-button>
        </a-button-group>
        <br />
        <chart-table v-if="isShowTable" :tableConf="tableConf" :tableProp="tableProp" />
        
      <a-row v-else>
        <a-col :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
          <ve-pie
            ref="chart"
            theme-name="light"
            :data="chartDataOfPie"
            :settings="chartSettingsOfPie"
            :extend="chartExtendOfPie"
            :after-config="fnAfterConfigOfPie"
          ></ve-pie>
        </a-col>
        <a-col :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
          <ve-histogram
            theme-name="light"
            :data="chartData"
            :settings="chartSettings"
            :extend="chartExtend"
            :after-config="fnAfterConfig"
          ></ve-histogram>
        </a-col>
      </a-row>
      </div>
    </a-card>
  </page-header-wrapper>
</template>

<script>
import SearchForm from '@/views/list/modules/SearchForm'
import MixGetSettings from '@/mixins/MixGetSettings'
import ChartTable from './components/ChartTable'

import { axiosOperateTab } from '@/api/manage'
import { exportAndDownExcel } from '@/utils/exportExcel'

const seriesCols = [
  { title: '国资委和有关部门培训', dataIndex: 'listA' },
  { title: '企业内部培训', dataIndex: 'listB' },
  { title: '个人培训', dataIndex: 'listC' },
  { title: '其他', dataIndex: 'listD' },
]
const extraCols = [
  { title: '年份', dataIndex: 'YEAR' },
  { title: '企业负责人', dataIndex: 'LEADER_NAME' },
]

const findCol = (v) => [...extraCols, ...seriesCols].find((d) => d.title === v)

export default {
  name: 'Training',
  components: {
    ChartTable,
    SearchForm,
  },
  mixins: [MixGetSettings],
  data() {
    const col_bar = seriesCols.map((d) => d.title)
    const columns_chart = ['企业负责人', ...col_bar]
    const columns_table = [
      {        
        title: '序号',
        dataIndex: 'serial',
        fixed: 'left',
        scopedSlots: { customRender: 'serial' },
      },
      { title: '培训项目', dataIndex: 'TRAINING_PROGRAM' },
      { title: '培训单位', dataIndex: 'TRAINING_UNIT' },
      { title: '月份', dataIndex: 'MONTH' },
      { title: '审批依据', dataIndex: 'APPROVAL_BASIS' },
      { title: '培训类型', dataIndex: 'TRAINING_TYPE' },
      { title: '培训天数', dataIndex: 'TRAINING_DAYS' },
      { title: '金额（元）', dataIndex: 'AMOUNT' },
      // findCol('企业负责人'),
      { title: '是否计划内培训', dataIndex: 'IS_IN_PLAN', customRender: (text) => ({ 0: '否', 1: '是'  })[text] },
    ]
    return {
      isShowTable: false,
      // 查询参数
      queryParam: {},
      chartSettings: {
        stack: { '总费用': col_bar },
        yAxisType: ['KMB'],
        yAxisName: ['元'],
        barWidth: 30,
      },
      chartExtend: {
        grid: {},
        xAxis: {
          axisLine: { show: true },
          nameLocation: 'end',
          nameTextStyle: {},
        },
        yAxis: {
          axisLine: { show: true },
          axisTick: { show: true, inside: true },
          splitLine: { show: false },
        },
      },
      chartData: {
        columns: columns_chart,
        rows: [],
      },
      chartSettingsOfPie: {

      },
      chartExtendOfPie:  {
        legend: {
          show: false,
        },
      },
      chartDataOfPie: {
        columns: ['name', 'value'],
        rows: []
      },
      tableConf: {
        columns: columns_table,
        rows: [],
      },
      tableProp: {
        scroll: { x: true }
      },
      settingMap: {
        tab: null, // {}
        form: null, // []
        search: null, // []
      },
      fnAfterConfig: (options) => {
        options.series.forEach((d) => {
          Object.assign(d, {
            barMaxWidth: '50%',
          })
        })
        return options
      },
      fnAfterConfigOfPie: options => {
        return options
      },
    }
  },
  computed: {},
  watch: {},
  created() {
    this.init()
  },
  methods: {
    async init() {
      this.initSettingsOfChart()
      this.fetchDynamicOpts()
    },
    fetchData() {
      const requestParameters = this.getBaseParam(this.queryParam)
      console.log('loadData request parameters:', requestParameters)
      this.fetchChartData(requestParameters)
      this.fetchChartDataOfPie(requestParameters)
      this.fetchTableData(requestParameters)
    },
    fetchChartData(requestParameters) {
      axiosOperateTab(requestParameters, {
        url: this.getFullURL('bar'),
      }).then((res) => {
        console.log(res)
        let rows = []
        if (res.code > 0) {
          res.xList.forEach((x, i) => {
            let item = {
              '企业负责人': x,
            }
            seriesCols.forEach((d) => (item[d.title] = (res[d.dataIndex] || [])[i]))
            rows.push(item)
          })
        } else {
          this.$message.error(res.msg || '获取数据失败')
        }
        this.chartData.rows = rows
      })
    },
    fetchChartDataOfPie(requestParameters) {
      axiosOperateTab(requestParameters, {
        url: this.getFullURL('pie'),
      }).then((res) => {
        console.log(res)
        let rows = []
        if (res.code > 0) {
          rows = (res.pieData || []).map((d) => ({
            name: d.NAME,
            value: d.VALUE,
          }))
          // rows.forEach((d) => {
          //   d.value = d.value || Math.round(Math.random() * 100)
          // })
        } else {
          this.$message.error(res.msg || '获取数据失败')
        }
        this.chartDataOfPie.rows = rows
        console.log('-----', this.chartDataOfPie)
      })
    },
    fetchTableData(requestParameters) {
      axiosOperateTab(requestParameters, {
        url: this.getFullURL('list'),
      }).then((res) => {
        console.log(res)
        let rows = []
        if (res.code > 0) {
          rows = res.list || []
        } else {
          this.$message.error(res.msg || '获取数据失败')
        }
        this.tableConf.rows = rows
      })
    },
    doExport() {
      const requestParameters = this.getBaseParam({
        ...this.queryParam,
        pageType: 1,
      })
      let { title } = this.settingMap.tab
      let fileName = `${title}`
      exportAndDownExcel(requestParameters, fileName)
    },
    setQueryParam(param) {
      this.queryParam = param
      this.fetchData()
    },
  },
}
</script>
<style lang="less" scoped>
/deep/ .ant-page-header-heading {
  margin-top: 0;
}
</style>