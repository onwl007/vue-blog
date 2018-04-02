/**
 * @desc Vue filters
 */

'use strict'

import Vue from 'vue'
import { fmtDate, fmtDateFromNow } from '@/utils'

/**
 * filter 获取根据规定格式获取time到当前时刻的时间
 * @param  {[type]} time [description]
 * @return {[type]}      [description]
 */
const getDateFromNow = (time = new Date()) => fmtDateFromNow(new Date() - new Date(time))

const countFilter = (num = 0, limit = 999) => {
  if (num > limit) {
    return limit + '+'
  }
  return num + ''
}

const filters = {
  fmtDate,
  getDateFromNow,
  countFilter
}

Object.keys(filters).forEach(v => Vue.filter(v, filters[v]))
