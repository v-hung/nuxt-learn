import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  serverMiddleware: [
    '~/server-middleware/index.ts'
  ],
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    // options
  },
})