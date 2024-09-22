<template>
  <div class="px-2 py-[8px] w-20 flex items-center border border-solid border-gray-200 rounded-lg">
    <div class="w-1/2 cursor-pointer flex items-center justify-center" @click="changeView(OPTION_VIEW.GRID)">
      <svg
        :class="[option === OPTION_VIEW.GRID ? '!text-blue-400' : '']"
        class="hover:text-blue-400"
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 16 16"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"><path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"></path></svg>
    </div>

    <div class="w-1/2 cursor-pointer flex items-center justify-center" @click="changeView(OPTION_VIEW.LIST)">
      <svg
        :class="[option === OPTION_VIEW.LIST ? '!text-blue-400' : '']"
        class="hover:text-blue-400"
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 512 512"
        height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M149.333 216v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-80c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zM125.333 32H24C10.745 32 0 42.745 0 56v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zm80 448H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm-24-424v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24zm24 264H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24z"></path></svg>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { OPTION_VIEW } from '~/constants/common'
import { PROJECT_TYPE } from '~/constants/project'

const props = withDefaults(defineProps<{
  page?: string
  type?: string
  currentView?: string
}>(), {
  page: 'project',
  type: PROJECT_TYPE.ALL,
  currentView: OPTION_VIEW.GRID
})

const emit = defineEmits(['change-view'])

const projectStore = useProjectStore()
const screenStore = useScreenStore()

const option = ref<string>(OPTION_VIEW.GRID)

const changeView = (view: string) => {
  emit('change-view', view)

  option.value = view

  if (props.page === 'project' && props.type === PROJECT_TYPE.ALL) {
    projectStore.setOptionView(view)

    return
  }

  if (props.page === 'project' && props.type === PROJECT_TYPE.STARRED) {
    projectStore.setStarredOptionView(view)

    return
  }

  if (props.page === 'project' && props.type === PROJECT_TYPE.SHARE) {
    projectStore.setSharedOptionView(view)

    return
  }

  if (props.page === 'project' && props.type === PROJECT_TYPE.ONGOING) {
    projectStore.setOnGoingOptionView(view)

    return
  }

  if (props.page === 'project' && props.type === PROJECT_TYPE.RECENTLY_ADDED) {
    projectStore.setRecentlyAddedOptionView(view)

    return
  }

  if (props.page === 'screen' && props.type === PROJECT_TYPE.SCREEN) {
    screenStore.setOptionView(view)

    return
  }
}

onMounted(() => {
  changeView(props.currentView)
})
</script>

<style lang="scss" scoped>
svg {
  color: #98a2ab;
}
</style>
