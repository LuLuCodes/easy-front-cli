<template>
  <div class="create-app">
    <div class="create-form">
      <i-form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="120">
        <Form-item label="工程类型：" prop="appType">
          <div slot="label">
            <span>工程类型</span>
            <Tooltip content="目前支持后台和H5">
              <Icon type="ios-help" size="14" color="#3399ff"></Icon>
            </Tooltip>
            <span>：</span>
          </div>
          <Select v-model="formValidate.appType" style="width:200px" @on-change="handleAppTypeChange">
            <Option value="admin" key="admin">后台工程</Option>
            <Option value="h5" key="h5">H5工程</Option>
          </Select>
        </Form-item>
        
        <Form-item label="CSS 预处理：" prop="css">
          <Checkbox-group v-model="formValidate.css">
            <Checkbox label="less"></Checkbox>
            <Checkbox label="sass"></Checkbox>
          </Checkbox-group>
        </Form-item>
        <Form-item label="Ajax：" prop="ajax" v-show="formValidate.appType !== 'admin'">
          <div slot="label">
            <span>Ajax</span>
            <Tooltip content="基于 axios">
              <Icon type="ios-help" size="14" color="#3399ff"></Icon>
            </Tooltip>
            <span>：</span>
          </div>
          <i-switch v-model="formValidate.ajax">
            <Icon type="android-done" slot="open"></Icon>
            <Icon type="android-close" slot="close"></Icon>
          </i-switch>
        </Form-item>
        <Form-item label="状态管理：" prop="store" v-show="formValidate.appType !== 'admin'">
          <Checkbox-group v-model="formValidate.store">
            <Checkbox label="vuex"></Checkbox>
          </Checkbox-group>
        </Form-item>
        <Form-item label="ESLint：" prop="eslint">
          <i-switch v-model="formValidate.eslint">
            <Icon type="android-done" slot="open"></Icon>
            <Icon type="android-close" slot="close"></Icon>
          </i-switch>
        </Form-item>
        <div class="create-app-more-item">
          <Form-item label="项目名称：" prop="name">
            <i-input v-model="formValidate.name" placeholder="请输入项目名，必须为英文且不带空格"></i-input>
          </Form-item>
          <Form-item label="版本号：" prop="version">
            <i-input v-model="formValidate.version" placeholder="请输入版本号，例如 1.0.0"></i-input>
          </Form-item>
          <Form-item label="项目介绍：" prop="desc">
            <i-input type="textarea" v-model="formValidate.desc" placeholder="请输入项目介绍..."></i-input>
          </Form-item>
          <Form-item label="Git 地址：" prop="git">
            <i-input v-model="formValidate.git" placeholder="请输入项目所在仓库地址"></i-input>
          </Form-item>
        </div>
      </i-form>
      <Row class="create-app-submit">
        <i-col span="9" offset="2">
          <i-button type="primary" long @click="handleSubmit('formValidate')">下一步</i-button>
        </i-col>
        <i-col span="9" offset="2">
          <i-button type="ghost" long @click="handleReset('formValidate')" style="margin-left: 8px">重置</i-button>
        </i-col>
      </Row>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    components: {},
    data () {
      return {
        formValidate: {
          appType: 'admin',
          css: [],
          ajax: true,
          store: [],
          eslint: true,
          name: '',
          version: '1.0.0',
          desc: '',
          git: ''
        },
        ruleValidate: {
          name: [
            { required: true, message: '项目名称不能为空', trigger: 'blur' }
          ],
          version: [
            { required: true, message: '版本号不能为空', trigger: 'blur' }
          ]
        }
      }
    },
    props: {},
    computed: {},
    created () {
      if (this.formValidate.appType === 'admin') {
        this.$Message.info({
          content: '后台工程采用muxt，默认集成了axios和vuex！',
          duration: 3
        })
      }
    },
    filters: {},
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$store.commit('SAVE_BASE_CONFIG', this.formValidate)
            this.$router.push({path: '/create-admin-step-1'})
          } else {
            this.$Message.error('必填项验证失败!')
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields()
        this.$store.commit('RESET_BASE_CONFIG', this.formValidate)
      },
      handleAppTypeChange (value) {
        if (value === 'admin') {
          this.$Message.info({
            content: '后台工程采用muxt，默认集成了axios和vuex！',
            duration: 3
          })
        }
      }
    }
  }
</script>

<style scoped>

</style>
