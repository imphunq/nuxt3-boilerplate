<script setup lang="ts">
const error = useError()

const errorCode = computed(() => (
  error.value instanceof Error || !error.value
    ? 500
    : error.value.statusCode
))

const errorMessage = computed(() => (
  error.value instanceof Error || !error.value
    ? 'Something went wrong'
    : error.value.statusMessage
))

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>

<template>
  <div class="error min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-700">
    <h1 class="code text-8xl font-bold mb-4 text-red-300">
      {{ errorCode }}
    </h1>
    <p class="message text-2xl mb-2">
      {{ errorMessage }}
    </p>
    <p class="text-lg mb-8">
      We couldn't find the page you requested
    </p>
    <button
      class="hover:text-blue-400 text-blue-500 flex items-center gap-2"
      @click="handleError"
    >
      <svg
        class="w-6 h-6 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 12h14M5 12l4-4m-4 4 4 4"
        />
      </svg>

      <span>Back to home</span>
    </button>
  </div>
</template>
