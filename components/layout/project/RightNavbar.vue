<template>
  <div class="flex items-center justify-center right-navbar-block">
    <button
      type="button"
      class="py-2 px-5 text-sm font-medium text-gray-500 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
        Preview
      </button>

    <button
      type="button"
      class="flex items-center gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"></path></svg>
      <span>Share</span>
    </button>

    <div class="list-icons hidden xl:flex">
      <button
        type="button"
        class="outline-none"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 1024 1024"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        ><path d="M924.3 338.4a447.57 447.57 0 0 0-96.1-143.3 443.09 443.09 0 0 0-143-96.3A443.91 443.91 0 0 0 512 64h-2c-60.5.3-119 12.3-174.1 35.9a444.08 444.08 0 0 0-141.7 96.5 445 445 0 0 0-95 142.8A449.89 449.89 0 0 0 65 514.1c.3 69.4 16.9 138.3 47.9 199.9v152c0 25.4 20.6 46 45.9 46h151.8a447.72 447.72 0 0 0 199.5 48h2.1c59.8 0 117.7-11.6 172.3-34.3A443.2 443.2 0 0 0 827 830.5c41.2-40.9 73.6-88.7 96.3-142 23.5-55.2 35.5-113.9 35.8-174.5.2-60.9-11.6-120-34.8-175.6zM312.4 560c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48 47.9 21.5 47.9 48-21.4 48-47.9 48zm199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48 47.9 21.5 47.9 48-21.5 48-47.9 48zm199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48 47.9 21.5 47.9 48-21.5 48-47.9 48z" /></svg>
      </button>
    </div>

    <div class="list-icons hidden xl:flex">
      <button
        type="button"
        class="outline-none"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        ><path d="M256 480a80.09 80.09 0 0073.3-48H182.7a80.09 80.09 0 0073.3 48zm144-192v-60.53C400 157 372.64 95.61 304 80l-8-48h-80l-8 48c-68.88 15.61-96 76.76-96 147.47V288l-48 64v48h384v-48z" /></svg>
      </button>
    </div>

    <div class="list-icons hidden xl:flex">
      <button
        type="button"
        class="outline-none"
      >
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        ><path
          d="M4 4H8V8H4V4Z"
          fill="currentColor"
        /><path
          d="M4 10H8V14H4V10Z"
          fill="currentColor"
        /><path
          d="M8 16H4V20H8V16Z"
          fill="currentColor"
        /><path
          d="M10 4H14V8H10V4Z"
          fill="currentColor"
        /><path
          d="M14 10H10V14H14V10Z"
          fill="currentColor"
        /><path
          d="M10 16H14V20H10V16Z"
          fill="currentColor"
        /><path
          d="M20 4H16V8H20V4Z"
          fill="currentColor"
        /><path
          d="M16 10H20V14H16V10Z"
          fill="currentColor"
        /><path
          d="M20 16H16V20H20V16Z"
          fill="currentColor"
        /></svg>
      </button>
    </div>

    <UserDropdown />
  </div>
</template>

<script lang="ts" setup>
import { initDropdowns } from 'flowbite'
import UserDropdown from '../UserDropdown.vue'
import ShareIcon from '~/assets/images/icons/share.png'

// onMounted(() => {
  useFlowbite(() => {
    initDropdowns()
  })
// })
</script>

<style lang="scss" scoped>
.right-navbar-block {
  gap: max(10px, 1.5vw);

  .list-icons {
    button svg {
      color: #9099a2;
      width: max(18px, 1.2vw);
      height: max(18px, 1.2vw);
    }
  }
}
</style>
