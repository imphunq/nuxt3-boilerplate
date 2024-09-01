import { useMyFetch } from '~/composables/useMyFetch'
import type { ITeamCreate } from '~/types'

export const getTeams = () => {
  return useMyFetch('user/teams')
}

export const createTeam = (data: ITeamCreate) => {
  return useMyFetch('user/team', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}
