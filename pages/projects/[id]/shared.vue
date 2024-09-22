<template>
  <div>
    <div class="flex items-center justify-between mt-4">
      <span class="text-xl text-black">Manage Shared Links</span>

      <div class="flex items-center gap-4">
        <GroupByDropdown type="project" />
        <SortBy />
      </div>
    </div>

    <div class="mt-4">
      <ListShareTable :shares="shares" :meta="meta" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import SortBy from '~/components/common/SortByDropdown.vue'
import GroupByDropdown from '~/components/common/GroupByDropdown.vue'
import ListShareTable from '~/components/project/detail/ListShareTable.vue'

const shareStore = useShareStore()
const route = useRoute()

const id = route.params.id as string

useRefetch(
  () => shareStore.fetchProjectShares(
    id,
    route.query.page as string ?? '1',
    route.query,
  ),
)

const shares = computed(() => {
  return shareStore.getProjectShares
})

const meta = computed(() => {
  return shareStore.getProjectSharesMeta
})
</script>
