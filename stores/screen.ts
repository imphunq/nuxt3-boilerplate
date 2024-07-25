import { defineStore } from "pinia"
import { OPTION_VIEW } from '~/constants/common'

interface State {
  optionView: string
}

export const useScreenStore = defineStore('screen-store', {
  state: (): State => {
    return {
      optionView: OPTION_VIEW.GRID,
    }
  },

  getters: {
    getOptionView(): string {
      return this.optionView
    },
  },

  actions: {
    setOptionView(option: string): void {
      this.optionView = option
    },
  }
})
