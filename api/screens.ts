import { useMyFetch } from '~/composables/useMyFetch'

export const getScreensInProject = (id: string) => {
  return useMyFetch(`user/project/${id}/screens`, {
    refetch: true,
  })
}

export const getPreviewScreens = (id: string) => {
  return useMyFetch(`user/project/${id}/preview`)
}
