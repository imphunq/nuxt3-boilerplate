<template>
  <div class="overflow-x-hidden">
    <HeaderComponent />

    <div class="flex">
      <Sidebar />

      <div class="main-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from '~/components/layout/HeaderComponent.vue'
import Sidebar from '~/components/layout/Sidebar.vue'
</script>
