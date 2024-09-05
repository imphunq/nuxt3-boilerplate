import { defineStore } from "pinia"
import { getListShares } from '~/api/share'
import type { IPagination, IListShares } from "~/types"
import { DEFAULT_META } from '~/constants/common'

interface State {
  shares: IListShares[]
  meta: IPagination
}

export const useShareStore = defineStore('share-store', {
  state: (): State => {
    return {
      meta: DEFAULT_META,
      shares: []
    }
  },

  getters: {
    getMeta(): IPagination {
      return this.meta
    },
    getShares(): IListShares[] {
      return this.shares
    }
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
  }
})
