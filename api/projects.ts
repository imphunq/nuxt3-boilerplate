import { useFetch } from '@vueuse/core'
import { useMyFetch } from '~/composables/useMyFetch'
import type { IProjectCreate, IRenameProject, IMoveProjectToFolder } from '~/types'

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
      ...params,
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
  const formData = new FormData()
  formData.append('file', file)

  return useFetch(url, {
    method: 'POST',
    body: formData,
  }).json()
}

export const showProject = (projectId: string) => {
  return useMyFetch(`user/project/${projectId}`)
}

export const deleteProject = (projectId: number) => {
  return useMyFetch(`user/project/${projectId}/delete`, {
    method: 'DELETE',
  })
}

export const getRecentUpdateProjects = (params: any = {}) => {
  return useMyFetch('user/projects/recently/updated', {
    query: {
      ...params,
    },
  })
}

export const updateProject = (projectId:number, data: IRenameProject | IMoveProjectToFolder) => {
  return useMyFetch(`user/project/${projectId}/update`, {
    method: 'POST',
    body: JSON.stringify(data),
  })
}
