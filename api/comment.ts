import { useMyFetch } from '~/composables/useMyFetch'
import type { ICommentCreate } from '~/types'

export const createComment = (projectId: string, data: ICommentCreate) => {
  return useMyFetch(`user/project/${projectId}/comment`, {
    method: 'POST',
    body: JSON.stringify(data),
  })
}
