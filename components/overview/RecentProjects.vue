<template>
  <div
    v-if="data.length"
    class="mt-8 grid grid-cols-4 gap-x-5"
  >
    <ProjectOverlay
      v-for="index in 4"
      :key="`${index}-project-overlay`"
    />
  </div>

  <div
    v-else
    class="no-projects flex flex-col flex-1 text-center gap-5"
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
      >
        Create your first project
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ProjectOverlay from '~/components/common/ScreenOverlay.vue'
import ProjectIcon from '~/assets/images/icon-project.svg'

const data = ref([])

onMounted(() => {
})
</script>

<style lang="scss" scoped>
.no-projects {
  padding-top: 10%;
}
</style>
