<script setup lang="ts"></script>

<template>
  <div>
    <AppHeader />
    <div
      class="text-center h-[80vh] text-8xl flex text-red-600 flex-col justify-center"
    >
      Upss 404... I can't found this page(
      <p>Try to go to home page and try again</p>
      <NuxtLink class="text-yellow-400 capitalize hover:text-yellow-600" to="/"
        >go to home</NuxtLink
      >
    </div>
    <AppFooter />
  </div>
</template>

<style scoped></style>
