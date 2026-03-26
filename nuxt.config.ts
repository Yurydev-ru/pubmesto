import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  devServer: {
    host: '127.0.0.1',
    port: 3000,
  },
  nitro: {
    compressPublicAssets: true,
  },
  alias: {
    '@': fileURLToPath(new URL('./app', import.meta.url)),
    '@app': fileURLToPath(new URL('./app', import.meta.url)),
    '@assets': fileURLToPath(new URL('./app/assets', import.meta.url)),
    '@components': fileURLToPath(new URL('./app/components', import.meta.url)),
    '@ui': fileURLToPath(new URL('./app/components/ui', import.meta.url)),
    '@feature': fileURLToPath(
      new URL('./app/components/feature', import.meta.url),
    ),
    '@layout': fileURLToPath(
      new URL('./app/components/layout', import.meta.url),
    ),
    '@composables': fileURLToPath(
      new URL('./app/composables', import.meta.url),
    ),
    '@types': fileURLToPath(new URL('./app/types', import.meta.url)),
    '~/': fileURLToPath(new URL('./app', import.meta.url)),
    '@/': fileURLToPath(new URL('./app', import.meta.url)),
  },
  css: ['@assets/scss/main.scss'],
  modules: ['@nuxt/eslint', '@nuxt/icon'],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  components: [
    {
      path: '@components/ui',
      pathPrefix: false,
    },
    {
      path: '@components/feature',
      pathPrefix: false,
    },
    {
      path: '@components/layout',
      pathPrefix: false,
    },
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: ` 
          @use "@assets/scss/tokens" as *; 
          @use "@assets/scss/abstracts" as *;
          `,
        },
      },
    },
    optimizeDeps: {
      include: ['@vue/devtools-core', '@vue/devtools-kit'],
    },
  },
  typescript: {
    strict: true,
    typeCheck: true,
  },
  compatibilityDate: '2025-07-15',
})
