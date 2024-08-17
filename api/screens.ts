import { useMyFetch } from '~/composables/useMyFetch'

export const getScreensInProject = (id: string) => {
  return useMyFetch(`user/project/${id}/screens`, {
    refetch: true,
  })
}
