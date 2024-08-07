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
        'Content-Type': 'application/json',
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

      if (response?.status === 500) {
        ElMessage({
          message: 'Something went wrong, please try again',
          type: 'error',
        })
      }

      return ctx
    }
  }).json()
}
