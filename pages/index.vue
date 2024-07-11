<template>
  <div>
    Hello world

    <SortByDropdown type="overview" />
    <GroupByDropdown type="project" />
    <OptionView />
  </div>
</template>

<script lang="ts" setup>
import SortByDropdown from '~/components/common/SortByDropdown.vue'
import GroupByDropdown from '~/components/common/GroupByDropdown.vue'
import OptionView from '~/components/common/OptionView.vue'

const globalStore = useGlobalStore()

onMounted(() => {
  globalStore.setBreadcrumbs([
    { name: 'Overview', href: '/' },
  ])
})
</script>
