import { useMyFetch } from '~/composables/useMyFetch'
import type { ICreateFolder } from '~/types'

export const createFolder = (data: ICreateFolder) => {
  return useMyFetch(`user/create/folder`, {
    method: 'POST',
    body: JSON.stringify(data),
  })
}
