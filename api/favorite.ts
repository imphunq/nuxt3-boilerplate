import { useMyFetch } from '~/composables/useMyFetch'

export const addProjectToFavorite = (data: { project_id: number }) => {
  return useMyFetch(`user/addfavorite`, {
    method: 'POST',
    body: JSON.stringify(data),
  })
}
