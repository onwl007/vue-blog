/**
 * @desc Vue-swiper
 */

'use strict'

import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper/dist/ssr'

export default () => {
  if (process.client) {
    Vue.use(VueAwesomeSwiper)
  }
}
