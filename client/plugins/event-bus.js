/**
 * @desc Event Bus
 */

'use strict'

import Vue from 'vue'
import { musicPlayerMixin } from '@/mixins'

export default () => {
  Vue.prototype.$eventBus = new Vue({
    mixins: [musicPlayerMixin]
  })
}
