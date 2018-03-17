<template>
<header class="app-header">
  <div class="container">
    <nuxt-link class="nav-logo" to="/">
      <img src="logo" alt="">
    </nuxt-link>
    <div class="nav-menu">
      <nuxt-link v-for="">

      </nuxt-link>
    </div>
  </div>
</header>
</template>

<script>
  import logo from '@/static/images/logo.svg'
  import config from '@@/app.config'

    export default {
      name: "header",
      data(){
          return {
            logo,
            menuItem:config
          }
      }
    }
</script>

<style scoped>

</style>
