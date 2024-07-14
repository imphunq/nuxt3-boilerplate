<template>
  <div class="border border-solid border-gray-200 rounded-lg">
    <div class="p-4">
      <div class="mb-8 flex justify-between items-center">
        <div class="flex items-center gap-1">
          <span class="text-sm mr-3">Tasks Completion Rate</span>
          <span class="text-xs text-blue-500">View analytics</span>
        </div>

        <div>
          <DropdownTime />
        </div>
      </div>

      <VueApexCharts width="650" height="310" type="line" :options="options" :series="series"></VueApexCharts>
    </div>
  </div>
</template>

<script lang="ts" setup>
import VueApexCharts from "vue3-apexcharts"
import DropdownTime from '~/components/common/DropdownTime.vue'

const options = {
  chart: {
    id: 'vuechart-task-completion',
    // width: '100%',
  },
  xaxis: {
    categories: ['2024/07/01', '2024/07/02', '2024/07/03', '2024/07/04', '2024/07/05', '2024/07/06', '2024/07/07'],
  },
}

const series = [
  {
    name: 'Task Completion Rate',
    data: [30, 40, 45, 50, 49, 60, 70],
  },
]
</script>
