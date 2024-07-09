import { set } from "lodash"
import { defineStore } from "pinia"
import type { IBreadcrumb } from "~/types"

interface State {
  breadcrumbs: IBreadcrumb[]
  isCollapse: boolean
}

export const useGlobalStore = defineStore('global-store', {
  state: (): State => {
    return {
      breadcrumbs: [],
      isCollapse: false
    }
  },

  getters: {
    getBreadcrumbs(): IBreadcrumb[] {
      return this.breadcrumbs
    },

    getIsCollapse(): boolean {
      return this.isCollapse
    }
  },

  actions: {
    setBreadcrumbs(breadcrumbs: IBreadcrumb[]): void {
      this.breadcrumbs = breadcrumbs
    },

    setIsCollapse(isCollapse: boolean): void {
      this.isCollapse = isCollapse
    }
  }
})

