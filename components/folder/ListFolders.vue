<template>
  <div
    v-if="folders.length"
    class="mt-8"
  >
    <div v-if="optionView === OPTION_VIEW.GRID" class="grid grid-cols-4 gap-5 mb-5">
      <FolderCard
        v-for="(folder, index) in folders"
        :key="`${index}-folder-card`"
        :folder="folder"
      />
    </div>
<!--
    <div class="w-full flex justify-center mt-8">
      <Pagination :data="props.meta" />
    </div> -->
  </div>
</template>

<script lang="ts" setup>
import FolderCard from '~/components/folder/FolderCard.vue'
import Pagination from '~/components/common/Pagination.vue'
import type { IPagination, IFolder } from '~/types'
import { OPTION_VIEW } from '~/constants/common'
import { PROJECT_TYPE } from '~/constants/project'

interface Props {
  folders: IFolder[],
  // meta: IPagination,
}

const props = defineProps<Props>()

const projectStore = useProjectStore()

const optionView = computed(() => {
  return projectStore.getOptionView
})

onMounted(() => {
})
</script>
