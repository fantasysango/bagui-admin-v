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
      ref="table"
      :dataSource="childData"
      :settingMap="childSettingMap"
      @ready="onTableReady"
      @add="handleAdd"
      @edit="handleEdit"
      @delete="handleDelete"
    />
    <create-form
      v-if="isFormReady"
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
import { axiosOperateTab } from '@/api/manage'
import ChildTable from './ChildTable'
import CreateForm from './CreateForm'
import MixGetSettings from '@/mixins/MixGetSettings'

export default {
  components: {
    ChildTable,
    CreateForm
  },
  mixins: [MixGetSettings],
  props: {
    visible: {
      type: Boolean,
      required: true
    },
    settingMap: {
      type: Object,
      default: () => ({ tab: null, form: null, search: null })
    },
    model: {
      type: Object,
      default: () => null
    },
    fetchData: {
      type: Function,
      default: () => {}
    }
  },
  data () {
    return {
      visibleOfForm: false,
      isFormReady: false,
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
    onTableReady() {
      this.isFormReady = true
    },
    handleAdd() {
      this.mdl = null
      this.visibleOfForm = true
    },
    handleEdit(record) {
      this.mdl = _.cloneDeep(record)
      this.visibleOfForm = true
    },
    handleDelete() {

    },
    handleOk() {
      const form = this.$refs.createModal.form
      this.confirmLoading = true
      form.validateFields(async (errors, values) => {
        if (!errors) {
          let getParams = (fields, type = 'create') => {
            let tmpKey = type === 'create' ? 'createById' : 'updateById'
            // 'creatorId' 'updateBy'
            let params = this.getBaseParam({
              [tmpKey]: this.$store.getters.empInfo.id,
            })
            fields.forEach(d => {
              let v = values[d]
              let p = params[d]
              // TODO: 待确认
              if (v == undefined && p != undefined) v = p
              if (!v && v !== 0) v = null
              params[d] = v
            })
            return params
          }
          try {
            let tabSet = this.settingMap.tab
            let oprType = this.mdl ? 'edit' : 'add'
            let oprText = oprType === 'edit' ? '修改' : '新增'
            let params  = getParams(tabSet.childCols)
            if (oprType === 'edit') params.id = this.mdl.id
            let res = await axiosOperateTab(
              params, 
              { url: this.getFullURL(oprType, tabSet.childKey) }
            )
            if (res.code > 0) {
              this.visibleOfForm = false
              // 重置表单数据
              form.resetFields()
              // 刷新表格 
              this.fetchData()
              this.$message.info(oprText + '成功')
            } else {
              this.$message.error(res.msg || '操作失败')
            }
          } catch (e) {
            console.error(e)
            this.$message.error('网络连接失败')
          }
        }
        this.confirmLoading = false
      })
    },
    handleCancel() {
      this.visibleOfForm = false

      const form = this.$refs.createModal.form
      form.resetFields() // 清理表单数据（可不做）
    },
  }
}
</script>
<style lang="less" scoped>
// /deep/ .ant-modal-body {
//   padding-top: 12px;
// }
</style>
