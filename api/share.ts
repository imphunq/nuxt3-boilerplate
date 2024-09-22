import { useMyFetch } from '~/composables/useMyFetch'

export const shareScreen = (projectId: number, data: any) => {
  return useMyFetch(`user/project/${projectId}/screen/sharekey`, {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export const viewShareKeyPage = (shareKey: string) => {
  return useMyFetch(`share/page/${shareKey}`)
}

export const shareProject = (projectId: number, data: any) => {
  return useMyFetch(`user/project/${projectId}/sharekey`, {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export const viewShareKeyProject = (shareKey: string) => {
  return useMyFetch(`share/project/${shareKey}`)
}

export const getListShares = (params: any = {}) => {
  return useMyFetch('user/listshares', {
    query: {
      ...params,
    },
  })
}

export const listSharesInProject = (projectId: string, params: any = {}) => {
  return useMyFetch(`user/project/${projectId}/listshares`, {
    query: {
      ...params,
    },
  })
}
