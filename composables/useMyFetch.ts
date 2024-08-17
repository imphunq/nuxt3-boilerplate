import { useFetch, type AfterFetchContext } from '@vueuse/core'

export const useMyFetch = (url: string, customOptions: any = {}) => {
  const config = useRuntimeConfig()
  const authStore = useAuthStore()

  const buildQueryParams = (params: Record<string, any>)  => {
    const queryString = new URLSearchParams(params).toString();
    return queryString ? `?${queryString}` : '';
  }

  const queryParams = buildQueryParams(customOptions.query || {})
  const fullUrl = `${config.public.apiBase}${url}${queryParams}`

  return useFetch(`${fullUrl}`, {
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

    afterFetch(ctx: AfterFetchContext) {
      const { data } = ctx

      if (data.status === 'Token is Invalid' || data.status === 'Token is Expired') {
        authStore.clearToken()
        authStore.clearDataUser()

        window.location.href = '/login'
      }

      return ctx
    },

    // onFetchError(ctx: AfterFetchContext) {
    //   const { response } = ctx

    //   if (response?.status === 401) {
    //     authStore.clearToken()
    //     authStore.clearDataUser()

    //     window.location.href = '/login'
    //   }

    //   if (response?.status === 500) {
    //     ElMessage({
    //       message: 'Something went wrong, please try again',
    //       type: 'error',
    //     })
    //   }

    //   return ctx
    // }
  }).json()
}
