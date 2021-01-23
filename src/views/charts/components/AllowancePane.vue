<template>
  <div class="allowance-panel">
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
          <div v-for="(item, index) in cardItems" class="my-item" :key="index" :style="{ borderTopColor: colors[index] }">
            <p class="my-item-value">{{ item.value }}</p>
            <hr class="my-item-split" />
            <p class="my-item-percent">{{ item.percent }}%</p>
            <p class="my-item-name">{{ item.name }}</p>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import SearchForm from '@/views/list/modules/SearchForm'
import MixGetSettings from '@/mixins/MixGetSettings'
import ChartTable from './ChartTable'

import { axiosOperateTab } from '@/api/manage'
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
  { title: '年份', dataIndex: 'YEAR', owner: ['table'] },
  { title: '车牌号', dataIndex: 'CAR_NUMBER', owner: ['table'] },
  { title: '总费用', dataIndex: 'TOTAL', owner: ['table'] },
]

const findCol = (v) => [...extraCols, ...seriesCols].find((d) => d.title === v)

const paneConfMap = {
  1: {
    typeForExport: 2,
    urlSuffixOfChart: 'pieByMonth',
    urlSuffixOfTable: 'listByMonth',
  },
  2: {
    typeForExport: 3,
    urlSuffixOfChart: 'pieByLeader',
    urlSuffixOfTable: 'listByLeader',
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
    paneKey: {
      required: true,
    },
  },
  data() {
    let paneConf = paneConfMap[this.paneKey]
    return {
      isShowTable: false,
      // 查询参数
      queryParam: {},
      chartSettings: {
        radius: ['50%', '70%'],
        label: {
          show: false
        },
        labelLine: {
          show: false
        }
      },
      chartExtend: {
        legend: {
          show: false
        }
      },
      chartData: {
        columns: ['name', 'value'],
        rows: [],
      },
      tableConf: {
        columns: [],
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
            color: 'rgba(0, 0, 0, 0)'
          },
          tooltip: {
            show: false
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
      return rows.map(d => ({
        ...d,
        percent: !sum ? 0 : Math.round(100 * d.VALUE / sum) / 100
      }))
    }
  },
  watch: {},
  created() {
    this.init()
  },
  methods: {
    async init() {
      let tabSet = tabSettings.find((d) => d.key === this.$route.meta.key)
      this.settingMap.tab = tabSet
      let searchSet = []
      let tmpCols = (tabSet.searchCols || {})[this.paneKey]
      tmpCols &&
        tmpCols.forEach((k) => {
          let cols = formSettings.filter((d) => d.dataIndex === k)
          let col = cols[0]
          if (cols.length > 1) col = cols.find((d) => d.group === tabSet.key) || col
          col && searchSet.push(col)
        })
      this.settingMap.search = searchSet
      console.log(this.settingMap)
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
          rows = (res.data || []).map(d => ({
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
          rows = res.list || []
        } else {
          this.$message.error(res.msg || '获取数据失败')
        }
        this.tableConf.rows = rows
      })
    },
    // TODO: 此方法待抽离
    fetchDynamicOpts() {
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
      // TODO: 与 TableList.vue 不一样的地方
      this.settingMap.search.forEach((d, i, a) => {
        if (d.dynamic) {
          let { dataIndex, dictType, dictUrl, dictLabel, dictValue } = d
          dictValue = dictValue || dictLabel || 'code'
          dictLabel = dictLabel || 'value'
          if (dataIndex === 'year') {
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
      const requestParameters = this.getBaseParam({
        ...this.queryParam,
        pageType: this.paneConf.typeForExport,
      })
      axiosOperateTab(requestParameters, {
        url: this.getFullURL('file/exportReport', ''),
      }).then((res) => {
        if (res.code > 0) {
          console.log(res)
        } else {
          this.$message.error(res.msg || '获取数据失败')
        }
      })
    },
    onChartReady(chartIns) {
      this.colors = [...chartIns.getOption().color]
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
.allowance-panel {
  padding: 24px;
}

.my-item {
  float: left;
  width: 150px;
  height: 165px;
  margin: 15px;
  padding: 0 5px;
  text-align: center;
  border: 1px solid #e8e8e8;
  border-color: rgba(0,0,0,.09);
  border-top-width: 3px ;
  background: rgb(251,251,251);
  box-shadow: 0 2px 8px rgba(0,0,0,.09);
  overflow: auto;
  &:hover {
    box-shadow: 0 2px 16px rgba(0,0,0,.29);
  }
}

.my-item-value {
  margin-top: 10px;
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
</style>