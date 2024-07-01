import { defineStore } from "pinia"
import type { IBreadcrumb } from "~/types"

interface State {
  breadcrumbs: IBreadcrumb[]
}

export const useGlobalStore = defineStore('global-store', {
  state: (): State => {
    return {
      breadcrumbs: []
    }
  },

  actions: {
    setBreadcrumbs(breadcrumbs: IBreadcrumb[]): void {
      this.breadcrumbs = breadcrumbs
    }
  }
})

