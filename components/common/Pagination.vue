<template>
  <nav aria-label="Page navigation example">
    <ul class="inline-flex -space-x-px text-sm">
      <li>
        <a href="javascript:void(0)" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
      </li>
      <li>
        <a href="javascript:void(0)" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
      </li>
      <li>
        <a href="javascript:void(0)" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { UseOffsetPagination } from '@vueuse/components'
import _omit from 'lodash/omit'
import _assign from 'lodash/assign'
import type { IPagination } from '~/types'

interface PaginationProps {
  data: IPagination
  pageParam?: string
}

const props = withDefaults(defineProps<PaginationProps>(), {
  pageParam: 'page',
})

const router = useRouter()
const route = useRoute()

const go = (page: number) => {
  router.push(to(page))
}

const to = (page: number) => {
  const path = route.path

  const otherParams = _omit(route.query, [props.pageParam])
  const query = page !== 1
    ? _assign({}, otherParams, { [props.pageParam]: page })
    : otherParams

  return { path, query }
}
</script>

<style lang="scss" scoped></style>
