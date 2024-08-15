<template>
  <div class="border border-solid border-gray-200 rounded-lg">
    <div class="p-4">
      <div class="mb-8 flex justify-between items-center">
        <div>
          <span class="text-sm mr-3">Team Activity</span>
        </div>

        <div>
          <DropdownTime />
        </div>
      </div>

      <VueApexCharts
        max-width="600"
        height="310"
        type="line"
        :options="options"
        :series="series"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import VueApexCharts from 'vue3-apexcharts'
import DropdownTime from '~/components/common/DropdownTime.vue'

const options = {
  chart: {
    id: 'vuechart-task-completion',
    // width: '100%',
  },
  xaxis: {
    categories: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
}

const series = [
  {
    name: 'New Projects',
    data: [30, 40, 35, 50, 49],
  },
  {
    name: 'New Screens',
    data: [10, 45, 25, 30, 35],
  },
]
</script>
