export default {
  data() {
    return {
      // settingMap: { tab: null, form: null, search: null }, // PS: 也可能在props中传递
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
      if (formType === 'datepicker') return 'YYYY-MM-DD'
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
  }
}