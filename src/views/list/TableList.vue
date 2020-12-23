<template>
  <page-header-wrapper class="gb-tablewrap-nowrap">
    <a-card :bordered="false">
      <div class="table-page-search-wrapper">
        <search-form
          ref="search"
          :setting="settingMap"
          @query="setQueryParam"
        />
      </div>

      <div class="table-operator">
        <a-button type="primary" icon="plus" @click="handleAdd">新建</a-button>
        <a-dropdown v-if="selectedRowKeys.length > 0 && !notAllowDelete">
          <a-menu slot="overlay">
            <a-menu-item key="1" @click="handleDeleteBatch(selectedRowKeys)"><a-icon type="delete" />删除</a-menu-item>
          </a-menu>
          <a-button style="margin-left: 8px"> 批量操作 <a-icon type="down" /> </a-button>
        </a-dropdown>
      </div>

      <s-table
        ref="table"
        size="default"
        rowKey="id"
        :columns="columns"
        :data="loadData"
        :scroll="{ x: true }"
        :alert="!notAllowDelete"
        :rowSelection="notAllowDelete ? null : rowSelection"
        showPagination="auto"
      >
        <template #serial="text, record, index">{{ index + 1 }}</template>
        <template #action="text, record">
          <a href="javascript:;" @click="handleEdit(record)">编辑</a>
          <a-popconfirm
            v-if="!notAllowDelete"
            placement="topRight"
            title="确定删除此项吗？"
            ok-text="确定"
            cancel-text="取消"
            @confirm="handleDelete(record)"
          >
            <a href="javascript:;" style="margin-left: 1em">删除</a>
          </a-popconfirm>
        </template>
      </s-table>

      <create-form
        v-if="isFormReady"
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
import SearchForm from './modules/SearchForm'

export default {
  name: 'TableList',
  components: {
    STable,
    Ellipsis,
    CreateForm,
    SearchForm,
  },
  data() {
    return {
      // create model
      visible: false,
      isFormReady: true,
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
          let { pageNo, pageSize } = parameter
          if (res.code > 0) {
            let { result, list } = res  // PS: list 可能为对象（result别名），也可能为数组
            let data = list || []
            if (!result && list && !(list instanceof Array)) result = list
            let totalCount = data.length || 0
            let totalPage = 1
            if (result) {
              data = result.list || []
              totalCount = result.total
              totalPage = result.pages
            }
            this.tableData = data
            return {
              pageNo,
              pageSize,
              totalCount,
              totalPage,
              data
            }
          } else {
            this.$notification.error({
              message: '错误',
              description: res.msg || '请求数据失败，请重试',
            })
            return {
              pageNo,
              pageSize,
              totalCount: 0,
              totalPage: 0,
              data: []
            }
          }
        })
      },
      selectedRowKeys: [],
      selectedRows: [],
      columns: [],
      settingMap: {
        tab: null,  // {}
        form: null, // []
        search: null, // []
      },
      childData: [],
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
      // const form = this.$refs.createModal.form
      // // 重置表单数据
      // form.resetFields()

      this.isFormReady = false
      setTimeout(() => this.isFormReady = true)
      
      this.queryParam = {}
      // this.$refs.search.doReset({ query: false })
      
      // 刷新表格
      this.$refs.table.refresh()
      this.selectedRowKeys = []
      this.selectedRows = []
    }
  },
  methods: {
    async init() {
      let tabSet = tabSettings.find((d) => d.key === this.$route.meta.key)
      this.settingMap.tab = tabSet
      let formSet = []
      let searchSet = []
      tabSet.searchCols && tabSet.searchCols.forEach(k => {
        let cols = formSettings.filter((d) => d.dataIndex === k)
        let col = cols[0]
        if (cols.length > 1) col = cols.find((d) => d.group === tabSet.key) || col
        col && searchSet.push(_.cloneDeep(col))
      })
      this.settingMap.search = searchSet
      let tabCols = tabSet.cols
      try {
        tabCols = await this.fetchStructure() || tabCols
      } catch(e) {
        console.error(e)
      }
      tabCols = tabCols.map((k) => {
          let cols = formSettings.filter((d) => d.dataIndex === k)
          let col = cols[0]
          if (cols.length > 1) col = cols.find((d) => d.group === tabSet.key) || col
          col && formSet.push(col)
          return col && col.displayInTab !== 'n'
            ? {
                title: col.title,
                dataIndex: col.dataIndex,
                sorter: true,
                width: col.width || '150px',
                customRender: this.fnRender
              }
            : null
        })
        .filter((d) => !!d)
      this.columns = !tabSet
        ? null
        : [
            {        
              title: '#',
              dataIndex: 'serial',
              fixed: 'left',
              scopedSlots: { customRender: 'serial' },
            },
            ...tabCols,
            {        
              title: '操作',
              dataIndex: 'action',
              fixed: 'right',
              scopedSlots: { customRender: 'action' },
            }
        ]
      this.settingMap.form = formSet
      // this.settingMap = {
      //   tab: tabSet,
      //   form: formSet
      // }
      console.log(this.settingMap)
      this.notAllowDelete = !!tabSet.notAllowDelete
      this.fetchDynamicOpts()
    },
    fetchStructure() {
      let params = Object.assign({
        deptId: this.$store.getters.empInfo.deptId,
        pageNum: 1,
        pageSize: 1
      }, this.queryParam)
      return axiosOperateTab(params, {
        url: this.getFullURL('list'),
      }).then((res) => {
        console.log('res =====>', res)
        if (res.code > 0) {
          let { result, list } = res  // PS: list 可能为对象（result别名），也可能为数组
          let data = list || []
          if (!result && list && !(list instanceof Array)) result = list
          if (result) data = result.list || []
          return data[0] ? Object.keys(data[0]) : null
        }
        return null
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
    async fetchChildData(record) {
      let { key, childKey } = this.settingMap.tab
      if (childKey) {
        let params = this.getBaseParam({
          id: record.id  
        })
        let res = await axiosOperateTab(params, {
          url: this.getFullURL('detail'),
        })
        if (res.code > 0) {
          this.childData = res[key] || {}
          record = {
            ...record,
            ...this.childData,
          }
        } else {
          this.$message.error(res.msg || '获取详情失败')
          return Promise.resolve(false)
        }
      }
      return Promise.resolve(true)
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
    fnRender(text, record, index, config) {
      // console.log(record)
      let { dataIndex } = config
      let setting = formSettings.find(d => d.dataIndex === dataIndex)
      if (setting) {
        let { formType, options } = setting
        if  (['select', 'radio', 'switch'].includes(formType) && options instanceof Array) {
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
    async handleEdit(record) {
      // if (!await this.fetchDynamicOpts()) return
      if (!await this.fetchChildData(record)) return
      this.visible = true
      this.mdl = _.cloneDeep(record)
    },
    handleDeleteBatch(keys) {
      this.$message.warning('暂时无法批量删除')
    },
    handleDelete(record) {
      console.log('要删除的项', record)
      if (this.notAllowDelete) {
        this.$message.warning('该记录无法删除')
        return
      }
      const form = this.$refs.createModal.form
      let params = this.getBaseParam({
        id: record.id  
      })
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
      }).then(() => this.confirmLoading = false)
    },
    handleOk() {
      const form = this.$refs.createModal.form
      this.confirmLoading = true
      form.validateFields(async (errors, values) => {
        if (!errors) {
          console.log('values', { ...values })
          values = { ...this.mdl, ...values }
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
            // let formSet = this.settingMap.form || []
            // let fields = ['id', ...formSet.map(d => d.dataIndex)]
            let fields = tabSet.cols
            if (values.id) {
              let res = await axiosOperateTab(
                getParams(fields), 
                { url: this.getFullURL('edit') }
              )
              if (res.code > 0) {
                this.visible = false
                // 重置表单数据
                form.resetFields()
                // 刷新表格
                this.$refs.table.refresh()

                if (tabSet.childKey) {
                  res = await axiosOperateTab(
                    getParams(tabSet.childCols), 
                    { url: this.getFullURL('edit', tabSet.childKey) }
                  )
                  if (res.isOk) {
                    this.$message.info('修改成功')
                  } else {
                    this.$message.error(res.msg || '操作失败')
                  }
                } else {
                  this.$message.info('修改成功')
                }
              } else {
                this.$message.error(res.msg || '操作失败')
              }
            } else {
              // 新增
              let res = await axiosOperateTab(
                getParams(fields), 
                { url: this.getFullURL('add') }
              )
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
            }
          } catch(e) {
            console.error(e)
          }
        }
        this.confirmLoading = false
      })
    },
    handleCancel() {
      this.visible = false

      const form = this.$refs.createModal.form
      form.resetFields() // 清理表单数据（可不做）
    },
    onSelectChange(selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    },
    toggleAdvanced() {
      this.advanced = !this.advanced
    },
    setQueryParam(param) {
      this.queryParam = param
      this.$refs.table.refresh()
    },
  },
}
</script>
<style lang="less" scoped>
  /deep/ .ant-table-body {
    overflow-x: auto !important;
  }
</style>