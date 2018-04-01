<template>
  <Card class="widget-hots">
    <div class="title" slot="header">
      <i class="icon icon-article"></i>
      热门文章
    </div>
    <ul class="hot-list" v-if="hotList.length">
      <li class="hot-item"
          v-for="item in hotList"
          :key="item._id"
          :title="item.title">
        <nuxt-link class="title"
                   :to="`/article/${item._id}`"
                   :title="item.title">{{item.title}}
        </nuxt-link>
      </li>
    </ul>
    <p class="no-data" v-else>暂无热门文章</p>
  </Card>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {Card} from '@/components/common'

  export default {
    name: "Hots",
    comments: {
      Card
    },
    computed: {
      ...mapGetters({
        hotList: 'article/hot'
      })
    }
  }
</script>

<style lang="stylus">
  @import "index.styl"
</style>
