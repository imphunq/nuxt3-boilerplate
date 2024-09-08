<template>
  <div class="overflow-x-hidden relative">
    <HeaderComponent />

    <div class="flex content-container">
      <Sidebar :key="`${isCollapse}-sidebar`" />

      <div
        class="main-content p-4 w-full overflow-auto"
        :class="[isCollapse ? 'sm:ml-16' : 'sm:ml-80']"
      >
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

<style lang="scss" scoped>
.content-container {
  margin-top: 64px;
}
</style>
