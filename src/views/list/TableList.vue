<template>
  <page-header-wrapper>
    <a-card :bordered="false">
      <div class="table-page-search-wrapper">
        <!-- to be added -->
      </div>

      <div class="table-operator">
        <a-button type="primary" icon="plus" @click="handleAdd">新建</a-button>
        <a-dropdown v-if="selectedRowKeys.length > 0 && !notAllowDelete">
          <a-menu slot="overlay">
            <a-menu-item key="1" @click="handleDelete(selectedRowKeys)"><a-icon type="delete" />删除</a-menu-item>
          </a-menu>
          <a-button style="margin-left: 8px"> 批量操作 <a-icon type="down" /> </a-button>
        </a-dropdown>
      </div>

      <s-table
        ref="table"
        size="default"
        rowKey="key"
        :columns="columns"
        :data="loadData"
        :alert="true"
        :rowSelection="rowSelection"
        showPagination="auto"
      >
        <template #serial="text, record, index">{{ index + 1 }}</template>
        <template #action="text, record">
          <a @click="handleEdit(record)">编辑</a>
          <a-popconfirm
            v-if="!notAllowDelete"
            placement="topRight"
            title="确定删除此项吗？"
            ok-text="确定"
            cancel-text="取消"
            @confirm="handleDelete(record)"
          >
            <a href="#" style="margin-left: 1em">删除</a>
          </a-popconfirm>
        </template>
      </s-table>

      <create-form
        ref="createModal"
        :visible="visible"
        :loading="confirmLoading"
        :model="mdl"
        :setting="settingMap"
        @cancel="handleCancel"
        @ok="handleOk"
      />
    </a-card>
  </page-header-wrapper>
</template>

<script>
import moment from 'moment'
import { STable, Ellipsis } from '@/components'
import { axiosOperateTab } from '@/api/manage'
import settings from '@/settings'
const { tabSettings, formSettings } = settings

import CreateForm from './modules/CreateForm'

export default {
  name: 'TableList',
  components: {
    STable,
    Ellipsis,
    CreateForm,
  },
  data() {
    return {
      // create model
      visible: false,
      confirmLoading: false,
      mdl: null,
      // 高级搜索 展开/关闭
      advanced: false,
      // 查询参数
      queryParam: {
        // deptId: '722945f4-e8dc-11ea-ae06-00ff8b330500',
        // pageNum: 1,
        // pageSize: 10,
      },
      tableData: [],
      // 加载数据方法 必须为 Promise 对象
      loadData: (parameter) => {
        let { sortField, sortOrder } = parameter
        if (sortField) {
          return new Promise(resolve => {
            let data = [...this.tableData]
            if (sortOrder)  {
              let tmpNum = sortOrder === 'ascend' ? 1 : -1
              data.sort((a, b) => {
                let v1 = a[sortField]
                let v2 = b[sortField]
                let { dataType } = this.settingMap.form.find(d => d.dataIndex === sortField) || {}
                if (['int', 'float', 'number'].includes(dataType)) {
                  v1 *= 1
                  v2 *= 1
                }
                return (v1 > v2 ? 1 : -1) * tmpNum
              })
            }
            resolve({
              ...parameter,
              pageNum: parameter.pageNo,
              totalCount: data.length,
              totalPage: 1,
              data
            })
          })
        }
        const requestParameters = Object.assign({
          deptId: this.$store.getters.empInfo.deptId,
          pageNum: parameter.pageNo,
        }, parameter, this.queryParam)
        console.log('loadData request parameters:', requestParameters)
        return axiosOperateTab(requestParameters, {
          url: this.getFullURL('list'),
        }).then((res) => {
          console.log('res =====>', res)
          // return res.result;
          let data = res.list || []
          this.tableData = data
          if (res.code > 0) {
            return {
              pageNo: 1,
              pageSize: data.length,
              totalCount: data.length,
              totalPage: 1,
              data
            }
          } else {
            this.$notification.error({
              message: '错误',
              description: res.msg || '请求数据失败，请重试',
            })
            return {
              pageSize: 10,
              pageNo: 0,
              totalPage: 0,
              totalCount: 0,
              data
            }
          }
        })
      },
      selectedRowKeys: [],
      selectedRows: [],
      columns: [],
      settingMap: {
        tab: null,
        form: null
      },
      notAllowDelete: false,
    }
  },
  created() {
    this.init()
  },
  computed: {
    rowSelection() {
      return {
        selectedRowKeys: this.selectedRowKeys,
        onChange: this.onSelectChange,
      }
    },
  },
  watch: {
    '$route.meta.key'(v)  {
      this.init()
      const form = this.$refs.createModal.form
      // 重置表单数据
      form.resetFields()
      // 刷新表格
      this.$refs.table.refresh()
    }
  },
  methods: {
    init() {
      console.log(tabSettings, formSettings)
      let tabSet = tabSettings.find((d) => d.key === this.$route.meta.key)
      let formSet = []
      this.columns = !tabSet
        ? null
        : [
            {        
              title: '#',
              dataIndex: 'serial',
              scopedSlots: { customRender: 'serial' },
            },
            ...tabSet.cols
              .map((k) => {
                let cols = formSettings.filter((d) => d.dataIndex === k)
                let col = cols[0]
                if (cols.length > 1) col = cols.find((d) => d.group === tabSet.key) || col
                col && formSet.push(col)
                return col && col.displayInTab !== 'n'
                  ? {
                      title: col.title,
                      dataIndex: col.dataIndex,
                      sorter: true,
                      customRender: this.fnRender
                    }
                  : null
              })
              .filter((d) => !!d),
            {        
              title: '操作',
              dataIndex: 'action',
              scopedSlots: { customRender: 'action' },
            }
        ]
      this.settingMap = {
        tab: tabSet,
        form: formSet
      }
      this.notAllowDelete = !!tabSet.notAllowDelete
    },
    getFullURL(str) {
      let setting = this.settingMap.tab
      if (!setting) return {}
      let { key } = setting
      // TODO: 待确认
      if (key === 'leader' && str === 'edit')  key = 'leaderConfig'
      return `/epd/${key}/${str}`
    },
    fnRender(text, record, index, config) {
      // console.log(record)
      let { dataIndex } = config
      let setting = formSettings.find(d => d.dataIndex === dataIndex)
      if (setting)  {
        let { formType, options } = setting
        if  (['select', 'radio'].includes(formType)) {
          let opt = options.find(d => d.value == text)
          text = (opt || {}).label || text
        }
      }
      return text
    },
    handleAdd() {
      this.mdl = null
      this.visible = true
    },
    handleEdit(record) {
      this.visible = true
      this.mdl = { ...record }
    },
    handleDelete(record) {
      console.log('要删除的项', record)
      if (this.tabSet.key === 'leader') {
        this.$message.warning('该记录无法删除')
        return
      }
      const form = this.$refs.createModal.form
      let params = {
        deptId: this.$store.getters.empInfo.deptId,
        id: record.id
      }
      axiosOperateTab(params, {
        url: this.getFullURL('delete'),
      }).then((res) => {
        if (res.code > 0) {
          this.$message.info('删除成功')
          // 重置表单数据
          form.resetFields()
          // 刷新表格
          this.$refs.table.refresh()
        } else {
          this.$message.error(res.msg || '操作失败')
        }
      }).catch(e => {
        console.error(e)
        this.$message.error('网络异常')
      }).then(() => this.confirmLoading = false)
    },
    handleOk() {
      const form = this.$refs.createModal.form
      this.confirmLoading = true
      form.validateFields((errors, values) => {
        if (!errors) {
          console.log('values', { ...values })
          values = { ...this.mdl, ...values }
          let params = {
            createById: this.$store.getters.empInfo.id,
            deptId: this.$store.getters.empInfo.deptId,
          }
          // let formSet = this.settingMap.form || []
          // let fields = ['id', ...formSet.map(d => d.dataIndex)]
          let fields = this.settingMap.tab.cols
          fields.forEach(d => {
            let v = values[d]
            let p = params[d]
            // TODO: 待确认
            if (v == undefined && p != undefined) v = p
            if (!v && v !== 0) v = null
            params[d] = v
          })
          if (values.id) {
            // 修改 e.g.
            axiosOperateTab(params, {
              url: this.getFullURL('edit'),
            }).then((res) => {
              if (res.code > 0) {
                this.visible = false
                // 重置表单数据
                form.resetFields()
                // 刷新表格
                this.$refs.table.refresh()

                this.$message.info('修改成功')
              } else {
                this.$message.error(res.msg || '操作失败')
              }
            }).catch(e => {
              console.error(e)
              this.$message.error('网络异常')
            }).then(() => this.confirmLoading = false)
          } else {
            // 新增
            axiosOperateTab(params, {
              url: this.getFullURL('add'),
            }).then((res) => {
              if (res.code > 0) {
                this.visible = false
                // 重置表单数据
                form.resetFields()
                // 刷新表格
                this.$refs.table.refresh()

                this.$message.info('新增成功')
              } else {
                this.$message.error(res.msg || '操作失败')
              }
            }).catch(e => {
              console.error(e)
              this.$message.error('网络异常')
            }).then(() => this.confirmLoading = false)
          }
        } else {
          this.confirmLoading = false
        }
      })
    },
    handleCancel() {
      this.visible = false

      const form = this.$refs.createModal.form
      form.resetFields() // 清理表单数据（可不做）
    },
    handleSub(record) {
      if (record.status !== 0) {
        this.$message.info(`${record.no} 订阅成功`)
      } else {
        this.$message.error(`${record.no} 订阅失败，规则已关闭`)
      }
    },
    onSelectChange(selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    },
    toggleAdvanced() {
      this.advanced = !this.advanced
    },
    resetSearchForm() {
      this.queryParam = {
        date: moment(new Date()),
      }
    },
  },
}
</script>
