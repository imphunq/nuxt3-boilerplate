import { defineStore } from "pinia"
import { OPTION_VIEW } from '~/constants/common'

interface State {
  optionView: string
  optionViewStarred: string
}

export const useProjectStore = defineStore('project-store', {
  state: (): State => {
    return {
      optionView: OPTION_VIEW.GRID,
      optionViewStarred: OPTION_VIEW.GRID
    }
  },

  getters: {
    getOptionView(): string {
      return this.optionView
    },
    getStarredOptionView(): string {
      return this.optionViewStarred
    }
  },

  actions: {
    setOptionView(option: string): void {
      this.optionView = option
    },

    setStarredOptionView(option: string): void {
      this.optionViewStarred = option
    }
  }
})
