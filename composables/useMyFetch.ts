import { useFetch } from '@vueuse/core'

export const useMyFetch = (url: string, customOptions = {}) => {
  const config = useRuntimeConfig()
  const authStore = useAuthStore()

  return useFetch(`${config.public.apiBase}${url}`, {
    ...customOptions,

    beforeFetch({ options }) {
      options = {
        ...options,
        ...customOptions,
      }
      const token = localStorage.getItem('access_token')

      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      }

      return { options }
    },

    onFetchError(ctx) {
      const { response } = ctx

      if (response?.status === 401) {
        authStore.clearToken()
        authStore.clearDataUser()

        window.location.href = '/login'
      }

      return ctx
    }
  }).json()
}
