<template>
  <div class="gb-tablewrap-nowrap">
    <a-button class="editable-add-btn" @click="handleAdd"> 添加 </a-button>
    <a-table
      ref="table"
      bordered
      rowKey="id"
      :pagination="pagination"
      :data-source="dataSource"
      :columns="columns"
      :scroll="{ x: true }"
    >
      <!-- :pagination="false" -->
      <!-- <template v-for="(col, index) in columns" :slot="col.dataIndex" slot-scope="text, record">
        <editable-cell :text="text" @change="onCellChange(record.key, 'name', $event)" :key="index" />
      </template> -->
      <template #serial="text, record, index">{{ index + 1 }}</template>
      <template slot="action" slot-scope="text, record">
        <a href="javascript:;" @click="handleEdit(record)">编辑</a>
        <a-popconfirm v-if="!notAllowDelete" title="确定删除此项吗？" @confirm="() => handleDelete(record)">
          <a href="javascript:;">删除</a>
        </a-popconfirm>
      </template>
    </a-table>
  </div>
</template>
<script>
import MixGetSettings from '@/mixins/MixGetSettings'
import settings from '@/settings'
const { formSettings } = settings

const EditableCell = {
  template: `
      <div class="editable-cell">
        <div v-if="editable" class="editable-cell-input-wrapper">
          <a-input :value="value" @change="handleChange" @pressEnter="check" /><a-icon
            type="check"
            class="editable-cell-icon-check"
            @click="check"
          />
        </div>
        <div v-else class="editable-cell-text-wrapper">
          {{ value || ' ' }}
          <a-icon type="edit" class="editable-cell-icon" @click="edit" />
        </div>
      </div>
    `,
  props: {
    text: String,
  },
  data() {
    return {
      value: this.text,
      editable: false,
    }
  },
  methods: {
    handleChange(e) {
      const value = e.target.value
      this.value = value
    },
    check() {
      this.editable = false
      this.$emit('change', this.value)
    },
    edit() {
      this.editable = true
    },
  },
}
export default {
  components: {
    EditableCell,
  },
  mixins: [MixGetSettings],
  props: {
    dataSource: {
      type: Array,
      default: () => [],
    },
    settingMap: {
      type: Object,
      default: () => ({ tab: null, form: null, search: null })
    },
    pagination: {
      type: Boolean,
      default: false
    }
  },
  data() {
    let tabSet = this.settingMap.tab
    let formSet = []
    let tmpCols = tabSet.childCols
      .map((k) => {
        let cols = formSettings.filter((d) => d.dataIndex === k)
        let col = cols[0]
        if (cols.length > 1) col = cols.find((d) => d.group === tabSet.childKey) || col
        col && formSet.push(col)
        return col && col.displayInTab !== 'n'
          ? {
              title: col.title,
              dataIndex: col.dataIndex,
              sorter: true,
              width: col.width || '150px',
              scopedSlots: { customRender: col.dataIndex },
            }
          : null
      })
      .filter((d) => !!d)
    this.columns = [
      {        
        title: '序号',
        dataIndex: 'serial',
        fixed: 'left',
        scopedSlots: { customRender: 'serial' },
      },
      ...tmpCols, 
      {        
        title: '操作',
        dataIndex: 'action',
        fixed: 'right',
        scopedSlots: { customRender: 'action' },
      }
    ]
    this.settingMap.form = formSet
    return {
      formSet,
      notAllowDelete: !!tabSet.notAllowDelete
    }
  },
  computed: {
  },
  created() {
    setTimeout(() => this.init())
  },
  methods: {
    async init() {
      await this.fetchDynamicOpts()
      this.$emit('ready')
      this.refresh()
    },
    refresh() {
      // this.$refs.table && this.$refs.table.refresh()
    },
    onCellChange(key, dataIndex, value) {
      const dataSource = [...this.dataSource]
      const target = dataSource.find((item) => item.key === key)
      if (target) {
        target[dataIndex] = value
        this.dataSource = dataSource
      }
    },
    handleAdd() {
      // const { dataSource } = this  
      // const newData = {}
      // let tabSet = this.settingMap.tab
      // tabSet.childCols.forEach(d => newData[d] = '')
      // this.dataSource = [...dataSource, newData]

      this.$emit('add')
    },
    handleEdit(record) {
      this.$emit('edit', record)
    },
    handleDelete(record) {
      // let key = record.key
      // const dataSource = [...this.dataSource]
      // this.dataSource = dataSource.filter((item) => item.key !== key)
      
      this.$emit('delete', record)
    }
  },
}
</script>
<style lang="less" scoped>
.editable-cell {
  position: relative;
}

.editable-cell-input-wrapper,
.editable-cell-text-wrapper {
  padding-right: 24px;
}

.editable-cell-text-wrapper {
  padding: 5px 24px 5px 5px;
}

.editable-cell-icon,
.editable-cell-icon-check {
  position: absolute;
  right: 0;
  width: 20px;
  cursor: pointer;
}

.editable-cell-icon {
  line-height: 18px;
  display: none;
}

.editable-cell-icon-check {
  line-height: 28px;
}

.editable-cell:hover .editable-cell-icon {
  display: inline-block;
}

.editable-cell-icon:hover,
.editable-cell-icon-check:hover {
  color: #108ee9;
}

.editable-add-btn {
  margin-bottom: 18px;
}
</style>