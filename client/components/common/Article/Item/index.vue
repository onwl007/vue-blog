<template>
  <article class="article-item" :class="{ 'no-desc': !article.description }" :title="article.title">
    <nuxt-link class="article-link"
               :to="`/article/${article.id}`">
      <h2 class="title">{{ article.title }}</h2>
      <div class="summary" v-if="!mini">
        <div class="thumb" v-if="article.thumb">
          <img :src="article.thumb" alt="" v-if="thumb">
          <div class="placeholder" v-else>
            <i class="icon icon-logo"></i>
          </div>
        </div>
        <p class="description">{{ article.description }}</p>
      </div>
    </nuxt-link>
    <div class="status">
      <div class="meta">
        <div class="meta-item category">
          <i class="icon" v-if="article.category" :class="[`icon-${getExtendsItemByKey('icon', article.category.extends) || 'tag'}`]"></i>
          {{ article.category ? article.category.name : '暂未分类' }}
        </div>
        <div class="meta-item comments">
          {{ article.meta.comments }} 条评论
        </div>
        <div class="meta-item ups">
          {{ article.meta.ups }} 人喜欢
        </div>
        <div class="meta-item pvs">
          {{ article.meta.pvs }} 次阅读
        </div>
      </div>
      <time class="time" :datatitme="article.createAt">
        <i class="icon icon-time"></i>
        {{ article.createAt | fmtDate('yyyy-MM-dd') }}
      </time>
    </div>
  </article>
</template>

<script>
  export default {
    name: "ArticleItem",
    props: {
      article: {
        type: Object,
        default() {
          return {}
        }
      },
      mini: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        thumb: ''
      }
    },
    mounted() {
      this.loadThumb()
    },
    methods: {
      loadThumb() {
        if (!this.article.thumb) {
          return
        }
        const thumb = this.article.thumb
        return this.$loadImg(thumb, {
          success: (img) => {
            this.thumb = thumb
          }
        })
      }
    }
  }
</script>

<style lang="stylus">
  @import "index.styl"
</style>
