<template>
  <a-modal
    :title="model ? '编辑' : '新建'"
    :width="640"
    :visible="visible"
    :confirmLoading="loading"
    okText="确定"
    cancelText="取消"
    @ok="() => { $emit('ok') }"
    @cancel="() => { $emit('cancel') }"
  >
    <a-spin :spinning="loading">
      <a-form :form="form" v-bind="formLayout">
        <a-row>
          <a-col :span="24">
            <!-- 检查是否有 id，为空是修改。其他是新增，新增不显示主键ID -->
            <a-form-item v-show="model && model.id" label="主键ID" v-bind="formLayoutWide">
              <a-input v-decorator="['id', { initialValue: '' }]" disabled />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col v-for="item in activeFormSet" :key="item.dataIndex" :span="12">
            <!-- :labelCol="item.title.length > 6 ? { span: 10 } : null" -->
            <template>
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
              <a-form-item v-if="item.formType === 'radio'" :label="item.title">
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
              <!-- 输入框（默认） -->
              <a-form-item v-else :label="item.title">
                <a-input
                  v-decorator="[
                    item.dataIndex,
                    { initialValue: getDefaultVal(item), rules: [{ required: item.required === 'y', min: item.min, max: item.max }] },
                  ]"
                />
              </a-form-item>
            </template>
          </a-col>
        </a-row>
      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
import pick from 'lodash.pick'

export default {
  props: {
    visible: {
      type: Boolean,
      required: true
    },
    loading: {
      type: Boolean,
      default: () => false
    },
    model: {
      type: Object,
      default: () => null
    },
    setting: {
      type: Object,
      default: { tab: null, form: null }
    },
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
        sm: { span: 18 }
      }
    }
    return {
      form: this.$form.createForm(this)
    }
  },
  computed: {
    activeFormSet () {
      let formSet = this.setting.form
      if (!formSet) return []
      return formSet.filter(d => d.displayInAdd !== 'n')
    },
    fields() {
      return ['id', ...this.activeFormSet.map(d => d.dataIndex)]
    },
  },
  created () {
    console.log('custom modal created')

    // 防止表单未注册
    this.fields.forEach(v => this.form.getFieldDecorator(v))

    // 当 model 发生改变时，为表单设置值
    this.$watch('model', () => {
      console.log(this.setting, this.model)
      this.model && this.form.setFieldsValue(pick(this.model, this.fields))
    })
  },
  methods: {
    getConf(item) {
      let { dataIndex } = item
      let formSet = this.setting.form
      if (!formSet) return null
      let conf = formSet.find(d => d.dataIndex == dataIndex)
      return conf
    },
    getDefaultVal(item) {
      let conf = this.getConf(item)
      if (!conf) return ''
      // TODO: 待完善代码
      // let v = ''
      // if (conf.default === 'auto') {
      //   switch (item.dataIndex) {
      //     case 'sort':
      //       v = this.tableData.length + 1
      //       break
      //     default:
      //   }
      // }
      // return v
      let v = conf.default
      if (!conf.formType || conf.formType === 'input') v = v == undefined ? '' : String(v)
      return v
    },
    getOpts(item) {
      let conf = this.getConf(item)
      if (!conf) return []
      return conf.options
    }
  }
}
</script>
