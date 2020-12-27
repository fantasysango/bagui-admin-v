<template>
  <a-modal
    :title="'配置'"
    :width="800"
    :visible="visible"
    :maskClosable="false"
    :footer="null"
    @cancel="() => { $emit('cancel') }"
  >
    <child-table v-if="childCols.length" :dataSource="childData" :settingMap="settingMap" />
  </a-modal>
</template>

<script>
import ChildTable from './ChildTable'

export default {
  components: {
    ChildTable
  },
  props: {
    visible: {
      type: Boolean,
      required: true
    },
    settingMap: {
      type: Object,
      default: { tab: null, form: null, search: null }
    },
    model: {
      type: Object,
      default: () => null
    },
  },
  data () {
    return {
    }
  },
  computed: {
    childCols() {
      let tabSet = this.settingMap.tab || {}
      return tabSet.childCols || []
    },
    childData() {
      if (!this.model) return []
      let tabSet = this.settingMap.tab || {}
      return tabSet.childKey ? this.model[tabSet.childKey] || [] : []
    }
  },
  watch: {
  },
  created () {
  },
  methods: {
    
  }
}
</script>
<style lang="less" scoped>
.ant-table-body {
  overflow: auto !important;
}
</style>
