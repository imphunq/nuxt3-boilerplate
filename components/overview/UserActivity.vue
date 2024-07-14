<template>
  <div class="h-64 border border-solid border-gray-200 rounded-lg p-4">
    <div class="mb-8 flex justify-between items-center">
      <div class="flex items-center gap-1">
        <span class="text-sm">Activity</span>
        <span class="text-xs text-blue-500">Show Profile</span>
      </div>

      <div>
        <DropdownTime />
      </div>
    </div>

    <CalendarHeatmap
      :values="values"
      end-date="2023-06-31"
      start-date="2023-01-01"
      :no-data-text="''"
      :tooltip="false"
      :range-color="['#EFEFEF', '#A1CAF1', '#55ABFB', '#0084FF', '#0862B5']"
    />
  </div>
</template>

<script lang="ts" setup>
import { CalendarHeatmap } from 'vue3-calendar-heatmap'
import DropdownTime from '~/components/common/DropdownTime.vue'

const values = [
  { date: '2023-01-01', count: 12 },
  { date: '2023-01-22', count: 122 },
  { date: '2023-01-30', count: 38 },
  { date: '2023-02-01', count: 12 },
  { date: '2023-02-22', count: 122 },
  { date: '2023-02-30', count: 38 },
  { date: '2023-05-01', count: 12 },
  { date: '2023-05-22', count: 122 },
  { date: '2023-05-30', count: 38 },
]
</script>

<style lang="scss">
.vch__days__labels__wrapper {
  display: none;
}

.vch__legend {
  display: flex;
  align-items: center;
  margin-top: 5px;
  justify-content: center;
}

.vch__day__square {
  width: 10px;
  height: 10px;
}
</style>
