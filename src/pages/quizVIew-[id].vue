<script setup lang="ts">
const { getQuizById } = await useQuizzes();
const route = useRoute();
const quiz = getQuizById(+route.params.id);
const pageLink = `/quiz-${route.params.id}/question-1`;
</script>

<template>
  <div>
    <section>
      <div class="container mx-auto">
        <div v-if="quiz" class="pt-9 text-cyan-800">
          <h1 class="text-4xl font-bold">Quiz: {{ quiz.name }}</h1>
          <h2 class="text-2xl py-4">Description: {{ quiz.description }}</h2>
          <p class="text-xl">Quiz has {{ quiz.questionAmount }} questions</p>
          <NuxtLink
            class="py-3 px-4 bg-sky-400 mt-3 inline-block hover:bg-red-600 hover:text-black"
            @click="quiz.startQuiz()"
            :to="pageLink"
            >Start quiz</NuxtLink
          >
        </div>
        <div></div>
      </div>
    </section>
  </div>
</template>
