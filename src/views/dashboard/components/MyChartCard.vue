<template>
  <chart-card :loading="loading" :title="cardItem.title" :total="'￥ ' + cardItem.total">
    <a-tooltip v-if="cardItem.desc" :title="cardItem.desc" slot="action">
      <a-icon type="info-circle-o" />
    </a-tooltip>
    <div>
      <trend
        v-for="term in cardItem.terms"
        :flag="term.value > 0 ? 'up' : term.value < 0 ? 'down' : ''"
        :key="term.name"
        class="my-card-trend"
      >
        <span slot="term">{{ term.name }}</span>
        {{ term.format ? term.format(term.value,) : term.value }}%
      </trend>
    </div>
    <!-- <template slot="footer">日均销售额<span>￥ 234.56</span></template> -->
    <template slot="footer"><slot name="footer"></slot></template>
  </chart-card>
</template>

<script>
import moment from 'moment'
import {
  Trend,
  ChartCard,
} from '@/components'

export default {
  name: 'MyChartCard',
  components: {
    ChartCard,
    Trend,
  },
  props: {
    loading: {
      type: Boolean,
      required: true
    },
    cardItem: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
    }
  },
  created () {
  }
}
</script>

<style lang="less" scoped>
.my-card-trend {
  margin-right: 16px
}
</style>
