<template>
  <el-table
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column
      type="selection"
      width="55"
    />
    <el-table-column
      label="Link"
      prop="link"
    />
    <el-table-column
      property="project"
      label="Project"
      width="150"
    />
    <el-table-column
      property="created_by"
      label="Created By"
      width="150"
    />
    <el-table-column
      property="date"
      label="Date"
      width="180"
    />
    <el-table-column
      property="type"
      label="Type"
      width="180"
    />
  </el-table>
</template>

<script lang="ts" setup>
const tableData: any[] = []
</script>
