import { defineStore } from "pinia"
import { getFolders } from "~/api/folder"
import type { IFolder } from "~/types"

interface State {
  folders: IFolder[]
}

export const useFolderStore = defineStore('folder-store', {
  state: (): State => {
    return {
      folders: [],
    }
  },

  getters: {
    getFolders(): IFolder[] {
      return this.folders
    },
  },

  actions: {
    async fetchFolders() {
      const { data } = await getFolders()

      this.folders = data.value?.data
    },
  }
})
