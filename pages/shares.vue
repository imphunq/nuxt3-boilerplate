<template>
  <div>
    <HeaderPage />

    <ListShare :shares="shares" :meta="meta" />
  </div>
</template>

<script lang="ts" setup>
import HeaderPage from '~/components/share/HeaderPage.vue'
import ListShare from '~/components/share/ListShare.vue'

const shareStore = useShareStore()
const route = useRoute()

useRefetch(
  () => shareStore.fetchShares(
    route.query.page as string ?? '1',
    route.query,
  ),
)

const shares = computed(() => {
  return shareStore.getShares
})

const meta = computed(() => {
  return shareStore.getMeta
})
</script>
