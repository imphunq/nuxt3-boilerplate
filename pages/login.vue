<template>
  <div class="login-content w-full relative flex flex-col-reverse gap-5 lg:flex-row items-center justify-between">
    <div class="left-side relative login-figures">
      <div class="img relative z-[2] w-full">
        <img :src="LoginImage" alt="" class=w-full>
      </div>
      <div class="circle"></div>
      <div class="triangle"></div>
    </div>

    <div class="lg:right-side lg:w-1/2 md:w-2/5 sm:w-3/5 w-4/5 relative">
      <p class="font-bold text-2xl">
        Log In
      </p>

      <div class="my-3">
        <span class="mr-1">Don't have an account?</span>
        <nuxt-link to="/register" class="text-blue-500">Create new account</nuxt-link>
      </div>

      <div class="login-form">
        <div class="relative mb-4 rounded-full">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"></path></svg>
          </div>
          <input
            v-model="form.email"
            type="text"
            id="input-email-login"
            class="lg:w-1/2 rounded-full bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your email"
          >
        </div>

        <div class="relative mb-4 rounded-full">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"></path></svg>
          </div>
          <input
            v-model="form.password"
            type="password"
            id="input-password-login"
            class="lg:w-1/2 rounded-full bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your password"
          >
        </div>
      </div>

      <div class="flex justify-between items-center lg:w-1/2">
        <div class="flex items-center justify-center">
            <input
              v-model="form.remember"
              id="default-checkbox"
              type="checkbox"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            >
            <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
        </div>

        <nuxt-link to="/forgot-password" class="text-blue-500">Forgot Password?</nuxt-link>
      </div>

      <div class="mt-4">
        <button
          type="button"
          class="w-full lg:w-1/2 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          @click="handleLogin"
        >
          Log In
        </button>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import LoginImage from '~/assets/images/login.png'
import type { ILogin } from '~/types'

definePageMeta({
  layout: 'login',
  middleware: 'guest',
})

const authStore = useAuthStore()

const form = reactive<ILogin>({
  email: '',
  password: '',
  remember: false,
})

const handleLogin = async () => {
  await authStore.login(form)
}
</script>

<style lang="scss" scoped>
.login-content {
  top: 84px;

  .left-side {
    width: 42%;

    .circle {
      width: max(40px, 6vw);
      height: max(40px, 6vw);
      border-radius: 50%;
      top: 42.5%;
      right: min(-20px, -3vw);
      position: absolute;
      background: #C7D9F9;
      z-index: 3;
    }

    .triangle {
      position: absolute;
      background: #FFDCDC;
      width: max(35px, 5vw);
      height: max(27.5px, 4vw);
      left: 35%;
      top: min(-10px, -1vw);
      clip-path: polygon(100% 100%, 50% 0, 0 100%);
      transform: rotate(-45deg);
      -webkit-transform: rotate(-45deg);
    }
  }

  .right-side {
    padding: max(30px, 3vw) 15% max(30px, 3vw) 5%;

    h1 {
      font-size: max(25px, 1.9vw);
    }
  }

  @media screen and (max-width: 768px) {
    .left-side {
      width: 60%;
    }
  }

  @media screen and (max-width: 639px) {
    .left-side {
      width: 70%;
    }
  }
}
</style>
