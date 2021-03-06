import storage from 'store'
import { login, getInfo, logout } from '@/api/login'
import { ACCESS_TOKEN, ACCESS_EMPID, ACCESS_LOGININFO, OUTDATE_TIME } from '@/store/mutation-types'
import { welcome } from '@/utils/util'

const user = {
  state: {
    token: '',
    name: '',
    welcome: '',
    avatar: '',
    roles: [],
    loginInfo: {},
    info: {}
  },

  mutations: {
    SET_DATA: (state, obj) => {
      Object.assign(state, obj)
    },
    SET_LOGININFO: (state, result) => {
      state.loginInfo = result
      storage.set(ACCESS_EMPID, ((result || {}).emp || {}).id, OUTDATE_TIME)
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, { name, welcome }) => {
      state.name = name
      state.welcome = welcome
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_INFO: (state, info) => {
      state.info = info
    },
    extendLogin(state) {
      storage.set(ACCESS_TOKEN, state.token, OUTDATE_TIME)
      storage.set(ACCESS_LOGININFO, state.loginInfo, OUTDATE_TIME)
      storage.set(ACCESS_EMPID, ((state.loginInfo || {}).emp || {}).id, OUTDATE_TIME)
    }
  },

  actions: {
    // 登录
    Login ({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then(response => {
          // const result = response.result
          const result = response
          console.log('登录信息 =====>', result)
          if (result.code > 0) {
            storage.set(ACCESS_TOKEN, result.token, OUTDATE_TIME)
            storage.set(ACCESS_LOGININFO, result, OUTDATE_TIME)
            commit('SET_TOKEN', result.token)
            commit('SET_LOGININFO', result)
            resolve()
          } else {
            reject(result.msg)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo ({ commit }) {
      return new Promise((resolve, reject) => {
        getInfo().then(response => {
          const result = response.result

          if (result.role && result.role.permissions.length > 0) {
            const role = result.role
            role.permissions = result.role.permissions
            role.permissions.map(per => {
              if (per.actionEntitySet != null && per.actionEntitySet.length > 0) {
                const action = per.actionEntitySet.map(action => { return action.action })
                per.actionList = action
              }
            })
            role.permissionList = role.permissions.map(permission => { return permission.permissionId })
            commit('SET_ROLES', result.role)
            commit('SET_INFO', result)
          } else {
            reject(new Error('getInfo: roles must be a non-null array !'))
          }

          commit('SET_NAME', { name: result.name, welcome: welcome() })
          commit('SET_AVATAR', result.avatar)

          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    Logout ({ commit, state }) {
      return new Promise((resolve) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_LOGININFO', '')
          commit('SET_ROLES', [])
          storage.remove(ACCESS_TOKEN)
          storage.remove(ACCESS_LOGININFO)
          storage.remove(ACCESS_EMPID)
          resolve()
        }).catch(() => {
          resolve()
        }).finally(() => {
        })
      })
    }

  }
}

export default user
