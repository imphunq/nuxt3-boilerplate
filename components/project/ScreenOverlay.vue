<template>
  <div>
    <div class="flex flex-col gap-1">
      <el-card
        :body-style="{ padding: '0' }"
        class="flex flex-col w-full leading-1.5 p-1 border-gray-200 bg-gray-50 rounded-2xl dark:bg-gray-700"
      >
        <div class="group relative">
          <div
            class="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center"
          >
            <button
              type="button"
              class="px-5 py-3 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none outline-none focus:ring-blue-300 font-medium rounded-full text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              @click="handleView"
            >
              View
            </button>
          </div>

          <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <el-dropdown trigger="click">
              <button
                type="button"
                class=" text-white bg-slate-400	flex justify-center items-center p-0.5 rounded-md"
              >
                <el-icon><More /></el-icon>
              </button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="">
                    <span class="ml-2 text-base">Change Screen</span>
                  </el-dropdown-item>
                  <el-dropdown-item @click="">
                    <span class="ml-2 text-base">Change Order</span>
                  </el-dropdown-item>
                  <el-dropdown-item @click="">
                    <span class="ml-2 text-base">Rename</span>
                  </el-dropdown-item>
                  <el-dropdown-item @click="">
                    <span class="ml-2 text-base">Comments</span>
                  </el-dropdown-item>
                  <el-dropdown-item @click="">
                    <span class="ml-2 text-base">Move to</span>
                  </el-dropdown-item>
                  <el-dropdown-item @click="">
                    <span class="ml-2 text-base">Archive</span>
                  </el-dropdown-item>
                  <el-dropdown-item @click="">
                    <span class="ml-2 text-base">Set as main screen</span>
                  </el-dropdown-item>
                  <el-dropdown-item @click="">
                    <span class="ml-2 text-base">Add Label</span>
                  </el-dropdown-item>
                  <el-dropdown-item @click="">
                    <span class="ml-2 text-base">Versions</span>
                  </el-dropdown-item>
                  <el-dropdown-item @click="">
                    <span class="ml-2 text-base">Download as</span>
                  </el-dropdown-item>
                  <el-dropdown-item @click="">
                    <span class="ml-2 text-base">Stats</span>
                  </el-dropdown-item>
                  <el-dropdown-item @click="openModalConfirmDelete">
                    <span class="ml-2 text-base text-red-500">Delete</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>

          <div
            class="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            @click="openModalShare"
          >
            <div class="flex items-center gap-2 text-white cursor-pointer text-sm">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              ><path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" /></svg>
              <span>
                Share
              </span>
            </div>
          </div>
          <img
            :src="screen.screen_url_thumb ?? NoImage"
            class="rounded-lg w-full aspect-[4/3] object-cover"
          >
        </div>

        <div class="flex flex-col mb-2 mt-3 px-4">
          <span class="truncate text-sm font-normal text-black dark:text-gray-400">
            {{ screen.name }}
          </span>

          <span class="text-xs font-normal text-gray-500 dark:text-gray-400">
            {{ moment(screen.created_at).format('MM/DD/YYYY hh:mm A') }}
          </span>
        </div>

        <ShareScreenModal ref="shareScreenModalRef" />

        <ModalConfirmDelete
          ref="modalConfirmDeleteRef"
          type="screen"
          @delete="handleDelete"
        />
      </el-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import moment from 'moment'
import { More } from '@element-plus/icons-vue'
import ShareScreenModal from '~/components/share/ShareScreenModal.vue'
import ModalConfirmDelete from '~/components/common/ModalConfirmDelete.vue'
import type { IScreen } from '~/types'
import NoImage from '~/assets/images/no-image.jpg'
import { deleteScreen } from '~/api/screens'

interface Props {
  screen: IScreen
}

const props = defineProps<Props>()

const projectStore = useProjectStore()
const route = useRoute()
const { id } = route.params

const shareScreenModalRef = ref<InstanceType<typeof ShareScreenModal> | null>(null)
const modalConfirmDeleteRef = ref<InstanceType<typeof ModalConfirmDelete> | null>(null)

const handleView = () => {
  navigateTo(`/projects/${props.screen.project_id}/screens/${props.screen.id}`)
}

const openModalShare = () => {
  shareScreenModalRef.value?.open()
}

const openModalConfirmDelete = () => {
  modalConfirmDeleteRef.value?.open(props.screen.name)
}

const handleDelete = async () => {
  try {
    await deleteScreen(id as string, props.screen.id)

    ElMessage({
      message: 'Screen deleted successfully',
      type: 'success'
    })

    modalConfirmDeleteRef.value?.close()

    refreshNuxtData('screens')
  } catch (e) {
    ElMessage({
      message: 'Something went wrong, please try again later',
      type: 'error'
    })
  }
}
</script>

<style lang="scss" scoped></style>
