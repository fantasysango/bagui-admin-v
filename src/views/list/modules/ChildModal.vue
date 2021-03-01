<template>
  <a-modal
    :title="'配置'"
    :width="800"
    :visible="visible"
    :maskClosable="false"
    :footer="null"
    @cancel="() => { $emit('cancel') }"
  >
    <child-table
      v-if="childCols.length"
      :dataSource="childData"
      :settingMap="childSettingMap"
      @add="handleAdd"
      @edit="handleEdit"
      @delete="handleDelete"
    />
    <create-form
      ref="createModal"
      :visible="visibleOfForm"
      :loading="confirmLoading"
      :model="mdl"
      :settingMap="childSettingMap"
      :keyOfCols="'childCols'"
      @cancel="handleCancel"
      @ok="handleOk"
    />
  </a-modal>
</template>

<script>
import ChildTable from './ChildTable'
import CreateForm from './CreateForm'

export default {
  components: {
    ChildTable,
    CreateForm
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
      visibleOfForm: false,
      confirmLoading: false,
      mdl: null,
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
    },
    childSettingMap() {
      let { tab, search } = this.settingMap
      return { tab, search, form: null }
    }
  },
  watch: {
  },
  created () {
  },
  methods: {
    handleAdd() {
      this.mdl = null
      this.visibleOfForm = true
    },
    handleEdit() {

    },
    handleDelete() {

    },
    handleOk() {
      this.visibleOfForm = false
    },
    handleCancel() {
      this.visibleOfForm = false
    },
  }
}
</script>
<style lang="less" scoped>
.ant-table-body {
  overflow: auto !important;
}
</style>
