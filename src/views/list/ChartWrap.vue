<template>
  <page-header-wrapper class="gb-tablewrap-nowrap">
    <template v-slot:title>
      <span></span>
    </template>
    <a-card :bordered="false">
      <div class="table-page-search-wrapper">
        <search-form
          ref="search"
          :settingMap="settingMap"
          @query="setQueryParam"
        />
        <br>
        <ve-histogram :data="chartData" :settings="chartSettings" :extend="chartExtend"></ve-histogram>
      </div>
    </a-card>
  </page-header-wrapper>
</template>

<script>
import moment from 'moment'
import { axiosOperateTab } from '@/api/manage'
import settings from '@/settings'
const { tabSettings, formSettings } = settings

import SearchForm from './modules/SearchForm'
import MixGetSettings from '@/mixins/MixGetSettings'

export default {
  name: 'ChartWrap',
  components: {
    SearchForm,
  },
  mixins: [MixGetSettings],
  data() {
    return {
      confirmLoading: false,
      mdl: null,
      // 查询参数
      queryParam: {},
      chartSettings: {
        showLine: ['行驶里程'],
        stack: { '总费用': ['油料费', '修理费', '停车过桥费', '保险费', '其他'] },
        axisSite: { right: ['行驶里程'] },
        yAxisType: ['KMB', 'value'],
        yAxisName: ['元', '公里']
      },
      chartExtend: {
        yAxis: {
          axisLine: { show: true },
          axisTick: { show: true, inside: true },
          splitLine: { show: false },
        },
        xAxis: {
          axisLine: { show: true },
        }
      },
      chartData: {
        columns: ['月份', '油料费', '修理费', '停车过桥费', '保险费', '其他', '行驶里程'],
        rows: [
          { '月份': '1', '油料费': 1393, '修理费': 1093, '行驶里程': 32 },
          { '月份': '2', '油料费': 3530, '修理费': 3230, '行驶里程': 26 },
          { '月份': '3', '油料费': 2923, '修理费': 2623, '行驶里程': 76 },
          { '月份': '4', '油料费': 1723, '修理费': 1423, '行驶里程': 49 },
          { '月份': '5', '油料费': 3792, '修理费': 3492, '行驶里程': 323 },
          { '月份': '6', '油料费': 4593, '修理费': 4293, '行驶里程': 78 },
          { '月份': '7', '油料费': 1393, '修理费': 1093, '行驶里程': 32 },
          { '月份': '8', '油料费': 3530, '修理费': 3230, '行驶里程': 26 },
          { '月份': '9', '油料费': 2923, '修理费': 2623, '行驶里程': 76 },
          { '月份': '10', '油料费': 1723, '修理费': 1423, '行驶里程': 49 },
          { '月份': '11', '油料费': 3792, '修理费': 3492, '行驶里程': 323 },
          { '月份': '12', '油料费': 4593, '修理费': 4293, '行驶里程': 78 }
        ]
      },
      settingMap: {
        tab: null,  // {}
        form: null, // []
        search: null, // []
      },
    }
  },
  created() {
    this.init()
  },
  computed: {
  },
  watch: {
    '$route.meta.key'(v)  {
      this.chartSettings = {}
      this.queryParam = {}
      this.init()
    }
  },
  methods: {
    init() {
      let tabSet = tabSettings.find((d) => d.key === this.$route.meta.key)
      this.settingMap.tab = tabSet
      let formSet = []
      let searchSet = []
      tabSet.searchCols && tabSet.searchCols.forEach(k => {
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
    fetchData(parameter) {
      const requestParameters = Object.assign({
        deptId: this.$store.getters.empInfo.deptId,
        "leaderId": "a3480cd1-f278-11ea-af38-00ff8b330500",
        "year":"2020",
        "carId":"e4d112f6-f8ba-11ea-be3f-54e1ad115d9c"
      }, parameter, this.queryParam)
      console.log('loadData request parameters:', requestParameters)
      axiosOperateTab(requestParameters, {
        url: this.getFullURL('list'),
      }).then((res) => {
        console.log(res)
      })
    },
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
          let final = !results.find(d => d === false)
          !final && this.$message.error('获取选项失败')
          resolve(final)
        }
      }
      this.settingMap.form.forEach((d, i, a) => {
        if (d.dynamic && d.displayInAdd  !== 'n') {
          let { dataIndex, dictType, dictUrl, dictLabel, dictValue } = d
          dictValue = dictValue || dictLabel || 'code'
          dictLabel = dictLabel || 'value'
          if (dataIndex === 'permissionIds') {
            d.options = (this.$store.getters.loginInfo || {}).permissions.map(d => ({ label: d, value: d }))
            return
          }
          len++
          let params = dictType ? { dictType } : this.getBaseParam()
          let url = dictType ? this.getFullURL('list', 'dict') : this.getFullURL(dictUrl, '')
          axiosOperateTab(params, {
            url, // '/epd/dict/list'
          }).then(res => {
            if (res.code > 0) {
              let data = []
              if (dictType) {
                data = res.list || []
              } else {
                let { result, list } = res  // PS: list 可能为对象（result别名），也可能为数组
                data = list || []
                if (!result && list && !(list instanceof Array)) result = list
                if (result) data = result.list || []
              }
              d.options = data.map(d => {
                return {
                  label: d[dictLabel],
                  value: d[dictValue]
                }
              })
              checkResults(true)
            } else {
              // this.$message.error(res.msg || '获取选项失败')
              checkResults(false)
            }
          }).catch(e => {
            console.error(e)
            checkResults(false)
          })
        }
      })
      return promise
    },
    getFullURL(str, key = null) {
      if (key == null) {
        let setting = this.settingMap.tab
        if (!setting) return ''
        key = setting.key
      }
      return `/epd${key ? '/' + key : ''}${str.startsWith('/') ? str : '/' + str}`
    },
    getBaseParam(obj = {}, type = '') {
      return Object.assign({
        deptId: this.$store.getters.empInfo.deptId,
      }, obj)
    },
    setQueryParam(param) {
      this.queryParam = param
    },
  },
}
</script>
<style lang="less" scoped>
  /deep/ .ant-page-header-heading {
    margin-top: 0;
  }
</style>