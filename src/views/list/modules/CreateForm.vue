<template>
  <a-modal
    :title="model ? '编辑' : '新建'"
    :width="800"
    :visible="visible"
    :confirmLoading="loading"
    :maskClosable="false"
    okText="确定"
    cancelText="取消"
    @ok="() => { $emit('ok') }"
    @cancel="() => { $emit('cancel') }"
  >
    <a-spin :spinning="loading">
      <a-form :form="form" v-bind="formLayout">
        <!-- 检查是否有 id，为空是修改。其他是新增，新增不显示主键ID -->
        <a-row v-if="isDev">
          <a-col :span="24">
            <a-form-item v-show="model && model.id" label="主键ID" v-bind="formLayoutWide">
              <a-input v-decorator="['id', { initialValue: '' }]" disabled />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col
            v-for="item in activeFormSet"
            :key="item.dataIndex"
            :span="checkWide(item) ? 24 : 12"
            :class="{ 'my-label-multirow': item.title.length > 10 }"
          >
            <!-- :labelCol="item.title.length > 6 ? { span: 10 } : null" -->
            <!-- 下拉框 -->
            <a-form-item v-if="item.formType === 'select'" :label="item.title">
              <a-select
                v-decorator="[
                  item.dataIndex,
                  { initialValue: getDefaultVal(item), rules: [{ required: false, message: '请选择一项内容！' }] },
                ]"
                placeholder="请选择"
              >
                <a-select-option v-for="opt in getOpts(item)" :value="opt.value" :key="opt.value">
                  {{opt.label}}
                </a-select-option>
              </a-select>
            </a-form-item>
            <!-- 单选框 -->
            <a-form-item v-else-if="item.formType === 'radio'" :label="item.title">
              <a-radio-group
                v-decorator="[
                  item.dataIndex,
                  { initialValue: getDefaultVal(item) }
                ]"
              >
                <a-radio v-for="opt in getOpts(item)" :value="opt.value" :key="opt.value">
                  {{opt.label}}
                </a-radio>
              </a-radio-group>
            </a-form-item>
            <!-- 切换按钮 -->
            <a-form-item v-else-if="item.formType === 'switch'" :label="item.title">
              <a-switch 
                v-if="isRegistered"
                :checked-children="getOpts(item).find(d => !d.value).label"
                :un-checked-children="getOpts(item).find(d => d.value).label"
                :defaultChecked="getDefaultChecked(item)"
                @change="v => onSwitchChange(v, item)"
              />
              <!-- :defaultChecked="model ? !model[item.dataIndex] : !getDefaultVal(item)" -->
              <!-- :checked="model ? !model[item.dataIndex] : !form.getFieldValue(item.dataIndex)" -->
            </a-form-item>
            <!-- 日期/时间选择器 -->
            <a-form-item 
              v-else-if="checkTypeDate(item)" 
              :label="item.title" 
              hasFeedback
            >
            <!-- @change="(date, dateString) => $nextTick(() => form.setFieldsValue({ [item.dataIndex]: dateString))" -->
              <a-date-picker
                :format="getDefaultFormat(item)"
                v-decorator="[
                  item.dataIndex,
                  { 
                    normalize: v => fnNormalize(v, item),
                    initialValue: getDefaultVal(item), 
                    rules: [{ type: 'string', required: item.required === 'y' }] 
                  },
                ]"
              ></a-date-picker>
            </a-form-item>
            <!-- 日期区间选择器 -->
            <a-form-item 
              v-else-if="item.formType === 'rangepicker'" 
              :label="item.title" 
              hasFeedback
            >
              <a-range-picker
                v-if="isRegistered"
                :ranges="{ '今天': [moment(), moment()], '本月': [moment(), moment().endOf('month')] }"
                :format="getDefaultFormat(item)"
                :defaultValue="getRangeValue(item)"
                @change="v => onRangeChange(v, item)"
              />
            </a-form-item>
            <!-- 数字输入框 -->
            <a-form-item 
              v-else-if="checkTypeNum(item)" 
              :label="item.title" 
              hasFeedback
            >
              <a-input-number
                v-decorator="[
                  item.dataIndex,
                  { 
                    normalize: v => fnNormalize(v, item),
                    initialValue: getDefaultVal(item),
                    rules: [{ type: 'number', required: item.required === 'y', min: item.min, max: item.max }]
                  },
                ]"
                style="width: 100%;"
              />
            </a-form-item>
            <!-- 输入框（默认） -->
            <a-form-item 
              v-else 
              :label="item.title" 
              v-bind="checkWide(item) ? formLayoutWide : {}"
              hasFeedback
            >
              <a-input
                v-decorator="[
                  item.dataIndex,
                  {
                    initialValue: getDefaultVal(item),
                    rules: [{ required: item.required === 'y', min: item.min, max: item.max }] 
                  },
                ]"
              />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
      <!-- <child-table v-if="childCols.length" :dataSource="childData" :settingMap="settingMap" /> -->
    </a-spin>
  </a-modal>
</template>

<script>
import moment from 'moment'
import pick from 'lodash.pick'
import ChildTable from './ChildTable'
import MixGetSettings from '@/mixins/MixGetSettings'

export default {
  components: {
    ChildTable
  },
  mixins: [MixGetSettings],
  props: {
    visible: {
      type: Boolean,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    model: {
      type: Object,
      default: null
    },
    detailModel: {
      type: Object,
      default: null
    },
    settingMap: {
      type: Object,
      default: () => ({ tab: null, form: null, search: null })
    },
    keyOfCols: {
      type: String,
      default: 'cols'
    }
  },
  data () {
    this.formLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 10 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 13 }
      }
    }
    this.formLayoutWide = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 19 }
      }
    }
    return {
      isDev: process.env.NODE_ENV === 'development',
      moment,
      form: this.$form.createForm(this),
      isRegistered: true
    }
  },
  computed: {
    activeFormSet() {
      let formSet = this.settingMap.form
      if (!formSet) return []
      let tabSet = this.settingMap.tab
      let cols = tabSet[this.keyOfCols]
      return formSet.filter(d => d.displayInAdd !== 'n' && d.dataIndex.toLowerCase() !== 'id' && cols.includes(d.dataIndex))
    },
    fields() {
      return ['id', ...this.activeFormSet.map(d => d.dataIndex)]
    },
    childCols() {
      let tabSet = this.settingMap.tab || {}
      return tabSet.childCols || []
    },
    childData() {
      if (!this.model) return []
      let tabSet = this.settingMap.tab || {}
      return tabSet.childKey ? this.model[tabSet.childKey] || [] : []
    }
  },
  watch: {
    // visible(v)  {
    //   if (!v) this.isRegistered = false
    // }
  },
  created () {
    console.log('custom modal created')

    // 防止表单未注册
    this.fields.forEach(v => this.form.getFieldDecorator(v))

    // 当 model 发生改变时，为表单设置值
    this.$watch('model', () => {
      this.isRegistered = false
      this.fields.forEach(v => this.form.getFieldDecorator(v))
      setTimeout(() => {
        this.settingMap.form.forEach(item => {
          if (item.formType === 'switch') {
            let v = this.getDefaultChecked(item)
            this.onSwitchChange(v, item)
          } 
          // else if (item.formType === 'rangepicker') {
          //   let v = this.getRangeValue(item)
          //   this.onRangeChange(v, item)
          // }
        })
        this.isRegistered = true
      })
      console.log(this.settingMap, this.model)
      this.model && this.form.setFieldsValue(pick(this.model, this.fields))
    })
  },
  methods: {
    getDefaultChecked(item) {
      return this.model ? !this.model[item.dataIndex] : !this.getDefaultVal(item)
    },
    onSwitchChange(v, item) {
      v = Number(!v)
      let k = item.dataIndex
      if (this.model) this.model[k] = v
      this.form.setFieldsValue({ [k]: v })
    },
    getRangeValue(item) {
      let v = (this.model || {})[item.dataIndex]
      if (!v || typeof v !== 'string') return []
      return v.split('至').map(d => d == '-' ? undefined : moment(d, this.getDefaultFormat(item)))
    },
    onRangeChange(v, item) {
      let fmt = this.getDefaultFormat(item)
      let start = v[0] && v[0].format(fmt)
      let end = v[1] && v[1].format(fmt)
      v = (start || end) ? `${start || '-'}至${end || '-'}` : ''
      let k = item.dataIndex
      if (this.model) this.model[k] = v
      this.form.setFieldsValue({ [k]: v })
    },
    fnNormalize(v, item) {
      if (this.checkTypeDate(item)){
        if (v && typeof v === 'object') v = v.format(this.getDefaultFormat(item))  // v instanceof moment
      } else if (item.formType === 'switch') v = !v
      else if (this.checkTypeNum(item)) v = Number(v)
      return v
    },
  }
}
</script>
<style lang="less" scoped>
.ant-table-body {
  overflow: auto !important;
}
.my-label-multirow {
  /deep/ .ant-form-item label {
    display: flex;
    align-items: center;;
    height: 40px;
    line-height: 1.2;
    white-space: normal;
  }
}
/deep/ .ant-form-item-control-wrapper {
  &.ant-col-sm-19 {
    padding-right: 15px;

  }
}
</style>
