<template>
  <div class="overflow-x-hidden">
    <HeaderComponent />
    <slot />
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from '~/components/layout/HeaderComponent.vue'
</script>
