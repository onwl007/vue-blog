/**
 * @desc vue-router hook
 */

'use strict'

export default ({ app }) => {
  app.router.beforeEach((to, from, next) => {
    // TODO: some handler
    next()
  })
}
