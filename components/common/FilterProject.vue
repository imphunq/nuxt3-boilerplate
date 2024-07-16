<template>
  <div>
    <button
      data-popover-target="popover-filter-project"
      data-popover-trigger="click"
      data-popover-placement="bottom"
      type="button"
    >
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" id="filter" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 3H5a1 1 0 0 0-1 1v2.59c0 .523.213 1.037.583 1.407L10 13.414V21a1.001 1.001 0 0 0 1.447.895l4-2c.339-.17.553-.516.553-.895v-5.586l5.417-5.417c.37-.37.583-.884.583-1.407V4a1 1 0 0 0-1-1zm-6.707 9.293A.996.996 0 0 0 14 13v5.382l-2 1V13a.996.996 0 0 0-.293-.707L6 6.59V5h14.001l.002 1.583-5.71 5.71z"></path></svg>
    </button>

    <div data-popover id="popover-filter-project" role="tooltip" class="absolute z-50 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
      <div class="p-6">
        <div class="p-2">
          <span class="font-bold">Add Filter</span>
        </div>

        <div class="flex items-center justify-between gap-5 p-2">
          <span>
            Project Type
          </span>

          <SelectByType />
        </div>

        <div class="flex items-center justify-between gap-5 p-2">
          <span>
            Owner
          </span>

          <SelectByUser />
        </div>

        <div class="flex items-center justify-between gap-5 p-2">
          <span>
            Owner
          </span>

          <SelectByTime />
        </div>

        <div class="flex items-center justify-between gap-5 p-2">
          <span>
            Project Status
          </span>

          <SelectByType />
        </div>

        <div class="flex items-center flex-1 justify-between gap-5 p-2">
          <span>
            Size
          </span>

          <input type="text" id="size" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter size" required />

          <SelectBySize />
        </div>

        <div class="flex items-center flex-1 justify-between gap-5 p-2">
          <span>
            Name
          </span>

          <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter name" required />

          <SelectByCondition />
        </div>

        <div class="flex items-center flex-1 justify-between gap-5 p-2">
          <span>
            Member
          </span>

          <input type="text" id="size" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter email or username" required />
        </div>

        <div class="flex items-center justify-between mt-4">
          <span>Save Filter as template</span>

          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Apply</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SelectByType from './select/SelectByType.vue'
import SelectByUser from './select/SelectByUser.vue'
import SelectByTime from './select/SelectByTime.vue'
import SelectBySize from './select/SelectBySize.vue'
import SelectByCondition from './select/SelectByCondition.vue'
</script>

<style lang="scss" scoped>
#popover-filter-project {
  width: 500px;
}
</style>
