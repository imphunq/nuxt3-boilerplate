// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  typescript: {
    typeCheck: true,
  },

  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@element-plus/nuxt',
  ],

  css: [
    '~/assets/css/reset.css',
    '~/assets/scss/main.scss',
    '~/assets/css/tailwind.css',
    '~/assets/css/element.css',
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/scss/_colors.scss";',
        },
      },
    },
  },

  eslint: {
    config: {
      stylistic: {
        semi: false,
        indent: 2,
        quotes: 'single',
      },
    },
  },

  app: {
    head: {
      title: 'HostDesign',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        }
      ]
    }
  },

  ssr: false,

  elementPlus: {},

  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
    }
  },
})
