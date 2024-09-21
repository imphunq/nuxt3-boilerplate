import { useMyFetch } from '~/composables/useMyFetch'
import type { ICommentCreate } from '~/types'

export const createComment = (projectId: string, data: ICommentCreate) => {
  return useMyFetch(`user/project/${projectId}/comment`, {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export const deleteComment = (projectId: string, commentId: number) => {
  return useMyFetch(`user/project/${projectId}/comment/${commentId}`, {
    method: 'DELETE',
  })
}

export const getCommentsInProject = (projectId: string) => {
  return useMyFetch(`user/project/${projectId}/comments`)
}
