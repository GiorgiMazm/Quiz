<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: "en",
  },
  meta: [
    {
      name: "description",
      content: "My quiz app",
    },
    {
      name: "theme-color",
      content: "#RRGGBB",
    },
  ],
  link: [{ rel: "manifest", href: "manifest.json" }],
});
</script>
<template>
  <div>
    <AppHeader />
    <NuxtPage class="min-h-[80vh]" />
    <AppFooter />
  </div>
</template>
