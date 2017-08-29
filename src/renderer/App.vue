<template>
  <div>
    <div class="title">{{title}}</div>
    <div id="app" v-cloak>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'easy-front',
    data () {
      return {}
    },
    computed: {
      title () {
        return this.$route.meta.title
      }
    }
  }
</script>

<style>
  /* CSS */
</style>
