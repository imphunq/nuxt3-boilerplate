<template>
  <div>
    <div
      class="flex flex-col flex-1 text-center gap-5"
      :class="{ 'no-projects': !props.withoutPadding }"
    >
      <div class="no-project__icon flex justify-center">
        <img
          :src="ProjectIcon"
          alt="project icon"
        >
      </div>

      <p>You don't have any projects yet</p>

      <p>Share, review & approve designs, videos & documents in minutes with HostDesign.</p>

      <div>
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          @click="openModalProject"
        >
          Create your first project
        </button>

        <CreateProjectModal
          ref="createProjectModalRef"
          @direct-upload="directUpload"
        />
        <CreateProjectDirectModal
          ref="createProjectDirectModalRef"
          @normal-upload="normalUpload"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ProjectIcon from '~/assets/images/icon-project.svg'
import CreateProjectModal from '~/components/project/CreateProjectModal.vue'
import CreateProjectDirectModal from '~/components/project/CreateProjectDirectModal.vue'

interface Props {
  withoutPadding: boolean
}

const props = withDefaults(defineProps<Props>(), {
  withoutPadding: false
})

const createProjectModalRef = ref<InstanceType<typeof CreateProjectModal>>()
const createProjectDirectModalRef = ref<InstanceType<typeof CreateProjectDirectModal>>()

const directUpload = () => {
  createProjectModalRef?.value?.close()

  setTimeout(() => {
    createProjectDirectModalRef?.value?.open()
  }, 250)
}

const normalUpload = () => {
  createProjectDirectModalRef?.value?.close()

  setTimeout(() => {
    createProjectModalRef?.value?.open()
  }, 250)
}

const openModalProject = () => {
  createProjectModalRef?.value?.open()
}

onMounted(() => {
})
</script>

<style lang="scss" scoped>
.no-projects {
  padding-top: 10%;
}
</style>
