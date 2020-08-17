import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/components/Config/axios-auth'
import router from './router/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userToken: null,
    userData: null

  },
  mutations: {
    authUser (state, data) {
      state.userToken = data.jwt
      state.userData = data.user
    },
    logoutUser (state) {
      state.userToken = null
      state.userData = null
      localStorage.removeItem('userToken')
      localStorage.removeItem('userExpiration')
      router.replace('/login')
    }
  },
  actions: {
    signUp ({commit, dispatch}, data) {
      axios.post('auth/local/register', {
        username: data.username,
        email: data.email,
        password: data.password
      })
        .then(response => {
          commit('authUser', response.data)
          dispatch('setLocalStorage', {token: response.data.jwt})
          dispatch('setLogoutTimer', 3600)
          router.replace('/products')
        })
        .catch(error => {
          // Handle error.
          console.log('An error occurred:', error.response)
        })
    },
    login ({commit, dispatch}, data) {
      axios.post('auth/local', {
        identifier: data.email,
        password: data.password
      })
        .then(response => {
          commit('authUser', response.data)
          dispatch('setLocalStorage', {token: response.data.jwt})
          dispatch('setLogoutTimer', 36)
          router.replace('/products')
        })
        .catch(error => {
          // Handle error.
          console.log('An error occurred:', error.response)
        })
    },
    logout ({commit}) {
      commit('logoutUser')
    },
    setLocalStorage ({dispatch}, data) {
      const now = new Date()
      const expirationDate = new Date(now.getTime() + 3600 * 1000)
      localStorage.setItem('userToken', data.token)
      localStorage.setItem('userExpiration', expirationDate)
    },
    autoLogin ({commit}) {
      const token = localStorage.getItem('userToken')
      if (!token) {
        return
      }
      const expireDate = localStorage.getItem('userExpiration')
      const now = new Date()
      if (now >= expireDate) {
        return
      }
      console.log('aaaaa')
      commit('authUser', {
        jwt: token
      })
    },
    setLogoutTimer ({commit}, expirationTime) {
      setTimeout(() => {
        commit('logoutUser')
      }, expirationTime * 1000)
    }

  },
  getters: {
    userData (state) {
      return state.userData
    },
    isAuthenticated (state) {
      return state.userToken !== null
    }
  }
})
