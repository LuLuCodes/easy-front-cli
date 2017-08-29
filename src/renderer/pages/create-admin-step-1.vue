<template>
  <div class="create-app">
    <div class="create-form">
      <i-form ref="formValidate" :model="formValidate" :label-width="120">
        <Form-item label="模块配置：" prop="moduleData">
          <div slot="label">
            <span>模块配置</span>
            <Tooltip content="至少选择一个模块">
              <Icon type="ios-help" size="14" color="#3399ff"></Icon>
            </Tooltip>
            <span>：</span>
          </div>
          <Tree :data="formValidate.moduleData" show-checkbox></Tree>
        </Form-item>
      </i-form>
      <Row class="create-app-submit">
        <i-col span="9" offset="2">
          <i-button type="primary" long @click="handleBack()">上一步</i-button>
        </i-col>
        <i-col span="9" offset="2">
          <i-button type="primary" long @click="handleSubmit()">创建工程</i-button>
        </i-col>
      </Row>
    </div>
  </div>
</template>

<script>
  import ModuleConfig from '../assets/js/config/module-config'
  import electron from 'electron'
  const remote = electron.remote
  const BrowserWindow = remote.BrowserWindow
  const win = BrowserWindow.getAllWindows()[0]
  const dialog = remote.dialog
  
  function getModules (modulesTree) {
    let data = []
    for (let item of modulesTree) {
      if (item.checked && !item.children.length) {
        data.push(item.decs)
      } else if (item.children.length) {
        let childData = getModules(item.children)
        data.push(...childData)
      }
    }
    return data
  }

  export default {
    name: '',
    components: {},
    data () {
      return {
        formValidate: {
          moduleData: ModuleConfig()
        }
      }
    },
    props: {},
    computed: {},
    created () {
    },
    filters: {},
    methods: {
      handleSubmit () {
        let modules = getModules(this.formValidate.moduleData)
        console.log(JSON.stringify(this.formValidate.moduleData))
        if (!modules.length) {
          this.$Message.error('请至少选择一个模块!')
        } else {
          this.$store.commit('SAVE_ADMIN_MODULE', modules)
          let saveDirectory = dialog.showOpenDialog(win, {
            title: '选择工程保存目录',
            properties: ['openDirectory', 'createDirectory']
          })

          if (saveDirectory) {
            saveDirectory = saveDirectory[0]
            this.$store.commit('SAVE_DIRECTORY_CONFIG', saveDirectory)
            this.$router.push({path: '/create-process'})
          }
        }
      },
      handleBack () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>

</style>
