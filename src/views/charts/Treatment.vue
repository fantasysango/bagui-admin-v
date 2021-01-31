<template>
  <page-header-wrapper class="gb-tablewrap-nowrap">
    <template v-slot:title>
      <span></span>
    </template>
    <a-card :bordered="false">
      <div class="table-page-search-wrapper">
        <search-form ref="search" :settingMap="settingMap" :autoQuery="true" :noBtns="true" @query="setQueryParam" />
      </div>
      <div class="chart-operater">
        <a-button type="primary" @click="doExport">导出</a-button>
      </div>
    </a-card>
  </page-header-wrapper>
</template>

<script>
import SearchForm from '@/views/list/modules/SearchForm'
import MixGetSettings from '@/mixins/MixGetSettings'

import { exportAndDownExcel } from '@/utils/exportExcel'
import settings from '@/settings'
const { tabSettings, formSettings } = settings

export default {
  name: 'Treatment',
  components: {
    SearchForm,
  },
  mixins: [MixGetSettings],
  data() {
    return {
      isShowTable: false,
      // 查询参数
      queryParam: {},
      settingMap: {
        tab: null, // {}
        form: null, // []
        search: null, // []
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
    doExport() {
      const requestParameters = this.getBaseParam({
        ...this.queryParam,
        pageType: 9,
      })
      let { title } = this.settingMap.tab
      let fileName = `${title}`
      exportAndDownExcel(requestParameters, fileName)
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