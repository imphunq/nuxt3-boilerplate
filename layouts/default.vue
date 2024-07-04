<template>
  <div class="overflow-x-hidden">
    <HeaderComponent />

    <div>
      
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from '~/components/layout/HeaderComponent.vue'
</script>
