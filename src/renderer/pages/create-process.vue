<template>
  <div class="create-info">
    <ul>
      <li v-for="item in logs">
        <Icon size="14" type="load-c" class="ivu-load-loop" color="#3399ff" v-show="item.status === 1"></Icon>
        <Icon size="14" type="ios-checkmark-outline" color="#00cc66" v-show="item.status === 2"></Icon>
        <Icon size="14" type="ios-close-outline" color="#ff5500" v-show="item.status === 3"></Icon>
        <span>{{item.content}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import * as CreateAdmin from '../assets/js/create-process/admin'
  import {AdminProcess} from '../assets/js/config/create-process-config'
  
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
        console.log(JSON.stringify(this.baseOpt))
        CreateAdmin.CreatePackage(this.baseOpt).then(() => {
          this.logs.package.status = 2
        }).catch(() => {
          this.logs.package.status = 3
        })
      }
    }
  }
</script>

<style scoped>

</style>
