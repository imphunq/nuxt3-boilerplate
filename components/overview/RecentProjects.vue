<template>
  <div
    v-if="projects.length"
    class="mt-8"
  >
    <ProjectCarousel :projects="projects" />
  </div>

  <NoProjects v-else />
</template>

<script lang="ts" setup>
import ProjectCarousel from '~/components/overview/ProjectCarousel.vue'
import NoProjects from '~/components/common/NoProjects.vue'
import { getRecentUpdateProjects } from '~/api/projects'
import type { IProject } from '~/types';

const projects = ref<IProject[]>([])

await useAsyncData('recent-updated-project', async () => {
  const { data } = await getRecentUpdateProjects()

  projects.value = data.value
})

onMounted(() => {
})
</script>
