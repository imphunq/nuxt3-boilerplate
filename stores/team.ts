import { defineStore } from "pinia"
import { getTeams } from '~/api/team'
import type { IListTeam } from '~/types'
import _get from 'lodash/get'

interface State {
  teams: IListTeam[]
}

export const useTeamStore = defineStore('team-store', {
  state: (): State => {
    return {
      teams: [],
    }
  },

  getters: {
    getTeams(): IListTeam[] {
      return this.teams
    },
  },

  actions: {
    async fetchTeams() {
      const { data } = await getTeams()

      this.teams = _get(data, 'value.teams', [])

      // add Personal to first element in array
      this.teams.unshift({
        id: 0,
        name: 'Personal',
      })
    },
  }
})
