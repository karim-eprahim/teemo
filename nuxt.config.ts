import { createResolver } from "@nuxt/kit";
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

const { resolve } = createResolver(import.meta.url);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  // Enable server-side rendering
  ssr: false,

  // TypeScript configuration
  typescript: {
    shim: false,
  },

  // Vuetify build configuration
  build: {
    transpile: ["vuetify"],
  },

  // Modules
  modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],

  // Application metadata
  app: {
    head: {
      title:
        "MaterialM Nuxt 3 - Vuetify 3 - vite - Typescript Based Admin Dashboard Template",
    },
  },

  // Nitro configuration
  nitro: {
    serveStatic: true,
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: '' // This will be automatically overridden by NUXT_PUBLIC_API_BASE_URL
    }
  },

  // Dev server handlers
  devServerHandlers: [],

  compatibilityDate: "2024-09-06",
});
