<template>
  <div>
    <el-dialog
      v-model="dialogFormVisible"
      class="project-dialog"
      width="680"
      :show-close="false"
      :destroy-on-close="true"
      :close-on-click-modal="false"
      @close="resetForm"
    >
      <template #header="{ close, titleId, titleClass }">
        <div class=" flex items-center justify-between border-b border-solid border-gray-200 px-6 py-6">
          <div class="flex items-center gap-4">
            <span class="text-xl font-semibold">Move Project To Folder</span>
          </div>

          <button
            type="button"
            @click="close"
          >
            <svg
              class="text-xl"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"
              />
              <path
                d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
              />
            </svg>
          </button>
        </div>
      </template>
      <el-form
        ref="formRef"
        :model="form"
        :rules="rules"
        label-position="top"
        size="large"
      >
        <el-form-item
          prop="folder_id"
          label="Folder"
        >
          <el-select
            v-model="form.folder_id"
            placeholder="Select folder"
          >
            <el-option
              v-for="folder in folders"
              :key="folder.id"
              :label="folder.folder_name"
              :value="folder.id"
            />
          </el-select>
        </el-form-item>
      </el-form>

      <template #footer>
        <div class="dialog-footer">
          <span
            class="cursor-pointer mr-4 text-gray-500"
            @click="close"
          >Back</span>
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            :disabled="loading"
            @click="handleMoveToFolder"
          >
            Save
          </button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import type { FormInstance, FormRules } from 'element-plus'
import type { IMoveProjectToFolder, IProject, IFolder } from '~/types'
import PencilIcon from '~/assets/images/pencil.png'
import { updateProject } from '~/api/projects'
import { getFolders } from '~/api/folder'

const projectStore = useProjectStore()
const route = useRoute()

const dialogFormVisible = ref(false)

const formInitial = reactive<IMoveProjectToFolder>({
  folder_id: undefined,
  project_title: '',
})

const loading = ref<boolean>(false)
const project = ref<IProject>()
const folders = ref<IFolder[]>([])

const emit = defineEmits(['direct-upload'])

const rules = reactive<FormRules<IMoveProjectToFolder>>({
  folder_id: [
    { required: true, message: 'Please select folder', trigger: 'change' },
  ],
})

const open = async (projectData: IProject) => {
  const { data } = await getFolders()

  folders.value = data.value.data
  project.value = projectData

  form.value.folder_id = projectData.folder_id as number
  form.value.project_title = projectData.project_title

  dialogFormVisible.value = true
}

const { formRef, form, handleSubmit, resetForm } = useForm(formInitial)

const close = () => {
  dialogFormVisible.value = false

  formInitial.folder_id = undefined
}

const handleMoveToFolder = async () => {
  handleSubmit(
    async (form) => {
      loading.value = true

      const { error } = await updateProject(project.value!.id, form)

      if (error.value) {
        loading.value = false

        return ElMessage({
          message: 'Something went wrong, please try again',
          type: 'error',
        })
      }

      loading.value = false
      dialogFormVisible.value = false

      clearCacheStartWith('projects')

      await projectStore.fetchProjects(
        route.query.page as string ?? '1',
        route.query,
      )

      close()

      ElMessage({
        message: 'Move to folder successfully',
        type: 'success',
      })
    },
    () => {
    },
  )
}

defineExpose({
  open,
  close,
})
</script>

<style lang="scss">
.project-dialog {
  padding: 0;

  svg {
    color: #585858;
  }

  .el-dialog__body {
    padding: 12px 24px;
  }

  .el-dialog__footer {
    padding: 24px;
  }

  .border-bottom-selected {
    border-bottom: 1.5px solid black;
  }
}

@media screen and (max-width: 768px) {
  .project-dialog {
    width: 90%;
  }
}

@media screen and (min-width: 769px) {
  .project-dialog {
    width: 70%;
  }
}

@media screen and (min-width: 1024px) {
  .project-dialog {
    width: 50%;
  }
}

@media screen and (min-width: 1280px) {
  .project-dialog {
    width: 40%;
  }
}
</style>
