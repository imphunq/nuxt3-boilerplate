<template>
  <el-table ref="screenTableRef" :data="screens" :default-sort="{ prop: 'project_title', order: 'descending' }"
    style="width: 100%" :show-header="false">
    <el-table-column type="selection" width="55" />
    <el-table-column prop="project_title" label="Project Name">
      <template #default="scope">
        <div class="flex items-center">
          <img :src="scope.row.screen_url_thumb" class="w-16 md:w-32 max-w-full max-h-full mr-2" alt="Thumb">
          <div class="flex flex-col">
            <span class="text-black text-lg">{{ scope.row.name }}</span>
            <span class="text-gray-800">{{ moment(scope.row.updated_at).format('YY/DD/YYYY HH:mm') }}</span>
          </div>
        </div>
      </template>
    </el-table-column>
    <el-table-column width="150">
      <button type="button"
        class="flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <span>View</span>
      </button>
    </el-table-column>
    <el-table-column width="150">
      <el-button text
        class="flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm text-center">
        <svg class="mr-2" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em"
          width="1em" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z">
          </path>
        </svg>
        <span class="hover:text-blue-500">Share</span>
      </el-button>
    </el-table-column>
    <el-table-column width="150">
      <template #default="scope">
        <div class="flex items-center gap-3">
          <svg class="text-xl" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z">
            </path>
            <path
              d="M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z">
            </path>
          </svg>
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <div class="three-dots cursor-pointer text-gray-400">
                <svg class="text-xl" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z">
                  </path>
                </svg>
              </div>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="">
                  <Cancel />
                  <span class="ml-2 text-base text-red-500">Delete</span>
                </el-dropdown-item>
                <el-dropdown-item @click="">
                  <IconTickComponent />
                  <span class="ml-2 text-base">Select</span>
                </el-dropdown-item>
                <el-dropdown-item @click="">
                  <ChangeScreen />
                  <span class="ml-2 text-base">Change Screen</span>
                </el-dropdown-item>
                <el-dropdown-item @click="">
                  <ChangeOrder />
                  <span class="ml-2 text-base">Change Order</span>
                </el-dropdown-item>
                <el-dropdown-item @click="">
                  <RenameIcon />
                  <span class="ml-2 text-base">Rename</span>
                </el-dropdown-item>
                <el-dropdown-item @click="">
                  <Comment />
                  <span class="ml-2 text-base">Comments</span>
                </el-dropdown-item>
                <el-dropdown-item @click="">
                  <Duplicate />
                  <span class="ml-2 text-base">Duplicate</span>
                </el-dropdown-item>
                <el-dropdown-item @click="">
                  <MoveTo />
                  <span class="ml-2 text-base">Move to</span>
                </el-dropdown-item>
                <el-dropdown-item @click="">
                  <Archive />
                  <span class="ml-2 text-base">Archive</span>
                </el-dropdown-item>
                <el-dropdown-item @click="">
                  <SetMainScreen />
                  <span class="ml-2 text-base">Set as main screen</span>
                </el-dropdown-item>
                <el-dropdown-item @click="">
                  <AddLabel />
                  <span class="ml-2 text-base">Add Label</span>
                </el-dropdown-item>
                <el-dropdown-item @click="">
                  <Version />
                  <span class="ml-2 text-base">Versions</span>
                </el-dropdown-item>
                <el-dropdown-item @click="">
                  <Download />
                  <span class="ml-2 text-base">Download as</span>
                </el-dropdown-item>
                <el-dropdown-item @click="">
                  <Stats />
                  <span class="ml-2 text-base">Stats</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import moment from 'moment'
import type { IScreen } from '~/types'
import IconTickComponent from '~/components/common/icon/IconTick.vue'
import MoveTo from '~/components/common/icon/MoveTo.vue'
import Archive from '~/components/common/icon/Archive.vue'
import Duplicate from '~/components/common/icon/Duplicate.vue'
import Cancel from '~/components/common/icon/Cancel.vue'
import ChangeScreen from '~/components/common/icon/ChangeScreen.vue'
import ChangeOrder from '~/components/common/icon/ChangeOrder.vue'
import RenameIcon from '~/components/common/icon/Rename.vue'
import Comment from '~/components/common/icon/Comment.vue'
import SetMainScreen from '~/components/common/icon/SetMainScreen.vue'
import AddLabel from '~/components/common/icon/AddLabel.vue'
import Version from '~/components/common/icon/Version.vue'
import Download from '~/components/common/icon/Download.vue'
import Stats from '~/components/common/icon/Stats.vue'

interface Props {
  screens: IScreen[]
}

const props = defineProps<Props>()
</script>

<style lang="scss" scoped></style>
