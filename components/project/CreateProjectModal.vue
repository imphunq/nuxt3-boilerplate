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
            <span class="text-xl font-semibold">Add New Project</span>

            <span
              v-if="step === 1"
              class="text-blue-500 cursor-pointer text-sm"
              @click="directUpload"
            >Direct Upload</span>
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
        v-show="step === 1"
        ref="formRef"
        :model="form"
        :rules="rules"
        label-position="top"
        size="large"
      >
        <el-form-item
          prop="name"
          label="Project Name"
        >
          <el-input v-model="form.name">
            <template #prefix>
              <img
                :src="PencilIcon"
                alt=""
              >
            </template>
          </el-input>
        </el-form-item>

        <ul class="grid w-full gap-6 md:grid-cols-2">
          <li>
            <input
              id="project-private"
              v-model="form.privacy"
              type="radio"
              name="privacy"
              value="private"
              class="hidden peer"
              required
            >
            <label
              for="project-private"
              class="border-solid border-gray-200 flex gap-5 items-center w-full p-5 text-gray-500 bg-white border rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                :src="Private"
                alt=""
              >
              <div class="block">
                <div class="w-full font-semibold">Private</div>
                <div class="w-full text-xs">Only people you invite can see this project. You can choose who can edit.
                </div>
              </div>
            </label>
          </li>
          <li>
            <input
              id="project-public"
              v-model="form.privacy"
              type="radio"
              name="privacy"
              value="public"
              class="hidden peer"
            >
            <label
              for="project-public"
              class="border-solid flex gap-5 items-center w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                :src="Public"
                alt=""
              >
              <div class="block">
                <div class="w-full font-semibold">Public</div>
                <div class="w-full text-xs">Anyone on the internet can see this project.</div>
              </div>
            </label>
          </li>
        </ul>

        <div class="flex items-center justify-between mt-[22px] gap-6">
          <div class="list-colors block w-1/2">
            <p class="mb-2 font-semibold">
              Color
            </p>

            <div class="flex items-center gap-2">
              <div
                v-for="(color, index) in colors"
                :key="index"
                :style="{ background: color }"
                class="pr-color w-4 h-4 rounded-full cursor-pointer"
                @click="selectColor(color)"
              >
                <div
                  class="inner-pr-color h-full"
                  :style="{ borderBottom: selectedColor === color ? '1.5px solid black' : '1.5px solid transparent' }"
                />
              </div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"
                />
                <path
                  d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                />
              </svg>
            </div>
          </div>

          <div class="list-icon block w-1/2">
            <p class="mb-2 font-semibold">
              Icon
            </p>

            <div class="flex items-center gap-2">
              <div
                v-for="(icon, index) in icons"
                :key="index"
                :style="{ content: `url(${icon})` }"
                class="pr-icon cursor-pointer h-full"
                :class="{ 'border-bottom-selected': selectedIcon === icon }"
                @click="selectIcon(icon)"
              />
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"
                />
                <path
                  d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                />
              </svg>
            </div>
          </div>
        </div>

        <el-form-item
          prop="description"
          label="Description (optional)"
          class="mt-[22px]"
        >
          <el-input
            v-model="form.description"
            type="textarea"
            :rows="6"
          />
        </el-form-item>
      </el-form>

      <SelectPrototype
        v-show="step === 2"
        v-model="form.device"
      />

      <template #footer>
        <div class="dialog-footer">
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
              :disabled="loading"
              @click="handleCreateProject"
            >
              Create Project
            </button>
          </template>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import type { FormInstance, FormRules } from 'element-plus'
import SelectPrototype from './SelectPrototype.vue'
import { PRIVACY } from '~/constants/project'
import type { IProjectCreate } from '~/types'
import PencilIcon from '~/assets/images/pencil.png'
import Private from '~/assets/images/private.png'
import Public from '~/assets/images/public.png'
import { createProject } from '~/api/projects'

const dialogFormVisible = ref(false)
const step = ref<number>(1)

const formInitial = reactive<IProjectCreate>({
  name: '',
  privacy: 'private',
  // background_color: '',
  // icon_id: {
  //   id: 0,
  //   icon: '',
  // },
  description: '',
  device: 'web',
})

const loading = ref<boolean>(false)
const selectedColor = ref<string>('')
const selectedIcon = ref<string>('')

const emit = defineEmits(['direct-upload'])

const { formRef, form, handleSubmit, resetForm } = useForm(formInitial)

const rules = reactive<FormRules<IProjectCreate>>({
  name: [
    { required: true, message: 'Please input project name', trigger: 'blur' },
  ],
})

const colors = [
  'rgb(48, 42, 93)',
  'rgb(174, 165, 248)',
  'rgb(255, 179, 65)',
  'rgb(109, 190, 179)',
  'rgb(241, 82, 82)',
  'rgb(0, 132, 255)',
  'rgb(144, 162, 180)',
  'rgb(98, 200, 142)',
  'rgb(95, 65, 255)',
]

const icons = [
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAPCAYAAAALWoRrAAAABHNCSVQICAgIfAhkiAAAAbdJREFUOE+VlM9xglAQxncf5hw6iFYQU0G4ZtRRC1BCBUoHWAF2AOrkLI46OcYS6CCUwDEHYLPvKUQi/tuLI7vvx/e93QVd77MuRNIFIXTIIByZrRUcwp1v3xHI5L+GekQUA2JASDN70Nnldf9/0Z1tuBBiPhEDYd0227p8EYp0yc+b5w5yfUBpYtlWn8+WA935JmIFvm12HJlyvaWOovbNivTzwEOGIByb7ZcKqLLosaU+Wwrc+XqHgK9XgTmXaJILys+gUjfb+AzuohBTIlKKbw6+Z8qSxvE1KGgBRpBNuTtylyWlBXjfbe9eKrsrXUGhtAB/bJuQUsCJp1vhF6FyLgGzCJIkBFFzEHF0C5gALXvY8qvtL9Y9JFwyzBkNWhN3sTaAYMrT8HwJTqnWyPO29Rad2ue5VdYJIhJkyc1RDoCcqishgJU9bPfyCZKTcApldaz260+Z3JyaDfATg/bAcBgfw6VKqU4uDedDXiTZj9NQyoimiPB4lPUZMFEApTzjSeElUd8D2CGKkBtmEO96JVTNLe8/iJSbVZ7d406rGi3tcbnB17Nfa01IJ9dDNewQl75Oec0vy1jbLZmjdv8AAAAASUVORK5CYII=',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAYAAADQWvz5AAAABHNCSVQICAgIfAhkiAAAAWxJREFUOE+Vk8txwkAQRGcQVPkGGdhkQAagO1RBAOaTgRSBTQRLBnxcPhsXcDYZABFACFxdaLc9Ej8hCQlzY2end9T9hinhp8azd2auOu26nVRPOuPooRp+lTiX3xJzCYyW+9qYPiIWFxrPR8zUCZpBO6dTL/9bSH0uKqyxCjeCyHXb9UGW2M1EajJbMnH1pgnYw3gy1VPJsvDs17T+3bi91j587yKkPmY1Bv8kvQygTyY/YktvQ/UB9KF/FrwKTeY7+RO8mCimrTLlvK6k+Xapg9YwB9sXC4TUZNFlwjDdB0yhvR7lCjsJo3i9i6nTbrQ4HHeWoYKDTeCKvK5uApFp+QTfddx0taUPqYrY4CfL0cOHpjIsXp1Y83GTMGJAZgkdrSisiOnlfDeY6F7jed9idaDir0/Mo7tCKVxFyP8W8pupn5aFBQgb0l7twlGaL0J8UyIfRGEFaEzm4MTIzjRZFpqMOXrjeevorv0BQzajKf5gSpkAAAAASUVORK5CYII=',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAABHNCSVQICAgIfAhkiAAAAX1JREFUOE+tU8FRwlAQ3SV4pwNjBUIFwhkykrMjgQrkd0AHHysgxALEAcajKSEdiB3gOSTr/p9E8jOADOPO5PJ39+Xt27cIlZCzdxut5Imfm/y1dZpgAwghIc3FoxNWe7D8IOfLKSIqgFMRUhK7YuRui6JfEDlf+Yjg/QGQpZkZpXGrANIgZzIw8QmisddrqUfMNfg8i0GliABHYtD1scyCAN7EoNeXwWrBFO/LPZz7giRugnU15JzMx9JsUAbLEAHv8mEX44HjHgIpdDBAlDyJdYPTYMU/uTx47Z3/AWHqG57x+lIuZCFrUvGHUhww3RwFJZgUGhLBt/B6DZQvyzYSfuybSIt7CKRaS0TPwnPGmdmMDel2n60tytaWwXqIlEpAbGjTMgtIY1vVZCCz1wavLjK0IdpyQ5T7weYDtA3f8FaKY9zfjgaqK8/cnhJZM6hRv3zNxhVno62HACnPaYLpZiAf0t2kPKa+nWN/VTcF9V02Qq22FQ/dbLQD8QO7dbR65lWiNQAAAABJRU5ErkJggg==',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAPCAYAAAALWoRrAAAABHNCSVQICAgIfAhkiAAAAZxJREFUOE+VlN1VwkAQhe8kwVcpgQ7ECuTVoxyxAE2sAFMBoYKkAxIsQD3o8RU60A6wg/gM2XE2fydAiHGeEnbmZvd+eyE0lP+0GBCTDeYRiLpgfBIQjO3rqGlOeg4rF5vIyqB2mLEmcKDUNnIfbuP9nh1Rf/7uEPMEhF7TTso15pgMI1BbQ8Qv18Xv5M+eu4Z1MmbFTmux+i+GnJhTLU5+9BYT4bTVzlo0sUnnJP6NBIBHoLMWM0dbmPED8dm1h6KVl4aTi1/8R5yBb4A89/4qLD3dF/BnHz0YiSeW2E3iDF4Jg8C9G77U0k9hGZ0bpcxVQTET3zqyi8eq53LMCAaHIrbUYtmsZStlvRazAmqhPRinlzurJRNPi6F0UFuja2utqx8lM5mUwchm5QZsXPLnC0lJDaQj6SlTBsgpdiuFpcx+Ciq/AY8ifghJ0iPe6aPGAnIgz/0DsRQWAiSbUCdsN1H6mIqcvyAVogLrCzCCKnm9Vp/9/AbI+qguGDl5r+p7dfe1okWDJguzI97Jv5Qu8RnKCqo537dCv/8Clyi4G0HBHm0AAAAASUVORK5CYII=',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAZNJREFUOE+lU0FygkAQnAE9x7wg5gXRFwTPYsWcU4HwA/cFIS9YfqCSylmq1MpR8wOewBPMOcBkFlyClHjJHihmd6a3Z7oXobHk+9pCQhcILEDoH4/3SBTleboU3uOhXoI6kPNVD83uimOrCVrFRAcywBPPk0jvFQBFsdHd8Y2D1uLaAQF6whkv1FYJEK73CHiv/ongm78B5Gmg6XJbU27J55w7jUMmDsXTOMZjz7uquIOWOjjHRIabiG980HOZOfYI5XKzQAS3BKA34U78tjZUq2B0E86/KvIz8xYZNWHUm3Lj57o55SbYyYVIIwzCDekkplSp0spiufYR8VUz/h8Aq8Et1BRgSqzx/pKUnB9rNZQSagYz5i2LIoJ45trDVvrh9gWB5lox4do9bE6WUSLKUq85TKmKKZeA2CvvAiEcOyiNxEZh/ysbl4sty4kRDyspwpymdZcS0JdwJpY6+3sLNXqXZqCKIUunmuGJbPJjO4AsZ1qlreursDiCr2jX98/qLueffeikfcjVkzYSMCFus/cvYgTC/Y4uklMAAAAASUVORK5CYII=',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAABHNCSVQICAgIfAhkiAAAARdJREFUOE+V1E9SwjAUBvD31e7hJnoD7BpZsHYc9AbkBOIJ4g0YmHGtMwxrewS8CXvafpgyhLbkT+mySX7J+15aSOTRX9sHlNQsD1P1Nt2HpiM0WENF9SvAUCg7VocsBHqxFnTeMQI6MSfUA7zCuhCFfwKZS4UfQAa16TlhC3NCZfFocjJjUjAPgRYLQecKY2CN9YH6gLgFioHQ600Owcg2C8zUyySPXubVZgHg3a4jP6CX30O5Sw14f+oU90yTTD2Pdz5Qr7evEC4vkKzU7On/ncnsBtAHGefSzR5gCGphsRPGoCvMByJJPkkuuhl1M3V/m92SG6vIU9iu5vj/Gg4wBDnLbO7Y7HIMimI2wySdq9nEZua7f0ezfxVzJ1MBbgAAAABJRU5ErkJggg==',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAABHNCSVQICAgIfAhkiAAAAXlJREFUOE/tlNFRwkAQhncTeZYOpAStQF4dyIwWIJEKyFXAUcGFCpBYgMwEx0exA0vADvDVAdb/LpOQ4DE24D1kktvb3X833x7TiWWe8i4Lj2Feyy6cqOHN2neUjzfN7LXD4dYQ8W3dxsx6v/2equHdprFffpjZc5vDls2YnFJFIhtk1KM4mpZnnAIzzzVeRsTcLg1C8k5MmiToEIm1X1SBBWUFotR9tGCTLdd1oxB9Qr5Wg95jXYlNgv2Emc6rJEJzTrMlfJBD6AvPVMURDvqXLZOCM41+jJwPVB4C4EMNou7J+msGk+UrJr7+D3DUA7T0I4n7V3810QEXtN7AyGWjic4RgBSk9ee+QMfAuQAAKYEj/u0BEDivhGUC0laO1OzlgUXGyAoqi+WAY0kKlAtAQJmbvtqSBeizeFd8OOCAuBr0U3uwMY12EinYWTWxrwQRmdB+m9Yn8tc4O0W4C1xZoM3JBfO0D7XvTvAGKLMjkL0TNmUvfKp+AL9w0uytpaI8AAAAAElFTkSuQmCC',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAATCAYAAACp65zuAAAABHNCSVQICAgIfAhkiAAAARtJREFUKFONksFRwzAQRfdDAVBCqAB3gAswM9AAIhUQdwAViA5im+HuGSfDMemAlJASwtm2lpWxHDkWM9FRevp/d/+CAkd/VDEYipgiAkWLpwTwOb38muGyXcpd7N+PQP25jtCYDQHXpyYD2CldNN8+xEw/8qEk4n2q7l87a11UWxDunJJAOZl6kc4fD+4OfeEbH0pV8nxqD52vMmlJ2YfOztQzX+moWFQ7sb3twTykZt/wXqz4aMtvtvDQbM8HpePzrP1mpJsDm+Ym3MxfrsN4pL5MkphPxhMauIW5rdPRwDtQcqaGtzLPq0GJaS+bU4Jp96KSfNgemxAZlCO4/zVdM6vcmswF4NQnoHvQxVqy5gdZ3Ng6/AuGkvkFVWaMFPxFRgQAAAAASUVORK5CYII=',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAADFJREFUOE9jnLBoy38GCgDj4DKgIM6HkRjfILsaxQujBjAwjIYBFcKAmFSIrmbgMxMAMC1WYWkPhboAAAAASUVORK5CYII=',
]

const open = () => {
  dialogFormVisible.value = true
}

const close = () => {
  dialogFormVisible.value = false
}

const directUpload = () => {
  emit('direct-upload')
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

const handleCreateProject = async () => {
    loading.value = true

    await createProject(form.value)

    loading.value = false
    dialogFormVisible.value = false

    navigateTo('/projects')

    ElMessage({
      message: 'Project created successfully',
      type: 'success',
    })
}

const back = () => {
  step.value = 1
}

const selectColor = (color: string) => {
  selectedColor.value = color

  // form.value.background_color = color
}

const selectIcon = (icon: string) => {
  // form.value?.icon_id?.icon = icon

  selectedIcon.value = icon
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
</style>
