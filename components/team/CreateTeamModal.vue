<template>
  <div>
    <el-dialog
      v-model="dialogFormVisible"
      class="team-dialog"
      width="680"
      :show-close="false"
      :destroy-on-close="true"
      :close-on-click-modal="false"
      @close="resetForm"
    >
      <template #header="{ close, titleId, titleClass }">
        <div class=" flex items-center justify-between border-b border-solid border-gray-200 px-6 py-6">
          <div class="flex items-center gap-4">
            <span
              v-if="step === 1"
              class="text-xl font-semibold"
            >Add New Team</span>

            <span
              v-else
              class="text-xl font-semibold"
            >Add People to {{ form.name }}</span>
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
          v-show="step === 1"
          prop="name"
          label="Team Name"
        >
          <el-input
            v-model="form.name"
            placeholder="Enter team name"
          >
            <template #prefix>
              <img
                :src="PencilIcon"
                alt=""
              >
            </template>
          </el-input>
        </el-form-item>

        <el-form-item
          v-show="step === 1"
          prop="type"
          label="Type"
        >
          <el-select
            v-model="form.type"
            size="large"
          >
            <template #prefix>
              <img
                :src="GroupUserIcon"
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

        <el-form-item
          v-show="step === 1"
          prop="description"
          label="Description (optional)"
          class="mt-[22px]"
        >
          <el-input
            v-model="form.description"
            placeholder="Add team description"
            type="textarea"
            :rows="6"
          />
        </el-form-item>

        <div v-show="step === 2">
          <p class="mb-6">
            Type emails of people you want to add to your team. You can also invite others as guests.
          </p>

          <el-form-item
            prop="emails"
          >
            <template #label>
              <div class="flex items-center justify-between">
                <span>Email or Username</span>
                <span class="text-sm text-blue-500 cursor-pointer">Skip this step</span>
              </div>
            </template>
            <el-input
              v-model="form.emails"
              placeholder="Write email here"
              type="textarea"
              :rows="8"
            >
              <template #prefix>
                <img
                  :src="PencilIcon"
                  alt=""
                >
              </template>
            </el-input>
          </el-form-item>
        </div>
      </el-form>

      <template #footer>
        <div class="dialog-footer flex items-center justify-between">
          <div class="text-sm text-blue-500 cursor-pointer">
            <span v-if="step === 1">Use existing Team as template</span>
            <span v-else>Copy invite link</span>
          </div>
          <div>
            <template v-if="step === 1">
              <span
                class="cursor-pointer mr-4 text-gray-500"
                @click="close"
              >Cancel</span>
              <button
                v-if="step === 1"
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                @click="nextStep"
              >
                Next
              </button>
            </template>
            <template v-else>
              <span
                class="cursor-pointer mr-4 text-gray-500"
                @click="back"
              >Back</span>
              <button
                v-if="step === 2"
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                @click="createTeam"
              >
                Create Team
              </button>
            </template>
          </div>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import type { FormRules } from 'element-plus'
import { PRIVACY } from '~/constants/project'
import type { ITeamCreate, ILabelValue } from '~/types'
import PencilIcon from '~/assets/images/pencil.png'
import GroupUserIcon from '~/assets/images/group-user.svg'

const dialogFormVisible = ref(false)
const step = ref<number>(1)

const formInitial = reactive<ITeamCreate>({
  name: '',
  type: 'private',
  description: '',
  emails: '',
})

const { formRef, form, handleSubmit, resetForm } = useForm(formInitial)

const rules = reactive<FormRules<ITeamCreate>>({
  name: [
    { required: true, message: 'Please input team name', trigger: 'blur' },
  ],
})

const privacyOptions: ILabelValue[] = [
  { label: 'Private Team', value: PRIVACY.PRIVATE },
  { label: 'Public Team', value: PRIVACY.PUBLIC },
]

const open = () => {
  dialogFormVisible.value = true
}

const close = () => {
  dialogFormVisible.value = false
  back()
}

const nextStep = () => {
  handleSubmit(
    (form) => {
      console.log('submit!', form)
      step.value = 2
    },
    () => {
      console.log('Custom error handling')
    },
  )
}

const createTeam = () => {
  handleSubmit(
    (form) => {
      console.log('submit!', form)
      dialogFormVisible.value = false
    },
    () => {
      console.log('Custom error handling')
    },
  )
}

const back = () => {
  step.value = 1
}

defineExpose({
  open,
  close,
})
</script>

  <style lang="scss">
  .team-dialog {
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
  </style>
