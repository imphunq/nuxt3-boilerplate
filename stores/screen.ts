import { defineStore } from "pinia"
import { OPTION_VIEW } from '~/constants/common'
import type { IProject, IScreen } from "~/types"
import { getPreviewScreens } from '~/api/screens'
import _get from 'lodash/get'

interface State {
  optionView: string
  previewScreens: IScreen[]
  currentProject: IProject | undefined
}

export const useScreenStore = defineStore('screen-store', {
  state: (): State => {
    return {
      optionView: OPTION_VIEW.GRID,
      previewScreens: [],
      currentProject: undefined
    }
  },

  getters: {
    getOptionView(): string {
      return this.optionView
    },
    getPreviewScreens(): IScreen[] {
      return this.previewScreens
    },
    getCurrentProject(): IProject | undefined {
      return this.currentProject
    }
  },

  actions: {
    setOptionView(option: string): void {
      this.optionView = option
    },

    async fetchPreviewScreens(id: string) {
      const { data } = await getPreviewScreens(id)

      this.currentProject = data.value
      this.previewScreens = _get(data.value, 'screens', [])
    },
  }
})
