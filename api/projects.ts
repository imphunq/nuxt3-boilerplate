import { useMyFetch } from '~/composables/useMyFetch'
import type { IProjectCreate } from '~/types'

export const createProject = (data: IProjectCreate) => {
  return useMyFetch('user/projects', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export const getProjects = (params: any = {}) => {
  return useMyFetch('user/projects', {
    refetch: true,
    query: {
      page: params?.page,
    },
  })
}
