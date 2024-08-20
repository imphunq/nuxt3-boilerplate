<template>
  <div v-if="data.last_page > 1" class="flex justify-end">
    <div class="flex justify-center border border-solid border-gray-200 px-6 py-3 rounded-full">
      <el-pagination
        hide-on-single-page
        background
        layout="prev, pager, next"
        :page-size="data.per_page"
        :current-page="data.current_page"
        :pager-count="5"
        :total="data.total"
        @current-change="go"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
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

<style lang="scss">
.el-pagination {
  ul li {
    border-radius: 50%;
    padding: 4px;
  }

  ul li.is-active {
    outline: 1px solid #409eff;
    outline-offset: 2px;
  }

  .btn-prev, .btn-next {
    border-radius: 50%;
  }
}
</style>
