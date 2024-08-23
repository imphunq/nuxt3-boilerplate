import { useMyFetch } from '~/composables/useMyFetch'
import { useFetch } from '@vueuse/core'
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
      ...params
    },
  })
}

export const requestUploadScreenToProject = (projectId: string, data: any) => {
  return useMyFetch(`user/project/${projectId}/fileuploadrequest`, {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export const uploadScreenToFileServer = (url: string, file: File) => {
  const formData = new FormData();
  formData.append('file', file);

  return useFetch(url, {
    method: 'POST',
    body: formData,
  }).json()
}

export const showProject = (projectId: string) => {
  return useMyFetch(`user/project/${projectId}`)
}
