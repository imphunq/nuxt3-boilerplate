<template>
  <vue-awesome-paginate
    :total-items="props.data.total"
    :items-per-page="props.data.per_page"
    :max-pages-shown="5"
    v-model="currentPage"
    @click="go"
  />
</template>

<script setup lang="ts">
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

const pageQuery = route.query.page ? parseInt(route.query.page as string) : 1;

const currentPage = ref<number>(pageQuery)

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

<style>
  .pagination-container {
    display: flex;

    column-gap: 10px;
  }

  .paginate-buttons {
    height: 40px;

    width: 40px;

    border-radius: 20px;

    cursor: pointer;

    background-color: rgb(242, 242, 242);

    border: 1px solid rgb(217, 217, 217);

    color: black;
  }

  .paginate-buttons:hover {
    background-color: #d8d8d8;
  }

  .active-page {
    background-color: #3498db;

    border: 1px solid #3498db;

    color: white;
  }

  .active-page:hover {
    background-color: #2988c8;
  }
</style>
