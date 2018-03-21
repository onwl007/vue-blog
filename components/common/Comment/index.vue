<template>
  <div class="comment-pane">
    <CommentList
      :sort="commentSort"
      :list="commentList"
      :pagination="commentPagination"
      :total="articleDetail && articleDetail.meta.comments || 0"
      :loading="commentListFetching"
      @on-sort="handleSort"
      @on-loadmore="handleLoadmore"
      @on-reply="handleReply">
    </CommentList>
    <CommentInputBox
      :loading="commentPublishing"
      @on-publish="handlePublish">
    </CommentInputBox>
  </div>
</template>

<script>
  import {mapGetters, mapMutations, mapActions} from 'vuex'
  import CommentInputBox from './InputBox'
  import CommentList from './List'

  export default {
    name: "Comment",
    components: {
      CommentInputBox,
      CommentList
    },
    computed: {
      ...mapGetters({
        commentSort: 'comment/sort',
        commentList: 'comment/list',
        commentPagination: 'comment/pagination',
        commentListFetching: 'comment/listFetching',
        commentPublishing: 'comment/publishing',
        articleDetail: 'detail'
      })
    },
    methods: {
      ...mapMutations({
        changeSort: 'comment/CHANGE_SORT',
        clearList: 'comment/CLEAR_LIST'
      }),
      ...mapActions({
        fetchingCommentList: 'comment/fetchList'
      }),
      handleSort({by, order}, params = {}) {
        this.changeSort({by, order})
        params = Object.assign({
          page: 1,
          type: 1
        }, params)
        if (this.articleDetail) {
          params.type = 0
          params.article = this.articleDetail._id
        }
        if (params.page === 1) {
          this.clearList()
        }
        this.fetchingCommentList(params)
      },
      handleLoadmore(page) {
        this.handleSort(this.commentSort, {page})
      },
      handleReply() {
        this.$emit('on-publish')
      },
      handlePublish(comment) {
        this.$emit('on-publish', comment)
        this.handleSort({
          by: 'createAt',
          order: -1
        }, {
          page: 1
        })
      }
    }
  }
</script>

<style lang="stylus">
  @import "index.styl"
</style>
