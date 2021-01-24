import request from '@/utils/request'
import CONSTANTS from './_CONSTANTS'

export function axiosHomeCard(parameter, index, config = {}) {
  return request({
    baseURL: CONSTANTS.HOST,
    url: '/epd/home/' + index,
    method: 'post',
    data: parameter,
    ...config
  })
}

export function axiosHomeCostBar(parameter, config = {}) {
  return request({
    baseURL: CONSTANTS.HOST,
    url: '/epd/home/allCost',
    method: 'post',
    data: parameter,
    ...config
  })
}

export function axiosHomeCostRank(parameter, config = {}) {
  return request({
    baseURL: CONSTANTS.HOST,
    url: '/epd/home/ranking',
    method: 'post',
    data: parameter,
    ...config
  })
}