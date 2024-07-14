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

  <NoProjects v-else />
</template>

<script lang="ts" setup>
import ProjectOverlay from '~/components/common/ScreenOverlay.vue'
import NoProjects from '~/components/common/NoProjects.vue'

const data = ref([])

onMounted(() => {
})
</script>
