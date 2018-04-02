/**
 * @desc 获取数据extends中的指定字段
 */

'use strict'

import { isType } from '@/utils'

export default {
  methods: {
    getExtendsItemByKey (key = '', extend = []) {
      if (!key || !isType(key, 'String') || !isType(extend, 'Array') || !extend.length) {
        return null
      }
      const item = extend.find(item => item.key === key)
      return item ? item.value : null
    }
  }
}
