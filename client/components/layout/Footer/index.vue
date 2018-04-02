<template>
  <footer class="app-footer">
    <div class="wrapper">
      <div class="menu-list">
        <nuxt-link v-for="menu in menus"
                   ref="menu"
                   class="menu-item"
                   :key="menu.key"
                   :to="{name:menu.key}"
                   exact>
          {{menu.title}}
        </nuxt-link>
      </div>
      <div class="social-list">
        <a :href="social.url" class="social-item" target="_blank" rel="noopener"
           :class="[`social-${social.icon}`]"
           v-for="social in socials"
           :key="social.icon"
           :title="social.title">
          <i class="icon" :class="[`icon-${social.icon}`]"></i>
        </a>
      </div>
      <div class="copyright">
        <span>版权所有 © 2018 <nuxt-link to="/about">{{blogger.name}}</nuxt-link>. 保留所有权利</span>
        <a href="http://www.onwl007.com" target="_blank" rel="noopener" class="record">
          备案号
        </a>
      </div>
      <div class="power-by">
        Powered by
        <a class="link" target="_blank" rel="noopener" href="https://github.com/nuxt/nuxt.js">nuxt.js</a>、
        Design by
        <a class="link" target="_blank" rel="noopener" :href="'https://github.com/onwl007'">{{blogger.name}}</a>
      </div>
      <div class="logo">
        <nuxt-link to="/">
          <i class="icon icon-logo"></i>
        </nuxt-link>
      </div>
    </div>
  </footer>
</template>

<script>
  import config from '@@/app.config'
  import {mapGetters} from 'vuex'

  export default {
    name: "AppFooter",
    data() {
      return {
        menus: config.constant.menus,
        socials: config.constant.socials
      }
    },
    computed: {
      ...mapGetters({
        blogger: 'user/blogger',
        mobileLayout: 'app/mobileLayout'
      })
    }
  }
</script>

<style lang="stylus">
  @import "index.styl"
</style>
