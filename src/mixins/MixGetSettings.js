import { axiosOperateTab } from '@/api/manage'
import settings from '@/settings'
const { tabSettings, formSettings } = settings

export default {
  data() {
    return {
      // settingMap: { tab: null, form: null, search: null }, // PS: 也可能在组件的 props 中传递
    }
  },
  methods: {
    getConf(item) {
      // let { dataIndex } = item
      // let formSet = this.settingMap.form
      // if (!formSet) return null
      // let conf = formSet.find(d => d.dataIndex == dataIndex)
      // return conf
      return { ...item }
    },
    getDefaultFormat(item) {
      let { formType, format } = item
      if (format) return format
      if (formType === 'datepicker' || formType === 'rangepicker') return 'YYYY-MM-DD'
      else if (formType === 'timepicker') return 'YYYY-MM-DD HH:mm:ss'
      return undefined
    },
    getDefaultVal(item) {
      let conf = this.getConf(item)
      if (!conf) return ''
      // TODO: 待完善代码
      // let v = ''
      // if (conf.default === 'auto') {
      //   switch (item.dataIndex) {
      //     case 'sort':
      //       v = this.tableData.length + 1
      //       break
      //     default:
      //   }
      // }
      // return v
      let v = conf.default
      if (!conf.formType || conf.formType === 'input') v = v == undefined ? '' : String(v)
      else if (conf.formType === 'switch') v = Boolean(v)
      // 对字符串进行变量替换
      if (typeof v === 'string') {
        v.replace(/\$\{CURRENT_YEAR\}/g, (new Date()).getFullYear())
        v.replace(/\$\{CURRENT_MONTH\}/g, (new Date()).getMonth() + 1)
      }
      return v
    },
    getOpts(item) {
      let conf = this.getConf(item)
      if (!conf || conf.options === 'dynamic') return []
      return conf.options
    },
    checkTypeDate(item) {
      return ['datepicker', 'timepicker'].indexOf(item.formType) !== -1
    },
    checkTypeNum(item) {
      return /^(int|float|number)/.test(item.dataType)
    },
    checkWide(item) {
      return /备注|意见/.test(item.title)
    },
    //-- 后增axios相关公用方法，也作用用于 ableList.vue
    getFullURL(str, key = null) {
      if (key == null) {
        let setting = this.settingMap.tab
        if (!setting) return ''
        key = setting.key
      }
      return `/epd${key ? '/' + key : ''}${str.startsWith('/') ? str : '/' + str}`
    },
    getBaseParam(obj = {}) {
      return Object.assign({
        deptId: this.$store.getters.empInfo.deptId,
      }, obj)
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
      // TODO: 正常情况下 formSet 包括 searchSet 的所有子项
      this.settingMap.form.forEach((d, i, a) => {
        if (d.dynamic && d.displayInAdd !== 'n') {
          let { dataIndex, dictType, dictUrl, dictLabel, dictValue } = d
          dictValue = dictValue || dictLabel || 'code'
          dictLabel = dictLabel || 'value'
          if (dataIndex === 'permissionIds') {
            d.options = (this.$store.getters.loginInfo || {}).permissions.map(d => ({ label: d, value: d }))
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
            for (let month = 1; month <= 12; month++) {
              d.options.push({ label: String(month), value: month })
            }
            d.default = d.default || new Date().getMonth() + 1
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
    initSettingsOfChart(config) {
      config = {
        paneKey: '',
        ...config
      }
      let tabSet = tabSettings.find((d) => d.key === this.$route.meta.key)
      this.settingMap.tab = tabSet
      let { searchCols } = tabSet
      let searchSet = []
      // PS: 当 searchCols 为对象而非数组时，说明该页有多个 panel 可切换
      let tmpCols = searchCols instanceof Array ? searchCols : (searchCols || {})[config.paneKey]
      tmpCols &&
        tmpCols.forEach((k) => {
          let cols = formSettings.filter((d) => d.dataIndex === k)
          let col = cols[0]
          if (cols.length > 1) col = cols.find((d) => d.group === tabSet.key) || col
          col && searchSet.push(col)
        })
      this.settingMap.search = searchSet
      // PS: 报表管理仅需查询展示，没有增删改
      this.settingMap.form = searchSet
      console.log(this.settingMap)
    }
  }
}