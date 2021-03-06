import request from '@/utils/request'
import CONSTANTS from './_CONSTANTS'

const api = {
  user: '/user',
  role: '/role',
  service: '/service',
  permission: '/permission',
  permissionNoPager: '/permission/no-pager',
  orgTree: '/org/tree',
  //-- 本项目新增
  exportReport: CONSTANTS.HOST + '/epd/file/exportReport'
}

export default api

export function getUserList (parameter) {
  return request({
    url: api.user,
    method: 'get',
    params: parameter
  })
}

export function getRoleList (parameter) {
  return request({
    url: api.role,
    method: 'get',
    params: parameter
  })
}

export function getServiceList (parameter, config = {}) {
  return request({
    url: api.service,
    method: 'get',
    params: parameter,
    ...config
  })
}

export function getPermissions (parameter) {
  return request({
    url: api.permissionNoPager,
    method: 'get',
    params: parameter
  })
}

export function getOrgTree (parameter) {
  return request({
    url: api.orgTree,
    method: 'get',
    params: parameter
  })
}

// id == 0 add     post
// id != 0 update  put
export function saveService (parameter) {
  return request({
    url: api.service,
    method: parameter.id === 0 ? 'post' : 'put',
    data: parameter
  })
}

export function saveSub (sub) {
  return request({
    url: '/sub',
    method: sub.id === 0 ? 'post' : 'put',
    data: sub
  })
}

export function axiosOperateTab(parameter, config = {}) {
  let params = {}
  Object.keys(parameter).forEach(k => {
    let v = parameter[k]
    params[k] = v === undefined ? '' : v
  })
  return request({
    baseURL: CONSTANTS.HOST,
    url: '',  // 待在config中填充
    method: 'post',
    data: params,
    ...config
  })
}

export function axiosExportTabe(parameter, config = {}) {
  let params = {}
  Object.keys(parameter).forEach(k => {
    let v = parameter[k]
    params[k] = v === undefined ? '' : v
  })
  return request({
    baseURL: CONSTANTS.HOST,
    url: api.exportReport,
    method: 'get',
    params,
    ...config
  })
}