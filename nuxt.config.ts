// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@sidebase/nuxt-auth", "@nuxtjs/i18n"],
  i18n: {
    vueI18n: "./translations/i18n.config.ts",
  },
  // @ts-ignore
  runtimeConfig: {
    dbUrl: process.env.DB_URL,
    githubClientId: process.env.GITHUB_CLIENT_ID,
    githubClientSecret: process.env.GITHUB_CLIENT_SECRET,
  },
  // @ts-ignore
  buildModules: ["@nuxt/typescript-build"],
  serverDir: "server/",
  srcDir: "src/",
});
