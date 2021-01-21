<template>
  <page-header-wrapper class="gb-tablewrap-nowrap">
    <template v-slot:title>
      <span></span>
    </template>
    <a-card :bordered="false">
      <div class="table-page-search-wrapper">
        <search-form ref="search" :settingMap="settingMap" :autoQuery="true" @query="setQueryParam" />
        <a-button-group style="display: block;">
          <a-button :type="isShowTable ? '' : 'primary'" icon="bar-chart" @click="isShowTable = false" />
          <a-button :type="!isShowTable ? '' : 'primary'" icon="table" @click="isShowTable = true" />
          <a-button type="primary" @click="doExport" style="float: right;">导出</a-button>
        </a-button-group>
        <br />
        <chart-table v-if="isShowTable" :tableConf="tableConf" />
        <ve-histogram
          v-else
          :data="chartData"
          :settings="chartSettings"
          :extend="chartExtend"
          :after-config="fnAfterConfig"
        ></ve-histogram>
      </div>
    </a-card>
  </page-header-wrapper>
</template>

<script>
import moment from 'moment'
import { axiosOperateTab } from '@/api/manage'
import settings from '@/settings'
const { tabSettings, formSettings } = settings

import SearchForm from '@/views/list/modules/SearchForm'
import MixGetSettings from '@/mixins/MixGetSettings'
import ChartTable from './components/ChartTable'

const seriesCols = [
  { title: '油料费', dataIndex: 'FUEL' },
  { title: '修理费', dataIndex: 'MAINTENANCE_COST' },
  { title: '停车过桥费', dataIndex: 'PARKING_AND_BRIDGE' },
  { title: '保险费', dataIndex: 'INSURANCE' },
  { title: '保养费', dataIndex: 'MAINTAIN' },
  { title: '车船使用税', dataIndex: 'VEHICLE_AND_VESSEL_USE_TAX' },
  { title: '年检费', dataIndex: 'ANNUAL_INSPECTION' },
  { title: '其他', dataIndex: 'OTHER' },
  { title: '行驶里程', dataIndex: 'MILEAGE', series: 'line' },
]

const extraCols = [
  { title: '年份', dataIndex: 'YEAR', owner: ['table'] },
  { title: '车牌号', dataIndex: 'CAR_NUMBER', owner: ['table'] },
  { title: '总费用', dataIndex: 'TOTAL', owner: ['table'] },
]

const findCol = v => [...extraCols, ...seriesCols].find(d => d.title === v)

export default {
  name: 'CarUse',
  components: {
    ChartTable,
    SearchForm,
  },
  mixins: [MixGetSettings],
  data() {
    const col_bar = seriesCols.filter(d => !d.series).map(d => d.title)
    const col_line = seriesCols.filter(d => d.series === 'line').map(d => d.title)
    const columns_chart = ['月份', ...col_bar, ...col_line]
    const columns_tab = [
      findCol('年份'),
      findCol('车牌号'),
      ...seriesCols,
      findCol('总费用'),
    ]
    return {
      isShowTable: false,
      // 查询参数
      queryParam: {},
      chartSettings: {
        showLine: ['行驶里程'],
        stack: { '总费用': col_bar },
        axisSite: { right: ['行驶里程'] },
        // xAxisName: ['\n\n月'],
        yAxisType: ['KMB', 'value'],
        yAxisName: ['元', '公里'],
        barWidth: 30,
      },
      chartExtend: {
        grid: {
          right: 20,
        },
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
      tableConf: {
        columns: columns_tab,
        rows: [],
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
      urlOfExport: ''
    }
  },
  computed: {},
  watch: {
    '$route.meta.key'(v) {
      this.chartSettings = {}
      this.queryParam = {}
      this.init()
    },
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      let tabSet = tabSettings.find((d) => d.key === this.$route.meta.key)
      this.settingMap.tab = tabSet
      let formSet = []
      let searchSet = []
      tabSet.searchCols &&
        tabSet.searchCols.forEach((k) => {
          let cols = formSettings.filter((d) => d.dataIndex === k)
          let col = cols[0]
          if (cols.length > 1) col = cols.find((d) => d.group === tabSet.key) || col
          col && searchSet.push(col)
        })
      this.settingMap.search = searchSet
      this.settingMap.form = searchSet
      console.log(this.settingMap)
      this.fetchDynamicOpts()
    },
    fetchData() {
      const requestParameters = Object.assign(
        {
          deptId: this.$store.getters.empInfo.deptId,
          // "leaderId": "a3480cd1-f278-11ea-af38-00ff8b330500",
          // "year":"2020",
          // "carId":"e4d112f6-f8ba-11ea-be3f-54e1ad115d9c"
        },
        this.queryParam
      )
      console.log('loadData request parameters:', requestParameters)
      this.fetchChartData(requestParameters)
      this.fetchTableData(requestParameters)
    },
    fetchChartData(requestParameters ) {
      axiosOperateTab(requestParameters, {
        url: this.getFullURL('barData'),
      }).then((res) => {
        console.log(res)
        let rows = []
        if (res.code > 0) {
          res.xList.forEach((x, i) => {
            let item = {
              '月份': parseInt(x) + '月'
            }
            seriesCols.forEach(d => item[d.title] = (res[d.dataIndex] || [])[i])
            rows.push(item)
          })
        } else {
          this.$message.error(res.msg || '获取数据失败')
        }
        this.chartData.rows = rows
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
    fetchDynamicOpts(requestParameters) {
      let resolve = null
      let promise = new Promise((r) => {
        resolve = r
      })
      let results = []
      let len = 0
      let checkResults = (bool) => {
        results.push(bool)
        if (results.length === len) {
          let final = !results.find((d) => d === false)
          !final && this.$message.error('获取选项失败')
          resolve(final)
        }
      }
      this.settingMap.form.forEach((d, i, a) => {
        if (d.dynamic && d.displayInAdd !== 'n') {
          let { dataIndex, dictType, dictUrl, dictLabel, dictValue } = d
          dictValue = dictValue || dictLabel || 'code'
          dictLabel = dictLabel || 'value'
          if (dataIndex === 'permissionIds') {
            d.options = (this.$store.getters.loginInfo || {}).permissions.map((d) => ({ label: d, value: d }))
            return
          } else if (dataIndex === 'year') {
            d.options = []
            let start = d.min || 2021
            let year = new Date().getFullYear()
            do {
              d.options.push({ label: String(year), value: year })
            } while (--year >= start)
            d.default = d.default || (d.options[0] || {}).value
            return
          } else if (dataIndex === 'month') {
            d.options = []
            for (let month = 0; month < 12; month++) {
              d.options.push({ label: String(month), value: month })
            }
            d.default = d.default || new Date().getMonth()
            return
          }
          len++
          let params = dictType ? { dictType } : this.getBaseParam()
          let url = dictType ? this.getFullURL('list', 'dict') : this.getFullURL(dictUrl, '')
          axiosOperateTab(params, {
            url, // '/epd/dict/list'
          })
            .then((res) => {
              if (res.code > 0) {
                let data = []
                if (dictType) {
                  data = res.list || []
                } else {
                  let { result, list } = res // PS: list 可能为对象（result别名），也可能为数组
                  data = list || []
                  if (!result && list && !(list instanceof Array)) result = list
                  if (result) data = result.list || []
                }
                d.options = data.map((d) => {
                  return {
                    label: d[dictLabel],
                    value: d[dictValue],
                  }
                })
                checkResults(true)
              } else {
                // this.$message.error(res.msg || '获取选项失败')
                checkResults(false)
              }
            })
            .catch((e) => {
              console.error(e)
              checkResults(false)
            })
        }
      })
      return results.length ? promise : Promise.resolve()
    },
    doExport() {
      const requestParameters = Object.assign(
        {
          deptId: this.$store.getters.empInfo.deptId,
          pageType: 1
        },
        this.queryParam
      )
      axiosOperateTab(requestParameters, {
        url: this.getFullURL('file/exportReport', ''),
        // method: 'get',
        // params: requestParameters,
      }).then((res) => {
        if (res.code > 0) {
          console.log(res)
        } else {
          this.$message.error(res.msg || '获取数据失败')
        }
      })
    },
    getFullURL(str, key = null) {
      if (key == null) {
        let setting = this.settingMap.tab
        if (!setting) return ''
        key = setting.key
      }
      return `/epd${key ? '/' + key : ''}${str.startsWith('/') ? str : '/' + str}`
    },
    getBaseParam(obj = {}) {
      return Object.assign(
        {
          deptId: this.$store.getters.empInfo.deptId,
        },
        obj
      )
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