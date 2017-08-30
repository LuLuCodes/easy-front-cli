<script src="../../../../../test/123123/nuxt.config.js"></script>
<template>
  <div class="create-app">
    <div class="create-info">
    
      <ul>
        <li v-for="item in logs">
          <Icon size="14" type="load-c" class="ivu-load-loop" color="#3399ff" v-show="item.status === 1"></Icon>
          <Icon size="14" type="ios-checkmark-outline" color="#00cc66" v-show="item.status === 2"></Icon>
          <Icon size="14" type="ios-close-outline" color="#ff5500" v-show="item.status === 3"></Icon>
          <span>{{item.content}}</span>
        </li>
      </ul>
    
      <Row class="create-app-submit create-info-submit">
        <i-col span="9" offset="2">
          <i-button type="primary" long @click="handleBackHome" icon="ios-home">返回首页</i-button>
        </i-col>
        <i-col span="9" offset="2">
          <i-button type="ghost" long @click="handleOpenDirectory" style="margin-left: 8px" icon="folder">打开目录</i-button>
        </i-col>
      </Row>
    </div>
  </div>
</template>

<script>
  import CreateAdmin from '../assets/js/create-process/admin'
  import {AdminProcess} from '../assets/js/config/create-process-config'
  
  import electron from 'electron'
  const shell = electron.shell
  
  export default {
    name: '',
    components: {},
    data () {
      return {
        logs: []
      }
    },
    props: {},
    computed: {
      baseOpt () {
        return this.$store.state.BaseConfig
      }
    },
    created () {
      if (this.baseOpt.appType === 'admin') {
        this.logs = AdminProcess()
        this.startCreateAdmin()
      }
    },
    filters: {},
    methods: {
      startCreateAdmin () {
        // create package.json
        CreateAdmin.package(this.baseOpt).then(() => {
          this.logs.package.status = 2
        }).catch(() => {
          this.logs.package.status = 3
        })

        // create REAMDME
        CreateAdmin.readme(this.baseOpt).then(() => {
          this.logs.readme.status = 2
        }).catch(() => {
          this.logs.readme.status = 3
        })

        // create nuxt.config.js
        CreateAdmin.nuxtConfig(this.baseOpt).then(() => {
          this.logs.nuxt.status = 2
        }).catch(() => {
          this.logs.nuxt.status = 3
        })

        // create editorconfig
        CreateAdmin.editorconfig(this.baseOpt).then(() => {
          this.logs.editorconfig.status = 2
        }).catch(() => {
          this.logs.editorconfig.status = 3
        })

        // create eslintrc
        CreateAdmin.eslintrc(this.baseOpt).then(() => {
          this.logs.eslintrc.status = 2
        }).catch(() => {
          this.logs.eslintrc.status = 3
        })

        // create gitignore
        CreateAdmin.gitignore(this.baseOpt).then(() => {
          this.logs.gitignore.status = 2
        }).catch(() => {
          this.logs.gitignore.status = 3
        })

        // create assets folder
        CreateAdmin.assets(this.baseOpt).then(() => {
          this.logs.assets.status = 2
        }).catch(() => {
          this.logs.assets.status = 3
        })

        // create components folder
        CreateAdmin.components(this.baseOpt).then(() => {
          this.logs.components.status = 2
        }).catch(() => {
          this.logs.components.status = 3
        })

        // create layouts folder
        CreateAdmin.layouts(this.baseOpt).then(() => {
          this.logs.layouts.status = 2
        }).catch(() => {
          this.logs.layouts.status = 3
        })

        // create middleware folder
        CreateAdmin.middleware(this.baseOpt).then(() => {
          this.logs.middleware.status = 2
        }).catch(() => {
          this.logs.middleware.status = 3
        })

        // create pages folder
        CreateAdmin.pages(this.baseOpt).then(() => {
          this.logs.pages.status = 2
        }).catch(() => {
          this.logs.pages.status = 3
        })

        // create plugins folder
        CreateAdmin.plugins(this.baseOpt).then(() => {
          this.logs.plugins.status = 2
        }).catch(() => {
          this.logs.plugins.status = 3
        })

        // create static folder
        CreateAdmin.static(this.baseOpt).then(() => {
          this.logs.static.status = 2
        }).catch(() => {
          this.logs.static.status = 3
        })

        // create layouts folder
        CreateAdmin.store(this.baseOpt).then(() => {
          this.logs.store.status = 2
        }).catch(() => {
          this.logs.store.status = 3
        })
      },
      handleBackHome () {
        this.$store.commit('RESET_BASE_CONFIG')
        this.$store.commit('RESET_ADMIN_MODULE')
        this.$router.push({path: '/'})
      },
      handleOpenDirectory () {
        shell.showItemInFolder(this.baseOpt.saveDirectory)
      }
    }
  }
</script>

<style scoped>

</style>
