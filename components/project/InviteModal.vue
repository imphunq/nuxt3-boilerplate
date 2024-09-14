<template>
  <div>
    <el-dialog
      v-model="dialogFormVisible"
      class="invite-dialog"
      width="680"
      :show-close="false"
      :destroy-on-close="true"
      :close-on-click-modal="false"
      @close="resetForm"
    >
      <template #header="{ close, titleId, titleClass }">
        <div class=" flex items-center justify-between border-b border-solid border-gray-200 px-6 py-6">
          <div class="flex items-center gap-4">
            <span class="text-xl font-semibold">Invite People</span>
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

      <div class="text-left mb-5">
        <p class="text-sm">
          Everyone invited can upload, edit, invite others or share the project by default. You can give custom permissions to the people you invite. Or share the project via Manage Shared Links
        </p>
      </div>

      <el-form
        ref="formRef"
        :model="form"
        :rules="rules"
        label-position="top"
        size="large"
      >
        <el-form-item
          prop="email"
          label="Email"
        >
          <el-input v-model="form.email">
            <template #prefix>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path></svg>
            </template>
          </el-input>
        </el-form-item>
      </el-form>

      <template #footer>
        <div class="dialog-footer">
          <span
            class="cursor-pointer mr-4 text-gray-500"
            @click="close"
          >Cancel</span>
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            :disabled="loading"
            @click="handleInviteToProject"
          >
            Add
          </button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import type { FormInstance, FormRules } from 'element-plus'
import type { IInvite } from '~/types'
import { inviteToProject } from '~/api/projects'

const route = useRoute()
const id = route.params.id as string

const dialogFormVisible = ref(false)

const formInitial = reactive<IInvite>({
  email: '',
})

const loading = ref<boolean>(false)

const emit = defineEmits(['direct-upload'])

const { formRef, form, handleSubmit, resetForm } = useForm(formInitial)

const rules = reactive<FormRules<IInvite>>({
  email: [
    {
      required: true,
      message: 'Please input email',
      trigger: 'blur',
      type: 'email',
    },
  ],
})

const open = () => {
  dialogFormVisible.value = true
}

const close = () => {
  dialogFormVisible.value = false
}

const handleInviteToProject = async () => {
  handleSubmit(
    async (form) => {
      loading.value = true

      const { error } = await inviteToProject(id, form)

      if (error.value) {
        loading.value = false

        ElMessage({
          message: 'Something went wrong, please try again',
          type: 'error',
        })

        return
      }

      loading.value = false
      dialogFormVisible.value = false

      close()

      ElMessage({
        message: 'Invite successfully',
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
.invite-dialog {
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
  .invite-dialog {
    width: 90%;
  }
}

@media screen and (min-width: 769px) {
  .invite-dialog {
    width: 70%;
  }
}

@media screen and (min-width: 1024px) {
  .invite-dialog {
    width: 50%;
  }
}

@media screen and (min-width: 1280px) {
  .invite-dialog {
    width: 40%;
  }
}
</style>
