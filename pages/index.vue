<template>
  <div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: [
    function () {
      const router = useRouter()

      router.push('overview')
    }
  ]
})
</script>
