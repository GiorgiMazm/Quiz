<script setup lang="ts">
useSeoMeta({
  title: "Home",
});
</script>

<template>
  <div>
    <div class="mx-auto container text-center flex h-[80vh] items-center">
      <div class="justify-self-center">
        <h1 class="font-bold text-3xl sm:text-6xl text-cyan-500 pt-9">
          {{ $t("home.welcome") }}
        </h1>

        <p class="text-2xl sm:text-3xl sm:mt-5 text-cyan-400">
          {{ $t("home.description") }}
        </p>
        <NuxtLink
          to="/quizzes"
          class="inline-block px-[20%] py-5 md:py-8 md:px-12 mt-2 md:mt-5 bg-sky-600 rounded-xl md:text-3xl hover:bg-red-600"
          >{{ $t("home.quizzes") }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
