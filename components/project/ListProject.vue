<template>
  <div
    v-if="data.length"
    class="mt-8 grid grid-cols-4 gap-5"
  >
    <ProjectOverlay
      v-for="index in 6"
      :key="`${index}-project-overlay`"
    />
  </div>

  <NoProjects v-else />
</template>

<script lang="ts" setup>
import ProjectOverlay from '~/components/common/ScreenOverlay.vue'
import NoProjects from '~/components/common/NoProjects.vue'
import Pagination from '~/components/common/Pagination.vue'
import type { IPagination } from '~/types'

const data = ref([1])

const meta: IPagination = {
  current_page: 1,
  from: 1,
  last_page: 2,
  per_page: 1,
  to: 1,
  total: 10,
}

onMounted(() => {
})
</script>
