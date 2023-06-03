<script setup lang="ts">
const route = useRoute();
if (!route.query.correct) {
  throw useError();
}
const { getQuizById } = useQuiz();
const quiz = await getQuizById(+route.params.quizId);
</script>

<template>
  <div>
    <section>
      <div class="container mx-auto text-center">
        <h1 class="text-6xl mt-44">
          Congratulation! You have just finished a quiz "{{ quiz.name }}"
        </h1>
        <h2 class="text-4xl">
          You got {{ route.query.correct }} correct answers of
          {{ quiz.questionAmount }}
        </h2>
        <NuxtLink
          to="/quizzes"
          class="bg-sky-600 py-4 px-7 rounded-xl mt-7 inline-block text-xl hover:bg-sky-400 cursor-pointer"
          >Go to all quizzes</NuxtLink
        >
      </div>
    </section>
  </div>
</template>
