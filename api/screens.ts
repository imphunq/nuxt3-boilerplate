import { useMyFetch } from '~/composables/useMyFetch'

export const getScreensInProject = (id: string) => {
  return useMyFetch(`user/project/${id}/screens`, {
    refetch: true,
  })
}

export const getPreviewScreens = (id: string) => {
  return useMyFetch(`user/project/${id}/preview`)
}

export const deleteScreen = (projectId: string, screenId: number) => {
  return useMyFetch(`user/project/${projectId}/screen/${screenId}/delete`, {
    method: 'DELETE',
  })
}

export const getScreensSortBy = (projectId: string, sortBy: string) => {
  return useMyFetch(`user/project/${projectId}/screens/${sortBy}`, {
    query: {
      sort_by: sortBy,
    },
  })
}
