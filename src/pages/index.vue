<script setup lang="ts">
useSeoMeta({
  title: "Home",
});
</script>

<template>
  <div>
    <div class="mx-auto container text-center flex h-[80vh] items-center">
      <div class="justify-self-center">
        <h1 class="font-bold text-6xl text-cyan-500 pt-9">
          This is home page!
        </h1>

        <p class="text-3xl mt-5 text-cyan-400">
          Welcome to the Quiz App! Test your knowledge and have fun with our
          challenging quizzes. Choose from a variety of exciting topics and see
          how well you can score, or create your own quiz for others and share
          the link with them! Are you ready to take on the challenge? Let's get
          started and show off your expertise!
        </p>
        <NuxtLink
          to="/quizzes"
          class="inline-block py-8 px-12 mt-5 bg-sky-600 rounded-xl text-3xl hover:bg-red-600"
          >List of quizzes</NuxtLink
        >
      </div>
    </div>
  </div>
</template>
