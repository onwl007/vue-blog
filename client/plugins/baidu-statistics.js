/**
 * @desc 百度统计
 */

'use strict'

export default ({ app }) => {
  if (process.env.NODE_ENV === 'production' && process.client) {
    const hm = document.createElement('script')
    hm.src = 'https://hm.baidu.com/hm.js?cb9683e3a9b2dbea389ab751f46873fc'
    const s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(hm, s)

    window.onNuxtReady(app => {
      app.$nuxt.$on('routeChanged', (to, from) => {
        if (window._hmt) {
          window._hmt.push(['_trackPageview', to.fullPath])
        }
      })
    })
  }
}
