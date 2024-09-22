import { defineStore } from "pinia"
import { getListShares, listSharesInProject } from '~/api/share'
import type { IPagination, IListShares } from "~/types"
import { DEFAULT_META } from '~/constants/common'

interface State {
  shares: IListShares[]
  meta: IPagination
  projectShares: IListShares[]
  projectSharesMeta: IPagination
}

export const useShareStore = defineStore('share-store', {
  state: (): State => {
    return {
      meta: DEFAULT_META,
      shares: [],
      projectShares: [],
      projectSharesMeta: DEFAULT_META,
    }
  },

  getters: {
    getMeta(): IPagination {
      return this.meta
    },
    getShares(): IListShares[] {
      return this.shares
    },
    getProjectShares(): IListShares[] {
      return this.projectShares
    },
    getProjectSharesMeta(): IPagination {
      return this.projectSharesMeta
    },
  },

  actions: {
    async fetchShares (page: string, query: any = {}): Promise<void> {
      const key = `shares-${page}-${JSON.stringify(query)}`

      const response = await usePaginationCache(
        key, () => getListShares({ page, ...query })
      )
      const { data } = response

      this.shares = data.value.data
      Object.assign(this.meta, {
        current_page: data.value.current_page,
        total: data.value.projects_count,
        per_page: data.value.limit,
        last_page: data.value.total_page,
      })
    },

    async fetchProjectShares (projectId: string, page: string, query: any = {}): Promise<void> {
      const key = `project-shares-${projectId}-${page}-${JSON.stringify(query)}`

      const response = await usePaginationCache(
        key, () => listSharesInProject(projectId, { page, ...query })
      )
      const { data } = response

      this.projectShares = data.value.data

      Object.assign(this.projectSharesMeta, {
        current_page: data.value.current_page,
        total: data.value.projects_count,
        per_page: data.value.limit,
        last_page: data.value.total_page,
      })
    },
  }
})
