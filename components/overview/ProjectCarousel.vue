<template>
  <div v-if="projects.length < 4" class="grid grid-cols-3 gap-2">
    <div
      v-for="project in projects"
      :key="project.id"
      class="carousel__item"
    >
      <ProjectOverlay :project="project" />
    </div>
  </div>

  <Carousel
    v-else
    :items-to-show="4"
    :items-to-scroll="4"
    snap-align="start"
    :wrap-around="true"
    class="carousel-wrapper"
  >
    <Slide
      v-for="project in projects"
      :key="project.id"
    >
      <div class="carousel__item">
        <ProjectOverlay :project="project" />
      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script lang="ts" setup>
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import ProjectOverlay from '~/components/common/ProjectOverlay.vue'
import 'vue3-carousel/dist/carousel.css'
import type { IProject } from '~/types'

interface Props {
  projects: IProject[]
}

const props = defineProps<Props>()
</script>

<style scoped>
.projects-wrapper {
  display: flex;
  gap: 10px; /* Adjust the gap as needed */
}

.carousel__item {
  margin: 0px 10px;
}

.carousel-wrapper {
  /* You can add any additional styling for the carousel here */
}
</style>
