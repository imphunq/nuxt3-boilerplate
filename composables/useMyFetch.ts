import { createFetch } from "@vueuse/core";

const runtimeConfig = useRuntimeConfig()

export const useMyFetch = createFetch({
  baseUrl: runtimeConfig.public.apiBase,
  options: {
    async beforeFetch({ options }) {
      const token = localStorage.getItem('access_token')

      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${token}`,
      }

      return { options }
    },

    afterFetch({ response }) {
      if (response.status === 401) {
        const authStore = useAuthStore()

        authStore.clearToken()
        authStore.clearDataUser()

        window.location.href = '/login'
      }

      return { response }
    }
  },
  fetchOptions: {
    mode: 'cors',
  },
})
