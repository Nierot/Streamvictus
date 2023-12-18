// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  modules: [
    '@vueuse/nuxt',
    'nuxt-scheduler',
  ],
  css: [
    '~/assets/css/app.sass',
  ],
  runtimeConfig: {
    // Private keys (only available on server)
    movieDirectory: process.env.NUXT_MOVIE_DIRECTORY || './movies',
  }
})
