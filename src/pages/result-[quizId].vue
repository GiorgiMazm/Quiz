<script setup lang="ts">
const route = useRoute();
const { getQuizById } = useQuiz();
const quiz = await getQuizById(+route.params.quizId);
if (
  route.query.correct === null ||
  +route.query.correct > quiz.questionAmount ||
  +route.query.correct < 0
) {
  throw useError();
}
</script>

<template>
  <div>
    <section>
      <div class="container mx-auto text-center">
        <h1 class="text-6xl pt-44">
          Congratulation! You have just finished a quiz "{{ quiz.name }}"
        </h1>
        <h2 class="text-4xl">
          You got {{ route.query.correct }} correct answers of
          {{ quiz.questionAmount }} questions
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
