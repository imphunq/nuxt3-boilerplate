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
            <el-button
              :icon="Back"
              circle
              @click="back"
            />
            <span class="text-xl font-semibold">Add New Project</span>
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
          prop="project_title"
          label="Project Name"
        >
          <el-input v-model="form.project_title">
            <template #prefix>
              <img
                :src="PencilIcon"
                alt=""
              >
            </template>
          </el-input>
        </el-form-item>

        <div class="flex items-center gap-5 justify-between">
          <div class="w-1/2">
            <el-form-item
              prop="privacy"
              label="Project Type"
            >
              <el-select
                v-model="form.privacy"
                size="large"
              >
                <template #prefix>
                  <img
                    :src="PrivateIcon"
                    class="mr-2"
                    alt=""
                  >
                </template>
                <el-option
                  v-for="item in privacyOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </div>

          <div class="w-1/2">
            <el-form-item
              prop="projectdevice"
              label="Prototype"
            >
              <el-select
                size="large"
              >
                <template #prefix>
                  <img
                    :src="PrototypeIcon"
                    class="mr-2"
                    alt=""
                  >
                </template>
                <el-option
                  v-for="item in prototyOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </div>
        </div>
      </el-form>
      <el-upload
        class="upload-screen"
        drag
        action=""
        multiple
      >
        <div class="el-upload__text mb-6 text-sm">
          <p>Drag and Drop files or click Upload to browse from your computer.</p>
        </div>

        <div class="btn-upload flex justify-center">
          <button
            type="button"
            class="flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            <svg
              class="mr-2 upload-icon"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            ><path d="M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 0 0-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" /></svg>
            <span>Upload</span>
          </button>
        </div>
        <!-- <template #tip>
          <div class="el-upload__tip">
            jpg/png files with a size less than 500kb
          </div>
        </template> -->
      </el-upload>
      <template #footer>
        <div class="dialog-footer flex items-center justify-between">
          <div>
            <span class="text-xs text-blue-400 cursor-pointer">Clean All Uploads</span>
          </div>
          <div>
            <span
              class="cursor-pointer mr-4 text-gray-500"
              @click="close"
            >Cancel</span>
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              @click="onSubmit"
            >
              Create Project
            </button>
          </div>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import type { FormInstance, FormRules } from 'element-plus'
import { Back } from '@element-plus/icons-vue'
import { PRIVACY } from '~/constants/project'
import type { IProjectCreate, ILabelValue } from '~/types'
import PencilIcon from '~/assets/images/pencil.png'
import PrototypeIcon from '~/assets/images/prototype.svg'
import PrivateIcon from '~/assets/images/icon-private.svg'

const emit = defineEmits(['normal-upload'])

const dialogFormVisible = ref(false)

const formInitial = reactive<IProjectCreate>({
  project_title: '',
  privacy: 'private',
  background_color: '',
  // icon_id: {
  //   id: 0,
  //   icon: '',
  // },
  project_description: '',
  projectdevice: 'web',
})

const { formRef, form, handleSubmit, resetForm } = useForm(formInitial)

const rules = reactive<FormRules<IProjectCreate>>({
  project_title: [
    { required: true, message: 'Please input project name', trigger: 'blur' },
  ],
})

const privacyOptions: ILabelValue[] = [
  { label: 'Private Project', value: PRIVACY.PRIVATE },
  { label: 'Public Project', value: PRIVACY.PUBLIC },
]

const prototyOptions: ILabelValue[] = [
  { label: 'Web', value: 'web' },
  { label: 'Mobile', value: 'mobile' },
  { label: 'Iphone', value: 'iphone' },
  { label: 'Ipad', value: 'ipad' },
  { label: 'Android', value: 'android' },
  { label: 'Tablet', value: 'tablet' },
  { label: 'Apple', value: 'apple' },
  { label: 'Android', value: 'android_wear' },
  { label: 'Custom', value: 'custom' },
]

const open = () => {
  dialogFormVisible.value = true
}

const close = () => {
  dialogFormVisible.value = false
}

const onSubmit = () => {
  handleSubmit(
    (form) => {
      console.log('submit!', form)
    },
    () => {
      console.log('Custom error handling')
    },
  )
}

const back = () => {
  emit('normal-upload')
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

  .upload-icon {
    color: #fff;
  }
}
</style>
