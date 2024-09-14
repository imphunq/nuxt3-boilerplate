<template>
  <div>
    <button
      id="dropdownFolderProjectButton"
      ref="dropdownFolderProjectButtonRef"
      data-dropdown-toggle="dropdown-folder-project"
      type="button"
      class="flex items-center py-1.5 px-2 md:px-4 text-xs md:text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
    >
      <svg
        id="user"
        class="mr-2"
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 16 16"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      ><path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14V3.5zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5V6zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z" /></svg>
      <span class="flex items-center flex-1 mr-5">
        <template v-if="currentValue">
          <span class="mr-1">Folder:</span>
          <span>{{ currentLabel }}</span>
        </template>
        <template v-else>
          <span class="mr-1">Select folder</span>
        </template>
      </span>
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      ><path
        fill="none"
        d="M0 0h24v24H0V0z"
      /><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" /></svg>
    </button>

    <!-- Dropdown menu -->
    <div
      id="dropdown-folder-project"
      class="z-20 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
    >
      <ul
        class="py-2 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownDefaultButton"
      >
        <li class="">
          <div
            v-for="(item, index) in items"
            :key="`${index}-${item.value}`"
            class="cursor-pointer hover:text-blue-400 block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            @click="selectItem(item)"
          >
            {{ item.label }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import _find from 'lodash/find'
import _get from 'lodash/get'
import type { ILabelValue, IFolder } from '~/types'
import { getFolders } from '~/api/folder'

const router = useRouter()

const folders = ref<IFolder[]>([])

const { data } = await useAsyncData('folders', async () => {
  return await getFolders()
})

folders.value = _get(data.value, 'data.data', [])

const items = computed<ILabelValue[]>(() => {
  return folders.value.map((folder) => {
    return {
      label: folder.folder_name,
      value: folder.id,
    }
  })
})

const currentValue = ref<string>('')
const dropdownFolderProjectButtonRef = ref<HTMLElement | null>(null)

const currentLabel = computed(() => {
  const item = _find(items.value, { value: currentValue.value })

  return item?.label
})

const selectItem = (item: ILabelValue) => {
  currentValue.value = item.value as string

  dropdownFolderProjectButtonRef.value?.click()

  // router.push({ query: { folder_id: item.value } })
  navigateTo(`/folders/${item.value}`)
}
</script>

<style lang="scss" scoped></style>
