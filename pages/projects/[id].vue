<template>
  <div>
    <div
      v-if="!excludeChildrenRouteNames.includes(route.name as string)"
      class="py-4 border-b border-solid border-gray-200 project-tabs flex lg:flex-wrap items-center xl:justify-between justify-center gap-5"
    >
      <div class="flex items-center">
        <div
          class="cursor-pointer mr-6"
          @click="openProjectDrawer"
        >
          <MoveRightIcon />
        </div>

        <el-menu
          :default-active="activeIndex"
          :ellipsis="false"
          class="el-menu-project"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="screens">
            Screens
          </el-menu-item>
          <el-menu-item index="comments">
            Comments
          </el-menu-item>
          <el-menu-item index="people">
            People
          </el-menu-item>
          <el-menu-item index="activity">
            Activity
          </el-menu-item>
          <el-menu-item index="shared">
            Shared
          </el-menu-item>
          <el-menu-item index="settings">
            Settings
          </el-menu-item>
        </el-menu>
      </div>

      <div class="project-tabs__right flex flex-wrap justify-center items-center gap-5">
        <el-input
          style="width: 240px"
          placeholder="Find screen"
          :prefix-icon="Search"
          class="project-tabs__search-input"
          :input-style="{ borderRadius: '40px' }"
        />

        <el-button
          round
          class="project-tabs__btn-add flex items-center gap-5"
          @click="open()"
        >
          <el-icon><Plus /></el-icon>
          <span>Add new</span>
        </el-button>
      </div>
    </div>

    <div :class="[!excludeChildrenRouteNames.includes(route.name as string) ? '' : 'mt-4']">
      <NuxtPage />
    </div>

    <ProjectDrawer ref="projectDrawerRef" />
  </div>
</template>

<script setup lang="ts">
import { Search, Plus } from '@element-plus/icons-vue'
import MoveRightIcon from '~/components/common/icon/MoveRight.vue'
import ProjectDrawer from '~/components/screen/ProjectDrawer.vue'
import { useFileDialog } from '@vueuse/core'
import { requestUploadScreenToProject, uploadScreenToFileServer } from '~/api/projects'
import type { IUploadRequestResponse } from '~/types'

definePageMeta({
  middleware: 'auth',
  layout: 'project',
})

const route = useRoute()
const excludeChildrenRouteNames = ['projects-id-screens-screenId', 'projects-id-preview']

const projectDrawerRef = ref<InstanceType<typeof ProjectDrawer>>()
const activeIndex = ref<string>('screens')
const { id } = route.params

const { files, open, reset, onChange } = useFileDialog({
  accept: 'image/*',
})

onChange(async (files: FileList | null) => {
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
})

const handleSelect = (index: string) => {
  activeIndex.value = index

  if (index === 'screens') {
    navigateTo(`/projects/${id}`)
  }
  else {
    navigateTo(`/projects/${id}/${index}`)
  }
}

const openProjectDrawer = () => {
  projectDrawerRef.value?.open()
}
</script>

<style lang="scss">
.project-tabs {
  .el-menu--horizontal.el-menu {
    border: none;
  }

  .el-menu-project {
    height: 30px;
    display: flex;
    flex-wrap: wrap;
    // flex-grow: 0;
    // flex-shrink: 1;

    .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
      background-color: none;
    }
  }

  &__search-input {
    .el-input__wrapper {
      border-radius: 40px !important;
    }
  }

  &__btn-add {
    border-color: $color-blue;
    color: $color-blue;
  }
}

@media screen and (max-width: 1024px) {
  .project-tabs {
    display: flex;
    flex-direction: column;

    &__right {
      margin-top: 32px;
    }
  }
}
</style>
