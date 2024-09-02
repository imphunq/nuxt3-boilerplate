<template>
  <nav
    class="navbar flex w-full fixed top-0 start-0 z-50 bg-white border-b border-solid border-gray-200 dark:bg-gray-900">
    <div class="flex w-full flex-wrap items-center justify-between gap-x-2 xs:gap-x-5">
      <div class="flex items-center space-x-3 rtl:space-x-reverse">
        <button v-if="!openDrawer" type="button" @click="handleCollapse">
          <svg class="w-6 h-6 xs:w-8 xs:h-8 text-gray-800 dark:text-white" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14" />
          </svg>
        </button>

        <button v-else type="button" data-drawer-target="drawer-sidebar" data-drawer-show="drawer-sidebar"
          aria-controls="drawer-sidebar">
          <svg class="w-6 h-6 xs:w-8 xs:h-8 text-gray-800 dark:text-white" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14" />
          </svg>
        </button>

        <NuxtLink to="/">
          <img
            src="data:image/png;base64,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"
            alt="Logo" class="w-[130px] xs:w-full cursor-pointer">
        </NuxtLink>

        <div class="vertical-divider"></div>

        <div class="flex items-center project-info">
          <el-button
            :icon="Back"
            circle
            @click="navigateTo('/projects')"
            class="mr-4"
          />
          <div class="flex items-center gap-4">
            <img :src="GroupProjectIcon" alt="" class="w-8 h-8">

            <div class="flex flex-col gap-1">
              <span class="text-lg font-bold text-black">
                {{ project?.project_title }}
              </span>

              <p class="text-xs">Updated {{ moment(project?.updated_at).fromNow() }}</p>
            </div>
          </div>

          <StackUserGroup class="mx-6" />

          <button
            type="button"
            class="flex items-center gap-2 py-2 px-5 text-sm font-medium text-gray-500 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            <el-icon><Plus /></el-icon>
            <span>Invite</span>
          </button>
        </div>
      </div>

      <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <RightNavbar />
      </div>
    </div>

    <template v-if="openDrawer">
      <DrawerSidebar />
    </template>
  </nav>
</template>

<script setup lang="ts">
import moment from 'moment'
import { initDrawers } from 'flowbite'
import { Plus, Back } from '@element-plus/icons-vue'
import RightNavbar from './RightNavbar.vue'
import DrawerSidebar from '../DrawerSidebar.vue'
import GroupProjectIcon from '~/assets/images/icons/project/group.svg'
import StackUserGroup from '~/components/common/StackUserGroup.vue'

onMounted(() => {
  useFlowbite(() => {
    initDrawers()
  })
})

const globleStore = useGlobalStore()
const projectStore = useProjectStore()

const openDrawer = ref<boolean>(false)

const project = computed(() => {
  return projectStore.getProject
})

onMounted(() => {
  window.addEventListener('resize', onResize)

  onResize()
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
})

const windowWidth = computed(() => {
  return window.innerWidth
})

watch(windowWidth, (width) => {
  if (width >= 640) {
    openDrawer.value = false
  }
  else {
    openDrawer.value = true
  }
})

const onResize = () => {
  const width = window.innerWidth

  if (width >= 640) {
    openDrawer.value = false
  }
  else {
    openDrawer.value = true
  }
}

const handleCollapse = () => {
  const width = window.innerWidth

  if (width >= 640) {
    globleStore.setIsCollapse(!globleStore.getIsCollapse)
  }
}
</script>

<style lang="scss" scoped>
.vertical-divider {
  position: absolute;
  height: 100%;
  /* Chiều cao bằng chiều cao của phần tử cha */
  width: 1px;
  background-color: #dcdfe6;
  /* Màu sắc của divider */
  left: 15%;
  /* Định vị giữa phần tử cha */
}

.project-info {
  position: absolute;
  left: 16%;
}
</style>
