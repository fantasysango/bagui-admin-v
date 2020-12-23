<template>
  <div class="gb-tablewrap-nowrap">
    <a-button class="editable-add-btn" @click="handleAdd"> 添加 </a-button>
    <a-table bordered :data-source="dataSource" :columns="columns" :scroll="{ x: true }" showPagination="auto">
      <template v-for="(col, index) in columns" :slot="col.dataIndex" slot-scope="text, record">
        <editable-cell :text="text" @change="onCellChange(record.key, 'name', $event)" :key="index" />
      </template>
      <template slot="action" slot-scope="text, record">
        <a-popconfirm v-if="dataSource.length" title="确定删除此项吗？" @confirm="() => onDelete(record)">
          <a href="javascript:;">删除</a>
        </a-popconfirm>
      </template>
    </a-table>
  </div>
</template>
<script>
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
  props: {
    dataSource: {
      type: Array,
      default: () => [],
    },
    setting: {
      type: Object,
      default: { tab: null, form: null },
    },
  },
  data() {
    let tabSet = this.setting.tab
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
        title: '#',
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
    this.formSet = formSet
    return {
    }
  },
  computed: {
  },
  methods: {
    onCellChange(key, dataIndex, value) {
      const dataSource = [...this.dataSource]
      const target = dataSource.find((item) => item.key === key)
      if (target) {
        target[dataIndex] = value
        this.dataSource = dataSource
      }
    },
    onDelete(record) {
      let key = record.key
      const dataSource = [...this.dataSource]
      this.dataSource = dataSource.filter((item) => item.key !== key)
    },
    handleAdd() {
      const { dataSource } = this  
      const newData = {}
      let tabSet = this.setting.tab
      tabSet.childCols.forEach(d => newData[d] = '')
      this.dataSource = [...dataSource, newData]
    },
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
  margin-bottom: 8px;
}
</style>