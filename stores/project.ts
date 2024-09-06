import { defineStore } from "pinia"
import { OPTION_VIEW } from '~/constants/common'
import { getProjects, showProject } from '~/api/projects'
import type { IProject, IPagination } from "~/types"
import { DEFAULT_META } from '~/constants/common'

interface State {
  optionView: string
  optionViewStarred: string
  optionViewShared: string
  optionViewOnGoing: string
  optionViewRecentlyAdded: string
  projects: IProject[]
  meta: IPagination
  project: IProject | null
}

export const useProjectStore = defineStore('project-store', {
  state: (): State => {
    return {
      optionView: OPTION_VIEW.GRID,
      optionViewStarred: OPTION_VIEW.GRID,
      optionViewShared: OPTION_VIEW.GRID,
      optionViewOnGoing: OPTION_VIEW.GRID,
      optionViewRecentlyAdded: OPTION_VIEW.GRID,
      projects: [],
      meta: DEFAULT_META,
      project: null
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
    },
    getProjects(): IProject[] {
      return this.projects
    },
    getMeta(): IPagination {
      return this.meta
    },
    getProject(): IProject | null {
      return this.project
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
    },

    async fetchProjects (page: string, query: any = {}): Promise<void> {
      const key = `projects-${page}-${JSON.stringify(query)}`

      const response = await usePaginationCache(
        key, () => getProjects({ page, ...query })
      )
      const { data } = response

      this.projects = data.value.data
      Object.assign(this.meta, {
        current_page: data.value.current_page,
        total: data.value.projects_count,
        per_page: data.value.limit,
        last_page: data.value.total_page,
      })
    },

    async fetchProject (projectId: string): Promise<void> {
      const key = `show-project-${projectId}`

      const response = await usePaginationCache(
        key, () => showProject(projectId)
      )

      const { data } = response

      this.project = data.value
    }
  }
})
