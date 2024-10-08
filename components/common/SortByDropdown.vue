<template>
  <div>
    <button
      id="dropdownSortByButton"
      data-dropdown-toggle="dropdown-sort-by"
      type="button"
      class="flex items-center py-1.5 px-2 md:px-4 text-xs md:text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
    >
      <svg
        id="filterr"
        class="mr-3"
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
      /><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" /></svg>
      <span class="flex-1 mr-5">
        {{ selectedItem }}
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
      id="dropdown-sort-by"
      class="z-20 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
    >
      <ul
        class="py-2 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownDefaultButton"
      >
        <li class="">
          <div
            v-for="(item, index) in sortByItems"
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
import type { ILabelValue } from '~/types'
import _find from 'lodash/find'

type Key = 'overview' | 'project' | 'order'

interface Props {
  type?: Key
  withoutPushQueryToRoute?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  withoutPushQueryToRoute: false,
})
const emit = defineEmits(['change'])

const router = useRouter()
const route = useRoute()

const selectedItem = computed(() => {
  const item = _find(sortByItems.value, { value: route.query.sort_by }) as ILabelValue

  return item?.label || 'Sort by'
})

const sortByItems = computed<ILabelValue[]>(() => {
  switch (props.type) {
    case 'overview':
      return overview.value
    case 'project':
      return allProjects.value
      break
    case 'order':
      return orders.value
    default:
      return overview.value
  }
})

const overview = computed<ILabelValue[]>(() => {
  return [
    {
      value: 'project_type',
      label: 'Project Type',
    },
    {
      value: 'project_status',
      label: 'Status',
    },
    {
      value: 'project_owner',
      label: 'Project Owner',
    },
    {
      value: 'project_created_at',
      label: 'Date Created',
    },
  ]
})

const allProjects = computed<ILabelValue[]>(() => {
  return [
    {
      value: 'name_az',
      label: 'Name(A-Z)',
    },
    {
      value: 'last_update',
      label: 'Last Update',
    },
    {
      value: 'date_created',
      label: 'Date Created',
    },
    {
      value: 'name_za',
      label: 'Name(Z-A)',
    },
  ]
})

const orders = computed<ILabelValue[]>(() => {
  return [
    {
      value: 'asc',
      label: 'Ascending',
    },
    {
      value: 'desc',
      label: 'Descending',
    },
  ]
})

const selectItem = (item: ILabelValue) => {
  if (!props.withoutPushQueryToRoute) {
    router.push({ query: { sort_by: item.value } })
  }

  emit('change', item.value)
}
</script>

<style lang="scss" scoped></style>
