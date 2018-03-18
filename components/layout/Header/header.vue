<template>
  <header class="app-header">
    <div class="container">
      <nuxt-link class="nav-logo" to="/">
        <img src="logo" alt="">
      </nuxt-link>
      <div class="nav-menu">
        <nuxt-link v-for="menu in menuItem"
                   ref="menu"
                   class="menu-item"
                   :key="menu.key"
                   :to="{name:menu.key}"
                   exact>
          {{menu.title}}
        </nuxt-link>
        <i class="corner" :style="cornerStyle"></i>
      </div>
      <div class="nav-action">
        <form class="action-item search" :class="{ open:searchOpened}" role="search"
              @submit.stop.prevent="handleSearch">
          <input name="search" class="search-input"
                 ref="searchInput"
                 type="search"
                 autocomplete="off"
                 :autofocus="false"
                 placeholder="搜索...测试是是是"
                 maxlength="200"
                 v-model.trim="keyword"
                 v-clickoutside="handleCloseSearch"
                 @keyup.enter="handleSearch">
          <i class="icon icon-search" @click="handleToggleSearch"></i>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
  import logo from '@/static/images/logo.svg'
  import config from '@@/app.config'

  export default {
    name: "header",
    data() {
      return {
        logo,
        menuItem: config.constant.menus,
        keyword: '',
        cornerStyle: null,
        searchOpened: false
      }
    },
    computed: {
      menuIndex() {
        return this.menuItem.findIndex(menu => menu.key === this.$route.name)
      },
    },
    watch:{
      menuIndex (){
        this.setCornerStyle()
      }
    },
    mounted(){
      this.setCornerStyle()
    },
    methods: {
      setCornerStyle() {
        const el = this.$refs.menu && this.$refs.menu[this.menuIndex] ? this.$refs.menu[this.menuIndex].$el : null
        if (!el) {
          this.cornerStyle = null
        } else {
          this.cornerStyle = {
            left: el.offsetLeft + 'px',
            width: el.clientWidth + 'px'
          }
        }
      },
      handleToggleSearch() {
        this.searchOpened = !this.searchOpened
        this.$nextTick(() => {
          if (this.searchOpened) {
            this.$refs.searchInput.focus()
          } else {
            this.$refs.searchInput.blur()
          }
        })
      },
      handleCloseSearch() {
        if (this.searchOpened) {
          this.handleToggleSearch()
        }
      },
      handleSearch() {
        if (!this.keyword) {
          return
        }
        this.$router.push(`/search/${this.keyword}`)
        this.handleToggleSearch()
        this.keyword = ''
      },
    }
  }
</script>

<style lang="stylus">
  @import "head.styl"
</style>
