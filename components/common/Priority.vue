<template>
  <div>
    <el-tag :type="tag" class="priority-tag">
      <div class="flex items-center gap-1">
        <el-icon><Clock /></el-icon>
        <span class="capitalize">{{ type }}</span>
      </div>
    </el-tag>
  </div>
</template>

<script lang="ts" setup>
import { Clock } from '@element-plus/icons-vue'

interface Props {
  type: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'normal',
})

const tag = computed<'info' | 'warning' | 'danger' | 'success' | 'primary'>(() => {
  if (props.type === 'high') {
    return 'warning'
  }

  if (props.type === 'urgent') {
    return 'danger'
  }

  return 'info'
})
</script>

<style lang="scss">
.priority-tag {
  border-radius: 8px;
}
</style>
