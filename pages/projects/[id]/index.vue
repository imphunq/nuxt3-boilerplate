<template>
  <div v-if="screens.length">
    <div class="project-screen-header block xl:flex items-center xl:justify-between mt-4">
      <div class="text-center">
        <span class="text-sm text-black font-semibold">
          {{ project.project_title }}
        </span>
      </div>

      <div class="flex flex-wrap justify-center items-center gap-5">
        <RangeSlider class="mt-2" @range="changeRange" />

        <FilterProject class="mt-2" />

        <GroupByDropdown type="project" />

        <SortByDropdown
          without-push-query-to-route
          type="order"
          @change="changeSortBy"
        />

        <OptionView
          page="screen"
          type="screen"
          :current-view="currentView"
        />
      </div>
    </div>

    <div ref="dropZoneRef">
      <div v-show="!isOverDropZone">
        <div
          v-if="currentView === OPTION_VIEW.GRID"
          :class="gridClasses"
          class="justify-center mt-8 gap-8">
          <ScreenOverlay
            v-for="(screen, index) in screens"
            :key="`${index}-screen-overlay`"
            :screen="screen"
          />
        </div>

        <div v-else class="mt-8">
          <ListScreenTable :screens="screens" />
        </div>
      </div>

      <div
        v-show="isOverDropZone"
        class="empty-screen__over-dropzone border-2 border-dotted border-blue-500 rounded-lg flex flex-col gap-2 items-center justify-center">
        <p class="text-2xl text-black font-semibold">Drop new screens</p>
        <p class="text-gray-500 text-sm">Add any .JPG, .PNG, .GIF files.</p>
      </div>
    </div>
  </div>

  <template v-if="screens.length === 0">
    <EmptyScreen :project_title="`${project?.project_title}`" />
  </template>
</template>

<script lang="ts" setup>
import ScreenOverlay from '~/components/project/ScreenOverlay.vue'
import SortByDropdown from '~/components/common/SortByDropdown.vue'
import GroupByDropdown from '~/components/common/GroupByDropdown.vue'
import OptionView from '~/components/common/OptionView.vue'
import RangeSlider from '~/components/common/RangeSlider.vue'
import FilterProject from '~/components/common/FilterProject.vue'
import ListScreenTable from '~/components/screen/ListScreenTable.vue'
import EmptyScreen from '~/components/screen/EmptyScreen.vue'
import { OPTION_VIEW } from '~/constants/common'
import { getScreensInProject, getScreensSortBy } from '~/api/screens'
import type { IScreen, IProject, IUploadRequestResponse } from '~/types'
import { requestUploadScreenToProject, uploadScreenToFileServer } from '~/api/projects'
import { useDropZone } from '@vueuse/core'
import _get from 'lodash/get'

const emit = defineEmits(['change-range'])

const screenStore = useScreenStore()
const projectStore = useProjectStore()
const route = useRoute()
const { id } = route.params

const screens = ref<IScreen[]>([])
const dropZoneRef = ref<HTMLDivElement>()
const gridClasses = ref<string>('grid grid-cols-1 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2')

await useAsyncData('screens', async () => {
  const { data } = await getScreensInProject(id as string)

  screens.value = data.value
})

const project = computed((): IProject => {
  return projectStore.getProject as IProject
})

const currentView = computed(() => {
  return screenStore.getOptionView
})

const changeRange = (classes: string) => {
  // gridClasses.value = classes
}

const changeSortBy = async (value: string) => {
  const { data } =  await getScreensSortBy(id as string, value)

  screens.value = data.value
}

const handleUpload = async (files: FileList | File[] | null) => {
  if (files && files.length > 0) {
    const { data } = await requestUploadScreenToProject(id as string, files[0]);
    const response = data.value.data as IUploadRequestResponse
    const { upload_url: uploadUrl } = response

    await uploadScreenToFileServer(uploadUrl, files[0])

    await refreshNuxtData()

    ElMessage.success({
      message: 'Screen uploaded successfully',
      type: 'success',
    })
  }
}

const onDrop = async (files: File[] | null) => {
  await handleUpload(files)
}

const { isOverDropZone } = useDropZone(dropZoneRef, {
  onDrop,
  dataTypes: ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml', 'image/webp']
})

onBeforeMount(() => {
  const screenStore = useScreenStore()
  screenStore.resetPreviewScreen()
})
</script>
