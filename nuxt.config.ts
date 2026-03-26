import { fileURLToPath } from 'node:url';

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,

  nitro: {
    compressPublicAssets: true,
  },
  css: ['@assets/scss/main.scss'],

  modules: ['@nuxt/eslint', '@nuxt/icon'],
  alias: {
    "@": fileURLToPath(new URL("./app", import.meta.url)),
    "@app": fileURLToPath(new URL("./app", import.meta.url)),
    "@components": fileURLToPath(new URL("./app/components", import.meta.url)),
    "@types": fileURLToPath(new URL("./app/types", import.meta.url)),
    "@assets": fileURLToPath(new URL("./app/assets", import.meta.url)),
    "~/": fileURLToPath(new URL("./app", import.meta.url)),
    "@/": fileURLToPath(new URL("./app", import.meta.url)),
  },
  devServer: {
    host: "127.0.0.1",
    port: 3000,
  },
  typescript: {
    strict: true,
    typeCheck: true,
  },
  components: [
    {
      path: "@components",
      pathPrefix: false,
    },
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: ` 
          
          @use "@assets/scss/abstracts" as *;
          
          `,
        },
      },
    },
    optimizeDeps: {
      include: ["@vue/devtools-core", "@vue/devtools-kit"],
    },
  },
  compatibilityDate: '2025-07-15'
})
