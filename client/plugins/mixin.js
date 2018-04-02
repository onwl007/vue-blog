/**
 * @desc Vue Global mixins
 */

'use strict'

import Vue from 'vue'
import { mapGetters } from 'vuex'
import { getExtendsItemMixin } from '@/mixins'

const commonMixin = {
  computed: {
    ...mapGetters({
      mobileLayout: 'app/mobileLayout'
    })
  }
}

const mixins = [
  commonMixin,
  // 过滤数据extends的mixin
  getExtendsItemMixin
]

export default () => {
  for (const i in mixins) {
    Vue.mixin(mixins[i])
  }
}
