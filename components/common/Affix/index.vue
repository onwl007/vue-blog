<template>
<div class="affix" :class="{'is-fixed':fixed}" :style="style">
  <slot></slot>
</div>
</template>

<script>
    export default {
        name: "Affix"
    }
</script>

<style lang="stylus">
  @import "index.styl"
</style>
