<template>
  <div class="flex flex-col justify-between rounded-lg bg-white shadow-lg p-4 max:h-96 min:h-64 h-80">
    <div class="h-5/6 relative mb-3">
      <div class="bg-red-100 absolute inset-0 bg-cover bg-center z-0" />

      <div class="rounded-lg opacity-0 hover:opacity-100 hover:bg-slate-300 duration-300 absolute inset-0 z-10">
        <div class="w-full h-full">
          <div class="flex justify-end m-4 cursor-pointer">
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            ><circle
              cx="12"
              cy="12"
              r="1"
            /><circle
              cx="19"
              cy="12"
              r="1"
            /><circle
              cx="5"
              cy="12"
              r="1"
            /></svg>
          </div>
          <div class="h-2/3 z-10 flex justify-center items-center text-6xl text-white">
            <button
              type="button"
              class="px-5 py-3 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none outline-none focus:ring-blue-300 font-medium rounded-full text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View
            </button>
          </div>
          <div class="mx-4 mb-4 flex items-center space-x-3 cursor-pointer text-sm">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            ><path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" /></svg>
            <span>
              Share
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-between">
      <div class="project-info">
        <div class="text-sm font-semibold mb-1">
          new project
        </div>
        <div class="text-xs text-gray-500">
          Tuesday 11:37 PM
        </div>
      </div>

      <div>
        <div class="mb-1">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAAABHNCSVQICAgIfAhkiAAAAIVJREFUKFNjnL987QVGBgZ9BjLA////AxkXLF/7PyEyGGgGaQBocQNIx6gBo2EATgcUp0Rs6Q+cyv4zOCRGBTuA5PGlVqxJmGwD5i9bM4GREZSxGBWALhBgYPx/AeJCRqBL/h8Asf7/Yy5MjA6EigNlkL0AtDkByFfAn62YFiRGBj6AqQEA2AVpnXScLSkAAAAASUVORK5CYII="
            alt="screens number"
          >
        </div>

        <div class="text-xs text-gray-500">
          <span>
            4 screens
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
</style>
