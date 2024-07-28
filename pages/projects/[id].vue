<template>
  <div>
    <div class="py-4 border-b border-solid border-gray-200 project-tabs flex items-center justify-between">
      <div class="flex items-center">
        <div class="cursor-pointer mr-6" @click="openProjectDrawer">
          <MoveRightIcon />
        </div>

        <el-menu
          :default-active="activeIndex"
          class="el-menu-project"
          mode="horizontal"
          @select="handleSelect">
          <el-menu-item index="screens"
        >
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

      <div class="flex items-center gap-5">
        <el-input
          style="width: 240px"
          size="large"
          placeholder="Find screen"
          :prefix-icon="Search"
          class="project-tabs__search-input"
          :input-style="{ borderRadius: '40px' }"
        />

        <el-button
          size="large"
          round
          class="project-tabs__btn-add flex items-center gap-5"
        >
          <el-icon><Plus /></el-icon>
          <span>Add new</span>
        </el-button>
      </div>
    </div>

    <div class="mt-4">
      <NuxtPage />
    </div>

    <ProjectDrawer ref="projectDrawerRef" />
  </div>
</template>

<script setup lang="ts">
import { Search, Plus } from '@element-plus/icons-vue'
import MoveRightIcon from '~/components/common/icon/MoveRight.vue'
import ProjectDrawer from '~/components/screen/ProjectDrawer.vue'

definePageMeta({
  middleware: 'auth',
  layout: 'project',
})

const route = useRoute()

const projectDrawerRef = ref<InstanceType<typeof ProjectDrawer>>()
const activeIndex = ref<string>('screens')
const { id } = route.params

const handleSelect = (index: string) => {
  activeIndex.value = index

  if (index === 'screens') {
    navigateTo(`/projects/${id}`)
  } else {
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
</style>
