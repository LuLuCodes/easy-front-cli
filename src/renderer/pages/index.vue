<template>
  <div class="home-app">
    <Row class="home-row" type="flex" justify="center" align="middle">
      <i-col span="24">
        <div class="home-logo"></div>
        <!--<div class="home-name"></div>-->
        <div class="home-desc">Easy Front 高效、卓越的可视化前端解决方案</div>
        <Row class="home-menu" :gutter="32">
          <i-col span="9" :offset="3">
            <i-button type="ghost" long icon="ios-plus-empty" @click="handleCreateApp">新建工程</i-button>
          </i-col>
          <i-col span="9">
            <i-button type="ghost" long icon="ios-keypad" @click="handleOpenDoc">离线文档</i-button>
          </i-col>
        </Row>
      </i-col>
    </Row>
    <div class="home-version">
      当前 Easy Front 版本：<a href="javascript:void(0)">0.0.1-beta</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    components: {},
    data () {
      return {}
    },
    props: {},
    computed: {},
    created () {
    },
    filters: {},
    methods: {
      handleCreateApp () {
        this.$router.push({path: '/create-base'})
      },
      handleOpenDoc () {}
    }
  }
</script>

<style scoped>

</style>
