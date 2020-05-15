// import {
//   login,
//   logout,
//   getInfo
// } from '@/api/user'
const state = {
  name: ''
}
const mutations = {
  SET_NAME: (state, name) => {
    state.name = name
  },
  SHOW_LOGIN: (state, val) => {
    alert('showlogin')
    // state.name = '23'
  }
}

const actions = {
  showLogin({
    commit,
    state
  }) {
    commit('SHOW_LOGIN', true)
  },
  getInfo({
    commit,
    state
  }) {
    // return new Promise((resolve, reject) => {
    //   getInfo(state.token).then(response => {
    //     const {
    //       data
    //     } = response

    //     if (!data) {
    //       reject('Verification failed, please Login again.')
    //     }

    //     const {
    //       roles,
    //       name,
    //       avatar,
    //       introduction
    //     } = data

    //     // roles must be a non-empty array
    //     if (!roles || roles.length <= 0) {
    //       reject('getInfo: roles must be a non-null array!')
    //     }
    commit('SET_NAME', 'name')
    //     resolve(data)
    //   }).catch(error => {
    //     reject(error)
    //   })
    // })
  },
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
