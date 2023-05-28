<script setup lang="ts">
const { getQuizById } = useQuizzes();
const route = useRoute();
const quiz = getQuizById(+route.params.id);
const pageLink = `/quiz-${route.params.id}/question-1`;
</script>

<template>
  <div>
    <section>
      <div class="container mx-auto">
        <div v-if="quiz" class="flex justify-between w-2/5 mx-auto pt-9">
          <h1 class="text-4xl font-bold">{{ quiz.name }}</h1>
          <h2 class="text-2xl">{{ quiz.description }}</h2>
          <NuxtLink @click="quiz.startQuiz()" :to="pageLink"
            >Start quiz</NuxtLink
          >
        </div>
        <div></div>
      </div>
    </section>
  </div>
</template>
