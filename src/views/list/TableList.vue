<template>
  <page-header-wrapper>
    <a-card :bordered="false">
      <div class="table-page-search-wrapper">
        <!-- to be added -->
      </div>

      <div class="table-operator">
        <a-button type="primary" icon="plus" @click="handleAdd">新建</a-button>
        <!-- v-action:edit -->
        <a-dropdown v-if="selectedRowKeys.length > 0">
          <a-menu slot="overlay">
            <a-menu-item key="1" @click="handleDelete(selectedRowKeys)"><a-icon type="delete" />删除</a-menu-item>
            <!-- <a-menu-item key="2"><a-icon type="lock" />锁定</a-menu-item> -->
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
        <!-- <template v-for="(col, colIndex) in columns" #[col.dataIndex]="{ text, record, index }">
          <span :key="colIndex">
            <template v-if="col.dataIndex === 'serial'">{{ index + 1 }}</template>
            <template v-else-if="col.dataIndex === 'action'">
              <a @click="handleEdit(record)">配置</a>
              <a-popconfirm
                placement="topRight"
                title="确定删除此项吗？"
                ok-text="确定"
                cancel-text="取消"
                @confirm="handleDelete(record)"
              >
                <a href="#" style="margin-left: 1em;">删除</a>
              </a-popconfirm>
            </template>
            <template v-else>{{ format(text, record, index) }}</template>
          </span>
        </template> -->
        <template #serial="text, record, index">{{ index + 1 }}</template>
        <template #action="text, record">
          <a @click="handleEdit(record)">配置</a>
          <a-popconfirm
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
        @cancel="handleCancel"
        @ok="handleOk"
      />
    </a-card>
  </page-header-wrapper>
</template>

<script>
import moment from 'moment'
import { STable, Ellipsis } from '@/components'
import { getRoleList, getServiceList } from '@/api/manage'
import settings from '@/settings'
const { tabSetting, formSetting } = settings

import CreateForm from './modules/CreateForm'

const columns = [
  {
    title: '#',
    scopedSlots: { customRender: 'serial' },
  },
  {
    title: '规则编号',
    dataIndex: 'no',
  },
  {
    title: '描述',
    dataIndex: 'description',
    scopedSlots: { customRender: 'description' },
  },
  {
    title: '服务调用次数',
    dataIndex: 'callNo',
    sorter: true,
    // needTotal: true,
    customRender: (text) => text + ' 次',
  },
  {
    title: '状态',
    dataIndex: 'status',
    scopedSlots: { customRender: 'status' },
  },
  {
    title: '更新时间',
    dataIndex: 'updatedAt',
    sorter: true,
  },
  {
    title: '操作',
    dataIndex: 'action',
    width: '150px',
    scopedSlots: { customRender: 'action' },
  },
]

const statusMap = {
  0: {
    status: 'default',
    text: '关闭',
  },
  1: {
    status: 'processing',
    text: '运行中',
  },
  2: {
    status: 'success',
    text: '已上线',
  },
  3: {
    status: 'error',
    text: '异常',
  },
}

export default {
  name: 'TableList',
  components: {
    STable,
    Ellipsis,
    CreateForm,
  },
  data() {
    console.log(tabSetting, formSetting)
    let setting = tabSetting.find((d) => d.key === 'leader')
    this.setting = setting
    this.columns = !setting
      ? null
      : [
          ...setting.cols
            .map((k) => {
              let cols = formSetting.filter((d) => d.dataIndex === k)
              let col = cols[0]
              if (cols.length > 1) col = cols.find((d) => d.group === setting.key) || col
              return col && col.displayInTab !== 'n'
                ? {
                    title: col.title,
                    dataIndex: col.dataIndex,
                    sorter: true,
                  }
                : null
            })
            .filter((d) => !!d),
          {        
            title: '操作',
            dataIndex: 'action',
            scopedSlots: { customRender: 'action' },
            sorter: false,
          }
      ]
    return {
      // create model
      visible: false,
      confirmLoading: false,
      mdl: null,
      // 高级搜索 展开/关闭
      advanced: false,
      // 查询参数
      queryParam: {
        deptId: '722945f4-e8dc-11ea-ae06-00ff8b330500',
        pageNum: 1,
        pageSize: 10,
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
                return (a[sortField] > b[sortField] ? 1 : -1) * tmpNum
              })
            }
            resolve({
              ...parameter,
              totalCount: data.length,
              totalPage: 1,
              data
            })
          })
        }
        const requestParameters = Object.assign({}, parameter, this.queryParam)
        console.log('loadData request parameters:', requestParameters)
        // const baseURL = 'http://hezhongsoft.com:8080'
        const baseURL = 'http://47.96.126.38:8080'
        return getServiceList(null, {
          baseURL,
          url: this.getFullURL('list'),
          method: 'post',
          data: requestParameters,
        }).then((res) => {
          console.log('res =====>', res)
          // return res.result;
          let data = res.list || []
          this.tableData = data
          if (res.code > 0) {
            return {
              pageNo: 1,
              pageSize: res.list.length,
              totalCount: res.list.length,
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
    }
  },
  filters: {
    statusFilter(type) {
      return statusMap[type].text
    },
    statusTypeFilter(type) {
      return statusMap[type].status
    },
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
  methods: {
    init() {
      // getRoleList({ t: new Date() })
    },
    getFullURL(str) {
      if (!this.setting) return {}
      let { key } = this.setting
      return `/epd/${key}/${str}`
    },
    format(text, record, index) {
      console.log(record)
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
    },
    handleOk() {
      const form = this.$refs.createModal.form
      this.confirmLoading = true
      form.validateFields((errors, values) => {
        if (!errors) {
          console.log('values', values)
          if (values.id > 0) {
            // 修改 e.g.
            new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve()
              }, 1000)
            }).then((res) => {
              this.visible = false
              this.confirmLoading = false
              // 重置表单数据
              form.resetFields()
              // 刷新表格
              this.$refs.table.refresh()

              this.$message.info('修改成功')
            })
          } else {
            // 新增
            new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve()
              }, 1000)
            }).then((res) => {
              this.visible = false
              this.confirmLoading = false
              // 重置表单数据
              form.resetFields()
              // 刷新表格
              this.$refs.table.refresh()

              this.$message.info('新增成功')
            })
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
