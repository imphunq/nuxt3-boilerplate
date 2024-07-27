<template>
  <div>
    <div class="flex items-center justify-between">
      <div>
        <p class="font-bold text-xl mb-2">
          Last Uploads
        </p>
      </div>

      <div class="flex items-center gap-5">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        ><path
          fill="none"
          stroke-miterlimit="10"
          stroke-width="32"
          d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
        /><path
          fill="none"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="32"
          d="M338.29 338.29L448 448"
        /></svg>

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
          r="3"
        /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>

        <SortBy />
      </div>
    </div>

    <div class="mt-5">
      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column
          type="selection"
          width="55"
        />
        <el-table-column
          prop="file_name"
          label="File Name"
          min-width="400"
        >
          <template #default="scope">
            <div class="flex items-center gap-2">
              <img
                class="w-4 h-4"
                :src="IconFile"
                alt="icon file"
              >

              <span>{{ scope.row.file_name }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          prop="screens"
          label="Screens"
          width="150"
        />
        <el-table-column
          prop="size"
          label="Size"
          width="150"
        />
        <el-table-column
          prop="date_modified"
          label="Date modified"
          width="250"
        />
        <el-table-column>
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <div class="three-dots cursor-pointer text-gray-400">
                <svg
                  class="text-xl"
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                ><path
                  fill="none"
                  d="M0 0h24v24H0z"
                /><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>
              </div>
            </span>
            <template #dropdown />
          </el-dropdown>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SortBy from '~/components/common/SortByDropdown.vue'
import IconFile from '~/assets/images/icon-file.png'

definePageMeta({
  middleware: 'auth',
})

const tableData = ref([{
  id: 1,
  file_name: 'example file name',
  screens: 34,
  date_modified: 'November 12, 2021 9:21 AM',
  size: '24.55 KB',
}])
</script>

  <style lang="scss" scoped></style>
