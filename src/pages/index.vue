<script setup lang="ts">
useSeoMeta({
  title: "Home",
});
</script>

<template>
  <div>
    <div
      class="mx-auto container text-center flex flex-col items-center h-full justify-center"
    >
      <h1 class="font-bold text-6xl text-cyan-500 pt-9">This is home page!</h1>

      <p class="text-3xl mt-5 text-cyan-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet
        architecto cupiditate dignissimos earum est eum excepturi, facere fuga
        fugiat hic impedit incidunt ipsa maxime modi natus, omnis perferendis
        quae quia quidem quo ratione similique vel. At eaque eveniet, magnam
        numquam qui quidem reprehenderit rerum suscipit temporibus vitae.
        Architecto, facere.
      </p>
      <NuxtLink
        to="/quizzes"
        class="inline-block py-8 px-12 mt-5 bg-sky-600 rounded-xl text-3xl hover:bg-red-600"
        >List of quizzes</NuxtLink
      >
    </div>
  </div>
</template>
