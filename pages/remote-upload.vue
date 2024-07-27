<template>
  <div>
    <div class="flex items-center justify-between">
      <div>
        <p class="font-bold text-xl mb-2">
          Remote Uploads
        </p>
        <p>Transfer files from links. Use only ( .png, .jpg, .jpeg, .gif, .zip) files direct links.</p>
      </div>

      <div class="flex items-center gap-5">
        <div class="cursor-pointer">
          <img
            :src="IconDel"
            alt=""
          >
        </div>

        <svg
          id="rot-icon"
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        ><polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" /></svg>

        <SortBy />

        <button
          type="button"
          class="flex items-center gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            t="1551322312294"
            viewBox="0 0 1024 1024"
            version="1.1"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          ><defs /><path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z" /><path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z" /></svg>
          <span>New Upload</span>
        </button>
      </div>
    </div>

    <div class="mt-5">
      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column
          prop="file_name"
          label="File Name"
          width="400"
        />
        <el-table-column
          prop="link"
          label="Link"
          width="450"
        />
        <el-table-column
          prop="size"
          label="Size"
          width="250"
        />
        <el-table-column
          prop="status"
          label="Status"
          width="250"
        />
        <el-table-column />
      </el-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconDel from '~/assets/images/icon-del.svg'
import SortBy from '~/components/common/SortByDropdown.vue'

definePageMeta({
  middleware: 'auth',
})

const tableData = ref([])
</script>

  <style lang="scss" scoped></style>
