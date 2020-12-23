<template>
  <div class="table-page-search-wrapper" v-if="activeSearchSet.length">
    <a-form layout="inline">
      <a-row :gutter="48">
        <a-col
          v-for="item in activeSearchSet"
          :key="item.dataIndex"
          class="my-col"
        >
        <!-- :md="6"
          :sm="24"
          :class="{ 'my-label-multirow': item.title.length > 10 }" -->
          <!-- 下拉框 -->
          <a-form-item
            v-if="['radio', 'select', 'switch'].indexOf(item.formType) !== -1"
            :label="item.title"
            :colon="item.colon !== false"
            :class="{ 'my-item-colon_false': item.colon === false }"
          >
            <a-select
              v-model="queryForm[item.dataIndex]"
              style="width: 180px;"
              placeholder="请选择"
            >
              <a-select-option v-for="opt in getOpts(item)" :value="opt.value" :key="opt.value">
                {{opt.label}}
              </a-select-option>
            </a-select>
          </a-form-item>
          <!-- 时间选择器 -->
          <a-form-item 
            v-else-if="checkTypeDate(item)" 
            :label="item.title"
            :colon="item.colon !== false"
            :class="{ 'my-item-colon_false': item.colon === false }"
            hasFeedback
          >
            <a-date-picker
              :format="getDefaultFormat(item)"
              :valueFormat="getDefaultFormat(item)"
              v-model="queryForm[item.dataIndex]"
            ></a-date-picker>
          </a-form-item>
          <!-- 输入框（默认） -->
          <a-form-item 
            v-else 
            :label="item.title"
            :colon="item.colon !== false"
            :class="{ 'my-item-colon_false': item.colon === false }"
            v-bind="checkWide(item) ? formLayoutWide : {}"
            hasFeedback
          >
            <a-input v-model="queryForm[item.dataIndex]" />
          </a-form-item>
        </a-col>


        <!-- <template v-if="advanced">
        </template> -->
        <a-col :md="!advanced && 4 || 24" :sm="24">
          <span class="table-page-search-submitButtons" :style="advanced && { float: 'right', overflow: 'hidden' } || {} ">
            <a-button type="primary" @click="doQuery()">查询</a-button>
            <a-button style="margin-left: 8px" @click="doReset()">重置</a-button>
            <!-- <a @click="toggleAdvanced" style="margin-left: 8px">
              {{ advanced ? '收起' : '展开' }}
              <a-icon :type="advanced ? 'up' : 'down'"/>
            </a> -->
          </span>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'SearchForm',
  components: {
  },
  props: {
    setting: {
      type: Object,
      default: { tab: null, search: null }
    },
  },
  data () {
    return {
      advanced: false,
      queryForm: {}
    }
  },
  computed: {
    activeSearchSet() {
      let searchSet = this.setting.search
      if (!searchSet) return []
      let tabSet = this.setting.tab
      return searchSet
      // .filter(d => d.displayInAdd !== 'n' && tabSet.cols.includes(d.dataIndex))
    },
  },
  watch: {
    activeSearchSet(v) {
      let obj =  {}
      if (v) {
        Object.keys(v).forEach(k => {
          obj[k] = ''
        })
      } 
      this.queryForm = obj
      // 防止表单未注册
    }
  },
  created () {
  },
  methods: {
    doQuery() {
      console.log(JSON.stringify(this.queryForm))
      this.$emit('query', this.queryForm)
    },
    doReset(config = {}) {
      config = {
        query: true,
        ...config
      }
      this.queryForm = {}
      config.query && this.doQuery()
    },
    toggleAdvanced () {
      this.advanced = !this.advanced
    },
    getConf(item) {
      let { dataIndex } = item
      let formSet = this.setting.form
      if (!formSet) return null
      let conf = formSet.find(d => d.dataIndex == dataIndex)
      return conf
    },
    getOpts(item) {
      let conf = this.getConf(item)
      if (!conf || conf.options === 'dynamic') return []
      return conf.options
    },
    getDefaultFormat(item) {
      let { formType, format } = item
      if (item.format) return item.format
      if (formType === 'datepicker') return 'YYYY-MM-DD'
      else if (formType === 'timepicker') return 'YYYY-MM-DD HH:mm:ss'
      return undefined
    },
    checkTypeDate(item)  {
      return ['datepicker', 'timepicker'].indexOf(item.formType) !== -1
    },
    checkTypeNum(item) {
      return /^(int|float|number)/.test(item.dataType)
    },
    checkWide(item) {
      return /备注|意见/.test(item.title)
    }
  }
}
</script>
<style lang="less" scoped>
.my-label-multirow {
  /deep/ .ant-form-item label {
    display: flex;
    align-items: center;;
    height: 40px;
    line-height: 1.2;
    white-space: normal;
  }
}
.my-col {
  float: left;
  padding-right: 0 !important;
}
// /deep/ .my-item-colon_false {
//   margin-left: -24px;
// }
</style>