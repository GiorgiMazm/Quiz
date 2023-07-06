// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@sidebase/nuxt-auth"],
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
