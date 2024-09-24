<template>
  <el-table
    :data="shares"
    style="width: 100%"
  >
    <el-table-column
      type="selection"
      width="55"
    />
    <el-table-column
      label="Link"
      prop="link"
      show-overflow-tooltip
    >
      <template #default="{ row }">
        <div class="flex items-center gap-2">
          <a
            :href="row.share_key"
            target="_blank"
            class="text-blue-500"
          >
            {{ row.share_key }}
          </a>
          <div class="flex items-center justify-center gap-1 border border-gray-200 border-solid rounded-xl px-1 cursor-pointer">
            <el-icon><CopyDocument /></el-icon>
            <span>Copy</span>
          </div>
        </div>
      </template>
    </el-table-column>
    <el-table-column
      property="created_by"
      label="Created By"
      width="200"
      header-align="center"
    >
      <template #default="{ row }">
        <div class="text-center">
          <span>{{ row.members[0].name }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column
      property="date"
      label="Date"
      width="200"
      header-align="center"
    >
      <template #default="{ row }">
        <div class="text-center">
          <span>{{ moment(row.created_at).format('lll') }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column
      property="type"
      label="Type"
      width="180"
      header-align="center"
    >
      <template #default="{ row }">
        <div class="text-center">
          <span>{{ row.public === 1 ? 'Public Share Link' : 'Private Share Link' }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column width="200">
      <template #default="{ row }">
        <div class="flex items-center gap-1 text-center text-red-500 cursor-pointer" @click="openDeleteShare(row)">
          <el-icon><Delete /></el-icon>
          <span>Delete Link</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column width="70">
      <el-popover
        placement="bottom"
        trigger="click"
      >
        <template #reference>
          <el-icon class="cursor-pointer"><More /></el-icon>
        </template>

        <ul>
          <li class="cursor-pointer mb-2 hover:text-blue-400">Link Stats</li>
          <li class="cursor-pointer hover:text-blue-400">Settings</li>
        </ul>
      </el-popover>
    </el-table-column>
  </el-table>

  <div class="w-full flex justify-center mt-8">
    <Pagination :data="meta" />
  </div>

  <ModalConfirmDelete
    ref="modalConfirmDeleteRef"
    type="share"
    @delete="handleDelete"
  />
</template>

<script lang="ts" setup>
import moment from 'moment'
import type { IListShares, IPagination } from '~/types';
import Pagination from '~/components/common/Pagination.vue'
import { CopyDocument, More, Delete } from '@element-plus/icons-vue'
import { deleteShare } from '~/api/share'
import ModalConfirmDelete from '~/components/common/ModalConfirmDelete.vue'
import { deleteItemByValue } from '~/utils'

interface Props {
  shares: IListShares[];
  meta: IPagination;
}

const props = defineProps<Props>()

const shareStore = useShareStore()
const route = useRoute()
const id = route.params.id as string

const modalConfirmDeleteRef = ref<InstanceType<typeof ModalConfirmDelete> | null>(null)
const idDelete = ref<number>(0)
const shareKey = ref<string>('')

const openDeleteShare = async (row: IListShares) => {
  modalConfirmDeleteRef.value?.open(row.share_key)

  idDelete.value = row.id
  shareKey.value = row.share_key
}

const handleDelete = async () => {
  const { error } = await deleteShare(id, idDelete.value)

  if (error.value) {
    ElMessage({
      message: 'Something went wrong, please try again later',
      type: 'error'
    })

    return
  }

  modalConfirmDeleteRef.value?.close()

  clearCacheStartWith('project-shares')

  await shareStore.fetchProjectShares(
    id,
    route.query.page as string ?? '1',
    route.query,
  )

  deleteItemByValue(shareKey.value)

  idDelete.value = 0
  shareKey.value = ''

  ElMessage({
    message: 'Share link deleted successfully',
    type: 'success'
  })
}
</script>
