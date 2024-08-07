import { useMyFetch } from '~/composables/useMyFetch'
import type { IProjectCreate } from '~/types'

export const createProject = (data: IProjectCreate) => {
  return useMyFetch('projects/create', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export const getProjects = () => {
  return useMyFetch('projects')
}
