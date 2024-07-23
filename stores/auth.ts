import { defineStore } from 'pinia'
import type { IUser, ILogin, AuthResponse, ILoginUserResponse } from '~/types'
import { useFetch } from '@vueuse/core'
import { useMyFetch } from '~/composables/useMyFetch'

interface State {
  user: IUser | null,
}

export const useAuthStore = defineStore('auth', {
  state: (): State => ({
    user: null,
  }),

  getters: {
    isLoggedIn: (state) => !!state.user,
    getCurrentUser: (state) => state.user,
  },

  actions: {
    async login(params: ILogin): Promise<void> {
      const runtimeConfig = useRuntimeConfig()

      await useFetch(runtimeConfig.public.apiBase + 'login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      }).json().then(({ data, error }) => {
        if (error.value) {
          ElMessage({
            message: 'Something went wrong, please try again',
            type: 'error',
          })
          return
        } else {
          ElMessage({
            message: 'Login success',
            type: 'success',
          })
          this.setToken(data.value.data as AuthResponse)

          window.location.href = '/overview'
        }
      })
    },

    async logout() {
      const runtimeConfig = useRuntimeConfig()

      await useMyFetch('logout', {
        method: 'POST',
      }).then(({ data, error }) => {
        if (error.value) {
          ElMessage({
            message: 'Something went wrong, please try again',
            type: 'error',
          })
          return
        } else {
          ElMessage({
            message: 'Logout success',
            type: 'success',
          })

          this.clearToken()
          this.clearDataUser()

          window.location.href = '/login'
        }
      })
    },

    setUser(user: IUser) {
      this.user = user
    },

    setToken(data: AuthResponse) {
      const { access_token, refresh_token, expires_in } = data

      localStorage.setItem('access_token', access_token)
      localStorage.setItem('refresh_token', refresh_token)
      localStorage.setItem('expires_in', expires_in)
    },

    clearToken() {
      localStorage.removeItem('access_token')
      localStorage.removeItem('refresh_token')
      localStorage.removeItem('expires_in')
    },

    clearDataUser() {
      this.user = null

      localStorage.removeItem('user')
    }
  },
})
