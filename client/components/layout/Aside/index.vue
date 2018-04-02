<template>
  <div class="aside">
    <Hots></Hots>
    <Affix offsetTop="80">
      <Tags></Tags>
    </Affix>
  </div>
</template>

<script>
  import Hots from './widgets/Hots'
  import Tags from './widgets/Tags'
  import {Affix} from '@/components/common'

  export default {
    name: "AppAside",
    components: {
      Affix,
      Hots,
      Tags
    }
  }
</script>

<style lang="stylus">
  @import "index.styl"
</style>
