<template>
  <a-table
    bordered
    size="small"
    :pagination="false"
    :data-source="tableData"
    :columns="tableCols"
  ></a-table>
    <!-- :scroll="{ x: true }" -->
    <!-- showPagination="auto" -->
</template>

<script>
export default {
  name: 'ChartTable',
  props: {
    tableConf: {
      type: Object,
      default: () => ({ columns: [], rows: [] })
    }
  },
  data() {
    return {
    }
  },
  computed: {
    tableCols() {
      let { columns } = this.tableConf
      return columns.map(d => {
        return typeof d === 'string' ? {
          title: d,
          dataIndex: d
        }: d
      })
    },
    tableData() {
      let { columns, rows } = this.tableConf
      return rows
    }
  },
  watch: {},
  created() {
  },
  methods: {
  },
}
</script>
<style lang="less" scoped>
</style>