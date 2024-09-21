import { useMyFetch } from '~/composables/useMyFetch'

export const getMembers = (projectId: string) => {
  return useMyFetch(`user/project/${projectId}/getmembers`)
}
