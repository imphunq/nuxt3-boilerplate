<template>
  <div>
    <p class="text-lg mb-[19px]">
      Profile
    </p>

    <el-form>
      <div class="flex items-center w-full">
        <div class="account-avatar block w-2/12">
          <span class="mb-6">Profile Picture</span>

          <img
            class="rounded-full w-32 h-32 mb-4 mt-4"
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt="Extra large avatar"
          >

          <span class="flex items-center text-blue-400 gap-2 cursor-pointer text-xs">
            <svg
              class="w-6 h-6 text-red-500 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <span>Remove image</span>
          </span>
        </div>

        <div class="flex flex-col gap-6 w-10/12">
          <div class="flex items-center gap-6 w-full">
            <el-form-item
              label="Full Name"
              label-position="top"
              class="w-1/2"
            >
              <el-input
                v-model="form.fullname"
                size="large"
              />
            </el-form-item>

            <el-form-item
              label="Username"
              label-position="top"
              class="w-1/2"
            >
              <el-input
                v-model="form.username"
                size="large"
              />
            </el-form-item>
          </div>

          <div class="flex items-center gap-6 w-full">
            <el-form-item
              label="Email"
              label-position="top"
              class="w-1/2"
            >
              <el-input
                v-model="form.email"
                size="large"
              />
            </el-form-item>

            <el-form-item
              label="Role"
              label-position="top"
              class="w-1/2"
            >
              <el-input
                v-model="form.role"
                size="large"
              />
            </el-form-item>
          </div>
        </div>
      </div>

      <div class="mt-4">
        <p class="text-sm text-gray-400 mb-[19px]">
          Optional
        </p>

        <div class="grid grid-cols-2 gap-14 w-full">
          <div>
            <el-form-item
              label="Profile Short Bio"
              label-position="top"
              size="large"
            >
              <el-input v-model="form.bio" />
            </el-form-item>
          </div>

          <div class="flex items-center gap-4">
            <el-form-item
              label="Day"
              label-position="top"
              size="large"
              class="w-full"
            >
              <el-select
                v-model="form.day"
                placeholder="Day"
                size="large"
              >
                <el-option
                  v-for="(item, index) in []"
                  :key="index"
                  :label="`Label`"
                  :value="`value`"
                />
              </el-select>
            </el-form-item>

            <el-form-item
              label="Month"
              label-position="top"
              size="large"
              class="w-full"
            >
              <el-select
                placeholder="Month"
                size="large"
              >
                <el-option
                  v-for="(item, index) in []"
                  :key="index"
                  :label="`Label`"
                  :value="`value`"
                />
              </el-select>
            </el-form-item>

            <el-form-item
              label="Year"
              label-position="top"
              size="large"
              class="w-full"
            >
              <el-select
                placeholder="Year"
                size="large"
              >
                <el-option
                  v-for="(item, index) in []"
                  :key="index"
                  :label="`Label`"
                  :value="`value`"
                />
              </el-select>
            </el-form-item>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-14 w-full">
          <div>
            <el-form-item
              label="Phone number"
              label-position="top"
              size="large"
            >
              <el-input v-model="form.phone_number" />
            </el-form-item>
          </div>

          <div>
            <el-form-item
              label="Country"
              label-position="top"
              size="large"
              class="w-full"
            >
              <el-select
                v-model="form.country"
                placeholder="Country"
                size="large"
              >
                <el-option
                  v-for="(item, index) in []"
                  :key="index"
                  :label="`Label`"
                  :value="`value`"
                />
              </el-select>
            </el-form-item>
          </div>
        </div>

        <el-divider />

        <p class="text-lg mb-[19px]">
          Time
        </p>

        <div class="grid grid-cols-2 gap-14 w-full">
          <div class="w-full">
            <el-form-item
              label="Time Zone"
              label-position="top"
              size="large"
              class="w-full"
            >
              <el-select
                v-model="form.time_zone"
                placeholder="Select"
                size="large"
              >
                <el-option
                  v-for="(item, index) in []"
                  :key="index"
                  :label="`Label`"
                  :value="`value`"
                />
              </el-select>
            </el-form-item>
          </div>
          <div class="w-full">
            <el-form-item
              label="Date format"
              label-position="top"
              class="w-full"
            >
              <el-date-picker
                v-model="form.date"
                type="date"
                aria-label="Pick a date"
                placeholder="Pick a date"
                size="large"
                class="w-full"
              />
            </el-form-item>
          </div>
        </div>

        <el-divider />
      </div>
    </el-form>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})

const form = reactive({
  fullname: '',
  username: '',
  email: '',
  role: '',
  bio: '',
  day: '',
  month: '',
  year: '',
  time_zone: '',
  date: '',
  phone_number: '',
  country: '',
})
</script>

<style lang="scss" scoped></style>
