<template>
  <page-header-wrapper class="gb-tablewrap-nowrap">
    <template v-slot:title>
      <span></span>
    </template>
    <a-card :bordered="false">
      <a-tabs :default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}">
        <a-tab-pane v-for="pane in panels" :loading="true" :tab="pane.title" :key="pane.index">
          <AllowancePane :pane="pane" />
        </a-tab-pane>
      </a-tabs>
    </a-card>
  </page-header-wrapper>
</template>

<script>
import AllowancePane from './components/AllowancePane'

export default {
  name: 'Allowance',
  components: {
    AllowancePane,
  },
  data() {
    return {
      panels: [
        { index: 1, title: '月度确认' },
        { index: 2, title: '人员确认' },
      ]
    }
  },
  computed: {},
  watch: {
  },
  created() {
  },
  methods: {
  },
}
</script>
<style lang="less" scoped>
/deep/ .ant-page-header-heading {
  margin-top: 0;
}

/deep/ .ant-card-body {
  padding: 0;
}
</style>