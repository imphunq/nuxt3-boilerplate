<template>
  <div class="screen-header flex flex-wrap items-center p-4 pt-0 border-b border-solid border-gray-200 gap-3">
    <div class="flex items-center gap-5">
      <el-button
        :icon="Back"
        size="large"
        circle
        @click="back"
      />

      <div class="flex items-center gap-4">
        <img
          :src="GroupProjectIcon"
          alt=""
          class="w-8 h-8"
        >

        <div class="flex flex-col gap-1">
          <div class="flex items-center gap-2">
            <span class="font-semibold text-black">
              {{ project?.project_title }}
            </span>

            <el-icon><CaretRight /></el-icon>

            <span class="font-semibold text-black w-3/5 truncate ...">
              {{ screen?.name }}
            </span>
          </div>

          <p class="text-xs">
            Updated {{ moment(project?.updated_at).fromNow() }}
          </p>
        </div>
      </div>
    </div>

    <div>
      <el-radio-group v-model="mode" size="large" class="screen-option" fill="rgb(66, 128, 235)">
        <el-radio-button value="comment">
          <template #default>
            <div class="flex items-center">
              <img class="mr-1" :src="CommentIcon" alt="">
              <span class="mr-1">Comment</span>
              <div class="w-4 h-4 flex items-center justify-center rounded-full bg-white">
                <span class="text-black text-xs">
                  {{ screen?.comments.length }}
                </span>
              </div>
            </div>
          </template>
        </el-radio-button>
        <el-radio-button value="Washington">
          <template #default>
            <div class="flex items-center">
              <img class="mr-1" :src="PrototypeIcon" alt="">
              <span>Prototype mode</span>
            </div>
          </template>
        </el-radio-button>
      </el-radio-group>
    </div>

    <div class="flex items-center gap-5">
      <el-popover
        placement="bottom"
        :width="300"
        trigger="click"
      >
        <template #reference>
          <div class="flex items-center gap-2 cursor-pointer">
            <img :src="LabelIcon" alt="">
            <span class="hover:text-blue-500">Add Label</span>
          </div>
        </template>

        <div>
          <div>
            <p class="text-black font-semibold mb-2">Add Label</p>
            <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Add Label</label>
            <div class="relative">
              <input
                type="search"
                id="search-label"
                class="block w-full h-10 p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Label name"
              />
              <button
                type="submit"
                class="text-white absolute end-2.5 bottom-[4px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Add
              </button>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-6 mt-4">
            <div class="flex items-center gap-2 cursor-pointer hover:bg-gray-200 py-1 px-2 rounded-xl">
              <img :src="LabelBlue" alt="">
              <span class="text-sm font-medium text-gray-900 dark:text-white">New</span>
            </div>
            <div class="flex items-center gap-2 cursor-pointer hover:bg-gray-200 py-1 px-2 rounded-xl">
              <img :src="LabelRed" alt="">
              <span class="text-sm font-medium text-gray-900 dark:text-white">Need Review</span>
            </div>
            <div class="flex items-center gap-2 cursor-pointer hover:bg-gray-200 py-1 px-2 rounded-xl">
              <img :src="LabelYellow" alt="">
              <span class="text-sm font-medium text-gray-900 dark:text-white">In Progress</span>
            </div>
            <div class="flex items-center gap-2 cursor-pointer hover:bg-gray-200 py-1 px-2 rounded-xl">
              <img :src="LabelGreen" alt="">
              <span class="text-sm font-medium text-gray-900 dark:text-white">Completed</span>
            </div>
          </div>
        </div>
      </el-popover>

      <ZoomComponent @scale="scaleScreen" />

      <el-popover
        placement="bottom"
        :width="200"
        trigger="click"
      >
        <template #reference>
          <el-icon class="cursor-pointer"><More /></el-icon>
        </template>

        <div class="flex flex-col gap-4 p-2">
          <div class="flex items-center gap-2 cursor-pointer">
            <img :src="CreateUserAs" alt="">
            <span class="hover:text-blue-500">Create user test</span>
          </div>

          <div class="flex items-center justify-between cursor-pointer">
            <div class="flex justify-between items-center gap-2">
              <img :src="DownloadIcon" alt="">
              <span class="hover:text-blue-500">Download as</span>
            </div>
            <el-icon><ArrowRight /></el-icon>
          </div>

          <div class="flex items-center justify-between">
            <span>Background</span>

            <div class="flex items-center gap-1">
              <div
                class="w-5 h-5 rounded-full flex items-center justify-center cursor-pointer"
                :class="[selectedColor === 'white' ? `border-2 border-solid border-gray-500` : '']"
                @click="selectedColor = 'white'"
              >
                <div class="w-3 h-3 bg-white rounded-full border border-solid border-gray-500" />
              </div>

              <div
                class="w-5 h-5 rounded-full flex items-center justify-center cursor-pointer"
                :class="[selectedColor === 'black' ? `border-2 border-solid border-gray-500` : '']"
                @click="selectedColor = 'black'"
              >
                <div class="w-3 h-3 bg-black rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </el-popover>

      <button
        type="button"
        class="py-2 px-5 text-sm font-medium text-gray-500 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        Preview
      </button>

      <button
        type="button"
        class="flex items-center gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        @click="openShareModal"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        ><path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" /></svg>
        <span>Share</span>
      </button>
    </div>
  </div>

  <ShareScreenModal ref=shareScreenModalRef />
</template>

<script lang="ts" setup>
import moment from 'moment'
import { Back, CaretRight, More, ArrowRight } from '@element-plus/icons-vue'
import GroupProjectIcon from '~/assets/images/icons/project/group.svg'
import CreateUserAs from '~/assets/images/icons/project/create-user-as.svg'
import DownloadIcon from '~/assets/images/icons/project/download.svg'
import CommentIcon from '~/assets/images/icons/project/comment.svg'
import PrototypeIcon from '~/assets/images/icons/project/prototype.svg'
import LabelIcon from '~/assets/images/icons/project/label.svg'
import ZoomComponent from '~/components/common/Zoom.vue'
import ShareScreenModal from '~/components/share/ShareScreenModal.vue'
import LabelBlue from '~/assets/images/icons/project/label-blue.svg'
import LabelRed from '~/assets/images/icons/project/label-red.svg'
import LabelGreen from '~/assets/images/icons/project/label-green.svg'
import LabelYellow from '~/assets/images/icons/project/label-yellow.svg'
import type { IProject, IScreen } from '~/types'

interface Props {
  project: IProject | undefined
  screen: IScreen | undefined
}

const props = defineProps<Props>()
const emit = defineEmits(['scale'])

const shareScreenModalRef = ref<InstanceType<typeof ShareScreenModal>>()
const mode = ref<string>('comment')
const selectedColor = ref<string>('white')

const scaleScreen = (scale: number) => {
  emit('scale', scale)
}

const openShareModal = () => {
  shareScreenModalRef.value?.open(1, 1)
}

const back = async () => {
  await navigateTo(`/projects/${props.project?.id}`)
}
</script>

<style lang="scss">
.el-radio-group.screen-option {
  .el-radio-button.is-active {
    img {
      filter: brightness(10) !important;
    }
  }
}

@media screen and (min-width: 1420px) {
  .screen-header {
    justify-content: space-between;
  }
}

@media screen and (max-width: 1419px) {
  .screen-header {
    justify-content: center;
  }
}
</style>
