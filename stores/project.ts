import { defineStore } from "pinia"
import { OPTION_VIEW } from '~/constants/common'

interface State {
  optionView: string
  optionViewStarred: string
  optionViewShared: string
  optionViewOnGoing: string
  optionViewRecentlyAdded: string
}

export const useProjectStore = defineStore('project-store', {
  state: (): State => {
    return {
      optionView: OPTION_VIEW.GRID,
      optionViewStarred: OPTION_VIEW.GRID,
      optionViewShared: OPTION_VIEW.GRID,
      optionViewOnGoing: OPTION_VIEW.GRID,
      optionViewRecentlyAdded: OPTION_VIEW.GRID
    }
  },

  getters: {
    getOptionView(): string {
      return this.optionView
    },
    getStarredOptionView(): string {
      return this.optionViewStarred
    },
    getSharedOptionView(): string {
      return this.optionViewShared
    },
    getOnGoingOptionView(): string {
      return this.optionViewOnGoing
    },
    getRecentlyAddedOptionView(): string {
      return this.optionViewRecentlyAdded
    }
  },

  actions: {
    setOptionView(option: string): void {
      this.optionView = option
    },

    setStarredOptionView(option: string): void {
      this.optionViewStarred = option
    },

    setSharedOptionView(option: string): void {
      this.optionViewShared = option
    },

    setOnGoingOptionView(option: string): void {
      this.optionViewOnGoing = option
    },

    setRecentlyAddedOptionView(option: string): void {
      this.optionViewRecentlyAdded = option
    }
  }
})
