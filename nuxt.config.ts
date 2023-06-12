// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  // @ts-ignore
  runtimeConfig: {
    dbUrl: process.env.DB_URL,
  },
  buildModules: ["@nuxt/typescript-build"],
  serverDir: "server/",
  srcDir: "src/",
});
