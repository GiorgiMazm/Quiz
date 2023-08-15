<script setup lang="ts">
useSeoMeta({
  title: "Quiz details",
});
const { getQuizById } = useQuiz();
const route = useRoute();
const quiz = await getQuizById(String(route.params.id));
const pageLink = `/quiz-${route.params.id}/question-1`;
</script>

<template>
  <div>
    <section>
      <div class="container mx-auto">
        <div v-if="quiz" class="pt-9 text-cyan-800 text-center sm:text-left">
          <h1 class="text-4xl font-bold">{{ $t("quiz") }}: {{ quiz.name }}</h1>
          <h2 class="text-2xl py-4">
            {{ $t("description") }}: {{ quiz.description }}
          </h2>
          <p class="text-xl">
            {{ $t("questions") }}: {{ quiz.questionAmount }}
          </p>
          <NuxtLink
            class="py-6 px-12 mb-5 w-full sm:w-auto bg-sky-400 mt-3 inline-block hover:bg-red-600 hover:text-black"
            :to="pageLink"
            >{{ $t("start") }}</NuxtLink
          >
        </div>
        <div></div>
      </div>
    </section>
  </div>
</template>
