<template>
  <div class="overflow-x-hidden">
    <HeaderComponent />

    <div class="flex">
      <Sidebar :key="`${isCollapse}-sidebar`" />

      <div class="main-content p-4" :class="[isCollapse ? 'sm:ml-16' : 'sm:ml-80']">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from '~/components/layout/HeaderComponent.vue'
import Sidebar from '~/components/layout/Sidebar.vue'

const globalStore = useGlobalStore()

const isCollapse = computed(() => {
  return globalStore.getIsCollapse
})
</script>
